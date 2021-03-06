/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("history-html5",function(g){var b=g.HistoryBase,c=g.Lang,f=g.config.win,d=g.config.useHistoryHTML5,h="popstate",e=b.SRC_REPLACE;function a(){a.superclass.constructor.apply(this,arguments);}g.extend(a,b,{_init:function(i){var j=f.history.state;if(g.Object.isEmpty(j)){j=null;}i||(i={});if(i.initialState&&c.type(i.initialState)==="object"&&c.type(j)==="object"){this._initialState=g.merge(i.initialState,j);}else{this._initialState=j;}g.on("popstate",this._onPopState,f,this);a.superclass._init.apply(this,arguments);},_storeState:function(k,j,i){if(k!==h){f.history[k===e?"replaceState":"pushState"](j,i.title||g.config.doc.title||"",i.url||null);}a.superclass._storeState.apply(this,arguments);},_onPopState:function(i){this._resolveChanges(h,i._event.state||null);}},{NAME:"historyhtml5",SRC_POPSTATE:h});if(!g.Node.DOM_EVENTS.popstate){g.Node.DOM_EVENTS.popstate=1;}g.HistoryHTML5=a;if(d===true||(d!==false&&b.html5)){g.History=a;}},"3.7.1pr1",{requires:["event-base","history-base","node-base"],optional:["json"]});