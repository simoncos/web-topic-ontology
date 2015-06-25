(function() {
    var $ = function(elm) {
		return document.getElementById(elm)
	};
	var Ajax = function() {
		var _onStateChange = function(xhr, success, failure) {
			if (xhr.readyState == 4) {
				var s = xhr.status;
				if (s >= 200 && s < 300) {
					success(xhr);
				} else {
					failure(xhr);
				}
			} else {}
		},
		request = function(url, opt) {
			var fn = function() {},
			xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
			async = opt.async !== false,
			method = opt.method || 'GET',
			data = opt.data || null,
			success = opt.success || fn,
			failure = opt.failure || fn;
			method = method.toUpperCase();
			if (method == 'GET' && data) {
				url += (url.indexOf('?') == -1 ? '?': '&') + data;
				data = null;
			}
			xhr.onreadystatechange = function() {
				_onStateChange(xhr, success, failure);
			};
			xhr.open(method, url, async);
			if (method == 'POST') {
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
			}
			xhr.send(data);
			return xhr;
		};
		return {
			request: request
		};
	} (),
	clickhijacking = (function() {
		var host = /^https?:\/\/([0-9a-zA-Z\-\.]+)(?::\d+)?\//.exec(document.referrer),
		hostname = host && host[1];
		if (window === parent || (hostname && (/^(?:[0-9a-zA-Z\-]+\.)*(qq|paipai|qzone|3366|gtimg|openmat|yixun|myapp)\.com$/.test(hostname)))) {
			return true;
		}
		return false;
	})(),
	getcookie = function(name) {
		var r = (new RegExp("\\b" + name + "\\b=([^\\s;]+);?", "gi")).exec(document.cookie);
		return r && r[1] && unescape(r[1]);
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
	getElementsByClassName = function(className, parentObj) {
		var elems = parentObj.getElementsByTagName("*");
		var result = [];
		for (i = 0; j = elems[i]; i++) {
			if (j.className.split(/(\s+)/).indexOf(className) != -1) {
				result.push(j);
			}
		}
		return result;
	},
	stringToJson = function(str) {
		if (window.JSON) {
			try {
				return JSON.parse(str);
			} catch(e) {
				return null;
			}
		} else {
			try {
				return eval('(' + str + ')');
			} catch(e) {
				return null;
			}
		}
	},
	doLogin = function() {
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
	postFollow = function() {
		var f = document.getElementById("followform"),
		ulist = [],
		nlist = [],
        slist = [],
		followbtn = document.getElementById("followbtn"),
		hasfollowbtn = document.getElementById("hasfollowbtn"),
		weibolist = f["weiboname"],
		tokensig = getToken();

		if (weibolist.value) {
			if (weibolist.checked == true) {
				ulist.push(weibolist.value);
				nlist.push(weibolist.getAttribute("nick") + "(@" + weibolist.value + ")");
                slist.push(weibolist.getAttribute("sign"));
			}
		}

		if (f.weiboname && weibolist.length > 0) {
			for (var i = 0; i < weibolist.length; i++) {
				if (weibolist[i].checked == true) {
					ulist.push(weibolist[i].value);
					nlist.push(weibolist[i].getAttribute("nick") + "(@" + weibolist[i].value + ")");
                    slist.push(weibolist[i].getAttribute("sign"));
				}
			}
		}

		Ajax.request(app_url + "/index.php?c=follow&a=listen", {
			"method": "POST",
			"data": "name=" + ulist.toString() + "&g_tk=" + tokensig + "&time=" + new Date().getTime() +
                "&sign=" + slist.toString() + "&v=" + $('version').value + "&url=" + $('url').value +
                "&appkey=" + $('appkey').value,
			"success": function(xhr) {
				var d = stringToJson(xhr.response || xhr.responseText),
				ret = d && d.ret,
				errcode = d && d.errcode;
				if (ret === 0) {
                    postMsg('successListen');
                    if (s==='100' || s==='2') {
                        followbtn.style.display = 'none';
                        hasfollowbtn.style.display = 'inline-block';
                    } else {
                        followbtn.parentNode.className = "";
					    followbtn.parentNode.innerHTML = "您成功收听了选中的用户！";
                    }
					if (!clickhijacking) {
						alert("您成功收听了以下腾讯微博用户：\n" + nlist.join("，"));
					}
				} else if (ret === 1 && errcode === 5) {
					// doLogin();
                    postMsg('failListen');
                    alert(d.msg);
				} else {
                    postMsg('failListen');
					alert(d.msg);
				}
			},
			"failure": function(xhr) {
				alert("连接服务器失败！");
			}
		});
	},
    hasClass = function (tar,theClass){
        var pattern = new RegExp("(^| )" + theClass + "( |$)");
        if(pattern.test(tar.className)){
            return true;
        }else{
            return false;
        }
    },
    addClass = function (tar,theClass){
        if(!hasClass(tar,theClass)){
            if(tar.className==""){
                tar.className=theClass;
            }else{
                tar.className+=" "+theClass;
            }
        }
    },
    removeClass = function (tar,theClass){
        var pattern = new RegExp("(^| )" + theClass + "( |$)");
        tar.className = tar.className.replace(pattern, "$1");
        tar.className = tar.className.replace(/ $/, "");
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
	initEvent = function(os) {
		var actions = {
			"doCheck": function(e, o) {
				var p = o.parentNode.parentNode,
				checkFn = function(b) {
					p.className = (b ? "": "unchecked");
					o.getElementsByTagName("input")[0].checked = !!b;
				};
				checkFn( !! p.className);
			},
			"doMultiFollow": function(e, o) {
				if (window.unlogin) {
					doLogin();
				} else {
					postFollow();
				}
			},
            "doSelect": function(e, elem){
                var wrap = elem.parentNode;
                if (hasClass(wrap, 'avatar_selected')) {
                    removeClass(wrap, 'avatar_selected');
                    addClass(wrap, 'avatar_unselected');
                    wrap.getElementsByTagName('input')[0].checked = false;
                } else {
                    addClass(wrap, 'avatar_selected');
                    removeClass(wrap, 'avatar_unselected');
                    wrap.getElementsByTagName('input')[0].checked = true;
                }
            }
		};

		document.onclick = function(event) {
			var e = event || window.event,
			elem = e.target || e.srcElement,
			action = elem.getAttribute("data-action");
			if (actions[action]) {
				actions[action](e, elem);
				try {
					e.preventDefault();
				} catch(e) {
					return false;
				}
			}
		};

        // 取消收听效果
        jQuery('.avatar_wrap').mouseenter(function(){
            jQuery(this).addClass('avatar_hover');
        }).mouseleave(function(){
            jQuery(this).removeClass('avatar_hover');
        });
	},
	setLoginInfo = function(u) {
		unlogin = false;
		postFollow();
	};
	window.setLoginInfo = setLoginInfo;
	initEvent();
})();
/*  |xGv00|1b2db42e66c5b19b8308d188057bc863 */