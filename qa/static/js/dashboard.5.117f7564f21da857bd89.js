(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1304:function(e,t,n){"use strict";n.r(t),function(e){var r,a=n(2),s=n(1),i=n(133),o=n(1305),c=n(4);(r=n(17).enterModule)&&r(e);var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={canRefreshResolve:1,listLen:0,hasMore:0,initializing:1,refreshedAt:Date.now()},t.loadMore=function(e){setTimeout(function(){var n=t.state.listLen+9;t.setState({listLen:n,hasMore:n>0&&n<50}),e()},2e3)},t.submit=function(e){e.preventDefault()},t.gotoChat=function(e){var n=t.props.routerStore.history;(0,t.props.setChatType)(e),localStorage.setItem("chatType",JSON.stringify(e)),n.push("/Message/"+e.targetId)},t.refresh=function(e,n){setTimeout(function(){t.state.canRefreshResolve?(t.props.GetConversationsList(),t.setState({listLen:9,hasMore:1,refreshedAt:Date.now()}),e()):n()},2e3)},t}return a.d(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({listLen:9,hasMore:1,initializing:2})},2e3)},t.prototype.componentWillMount=function(){this.props.resetConversationsList,this.props.routerStore.history},t.prototype.render=function(){var e=this,t=this.props,n=t.ConversationsList;t.GetConversationsList;return s.createElement("div",{style:{paddingBottom:"16vw",overflow:"hidden"}},s.createElement("div",{style:{height:"16vw"}}),Object(c.toJS)(n).sort(function(e,t){return t.sentTime-e.sentTime}).map(function(t,n){return s.createElement("div",{key:n,onClick:e.gotoChat.bind(e,t)},s.createElement(o.a,{user:t}))}))},t=a.c([Object(i.b)(function(e){var t=e.routerStore,n=e.rongStore,r=n.ConversationsList,a=n.setChatType,s=n.resetConversationsList,i=n.initEnd;return{routerStore:t,ConversationsList:r,setChatType:a,resetConversationsList:s,GetConversationsList:n.GetConversationsList,initEnd:i}}),i.c],t)}(s.Component);const l=u;var p,m;t.default=l,p=n(17).default,m=n(17).leaveModule,p&&(p.register(u,"Chat","C:/project/react/test/ts-react-webpack/src/containers/views/Chat/index.tsx"),p.register(l,"default","C:/project/react/test/ts-react-webpack/src/containers/views/Chat/index.tsx"),m(e))}.call(this,n(46)(e))},1305:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return C});var r,a=n(1),s=n(280),i=n.n(s),o=n(281),c=n.n(o),u=n(1207),l=n.n(u),p=(n(1206),n(1217)),m=n.n(p),d=(n(1216),n(1306));function h(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/<p(([\s\S])*?)>/g,"").replace(/<p(([\s\S])*?)>/g,"").replace(/(\n)/g,"").replace(/(\t)/g,"").replace(/(\r)/g,"").replace(/\s*/g,"").replace(/<\/?[^>]*>/g,"")}function g(e){return{__html:e}}function f(e){return a.createElement("div",{className:d.text,dangerouslySetInnerHTML:g(e)})}function v(e){switch(e.content.messageName){case"TextMessage":return a.createElement(c.a,{className:d.text,primary:e.nickname?e.nickname:"",secondary:h(e.content.content)});case"InformationNotificationMessage":return a.createElement(c.a,{className:d.text,primary:e.nickname?e.nickname:"",secondary:h(e.content.message)});case"FileMessage":return a.createElement(c.a,{className:d.text,primary:e.nickname?e.nickname:"",secondary:"文件消息"});case"ImageMessage":return a.createElement(c.a,{className:d.text,primary:e.nickname?e.nickname:"",secondary:"图片消息"})}}function C(e){e.style;var t=e.user;return a.createElement("div",null,a.createElement(i.a,{button:!0,className:d.messageBox},a.createElement(m.a,{count:t.unreadMessageCount},a.createElement(l.a,{src:t.portraitUri,className:d.avatar,shape:"square",size:48,icon:"user"})),a.createElement("div",{className:d.posiBox},v(t))))}(r=n(17).enterModule)&&r(e);const x=C;var y,M;y=n(17).default,M=n(17).leaveModule,y&&(y.register(h,"__unescape","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),y.register(g,"createMarkup","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),y.register(f,"dangerousHtml","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),y.register(v,"switchContent","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),y.register(C,"UnitChat","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),y.register(x,"default","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitChat/index.tsx"),M(e))}).call(this,n(46)(e))},1306:function(e,t,n){e.exports={text:"_2jOhHlPJA_670aSplIGW12","message-box":"_3F07-aFBAdM-4SaU7mOeV8",messageBox:"_3F07-aFBAdM-4SaU7mOeV8",avatar:"_1mq_B807nMILRocW_m73hp","posi-box":"_1Z0Jb7yFiM4RKhtimuqlfE",posiBox:"_1Z0Jb7yFiM4RKhtimuqlfE",numberCount:"_3wWEbTMjC1AQuT_GaFcgea"}}}]);