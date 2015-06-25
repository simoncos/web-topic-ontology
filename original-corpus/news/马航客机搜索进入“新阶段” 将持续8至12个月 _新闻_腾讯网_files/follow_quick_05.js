(function() {
	var $ = function(elm) {
		return document.getElementById(elm)
	},
	qqdomain = (function() {
		var host = /^https?:\/\/([0-9a-zA-Z\-\.]+)(?::\d+)?\//.exec(document.referrer),
		hostname = host && host[1];
		if (window === parent || (hostname && (/^(?:[0-9a-zA-Z\-]+\.)*(qq|paipai|qzone|3366|gtimg|openmat|yixun|myapp)\.com$/.test(hostname)))) {
			return true;
		}
		return false;
	})(),
	followbtn = $("followbtn"),
    unfollowbtn = $("unfollowbtn"),
	followarea = $("followarea"),
	weibolink = $("weibo_url"),
	getcookie = function(name) {
		var r = (new RegExp("\\b" + name + "\\b=([^\\s;]+);?", "gi")).exec(document.cookie);
		return r && r[1] && unescape(r[1]);
	},
	ajax = {
		"request": function(url, opt) {
			var async = opt.async !== false,
			fn = function() {},
			method = (opt.method || 'GET').toUpperCase(),
			data = opt.data || null,
			success = opt.success || fn,
			failure = opt.error || fn,
			_onStateChange = function(xhr, success, failure) {
				if (xhr.readyState == 4) {
					var s = xhr.status;
					if (s >= 200 && s < 300) {
						success(xhr.responseText || xhr.response);
					} else {
						failure(xhr.response);
					}
				} else {}
			};

			if (method == 'GET' && data) {
				url += (url.indexOf('?') == -1 ? '?': '&') + data;
				data = null;
			}
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			xhr.onreadystatechange = function() {
				_onStateChange(xhr, success, failure);
			};
			xhr.open(method, url, async);
			if (method == 'POST') {
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
			}
			xhr.send(data);
			return xhr;
		}
	},
	getToken = function() {
		var hash = 5381,
		str = getcookie("p_skey") || getcookie("p_lskey");
		if (str) {
			for (var i = 0, len = str.length; i < len; ++i) {
				hash += (hash << 5) + str.charCodeAt(i);
			}
			return hash & 0x7fffffff;
		} else {
			return hash;
		}
	},
	showLogin = function() {
		var w = 700,
		h = 460,
		t = (screen.height - h) / 2,
		l = (screen.width - w) / 2,
		p = {
			"appid": 46000101,
			"daid": 6,
			"style": 11,
			"target": "self",
			"low_login": 1,
			"hide_title_bar": 1,
			"hide_close_icon": 1,
			"self_regurl": "http://reg.t.qq.com/index.php?pref=followcomp",
			"hln_logo": "http://mat1.gtimg.com/app/opent/images/websites/space.gif",
			"s_url": "http://follow.v.t.qq.com/?c=follow&a=jump&rcode=1&g_tk=" + getToken()
		},
		param = function(o) {
			var a = [];
			for (var i in o) {
				a.push([i, encodeURIComponent(o[i])].join("="));
			}
			return a.join("&");
		},
		url = 'http://ui.ptlogin2.qq.com/cgi-bin/login?' + param(p),
		opener = window.open(url, '_blank', "width=" + w + ",height=" + h + ",top=" + t + ",left=" + l + ",toolbar=no,menubar=no,scrolbars=no,resizeable=no,status=no");
		if (opener == null || typeof(opener) == 'undefined') {
			alert("您的浏览器禁用了来自follow.v.t.qq.com域名的弹窗");
		}
	},
	changeEvent = function() {
		weibolink.className = "weibo_url";
	},
	clickhighjacking = function() { ! qqdomain && alert("收听腾讯微博用户<" + uinfo.nick + ">成功");
	},
    postMsg = function(msg){
        var outterWindow = window.top;
        if (outterWindow === window) {
            return;
        }
        if (outterWindow.postMessage) {
            outterWindow.postMessage(msg, '*');
        } else {
            outterWindow.name = msg;
        }
    },
    postUnFollow = function(){
        ajax.request(app_url + "/index.php?c=follow&a=cancellisten", {
			"data": "name=" + $('name').value + "&g_tk=" + getToken() + "&time=" + new Date().getTime() +
                "&sign=" + $('sign').value + "&v=" + $('version').value + "&url=" + $('url').value +
                "&appkey=" + $('appkey').value,
			"method": "post",
			"async": false,
			"success": function(response) { //alert(response);
				var d = (function(s) {
					if (window.JSON && window.JSON.parse) {
						return window.JSON.parse(s);
					} else {
						return eval("(" + s + ")");
					}
				})(response);

                if (d.ret == 0) {
                    postMsg('successUnFollow');
                    if (s==100 || s==101) {
                        $('followbtn').style.display = '';
                        $('unfollowbtn').style.display = 'none';
                    }
                } else {
                    postMsg('failUnFollow');
                }
            }
        });
    },
	postFollow = function() {
		ajax.request(app_url + "/index.php?c=follow&a=listen", {
			"data": "name=" + $('name').value + "&g_tk=" + getToken() + "&time=" + new Date().getTime() +
                "&sign=" + $('sign').value + "&v=" + $('version').value + "&url=" + $('url').value +
                "&appkey=" + $('appkey').value,
			"method": "post",
			"async": false,
			"success": function(response) { //alert(response);
				var d = (function(s) {
					if (window.JSON && window.JSON.parse) {
						return window.JSON.parse(s);
					} else {
						return eval("(" + s + ")");
					}
				})(response);

				if (d.ret == 0) {
                    postMsg('successFollow');
					if (false) {} else if (s == 1) {
						changeEvent();
						followarea.innerHTML = '<span class="bg action followed">&nbsp;</span>';
						clickhighjacking();
					} else if (s == 2) {
						changeEvent();
						followbtn.innerHTML = '已收听';
						clickhighjacking();
					} else if (s == 3) {
						changeEvent();
						alert("收听成功");
					} else if (s == 4) {
						changeEvent();
						followbtn.innerHTML = '<span class="bg toleft noaction"></span>';
						clickhighjacking();
					} else if (s == 5) {
						changeEvent();
						followbtn.innerHTML = '<span class="bg toleft noaction"></span>';
						clickhighjacking();
					} else if (s == 100 || s == 101) {
                        $('followbtn').style.display = 'none';
                        $('unfollowbtn').style.display = '';
                    } else if (s == 8 || s == 9 || s == 6 || s == 7) {
                        document.getElementById('unfollow').style.display = 'none';
                        document.getElementById('followed').style.display = 'block';
                    } else {
						changeEvent();
						$('#followbtn').html('已收听');
						$('#followbtn').unbind('click');
						clickhighjacking();
					}
				} else if (d.ret === 1 && d.errcode === 5) {
                    postMsg('failFollow');
					// showLogin();
                    alert(d.msg);
				} else {
                    postMsg('failFollow');
					if (d.errcode == 6) {
						window.open('http://t.qq.com/' + $('name').value, '_blank');
					} else {
						alert(d.msg);
					}
				}
			},
			"error": function() {
				alert("网络链接失败！");
			}
		});
	},
	initFollowEvent = function() {
		try { (parent.location);
		} catch(e) {
			qqdomain = false;
		}
		if (followbtn) {
			followbtn.onclick = function() {
				if (unlogin) {
					showLogin();
				} else {
					postFollow();
				}
			}
		}
        if (unfollowbtn) {
            unfollowbtn.onclick = function(){
                if (unlogin) {
					showLogin();
				} else {
					postUnFollow();
				}
            };
        }
		if (uinfo.ismyidol) {
			changeEvent();
		}
	};
	initFollowEvent();
	window.setLoginInfo = function(uinfo) {
		window.unlogin = false;
		postFollow();
	}
})();
/*  |xGv00|42ff481b89e2ddf266ab24a1b60b35a8 */