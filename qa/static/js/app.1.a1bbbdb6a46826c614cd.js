(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,t,r){"use strict";(function(e){var n=r(1),o=(r(470),r(37)),s=r.n(o),i=(r(337),r(204));function c(){return n.createElement("div",{className:i.pageLoading},n.createElement(s.a,{className:i.spin,type:"loading",theme:"outlined"}))}!function(){var t=r(12).enterModule;t&&t(e)}();const a=c;t.a=a,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(c,"PageLoading","C:/project/react/test/ts-react-webpack/src/components/PageLoading/index.tsx"),t.register(a,"default","C:/project/react/test/ts-react-webpack/src/components/PageLoading/index.tsx"),n(e))}()}).call(this,r(29)(e))},147:function(e,t,r){e.exports={centered:"_1Pb_YPy676dVNBrGJ2B1fC",emoji:"_1J6Ao3Ne1sQxLR_8CECkqI",title:"_2JaRclWo2z-t0tnIVfZYvK"}},16:function(e,t,r){"use strict";(function(e){var n,o=r(3),s=r(252),i=r.n(s),c=r(332),a=r(70),u=r.n(a),l=(r(250),r(48));!function(){var t=r(12).enterModule;t&&t(e)}(),function(e){e[e.LOGICERROR=0]="LOGICERROR",e[e.TIMEOUTERROR=1]="TIMEOUTERROR",e[e.NETWORKERROR=2]="NETWORKERROR"}(n||(n={}));var p=[2018,401,402,403,1004],d={baseURL:"https://m.kaixinliao.com/api/"},f={},g=["get","post","put","delete"],v=null,h=function(e){return e.result||e.data||{}};g.forEach(function(e){f[e]=function(t,r,s){var a={method:e,url:t,baseURL:s||d.baseURL,headers:{SIGN:""+Object(l.c)().sign}},f=i.a.create(d);return f.interceptors.request.use(function(e){var t={ts:Date.now()/1e3};return e.params=o.a({},e.params,t),e},function(e){return Promise.reject(e)}),f.interceptors.response.use(function(e){var t=null;if("object"==typeof e.data&&2018===e.data.code){var r={msg:e.data.msg,type:n[n.LOGICERROR],config:e.config};return window.clearTimeout(v),v=window.setTimeout(function(){location.replace("/#/login")},300),Promise.reject(r)}if("object"==typeof e.data&&1004===e.data.code){r={msg:e.data.msg,type:n[n.LOGICERROR],config:e.config};return window.clearTimeout(v),v=window.setTimeout(function(){location.replace("/#/login")},300),Promise.reject(r)}if("object"!=typeof e.data||200!==e.data.code){r={msg:e.data.msg,type:n[n.LOGICERROR],config:e.config};return Promise.reject(r)}return t=e.data,h(t)},function(e){if(p.includes(e.response.status))return u.a.destroy(),u.a.error("用户认证失败! 请登录重试..."),window.clearTimeout(v),void(v=window.setTimeout(function(){location.replace("/#/login")},300));var t={msg:e.response.statusText||e.message||"网络故障",type:/^timeout of/.test(e.message)?n[n.TIMEOUTERROR]:n[n.NETWORKERROR],config:e.config};return Promise.reject(t)}),"get"===e?a.params=r:r instanceof FormData?a.data=r:a.data=c.stringify(r),a.startTime=new Date,f.request(a).then(function(e){return e}).catch(function(e){return u.a.destroy(),u.a.error(e.response||e.msg||e.stack||"未知错误"),a.url.includes("autoScript.set")?Promise.resolve({err:e}):Promise.reject({err:e,stack:e.msg||e.stack||""})})}});const b=f;t.a=b,function(){var t=r(12).default,o=r(12).leaveModule;t&&(t.register(n,"HTTPERROR","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(p,"TOKENERROR","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(d,"DEFAULTCONFIG","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(f,"http","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(g,"methods","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(v,"authTimer","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(h,"resFormat","C:/project/react/test/ts-react-webpack/src/services/http.ts"),t.register(b,"default","C:/project/react/test/ts-react-webpack/src/services/http.ts"),o(e))}()}).call(this,r(29)(e))},204:function(e,t,r){e.exports={pageLoading:"ZbrATjg_tt8MPYxcomz9w",spin:"_2xn6ZFnNUmfGKjYts-fqD4"}},205:function(e,t,r){"use strict";r.r(t);var n=r(251);r.d(t,"auth",function(){return n.a});var o=r(261);r.d(t,"user",function(){return o.a});var s=r(262);r.d(t,"group",function(){return s.a});var i=r(263);r.d(t,"single",function(){return i.a})},249:function(e,t,r){"use strict";(function(e){var n=r(1),o=r(147);!function(){var t=r(12).enterModule;t&&t(e)}();var s=function(){return n.createElement("div",{className:o.centered},n.createElement("div",{className:o.emoji},"😭"),n.createElement("p",{className:o.title},"糟糕!"),n.createElement("p",null,"该页面似乎飞往其他星球了."))};const i=s;t.a=i,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(s,"Error","C:/project/react/test/ts-react-webpack/src/components/Error/index.tsx"),t.register(i,"default","C:/project/react/test/ts-react-webpack/src/components/Error/index.tsx"),n(e))}()}).call(this,r(29)(e))},251:function(e,t,r){"use strict";(function(e){var n=r(16);!function(){var t=r(12).enterModule;t&&t(e)}();const o={login:function(e){return n.a.post("/login/login",e||{})},register:function(e){return n.a.post("/login/register",e||{})},resetPassword:function(e){return n.a.post("/login/reset_password",e||{})},verifyCode:function(e){return n.a.post("/login/verify_code",e||{})},sendCode:function(e){return n.a.post("/login/send_code",e||{})},logout:function(e){return n.a.post("/login/logout",e||{})},refresh:function(e){return n.a.post("/users/refresh",e||{})},addblacklist:function(e){return n.a.post("/users/addblacklist",e||{})},removeblacklist:function(e){return n.a.post("/users/removeblacklist",e||{})},queryFriendship:function(e){return n.a.post("/friendship/queryFriendship",e||{})},confirmFriend:function(e){return n.a.post("/friendship/confirmFriend",e||{})},addFriendship:function(e){return n.a.post("/friendship/addFriendship",e||{})}};t.a=o,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(o,"default","C:/project/react/test/ts-react-webpack/src/services/api/auth.ts"),n(e))}()}).call(this,r(29)(e))},261:function(e,t,r){"use strict";(function(e){var n=r(16);!function(){var t=r(12).enterModule;t&&t(e)}();const o={usersIndex:function(e){return n.a.get("/users/index/"+e,{})},friendshipAll:function(e){return n.a.post("/friendship/all",e||{})},usersBlacklist:function(e){return n.a.post("/users/blacklist",e||{})},friendApplyList:function(e){return n.a.post("/friendship/friendApplyList",e||{})},toExamineFriend:function(e){return n.a.post("/friendship/toExamineFriend",e||{})}};t.a=o,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(o,"default","C:/project/react/test/ts-react-webpack/src/services/api/user.ts"),n(e))}()}).call(this,r(29)(e))},262:function(e,t,r){"use strict";(function(e){var n=r(16);!function(){var t=r(12).enterModule;t&&t(e)}();const o={usersGroups:function(e){return n.a.post("/users/groups",e||{})},groupsMembers:function(e){return n.a.get("/groups/members/"+e,{})},groupWritten:function(e){return n.a.post("/messages/groupWritten",e||{})},groupImgMsg:function(e){return n.a.post("/messages/groupImgMsg",e||{})},groupFileMsg:function(e){return n.a.post("/messages/groupFileMsg",e||{})},groupsCreate:function(e){return n.a.post("/groups/create",e||{})},groupsJoin:function(e){return n.a.post("/groups/join",e||{})},groupsQuit:function(e){return n.a.post("/groups/quit",e||{})},groupDismiss:function(e){return n.a.post("/group/dismiss",e||{})},groupsRefresh:function(e){return n.a.post("/groups/refresh",e||{})},groupsGroupUser:function(e){return n.a.post("/groups/groupUser",e||{})},groupsRegusers:function(e){return n.a.post("/groups/regusers",e||{})},groupsGroupInfo:function(e){return n.a.get("/groups/groupInfo/"+e,{})}};t.a=o,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(o,"default","C:/project/react/test/ts-react-webpack/src/services/api/group.ts"),n(e))}()}).call(this,r(29)(e))},263:function(e,t,r){"use strict";(function(e){var n=r(16);!function(){var t=r(12).enterModule;t&&t(e)}();const o={usersIndex:function(e){return n.a.get("/users/index/"+e,{})},messagesWritten:function(e){return n.a.post("/messages/written",e||{})},messagesImgMsg:function(e){return n.a.post("/messages/imgMsg",e||{})},messagesFileMsg:function(e){return n.a.post("/messages/fileMsg",e||{})}};t.a=o,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(o,"default","C:/project/react/test/ts-react-webpack/src/services/api/single.ts"),n(e))}()}).call(this,r(29)(e))},264:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(4),s=r(44),i=r(28);!function(){var t=r(12).enterModule;t&&t(e)}();var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sideBarCollapsed="1"===localStorage.getItem(i.b.SIDE_BAR_COLLAPSED),t.sideBarTheme=localStorage.getItem(i.b.SIDE_BAR_THEME)||"light",t.navOpenKeys=JSON.parse(localStorage.getItem(i.b.NAV_OPEN_KEYS))||[],t.toggleSideBarCollapsed=function(){t.sideBarCollapsed=!t.sideBarCollapsed,localStorage.setItem(i.b.SIDE_BAR_COLLAPSED,t.sideBarCollapsed?"1":"0")},t.changeSiderTheme=function(e){t.sideBarTheme=e,localStorage.setItem(i.b.SIDE_BAR_THEME,e)},t.setOpenKeys=function(e){t.navOpenKeys=e,localStorage.setItem(i.b.NAV_OPEN_KEYS,JSON.stringify(e))},t}return n.d(t,e),n.c([o.observable],t.prototype,"sideBarCollapsed",void 0),n.c([o.observable],t.prototype,"sideBarTheme",void 0),n.c([o.observable],t.prototype,"navOpenKeys",void 0),n.c([o.action],t.prototype,"toggleSideBarCollapsed",void 0),n.c([o.action],t.prototype,"changeSiderTheme",void 0),n.c([o.action],t.prototype,"setOpenKeys",void 0),t}(s.b);const a=new c;t.a=a,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(c,"GlobalStore","C:/project/react/test/ts-react-webpack/src/store/globalStore/index.ts"),t.register(a,"default","C:/project/react/test/ts-react-webpack/src/store/globalStore/index.ts"),n(e))}()}).call(this,r(29)(e))},265:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(4),s=r(44),i=r(55),c=r(48),a=r(28);!function(){var t=r(12).enterModule;t&&t(e)}();var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userInfo=null,t.login=function(e){return n.b(t,void 0,Promise,function(){var t,r,s=this;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.login(e)];case 1:return t=n.sent(),console.log(t),Object(o.runInAction)("SET_USERINFO",function(){s.userInfo=t}),Object(c.d)(a.a.TOKEN,t.token),localStorage.setItem(a.b.USERINFO,JSON.stringify(t)),i.routerStore.replace("/"),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t.register=function(e){return n.b(t,void 0,Promise,function(){var t,r;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.register(e)];case 1:return t=n.sent(),this.$message.success("注册成功"),console.log(t),i.routerStore.replace("/login"),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t.resetPassword=function(e){return n.b(t,void 0,Promise,function(){var t,r;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.resetPassword(e)];case 1:return t=n.sent(),this.$message.success("重置密码成功"),console.log(t),i.routerStore.replace("/login"),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t.verifyCode=function(e){return n.b(t,void 0,Promise,function(){var t,r,s=this;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.verifyCode(e)];case 1:return t=n.sent(),console.log(t),this.$message.success("校验成功"),Object(o.runInAction)("SET_USERINFO",function(){s.verification_token=t.verification_token}),console.log(t),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t.sendCode=function(e){return n.b(t,void 0,Promise,function(){var t,r;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.sendCode(e)];case 1:return t=n.sent(),console.log(t),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t.logout=function(){Object(c.a)(a.a.TOKEN),localStorage.removeItem(a.b.USERINFO),i.routerStore.replace("/login"),location.reload()},t.initUserInfo=function(){var e=localStorage.getItem(a.b.USERINFO);if(!e)throw new Error("no local userinfo!!");var r=JSON.parse(e);return t.userInfo=r,r},t}return n.d(t,e),n.c([o.observable],t.prototype,"userInfo",void 0),n.c([o.observable],t.prototype,"verification_token",void 0),n.c([o.action],t.prototype,"login",void 0),n.c([o.action],t.prototype,"register",void 0),n.c([o.action],t.prototype,"resetPassword",void 0),n.c([o.action],t.prototype,"verifyCode",void 0),n.c([o.action],t.prototype,"sendCode",void 0),n.c([o.action],t.prototype,"logout",void 0),n.c([o.action],t.prototype,"initUserInfo",void 0),t}(s.b);const l=new u;t.a=l,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(u,"AuthStore","C:/project/react/test/ts-react-webpack/src/store/authStore/index.ts"),t.register(l,"default","C:/project/react/test/ts-react-webpack/src/store/authStore/index.ts"),n(e))}()}).call(this,r(29)(e))},266:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(4),s=r(44),i=r(28),c=r(69);!function(){var t=r(12).enterModule;t&&t(e)}();var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userInfo=null,t.verification_token="111",t.ConversationsList=[],t.MessagesList=[],t.chatType=null,t.unreadMessageCount=0,t.unreadCount=0,t.initSdk=function(){var e=localStorage.getItem(i.b.USERINFO);if(e){var r=JSON.parse(e);t.init(r.appkey),t.setConnectionStatusListener(),t.setOnReceiveMessageListener(),t.connect(r.token)}},t.init=function(e){RongIMLib.RongIMClient.init(e,null,{})},t.setConnectionStatusListener=function(){RongIMLib.RongIMClient.setConnectionStatusListener({onChanged:function(e){switch(e){case RongIMLib.ConnectionStatus.CONNECTED:console.log("链接成功"),t.GetConversationsList(),t.getTotalUnreadCount();break;case RongIMLib.ConnectionStatus.CONNECTING:console.log("正在链接");break;case RongIMLib.ConnectionStatus.DISCONNECTED:console.log("断开连接");break;case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:console.log("其他设备登录");break;case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:console.log("域名不正确");break;case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:console.log("网络不可用")}}})},t.setOnReceiveMessageListener=function(){RongIMLib.RongIMClient.setOnReceiveMessageListener({onReceived:function(e){console.log(e),1!=e.messageDirection&&t.api.user.usersIndex(e.senderUserId).then(function(r){var n=r.nickname,o=r.portraitUri;t.pushMessage({conversationType:e.conversationType,content:e.content,messageDirection:e.messageDirection,senderUserId:e.senderUserId,targetId:e.targetId,sentTime:e.sentTime,portraitUri:o,nickname:n})})}})},t.connect=function(e){RongIMLib.RongIMClient.connect(e,{onSuccess:function(e){console.log("链接成功，用户id："+e)},onTokenIncorrect:function(){console.log("token无效")},onError:function(e){console.log(e)}})},t.GetConversationsList=function(){return RongIMLib.RongIMClient.getInstance().getConversationList({onSuccess:function(e){console.log(e),Object(o.runInAction)("RESET_CONVERLIST",function(){t.ConversationsList=[]}),e.forEach(function(e){var r,n={conversationType:e.conversationType,content:e.latestMessage.content,messageDirection:e.latestMessage.messageDirection,senderUserId:e.latestMessage.senderUserId,targetId:e.latestMessage.targetId,sentTime:e.latestMessage.sentTime,unreadMessageCount:e.unreadMessageCount,messageId:e.latestMessage.messageId};switch(console.log(n),e.conversationType){case 1:t.api.single.usersIndex(e.targetId).then(function(e){r=Object.assign(n,{nickname:e.nickname},{portraitUri:e.portraitUri}),Object(o.runInAction)("SET_CONVLIST",function(){t.ConversationsList.push(r)})}).catch(function(r){t.deleteConvList(1,e.targetId)});break;case 3:t.api.group.groupsGroupInfo(e.targetId).then(function(e){r=Object.assign(n,{nickname:e.name},{portraitUri:e.portraitUri}),Object(o.runInAction)("SET_CONVLIST",function(){t.ConversationsList.push(r)})}).catch(function(r){console.log(r),t.deleteConvList(3,e.targetId)})}})},onError:function(e){console.log(e)}},null,null,null),t.ConversationsList},t.getTotalUnreadCount=function(){return n.b(t,void 0,void 0,function(){var e=this;return n.e(this,function(t){return RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({onSuccess:function(t){Object(o.runInAction)("SET_UNRENDCOUNT",function(){e.unreadCount=t})},onError:function(e){}}),[2]})})},t.historyMessage=function(e,r,n){void 0===n&&(n=0);console.log(t.chatType),RongIMLib.RongIMClient.getInstance().getHistoryMessages(t.chatType.conversationType,r,n,20,{onSuccess:function(e,n){console.log(e[0].sentTime),1===t.chatType.conversationType?t.api.single.usersIndex(r).then(function(r){e.forEach(function(e){console.log(e.sentTime);var n,s={conversationType:e.conversationType,content:e.content,messageDirection:e.messageDirection,senderUserId:e.senderUserId,targetId:e.targetId,sentTime:e.sentTime,messageId:e.messageId};console.log(c.a.usersIndex),n=2===e.messageDirection?Object.assign(s,{nickname:r.nickname},{portraitUri:r.portraitUri}):Object.assign(s,{nickname:c.a.usersIndex.nickname},{portraitUri:c.a.usersIndex.portraitUri}),Object(o.runInAction)("SET_MESSAGE",function(){t.MessagesList.push(n),console.log(t.MessagesList)})})}):e.forEach(function(e,r){var n,s={conversationType:e.conversationType,content:e.content,messageDirection:e.messageDirection,senderUserId:e.senderUserId,targetId:e.targetId,sentTime:e.sentTime,messageId:e.messageId};t.api.single.usersIndex(s.senderUserId).then(function(e){var r=e.nickname,i=e.portraitUri;n=Object.assign(s,{nickname:r},{portraitUri:i}),Object(o.runInAction)("SET_GROUPMESSAGE",function(){t.MessagesList.push(n),console.log(t.MessagesList)})})})},onError:function(e){}})},t.deleteConvList=function(e,t){RongIMLib.RongIMClient.getInstance().removeConversation(e,t,{onSuccess:function(e){console.log(e)},onError:function(e){}})},t.setChatType=function(e){t.chatType=e},t.resetMessage=function(){t.MessagesList=[]},t.resetConversationsList=function(){t.ConversationsList=[]},t.pushMessage=function(e){t.MessagesList.push(e)},t.disconnect=function(){RongIMLib.RongIMClient.getInstance().disconnect()},t}return n.d(t,e),n.c([o.observable],t.prototype,"userInfo",void 0),n.c([o.observable],t.prototype,"verification_token",void 0),n.c([o.observable],t.prototype,"ConversationsList",void 0),n.c([o.observable],t.prototype,"MessagesList",void 0),n.c([o.observable],t.prototype,"chatType",void 0),n.c([o.observable],t.prototype,"unreadMessageCount",void 0),n.c([o.observable],t.prototype,"unreadCount",void 0),n.c([o.action],t.prototype,"initSdk",void 0),n.c([Object(o.action)("GET_CONVDATA")],t.prototype,"GetConversationsList",void 0),n.c([o.action],t.prototype,"getTotalUnreadCount",void 0),n.c([o.action],t.prototype,"historyMessage",void 0),n.c([o.action],t.prototype,"deleteConvList",void 0),n.c([o.action],t.prototype,"setChatType",void 0),n.c([o.action],t.prototype,"resetMessage",void 0),n.c([o.action],t.prototype,"resetConversationsList",void 0),n.c([o.action],t.prototype,"pushMessage",void 0),n.c([o.action],t.prototype,"disconnect",void 0),t}(s.b);const u=new a;t.a=u,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(a,"RongStore","C:/project/react/test/ts-react-webpack/src/store/rongImStore/index.ts"),t.register(u,"default","C:/project/react/test/ts-react-webpack/src/store/rongImStore/index.ts"),n(e))}()}).call(this,r(29)(e))},267:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(4),s=r(44),i=r(55),c=r(48),a=r(28),u=r(69);!function(){var t=r(12).enterModule;t&&t(e)}();var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.editorState=null,t.setEditorState=function(e){t.editorState=e},t.resetEditorState=function(){Object(o.runInAction)(function(){t.editorState=null,console.log(t.editorState)})},t.sendMessage=function(e,r){return n.b(t,void 0,Promise,function(){var t,o;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),t=void 0,1!=r?[3,2]:[4,this.api.single.messagesWritten(e)];case 1:return t=n.sent(),[3,4];case 2:return[4,this.api.group.groupWritten(e)];case 3:t=n.sent(),n.label=4;case 4:return console.log(t),[3,6];case 5:return o=n.sent(),console.error(o),[3,6];case 6:return[2]}})})},t.messagesImgMsg=function(e){return n.b(t,void 0,void 0,function(){var t,r;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),(t=new FormData).append("userid",u.a.usersIndex.id),t.append("friendid",e.friendid),t.append("file",e.file),[4,this.api.single.messagesImgMsg(t)];case 1:return r=n.sent(),Object(o.runInAction)("SEND_IMGMSG",function(){console.log(r)}),[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}})})},t.login=function(e){return n.b(t,void 0,Promise,function(){var t,r;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.login(e)];case 1:return t=n.sent(),console.log(t),Object(c.d)(a.a.TOKEN,t.token),localStorage.setItem(a.b.USERINFO,JSON.stringify(t)),i.routerStore.replace("/"),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}})})},t}return n.d(t,e),n.c([o.observable],t.prototype,"editorState",void 0),n.c([o.action],t.prototype,"setEditorState",void 0),n.c([o.action],t.prototype,"resetEditorState",void 0),n.c([o.action],t.prototype,"sendMessage",void 0),n.c([o.action],t.prototype,"messagesImgMsg",void 0),n.c([o.action],t.prototype,"login",void 0),t}(s.b);const p=new l;t.a=p,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(l,"MessageStore","C:/project/react/test/ts-react-webpack/src/store/messageStore/index.ts"),t.register(p,"default","C:/project/react/test/ts-react-webpack/src/store/messageStore/index.ts"),n(e))}()}).call(this,r(29)(e))},28:function(e,t,r){"use strict";(function(e){var n,o;r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o}),function(){var t=r(12).enterModule;t&&t(e)}(),function(e){e.TOKEN="token",e.SIGN="sign"}(n||(n={})),function(e){e.USERINFO="userInfo",e.NAV_OPEN_KEYS="navOpenKeys",e.SIDE_BAR_THEME="sideBarTheme",e.SIDE_BAR_COLLAPSED="sideBarCollapsed"}(o||(o={}));var s=["user","admin"];!function(){var t=r(12).default,i=r(12).leaveModule;t&&(t.register(n,"COOKIE_KEYS","C:/project/react/test/ts-react-webpack/src/constants/index.ts"),t.register(o,"LOCALSTORAGE_KEYS","C:/project/react/test/ts-react-webpack/src/constants/index.ts"),t.register(s,"LOGIN_CATEGORY","C:/project/react/test/ts-react-webpack/src/constants/index.ts"),i(e))}()}).call(this,r(29)(e))},328:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(1),s=r(12),i=r(104),c=r.n(i),a=r(899),u=r(900),l=r(106),p=r(329),d=r(105),f=r(249),g=r(331);!function(){var t=r(12).enterModule;t&&t(e)}();var v=c()({loader:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,916))},loading:d.a}),h=c()({loader:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,927))},loading:d.a}),b=c()({loader:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,928))},loading:d.a}),m=c()({loader:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,929))},loading:d.a}),I=function(e){return o.createElement("div",{className:p.appWrapper},e.children)},S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.d(t,e),t.prototype.render=function(){return o.createElement(I,null,o.createElement(a.a,null,o.createElement(u.a,null,o.createElement(l.a,{exact:!0,path:"/login",component:h}),o.createElement(l.a,{exact:!0,path:"/register",component:b}),o.createElement(l.a,{exact:!0,path:"/forgetpwd",component:m}),o.createElement(g.a,{path:"/",component:v}),o.createElement(l.a,{component:f.a}))))},t}(o.Component);const C=Object(s.hot)(e)(S);t.a=C,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(v,"Home","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(h,"Login","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(b,"register","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(m,"forgetpwd","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(I,"AppWrapper","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(S,"AppRouter","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),t.register(C,"default","C:/project/react/test/ts-react-webpack/src/containers/shared/App/index.tsx"),n(e))}()}).call(this,r(29)(e))},329:function(e,t,r){e.exports={appWrapper:"_3Ndwn1769-PHbenrbYaD4B"}},331:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(1),s=r(90),i=r(106),c=r(44),a=r(48),u=r(28);!function(){var t=r(12).enterModule;t&&t(e)}();var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gotoLogin=function(){t.props.routerStore.history.replace("/login")},t.checkLocalUserInfo=function(){var e=Object(a.b)(u.a.TOKEN);if(!e)return t.gotoLogin();var r=t.props,n=r.userInfo,o=r.initUserInfo,s=r.initSdk;if((0,r.getUsers)(),s(),!n)try{if(o().token!==e)throw new Error("cookie 上储存的token与localStorage 上储存的token不一致!")}catch(e){console.warn(e),t.gotoLogin()}},t}return n.d(t,e),t.prototype.componentDidMount=function(){this.checkLocalUserInfo()},t.prototype.render=function(){var e=this.props,t=e.component,r=n.f(e,["component"]);return o.createElement(i.a,n.a({},r,{render:function(e){return o.createElement(t,n.a({},r))}}))},t=n.c([Object(s.b)(function(e){var t=e.routerStore,r=e.authStore,n=e.rongStore,o=e.userStore,s=n.initSdk;return{routerStore:t,userInfo:r.userInfo,initUserInfo:r.initUserInfo,initSdk:s,getUsers:o.getUsers}}),s.c],t)}(c.a);const p=l;t.a=p,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(l,"PrivateRoute","C:/project/react/test/ts-react-webpack/src/containers/shared/PrivateRoute/index.tsx"),t.register(p,"default","C:/project/react/test/ts-react-webpack/src/containers/shared/PrivateRoute/index.tsx"),n(e))}()}).call(this,r(29)(e))},338:function(e,t,r){r(339),e.exports=r(456)},44:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return l}),r.d(t,"b",function(){return p});var n=r(3),o=r(1),s=r(70),i=r.n(s),c=(r(250),r(206)),a=r.n(c),u=(r(523),r(205));!function(){var t=r(12).enterModule;t&&t(e)}();var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.api=u,t.$message=i.a,t.$notification=a.a,t}return n.d(t,e),t}(o.Component),p=function(){return function(){this.api=u,this.$message=i.a,this.$notification=a.a}}();!function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(l,"ComponentExt","C:/project/react/test/ts-react-webpack/src/utils/reactExt.tsx"),t.register(p,"StoreExt","C:/project/react/test/ts-react-webpack/src/utils/reactExt.tsx"),n(e))}()}).call(this,r(29)(e))},456:function(e,t,r){"use strict";r.r(t),function(e){var t=r(3),n=(r(459),r(1)),o=r(10),s=r(90),i=r(4),c=r(327),a=r.n(c),u=r(143),l=r(207),p=r(328),d=r(55);!function(){var t=r(12).enterModule;t&&t(e)}();var f=a()(),g=Object(u.syncHistoryWithStore)(f,d.routerStore);Object(i.configure)({enforceActions:"observed"});var v=function(e){o.render(n.createElement(s.a,t.a({},d),n.createElement(l.a,{history:g},n.createElement(e,null))),document.getElementById("app"))};v(p.a),function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(f,"hashHistory","C:/project/react/test/ts-react-webpack/src/index.tsx"),t.register(g,"history","C:/project/react/test/ts-react-webpack/src/index.tsx"),t.register(v,"render","C:/project/react/test/ts-react-webpack/src/index.tsx"),n(e))}()}.call(this,r(29)(e))},459:function(e,t,r){},48:function(e,t,r){"use strict";(function(e){r.d(t,"d",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return i}),r.d(t,"c",function(){return l});var n=r(333);function o(e,t,r){void 0===r&&(r=365);var n=new Date;n.setDate(n.getDate()+r),document.cookie=e+"="+escape(t)+";expires="+n.toUTCString()}function s(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!==t){t=t+e.length+1;var r=document.cookie.indexOf(";",t);return-1===r&&(r=document.cookie.length),unescape(document.cookie.substring(t,r))}}return""}function i(e){o(e,"")}function c(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(t);return null!==r?decodeURI(r[2]):null}function a(e,t,r){if(void 0===r&&(r="key"),!(e instanceof Array))return null;var n=e.filter(function(e){return e[r]===t});return n.length?n[0]:null}function u(e,t,r,o){void 0===t&&(t="id"),void 0===r&&(r="pid"),void 0===o&&(o="children");var s=Object(n.cloneDeep)(e),i=[],c={};return s.forEach(function(e,r){c[s[r][t]]=s[r]}),s.forEach(function(e){var t=c[e[r]];t?(t[o]||(t[o]=[]),t[o].push(e)):i.push(e)}),i}function l(){var e=JSON.parse(localStorage.getItem("userInfo"));return e||""}!function(){var t=r(12).enterModule;t&&t(e)}(),function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(o,"setCookie","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(s,"getCookie","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(i,"clearCookie","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(c,"queryURL","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(a,"queryArray","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(u,"arrayToTree","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),t.register(l,"getSign","C:/project/react/test/ts-react-webpack/src/utils/index.ts"),n(e))}()}).call(this,r(29)(e))},55:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"routerStore",function(){return u});var n=r(143),o=r(264);r.d(t,"globalStore",function(){return o.a});var s=r(265);r.d(t,"authStore",function(){return s.a});var i=r(69);r.d(t,"userStore",function(){return i.a});var c=r(266);r.d(t,"rongStore",function(){return c.a});var a=r(267);r.d(t,"messageStore",function(){return a.a}),function(){var t=r(12).enterModule;t&&t(e)}();var u=new n.RouterStore;!function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(u,"routerStore","C:/project/react/test/ts-react-webpack/src/store/index.ts"),n(e))}()}.call(this,r(29)(e))},69:function(e,t,r){"use strict";(function(e){var n=r(3),o=r(4),s=r(44),i=r(48);!function(){var t=r(12).enterModule;t&&t(e)}();var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.usersIndex={id:"",nickname:"",phone:"",portraitUri:""},t.usersBlacklist=[],t.friendshipAll=[],t.usersGroups=[],t.friendApplyList=[],t.friendStatus=!1,t.friendid="",t.addFriendStatus=!1,t.getUsers=function(){return n.b(t,void 0,void 0,function(){var e,t,r,s,c,a,u,l,p=this;return n.e(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),e=this.api.user,t=Object(i.c)().id,[4,Promise.all([e.usersIndex(t),e.usersBlacklist({userid:t}),e.friendshipAll({userid:t}),this.api.group.usersGroups({userid:t}),e.friendApplyList({userid:t})])];case 1:return r=d.sent(),s=r[0],c=r[1],a=r[2],u=r[3],l=r[4],Object(o.runInAction)("SET_USER_LIST",function(){for(var e in p.usersIndex=s,p.usersBlacklist=c,p.friendshipAll=a,u)if(u.hasOwnProperty(e)){var t=u[e];p.usersGroups.push(n.a({role:t.role},t.group))}console.log(p.usersGroups),p.friendApplyList=l}),[3,3];case 2:return d.sent(),[3,3];case 3:return[2]}})})},t.resetfriendStatus=function(){Object(o.runInAction)("SET_FRIENDSSTATUS",function(){t.friendStatus=!1,t.friendid="",t.friendIndex=null})},t.changeState=function(){return n.b(t,void 0,void 0,function(){var e=this;return n.e(this,function(t){try{Object(o.runInAction)("SET_FRIENDS",function(){e.friendStatus=!e.friendStatus})}catch(e){Object(o.runInAction)("SET_FRIENDS",function(){})}return[2]})})},t.groupsCreate=function(e){return n.b(t,void 0,void 0,function(){var t;return n.e(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.api.group.groupsCreate(e)];case 1:return t=r.sent(),Object(o.runInAction)("GROUP_CREATE",function(){console.log(t)}),[3,3];case 2:return r.sent(),Object(o.runInAction)("GROUP_CREATE",function(){}),[3,3];case 3:return[2]}})})},t.queryFriendship=function(e){return n.b(t,void 0,void 0,function(){var t,r,s=this;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,this.api.auth.queryFriendship(e)];case 1:return t=n.sent(),[4,this.api.auth.confirmFriend({userid:this.usersIndex.id,friendid:t.id})];case 2:return r=n.sent(),Object(o.runInAction)("SET_FRIENDS",function(){s.friendStatus=!0,s.friendid=t.id,s.friendIndex=t,console.log(r)}),[3,4];case 3:return n.sent(),Object(o.runInAction)("SET_FRIENDSSTATUS",function(){s.friendStatus=!1}),[3,4];case 4:return[2]}})})},t.addFriendship=function(e){return n.b(t,void 0,void 0,function(){var t,r=this;return n.e(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.api.auth.addFriendship(e)];case 1:return t=n.sent(),Object(o.runInAction)("SET_ADDSTATUS",function(){r.addFriendStatus=!0}),console.log(t),[3,3];case 2:return n.sent(),Object(o.runInAction)("SET_ADDSTATUS",function(){r.addFriendStatus=!1}),[3,3];case 3:return[2]}})})},t}return n.d(t,e),n.c([o.observable],t.prototype,"usersIndex",void 0),n.c([o.observable],t.prototype,"usersBlacklist",void 0),n.c([o.observable],t.prototype,"friendshipAll",void 0),n.c([o.observable],t.prototype,"usersGroups",void 0),n.c([o.observable],t.prototype,"friendApplyList",void 0),n.c([o.observable],t.prototype,"friendStatus",void 0),n.c([o.observable],t.prototype,"friendIndex",void 0),n.c([o.observable],t.prototype,"friendid",void 0),n.c([o.observable],t.prototype,"addFriendStatus",void 0),n.c([o.action],t.prototype,"getUsers",void 0),n.c([o.action],t.prototype,"resetfriendStatus",void 0),n.c([o.action],t.prototype,"changeState",void 0),n.c([o.action],t.prototype,"groupsCreate",void 0),n.c([o.action],t.prototype,"queryFriendship",void 0),n.c([o.action],t.prototype,"addFriendship",void 0),t}(s.b);const a=new c;t.a=a,function(){var t=r(12).default,n=r(12).leaveModule;t&&(t.register(c,"UserStore","C:/project/react/test/ts-react-webpack/src/store/userStore/index.ts"),t.register(a,"default","C:/project/react/test/ts-react-webpack/src/store/userStore/index.ts"),n(e))}()}).call(this,r(29)(e))}},[[338,8,0]]]);