(this.webpackJsonpchatsys=this.webpackJsonpchatsys||[]).push([[0],{47:function(e,t,a){e.exports=a(84)},52:function(e,t,a){},59:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},60:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),s=(a(52),a(16)),c=a(40),o=(a(59),a(60),a(11)),d=a(14),m=a(24),u=a.n(m),f=a(41),p=a(19),h=a.n(p);var g=[{id:"1",content:"You on your way?",createdAt:new Date(Date.now()-6e7)},{id:"2",content:"Hey, it's me",createdAt:new Date(Date.now()-12e7)},{id:"3",content:"I should buy a boat",createdAt:new Date(Date.now()-144e7)},{id:"4",content:"This is wicked good ice cream.",createdAt:new Date(Date.now()-2016e7)}],v=[{id:"1",name:"\u7528\u6237\u540d",picture:"https://randomuser.me/api/portraits/thumb/men/1.jpg",lastMessage:g.find((function(e){return"1"===e.id}))},{id:"2",name:"\u5e38\u5e38\u5e38\u5e38\u7684\u7528\u6237\u540d\u6709\u8d39\u57ce\u6760",picture:"https://randomuser.me/api/portraits/thumb/men/2.jpg",lastMessage:g.find((function(e){return"2"===e.id}))},{id:"3",name:"Avery Stewarsdfsdfdsdfsdfdssfsdft",picture:"https://randomuser.me/api/portraits/thumb/women/1.jpg",lastMessage:g.find((function(e){return"3"===e.id}))},{id:"4",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/2.jpg",lastMessage:g.find((function(e){return"4"===e.id}))},{id:"5",name:"\u7528\u6237\u540d",picture:"https://randomuser.me/api/portraits/thumb/men/5.jpg",lastMessage:g.find((function(e){return"1"===e.id}))},{id:"6",name:"\u5e38\u5e38\u5e38\u5e38\u7684\u7528\u6237\u540d\u6709\u8d39\u57ce\u6760",picture:"https://randomuser.me/api/portraits/thumb/men/6.jpg",lastMessage:g.find((function(e){return"2"===e.id}))},{id:"7",name:"Avery Stewart",picture:"https://randomuser.me/api/portraits/thumb/women/7.jpg",lastMessage:g.find((function(e){return"3"===e.id}))},{id:"8",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/8.jpg",lastMessage:g.find((function(e){return"4"===e.id}))}],E=[{id:"1",name:"\u7528\u6237\u540d",picture:"http://img.zhaogexing.com/2019/08/04/1564924597807792.jpg"},{id:"2",name:"\u5e38\u5e38\u5e38\u5e38\u7684\u7528\u6237\u540d\u6709\u8d39\u57ce\u6760",picture:"https://randomuser.me/api/portraits/thumb/men/2.jpg"},{id:"3",name:"Avery Stewarsdfsdfdsdfsdfdssfsdft",picture:"https://randomuser.me/api/portraits/thumb/women/1.jpg"},{id:"4",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/2.jpg"},{id:"5",name:"\u7528\u6237\u540d",picture:"https://randomuser.me/api/portraits/thumb/men/5.jpg"},{id:"6",name:"\u5e38\u5e38\u5e38\u5e38\u7684\u7528\u6237\u540d\u6709\u8d39\u57ce\u6760",picture:"https://randomuser.me/api/portraits/thumb/men/6.jpg"},{id:"7",name:"Avery Stewart",picture:"https://randomuser.me/api/portraits/thumb/women/7.jpg"},{id:"8",name:"Katie Peterson",picture:"https://randomuser.me/api/portraits/thumb/women/8.jpg"}],b=a(102),w={chatframediv:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},chatlistparentdiv:{flex:"none",width:"70px",height:"100%",background:"darkgrey",overflowX:"hidden",overflowY:"hidden"},chatlistdiv:{flex:"none",width:"87px",height:"100%",background:"darkgrey",overflowX:"hidden",overflowY:"scroll",paddingRight:"17px"},chatlistinnerdiv:{fontSize:"10px",fontColor:"black",textDecoration:"none",paddingTop:"5px",paddingBottom:"5px",background:"darkgrey",textAlign:"center"},chatlistinnerdivactive:{fontSize:"10px",fontColor:"black",textDecoration:"none",paddingTop:"15px",paddingBottom:"15px",background:"grey",textAlign:"center"},chatlistlink:{textDecoration:"none",color:"black"},chatlistimgdiv:{display:"block",margin:"auto"},chatmessagediv:{flex:"auto",overflowY:"auto",overflowX:"hidden"}};function x(){var e=Object(d.g)(),t=e.path,a=e.url,i=Object(n.useState)(E),l=Object(s.a)(i,2),c=l[0],m=l[1];return r.a.createElement("div",{style:w.chatframediv},r.a.createElement("div",{style:w.chatlistparentdiv},r.a.createElement("div",{style:w.chatlistdiv},c.map((function(e,t){return r.a.createElement("div",{style:0===t?w.chatlistinnerdivactive:w.chatlistinnerdiv,onClick:function(){return function(e){var t,a;for(t=0;t<c.length;t++)(a=c[t]).id===e&&(c.splice(t,1),c.unshift(a));m(c)}(e.id)}},r.a.createElement(o.b,{to:"".concat(a,"/").concat(e.id),style:w.chatlistlink},r.a.createElement(b.a,{src:e.picture,style:w.chatlistimgdiv}),0===t?"":r.a.createElement("div",null,e.name)))})))),r.a.createElement("div",{style:w.chatmessagediv},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:t},r.a.createElement("h3",null,"Please select a topic.")),r.a.createElement(d.a,{path:"".concat(t,"/:topicId")},r.a.createElement(y,null)))))}function y(){var e=Object(d.f)().topicId;return r.a.createElement("div",null,r.a.createElement("h3",null,"this is chat with ",e))}var k=a(43),j=a.n(k);var D=a(100),A=a(101),M=a(44),S=a.n(M),O=a(27),P=a.n(O),H=a(45),z=a.n(H),C="\u73cd\u7231\u4ea4\u53cb\u7f51",I={bodydiv:{fontSize:"16px",height:"100%",background:"grey",backgroundImage:'url("/bkimage.jpg")',backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"},framediv:{display:"flex",flexDirection:"column",margin:"auto",maxWidth:"780px",height:"100%",background:"grey",minHeight:"300px",maxHeight:"820px"},topdiv:{flex:"none",height:"30px",background:"orange"},maindiv:{flex:"auto",overflowY:"auto",overflowX:"hidden"},bottomdiv:{flex:"none",background:"green"}};function Y(){return r.a.createElement(o.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(d.a,{path:"/:id"},r.a.createElement(B,null))))}function B(){var e=Object(d.g)(),t=e.path,a=e.url,i=(function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("mydata.json");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[])}(),[{path:"/",exact:!0,main:function(){return r.a.createElement("h2",null,"Home")}},{path:"/chattest",main:function(){return r.a.createElement("div",null,r.a.createElement("ul",null,v.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:e.picture,alt:"Profile"}),r.a.createElement("div",null,e.name),e.lastMessage&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.lastMessage.content),r.a.createElement("div",null,j()(e.lastMessage.createdAt).format("HH:mm"))))}))),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:"/bkimage.jpg"})),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"),r.a.createElement("div",null,"sdfsfsadfasdfsafdsf"))))}},{path:"/chat",main:function(){return x()}},{path:"/profile",main:function(){return r.a.createElement("h2",null,"Profile")}}]),l=r.a.useState(0),m=Object(s.a)(l,2),p=m[0],g=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,null,r.a.createElement("title",null,C)),r.a.createElement(o.a,null,r.a.createElement("div",{style:I.bodydiv},r.a.createElement("div",{style:I.framediv},r.a.createElement("div",{style:I.topdiv},r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/thumb/men/1.jpg",alt:"Profile",height:"100%"}),"Chat Hub Name")),r.a.createElement("div",{style:I.maindiv},r.a.createElement(d.c,null,i.map((function(e,a){return r.a.createElement(d.a,{key:a,path:t+e.path,exact:e.exact,children:r.a.createElement(e.main,null)})})))),r.a.createElement("div",{style:I.bottomdiv},r.a.createElement(D.a,{value:p,onChange:function(e,t){g(t)},showLabels:!0},r.a.createElement(A.a,{label:"\u5339\u914d",icon:r.a.createElement(S.a,null),component:o.b,to:a+"/"}),r.a.createElement(A.a,{label:"\u804a\u5929\u6d4b\u8bd5",icon:r.a.createElement(P.a,null),component:o.b,to:a+"/chattest"}),r.a.createElement(A.a,{label:"\u804a\u5929",icon:r.a.createElement(P.a,null),component:o.b,to:a+"/chat"}),r.a.createElement(A.a,{label:"\u4e2a\u4eba\u4fe1\u606f",icon:r.a.createElement(z.a,null),component:o.b,to:a+"/profile"})))))))}var K=function(){return r.a.createElement(Y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.85bd62ac.chunk.js.map