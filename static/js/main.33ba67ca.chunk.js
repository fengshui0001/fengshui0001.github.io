(this.webpackJsonpchatsys=this.webpackJsonpchatsys||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),i=n.n(r),c=(n(24),n(18)),o=(n(25),n(26),n(7)),u=n(5);var m=[{id:"1",content:"You on your way?",createdAt:new Date(Date.now()-6e7)},{id:"2",content:"Hey, it's me",createdAt:new Date(Date.now()-12e7)},{id:"3",content:"I should buy a boat",createdAt:new Date(Date.now()-144e7)},{id:"4",content:"This is wicked good ice cream.",createdAt:new Date(Date.now()-2016e7)}],s=[{id:"1",name:"Ethan Gonzalez",picture:"https://randomuser.me/api/portraits/thumb/men/1.jpg",lastMessage:m.find((function(e){return"1"===e.id}))},{id:"2",name:"Bryan Wallace",picture:"https://randomuser.me/api/portraits/thumb/men/2.jpg",lastMessage:m.find((function(e){return"2"===e.id}))},{id:"3",name:"Avery Stewart",picture:"https://randomuser.me/api/portraits/thumb/women/1.jpg",lastMessage:m.find((function(e){return"3"===e.id}))},{id:"4",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/2.jpg",lastMessage:m.find((function(e){return"4"===e.id}))}],d=n(15),p=n.n(d);var E=[{path:"/",exact:!0,sidebar:function(){return l.a.createElement("div",null,"home!")},main:function(){return l.a.createElement("h2",null,"Home")}},{path:"/bubblegum",sidebar:function(){return l.a.createElement("div",null,"bubblegum!")},main:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,s.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:e.picture,alt:"Profile"}),l.a.createElement("div",null,e.name),e.lastMessage&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,e.lastMessage.content),l.a.createElement("div",null,p()(e.lastMessage.createdAt).format("HH:mm"))))}))))}},{path:"/shoelaces",sidebar:function(){return l.a.createElement("div",null,"shoelaces!")},main:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"https://randomuser.me/api/portraits/thumb/men/1.jpg",alt:"Profile"}),l.a.createElement("div",null,"Ethan Gonzalez"),l.a.createElement("div",null,"You on your way?"),l.a.createElement("div",null,"10:25")),l.a.createElement("li",null,l.a.createElement("img",{src:"https://randomuser.me/api/portraits/thumb/men/2.jpg",alt:"Profile"}),l.a.createElement("div",null,"Bryan Wallace"),l.a.createElement("div",null,"Hey, it's me"),l.a.createElement("div",null,"13:27"))))}}];function h(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],r=t[1];return fetch("mydata.json").then((function(e){return e.json()})).then(r),l.a.createElement(o.a,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{padding:"10px",width:"40%",background:"#f0f0f0"}},l.a.createElement("ul",{style:{listStyleType:"none",padding:0}},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/bubblegum"},"chatlist")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/shoelaces"},"Shoelaces")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"....",n.mystyle))),l.a.createElement("div",null,n.version)),l.a.createElement("div",{style:{flex:1,padding:"10px"}},l.a.createElement(u.c,null,E.map((function(e,t){return l.a.createElement(u.a,{key:t,path:e.path,exact:e.exact,children:l.a.createElement(e.main,null)})}))))))}var f=function(){return console.log("testdddddd"),l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.33ba67ca.chunk.js.map