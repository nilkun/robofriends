(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},20:function(e,t,n){e.exports=n(33)},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(14),c=n.n(a),i=n(8),s=n(7),u=(n(13),n(29),n(2)),l=n(3),d=n(5),h=n(4),f=n(6),b=function(e){var t=e.robot,n="https://robohash.org/".concat(t.id,"?size=200x200");return r.a.createElement("div",{className:"bg-orange dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"ninja",src:n}),r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email)))},p=function(e){var t=e.robots,n=t.map(function(e,n){return r.a.createElement(b,{key:n,robot:t[n]})});return r.a.createElement("div",null,n)},g=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Rbots",className:"pa3 ba b--red bg-light-gray",type:"search",placeholder:"search robots",onChange:t}))},E=(n(31),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)}),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Super Error Detected... Self destruction activated."):this.props.children}}]),t}(o.Component),m=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"-=RoboFriends 2.0=-"),r.a.createElement(m,{color:"red"}))}}]),t}(o.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(O,null),r.a.createElement(g,{searchChange:n}),r.a.createElement(E,null,r.a.createElement(v,null,r.a.createElement(p,{robots:c}))))}}]),t}(r.a.Component),w=Object(i.b)(function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",paylaod:t})})})}}})(j),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C={searchfield:""},R={isPending:!1,robots:[],error:""},k=n(18),T=n(19),_=Object(k.createLogger)(),U=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(U,Object(s.a)(T.a,_));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");y?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(t,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.4565ad48.chunk.js.map