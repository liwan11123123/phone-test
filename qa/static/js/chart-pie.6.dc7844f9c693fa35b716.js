(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1270:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(2),s=r(1),c=r(132),o=r(282),i=r.n(o),u=r(280),l=r.n(u),p=r(284),m=r.n(p),d=r(281),h=r.n(d),f=r(207),v=r.n(f),g=r(1271),w=r(1174),E=r.n(w),x=(r(1173),r(1183),r(283)),C=r.n(x),y=r(1274),b=r(6),S=r(1207);(a=r(17).enterModule)&&a(e);var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forgetPasswd=function(){t.props.routerStore.push("/forgetpwd")},t.submit=function(e){e.preventDefault()},t.register=function(e){e.preventDefault(),t.props.routerStore.push("/register")},t.gotoChat=function(e){var r=t.props.routerStore.history;(0,t.props.setChatType)({conversationType:1,targetId:e.user.id,nickname:e.displayName?e.displayName:e.user.nickname}),r.push("/Message/"+e.user.id)},t.gotoGroupList=function(){t.props.routerStore.history.push("/GroupList")},t.gotoFriendsList=function(){t.props.routerStore.history.push("/NewFriends")},t}return n.d(t,e),t.prototype.render=function(){var e=this,t=this.props.friendshipAll;return s.createElement("div",{style:{padding:"16vw 0"}},s.createElement(i.a,null,s.createElement(l.a,{button:!0,className:y.messageBox,onClick:this.gotoFriendsList},s.createElement(m.a,null,s.createElement(E.a,{className:y.avatar,shape:"square",icon:"user"})),s.createElement(h.a,{inset:!0,primary:"新的朋友"}),s.createElement(S.a,null,s.createElement(v.a,{disabled:!0,"aria-label":"Comments"},s.createElement(E.a,{shape:"circle",icon:"user"})))),s.createElement(C.a,null),s.createElement(l.a,{button:!0,className:y.messageBox,onClick:this.gotoGroupList},s.createElement(m.a,null,s.createElement(E.a,{className:y.avatar,shape:"square",icon:"user"})),s.createElement(h.a,{inset:!0,primary:"群聊"})),s.createElement("div",{className:y.hr}),s.createElement("div",{className:y.userList},Object(b.toJS)(t).map(function(t,r){return s.createElement("div",{key:r,onClick:e.gotoChat.bind(e,t)},s.createElement(g.a,{user:t}))}))))},t=n.c([Object(c.b)(function(e){var t=e.routerStore,r=e.userStore,a=e.rongStore;return{routerStore:t,friendshipAll:r.friendshipAll,setChatType:a.setChatType}}),c.c],t)}(s.Component);const N=k;var A,B;t.default=N,A=r(17).default,B=r(17).leaveModule,A&&(A.register(k,"Contacts","C:/project/react/test/ts-react-webpack/src/containers/views/Contacts/index.tsx"),A.register(N,"default","C:/project/react/test/ts-react-webpack/src/containers/views/Contacts/index.tsx"),B(e))}.call(this,r(44)(e))},1271:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return g});var a,n=r(1),s=r(280),c=r.n(s),o=r(284),i=r.n(o),u=r(281),l=r.n(u),p=r(283),m=r.n(p),d=r(1174),h=r.n(d),f=(r(1173),r(1272));function v(e){return e.user?n.createElement("div",null,n.createElement(c.a,{button:!0,className:f.messageBox},n.createElement(i.a,null,n.createElement(h.a,{src:e&&e.user&&e.user.portraitUri,className:f.avatar,shape:"square",icon:"user"})),n.createElement(l.a,{inset:!0,primary:e&&e.displayName?e.displayName:e.user.nickname})),n.createElement(m.a,null)):void 0}function g(e){var t=e.user;return n.createElement("div",null,v(t))}(a=r(17).enterModule)&&a(e);const w=g;var E,x;E=r(17).default,x=r(17).leaveModule,E&&(E.register(v,"switchuser","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),E.register(g,"UnitContacts","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),E.register(w,"default","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),x(e))}).call(this,r(44)(e))},1272:function(e,t,r){e.exports={"message-box":"_1x9cgdW2329Fv383GSPu9B",messageBox:"_1x9cgdW2329Fv383GSPu9B",avatar:"_3h2AFsJE4xSWwjvYdtTQrn"}},1274:function(e,t,r){e.exports={"message-box":"_13IhaTyfRYcx1-eWH3U5A4",messageBox:"_13IhaTyfRYcx1-eWH3U5A4","user-list":"_1SwHt6-cAwniwiqo5rG_BV",userList:"_1SwHt6-cAwniwiqo5rG_BV",hr:"VC2OVTwDevcd-9yIO19hA",avatar:"dMZmpd1cf9XPnu-IN1iXz"}}}]);