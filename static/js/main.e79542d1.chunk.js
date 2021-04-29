(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(37),i=n.n(s),r=n(4),l=n(16),o=n(2),u=n(12),j=n(13),d=n.n(j),b=n(19),h=n(11),O=n.n(h),m=n(38),x=n.n(m),f=(n(83),n(0)),v=function(e){var t=e.onChange,n=e.transform;return Object(f.jsxs)("div",{className:"slider",children:[Object(f.jsx)("div",{className:"slider-front",style:{transform:"translateX(".concat(n,"%)")}}),Object(f.jsx)("input",{className:"slider-back",type:"range",onChange:function(e){return t(e)}})]})},p=(n(85),function(e){var t=e.queue,n=e.setQueue,c=e.playing,s=e.setPlaying,i=Object(a.useState)(0),l=Object(r.a)(i,2),o=l[0],j=l[1],h=Object(a.useState)(1),m=Object(r.a)(h,2),p=m[0],g=m[1],k=Object(a.useState)(p),w=Object(r.a)(k,2),N=w[0],y=w[1],C=Object(a.useState)([]),M=Object(r.a)(C,2),L=M[0],A=M[1],S=Object(a.useState)({title:"---",artist:"---",album:"---",icon:"",duration:0}),q=Object(r.a)(S,2),_=q[0],z=q[1],B=Object(a.createRef)(),I=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:4000/song/"+t[0]).then((function(e){z({title:e.data.title,artist:e.data.artist,album:e.data.album,duration:e.data.duration,icon:"http://localhost:4000/album/"+e.data.album+"/ico"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e/100*_.duration;B.current.seekTo(t,"second")},Q=function(e){s(e)},R=function(e){y(0===p?N:p),g(e)},T=function(){t.length<1||(1===t.length?(n([]),z({title:"---",artist:"---",album:"---",icon:"",duration:0})):(A([t[0]].concat(Object(u.a)(L))),n(t.slice(1,t.length))))};return Object(f.jsx)("div",{className:"player",tabIndex:"0",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{ref:B,width:"0",height:"0",loop:!1,url:"http://localhost:4000/song/play/".concat(t[0]),playing:c,volume:p,onProgress:function(e){j(e.playedSeconds),o>=_.duration-1&&(s(!1),j(0),T())},onReady:I}),Object(f.jsxs)("div",{className:"player-container",children:[Object(f.jsxs)("div",{className:"player-playing",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)("img",{src:_.icon,alt:""})}),Object(f.jsx)("div",{className:"title",children:_.title}),Object(f.jsx)("div",{className:"artist",children:_.artist})]}),Object(f.jsxs)("div",{className:"player-control",children:[Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"control-button",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:function(){L.length<1?P(0):(n([L[0]].concat(Object(u.a)(t))),A(L.slice(1,L.length)))},children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})}),c?Object(f.jsx)("svg",{onClick:function(){return Q(!1)},xmlns:"http://www.w3.org/2000/svg",className:"control-button play",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"})}):Object(f.jsxs)("svg",{onClick:function(){return Q(!0)},xmlns:"http://www.w3.org/2000/svg",className:"control-button play",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"control-button",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:T,children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})]}),Object(f.jsxs)("div",{className:"player-volume",children:[0===p?Object(f.jsx)("svg",{className:"volume-icon",onClick:function(){R(N)},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",clipRule:"evenodd"})}):Object(f.jsx)("svg",{className:"volume-icon",onClick:function(){R(0)},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"})}),Object(f.jsx)(v,{onChange:function(e){return R(e.target.value/100)},transform:100*p-100})]}),Object(f.jsxs)("div",{className:"player-timeline",children:[Object(f.jsxs)("div",{className:"player-time",style:{textAlign:"right"},children:[(o/60<10?"0":"")+Math.floor(o/60)," ",":"," ",(o%60<10?"0":"")+Math.floor(o%60)]}),Object(f.jsx)(v,{onChange:function(e){P(e.target.value),e.target.value=100},transform:o/_.duration*100-100}),Object(f.jsxs)("div",{className:"player-time",style:{textAlign:"left"},children:[(_.duration/60<10?"0":"")+Math.floor(_.duration/60)," ",":"," ",(_.duration%60<10?"0":"")+Math.floor(_.duration%60)]})]})]})]})})}),g=(n(86),function(e){var t=e.queue,n=e.setQueue,c=e.setPlaying,s=Object(a.useState)([]),i=Object(r.a)(s,2),l=i[0],o=i[1],j=Object(a.useCallback)(Object(b.a)(d.a.mark((function e(){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=void 0,e.next=3,O.a.get("http://localhost:4000/song/"+t[a]).then((function(e){c=e.data}));case 3:return e.next=5,O.a.get("http://localhost:4000/album/"+c.album).then((function(e){var t=e.data.albumname;n.push({_id:c._id,title:c.title,duration:c.duration,albumname:t})}));case 5:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<t.length)){e.next=8;break}return e.delegateYield(a(c),"t0",5);case 5:c++,e.next=3;break;case 8:o(n);case 9:case"end":return e.stop()}}),e)}))),[t]);Object(a.useEffect)((function(){j()}),[j]);return Object(f.jsxs)("div",{className:"queue",children:[Object(f.jsx)("h1",{children:"Queue"}),Object(f.jsx)("ul",{className:"queueList",children:l.map((function(e,a){return Object(f.jsxs)("li",{className:"".concat(t[0]===e._id?"queueActive":"queueItem"),datakey:e._id,onClick:function(e){return function(e){var a=e.currentTarget.getAttribute("datakey");n(t.splice(t.indexOf(a))),c(!0)}(e)},onContextMenu:function(e){return function(e){var a=e.currentTarget.getAttribute("datakey"),c=t;c.splice(c.indexOf(a),1),n(Object(u.a)(c))}(e)},children:[Object(f.jsx)("div",{className:"num",children:a+1}),Object(f.jsx)("div",{children:e.title}),Object(f.jsx)("div",{className:"album",children:e.albumname}),Object(f.jsxs)("div",{className:"duration",children:[" ",(e.duration/60<10?"0":"")+Math.floor(e.duration/60)," ",":"," ",(e.duration%60<10?"0":"")+Math.floor(e.duration%60)]})]},e._id)}))})]})}),k=(n(87),function(e){var t=e.queue,n=e.setQueue,c=e.setPlaying,s=Object(a.useState)([]),i=Object(r.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),m=h[0],x=h[1],v=Object(a.useState)(""),p=Object(r.a)(v,2),g=p[0],k=p[1],w=Object(o.f)().id;Object(a.useEffect)((function(){O.a.get("http://localhost:4000/album/"+w).then((function(e){x(e.data.albumname),k(e.data.artist)})),O.a.get("http://localhost:4000/album/"+w).then((function(e){return d(e.data.songs)}))}),[w]);return Object(f.jsxs)("div",{className:"albums",children:[Object(f.jsx)("h3",{children:Object(f.jsxs)(l.b,{to:"/",children:["<"," Back"]})}),Object(f.jsxs)("div",{className:"albumHeader",children:[Object(f.jsx)("img",{alt:m,src:"http://localhost:4000/album/".concat(w,"/ico")}),Object(f.jsxs)("div",{className:"album",children:[Object(f.jsx)("h1",{children:m}),Object(f.jsx)("h2",{children:g})]})]}),Object(f.jsxs)("ul",{className:"songList",children:[Object(f.jsxs)("li",{className:"songHeader",children:[Object(f.jsx)("div",{children:"#"}),Object(f.jsx)("div",{children:"Title"}),Object(f.jsx)("div",{children:"Duration"})]}),Object(f.jsx)("hr",{}),j.map((function(e,a){return Object(f.jsxs)("li",{className:"".concat(t[0]===e._id?"activeItem":"songItem"),onClick:function(){return function(e){t.includes(e)&&n(t.splice(t.indexOf(e),1)),c(!1),n([e].concat(Object(u.a)(t.slice(1,t.length)))),c(!0)}(e._id)},onContextMenu:function(a){return function(e){t.includes(e)||n([].concat(Object(u.a)(t),[e]))}(e._id)},children:[Object(f.jsx)("div",{children:a+1}),Object(f.jsx)("div",{children:e.title}),Object(f.jsxs)("div",{children:[(e.duration/60<10?"0":"")+Math.floor(e.duration/60)," ",":"," ",(e.duration%60<10?"0":"")+Math.floor(e.duration%60)]})]},e._id)}))]})]})}),w=(n(90),function(e){var t=e.id,n=e.name,a=e.artist;return Object(f.jsxs)(l.b,{className:"cardItem",to:"/albums/".concat(t),children:[Object(f.jsx)("img",{src:"http://localhost:4000/album/"+t+"/ico",alt:"Album Icon"}),Object(f.jsx)("h1",{children:n}),Object(f.jsx)("p",{children:a})]})}),N=(n(91),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){O.a.get("http://localhost:4000/album").then((function(e){return c(e.data)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Albums"}),Object(f.jsx)("div",{className:"cardList",children:0===n.length?Object(f.jsx)("h2",{children:"There is no album"}):n.map((function(e){return Object(f.jsx)(w,{id:e.id,name:e.albumname,artist:e.artist},e.id)}))})]})});var y=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),u=i[0],j=i[1];return Object(f.jsx)("div",{className:"App",onContextMenu:function(e){return e.preventDefault()},children:Object(f.jsxs)("div",{className:"app-container",children:[Object(f.jsx)(l.a,{basename:"/react-music-player",children:Object(f.jsx)("div",{className:"page-container",children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(f.jsx)(o.a,{path:"/albums/:id",children:Object(f.jsx)(k,{queue:n,setQueue:c,setPlaying:j})})]})})}),Object(f.jsx)(g,{queue:n,setQueue:c,setPlaying:j}),Object(f.jsx)(p,{queue:n,setQueue:c,playing:u,setPlaying:j})]})})};n(92);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.e79542d1.chunk.js.map