(this.webpackJsonpchatsys=this.webpackJsonpchatsys||[]).push([[0],{33:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),i=(a(38),a(24)),o=(a(39),a(40),a(10)),m=a(13);var u=[{id:"1",content:"You on your way?",createdAt:new Date(Date.now()-6e7)},{id:"2",content:"Hey, it's me",createdAt:new Date(Date.now()-12e7)},{id:"3",content:"I should buy a boat",createdAt:new Date(Date.now()-144e7)},{id:"4",content:"This is wicked good ice cream.",createdAt:new Date(Date.now()-2016e7)}],s=[{id:"1",name:"Ethan Gonzalez",picture:"https://randomuser.me/api/portraits/thumb/men/1.jpg",lastMessage:u.find((function(e){return"1"===e.id}))},{id:"2",name:"Bryan Wallace",picture:"https://randomuser.me/api/portraits/thumb/men/2.jpg",lastMessage:u.find((function(e){return"2"===e.id}))},{id:"3",name:"Avery Stewart",picture:"https://randomuser.me/api/portraits/thumb/women/1.jpg",lastMessage:u.find((function(e){return"3"===e.id}))},{id:"4",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/2.jpg",lastMessage:u.find((function(e){return"4"===e.id}))}],d=a(26),E=a.n(d);var p=a(65),h=a(67),b=a(68),f=a(28),g=a.n(f),v=a(29),y=a.n(v),w=a(30),j=a.n(w),k=[{path:"/",exact:!0,sidebar:function(){return l.a.createElement("div",null,"home!")},main:function(){return l.a.createElement("h2",null,"Home")}},{path:"/bubblegum",sidebar:function(){return l.a.createElement("div",null,"bubblegum!")},main:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,s.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:e.picture,alt:"Profile"}),l.a.createElement("div",null,e.name),e.lastMessage&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,e.lastMessage.content),l.a.createElement("div",null,E()(e.lastMessage.createdAt).format("HH:mm"))))}))))}},{path:"/shoelaces",sidebar:function(){return l.a.createElement("div",null,"shoelaces!")},main:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"https://randomuser.me/api/portraits/thumb/men/1.jpg",alt:"Profile"}),l.a.createElement("div",null,"Ethan Gonzalez"),l.a.createElement("div",null,"You on your way?"),l.a.createElement("div",null,"10:25")),l.a.createElement("li",null,l.a.createElement("img",{src:"https://randomuser.me/api/portraits/thumb/men/2.jpg",alt:"Profile"}),l.a.createElement("div",null,"Bryan Wallace"),l.a.createElement("div",null,"Hey, it's me"),l.a.createElement("div",null,"13:27"))))}}],x=Object(p.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}});function D(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1];fetch("mydata.json").then((function(e){return e.json()})).then(r);var c=x(),u=l.a.useState(0),s=Object(i.a)(u,2),d=s[0],E=s[1];return l.a.createElement(o.a,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{padding:"10px",width:"40%",background:"#f0f0f0"}},l.a.createElement("ul",{style:{listStyleType:"none",padding:0}},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/bubblegum"},"chatlist")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/shoelaces"},"Shoelaces")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"....",a.mystyle))),l.a.createElement("div",null,a.version)),l.a.createElement("div",{style:{flex:1,padding:"10px"}},l.a.createElement(m.c,null,k.map((function(e,t){return l.a.createElement(m.a,{key:t,path:e.path,exact:e.exact,children:l.a.createElement(e.main,null)})}))))),l.a.createElement(h.a,{value:d,onChange:function(e,t){E(t)},showLabels:!0,className:c.root},l.a.createElement(b.a,{label:"Recents",icon:l.a.createElement(g.a,null),component:o.b,to:"/"}),l.a.createElement(b.a,{label:"Favorites",icon:l.a.createElement(y.a,null),component:o.b,to:"/bubblegum"}),l.a.createElement(b.a,{label:"Nearby",icon:l.a.createElement(j.a,null),component:o.b,to:"/shoelaces"})))}var M=function(){return console.log("testdddddd"),l.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4bedd73e.chunk.js.map