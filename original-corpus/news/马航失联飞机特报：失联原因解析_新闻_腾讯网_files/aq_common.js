//ver 1.2 2014-03-10
function AQ_SECAPI_CheckXss(){
	var Url = decodeURI(location.href);
	var Refer = decodeURI(document.referrer);
	var XssPattern = new RegExp("['\"<>`]|script:");	
	if(XssPattern.test(Url) || XssPattern.test(Refer)){
		var version = '1.1'
			, cgi = 'http://zyjc.sec.qq.com/dom'
			, img = new Image();
		img.src = cgi + "?v="+version+"&u=" + encodeURIComponent(Url)+"&r="+encodeURIComponent(Refer);
		location.href=Url.replace(/['\"<>`]|script:/gi,'');
	}
}
AQ_SECAPI_CheckXss();