(function(w,d){var uc=function(s){return encodeURIComponent(s)},str2json=function(s){if(w.JSON){try{return w.JSON.parse(s)}catch(e){return null}}else{try{eval("var __txjson__="+s);return __txjson__}catch(e){return null}}},doUrl=function(conf){var url="http://read.v.t.qq.com?",param=[],o={},confa=conf.ModuleConfigure,confb=conf.TimelineDetail,confc=conf.PubModuleConfigure,confd=conf.TitleModuleConfigure,commentInfo=(function(c){if(c.RelayId){return"relayid="+uc(c.RelayId)+"&"}else{if(c.ReplyId){return"replyid="+uc(c.ReplyId)+"&"}else{return""}}})(confc);return url+commentInfo+["config="+[conf.appkey,conf.theme,conf.nobg,[1,confa.TitleModule,confa.PubModule,confa.TabModule,confa.TimelineModule].join(""),confb.PageStyle,confb.PicStyle,confb.HeadStyle,confb.TwitterNum,[confc.position].concat(confc.InsertFunction).join(""),conf.LoginStyle||0].join("-"),"account="+confd.OfficialAccount,"sendbox="+[uc(confc.SourceUrl),uc(confc.InitialContent)].join("|")].join("&")},doParam=function(conf){var arr=[],p=["Name","ConditionType","Condition","SortType","Famous","ContentType","MessageType"];for(var i=0,k=conf.length;i<k;i++){var line=[];for(var j=0,jk=p.length;j<jk;j++){if(p[j]==="Condition"){line.push(uc(conf[i][p[j]].join("\t")))}else{line.push(conf[i][p[j]])}}arr.push(line.join("\t"))}return arr.join("\n")},callback=function(elem,config,fun){var pageStyle=config.TimelineDetail.PageStyle,frameCallBack=function(pageStyle){var onMessage=function(d){if(!d){return}d=str2json(d);if(d===null){return}if(d.action==="resize"){if(pageStyle!==2){return}if(elem.height!==d.data.height){elem.height=d.data.height}}else{if(fun!==undefined){return fun(d)}}};if(pageStyle===2||fun){if(window.postMessage){if(window.addEventListener){window.addEventListener("message",function(event){onMessage(event.data)})}else{window.attachEvent("onmessage",function(event){onMessage(event.data)})}}else{var win=elem.contentWindow,h=0;setInterval(function(){if(elem.clientWidth>0&&elem.clientHeight>0){onMessage(window.name);window.name=""}},500)}}},sendMsg=function(win,msg){if(win.postMessage){win.postMessage(msg,"*")}else{win.name=msg}if(!elem.hasCallBack){frameCallBack(pageStyle);elem.hasCallBack=true}},onLoadFun=function(frame,callback){frame.onreadystatechange=function(){if(frame.readyState==="complete"){callback()}}},onFrameLoad=function(){var win=elem.contentWindow,msg=doParam(config.TimelineModuleConfigure);sendMsg(win,msg||"0");return false};if(window.postMessage){if(document.all){onLoadFun(elem,onFrameLoad)}else{elem.onload=onFrameLoad}}else{onLoadFun(elem,onFrameLoad)}elem.src=doUrl(config)};w.console=w.console||{log:function(s){}};w.showTxWbYDQ=callback})(window,document);
/*  |xGv00|46764b3e30c62726e2d74c7375244f4d */