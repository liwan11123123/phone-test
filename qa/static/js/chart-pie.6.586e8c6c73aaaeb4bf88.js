(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1338:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(2),s=r(1),i=r(135),c=r(285),o=r.n(c),l=r(283),u=r.n(l),p=r(287),d=r.n(p),m=r(284),h=r.n(m),f=r(211),v=r.n(f),g=r(1339),w=r(1230),E=r.n(w),x=(r(1229),r(1240)),y=r.n(x),C=(r(1239),r(286)),b=r.n(C),S=r(1342),k=r(3),N=r(1263);(a=r(17).enterModule)&&a(e);var A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forgetPasswd=function(){t.props.routerStore.push("/forgetpwd")},t.submit=function(e){e.preventDefault()},t.register=function(e){e.preventDefault(),t.props.routerStore.push("/register")},t.gotoChat=function(e){var r=t.props.routerStore.history;(0,t.props.setChatType)({conversationType:1,targetId:e.user.id,nickname:e.displayName?e.displayName:e.user.nickname}),r.push("/Message/"+e.user.id)},t.gotoGroupList=function(){t.props.routerStore.history.push("/GroupList")},t.gotoFriendsList=function(){t.props.routerStore.history.push("/NewFriends")},t}return n.d(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.friendshipAll,a=t.friendApplyList;return s.createElement("div",{style:{padding:"16vw 0",overflow:"hidden"}},s.createElement(o.a,null,s.createElement(u.a,{button:!0,className:S.messageBox,onClick:this.gotoFriendsList},s.createElement(d.a,null,s.createElement(E.a,{className:S.avatar,shape:"square",icon:"user"})),s.createElement(h.a,{inset:!0,primary:"新的朋友"}),s.createElement(N.a,null,a.length?s.createElement(v.a,{disabled:!0,"aria-label":"Comments"},s.createElement(y.a,{dot:!!a.length},s.createElement(E.a,{shape:"circle",src:a[0].user.portraitUri,icon:"user"}))):"")),s.createElement(b.a,null),s.createElement(u.a,{button:!0,className:S.messageBox,onClick:this.gotoGroupList},s.createElement(d.a,null,s.createElement(E.a,{className:S.avatar,shape:"square",icon:"user"})),s.createElement(h.a,{inset:!0,primary:"群聊"})),s.createElement("div",{className:S.hr}),s.createElement("div",{className:S.userList},Object(k.toJS)(r).map(function(t,r){return s.createElement("div",{key:r,onClick:e.gotoChat.bind(e,t)},s.createElement(g.a,{user:t}))}))))},t=n.c([Object(i.b)(function(e){var t=e.routerStore,r=e.userStore,a=e.rongStore,n=r.friendshipAll,s=r.friendApplyList;return{routerStore:t,friendshipAll:n,setChatType:a.setChatType,friendApplyList:s}}),i.c],t)}(s.Component);const L=A;var B,_;t.default=L,B=r(17).default,_=r(17).leaveModule,B&&(B.register(A,"Contacts","C:/project/react/test/ts-react-webpack/src/containers/views/Contacts/index.tsx"),B.register(L,"default","C:/project/react/test/ts-react-webpack/src/containers/views/Contacts/index.tsx"),_(e))}.call(this,r(45)(e))},1339:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return g});var a,n=r(1),s=r(283),i=r.n(s),c=r(287),o=r.n(c),l=r(284),u=r.n(l),p=r(286),d=r.n(p),m=r(1230),h=r.n(m),f=(r(1229),r(1340));function v(e){return e.user?n.createElement("div",null,n.createElement(i.a,{button:!0,className:f.messageBox},n.createElement(o.a,null,n.createElement(h.a,{src:e&&e.user&&e.user.portraitUri,className:f.avatar,shape:"square",icon:"user"})),n.createElement(u.a,{inset:!0,primary:e&&e.displayName?e.displayName:e.user.nickname})),n.createElement(d.a,null)):void 0}function g(e){var t=e.user;return n.createElement("div",null,v(t))}(a=r(17).enterModule)&&a(e);const w=g;var E,x;E=r(17).default,x=r(17).leaveModule,E&&(E.register(v,"switchuser","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),E.register(g,"UnitContacts","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),E.register(w,"default","C:/project/react/test/ts-react-webpack/src/containers/shared/UnitContacts/index.tsx"),x(e))}).call(this,r(45)(e))},1340:function(e,t,r){e.exports={"message-box":"_1x9cgdW2329Fv383GSPu9B",messageBox:"_1x9cgdW2329Fv383GSPu9B",avatar:"_3h2AFsJE4xSWwjvYdtTQrn"}},1342:function(e,t,r){e.exports={"message-box":"_13IhaTyfRYcx1-eWH3U5A4",messageBox:"_13IhaTyfRYcx1-eWH3U5A4","user-list":"_1SwHt6-cAwniwiqo5rG_BV",userList:"_1SwHt6-cAwniwiqo5rG_BV",hr:"VC2OVTwDevcd-9yIO19hA",avatar:"dMZmpd1cf9XPnu-IN1iXz"}}}]);