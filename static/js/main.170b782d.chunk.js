(this["webpackJsonpis-eclass-down"]=this["webpackJsonpis-eclass-down"]||[]).push([[0],{53:function(t,e,n){},72:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(32),c=n.n(i),o=n(89),r=(n(53),n(21)),d=n(33),u=n.n(d),h=n(34),l=n.n(h),j=n(90),b=n(91),w=(n(72),n(4)),g={none:"eClass is up!",minor:"eClass is having issues :/",major:"eClass is down :(",critical:"eClass is down :("},f={none:"status-ok",minor:"status-warning",major:"status-error"},v=function(){var t=Object(s.useState)(!0),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(s.useState)({status:{indicator:"",description:""},page:{url:"",updated_at:""}}),c=Object(r.a)(i,2),o=c[0],d=c[1],h=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))};return Object(s.useEffect)((function(){return h(),window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}})),Object(s.useEffect)((function(){a(!0),u.a.get("https://status.eclass.ualberta.ca/api/v2/status.json").then((function(t){d(t.data),a(!1)}))}),[]),n?Object(w.jsx)(j.a,{width:"100vw",height:"calc(var(--vh, 1vh) * 100)",background:"black"}):Object(w.jsxs)(j.a,{width:"100vw",height:"calc(var(--vh, 1vh) * 100)",background:f[o.status.indicator],animation:{type:"fadeIn",duration:2e3},justify:"center",align:"center",children:[Object(w.jsx)(b.a,{color:"white",weight:900,size:"8vw",children:Object(w.jsx)("a",{href:o.page.url,style:{textDecoration:"none",color:"white"},children:g[o.status.indicator]})}),Object(w.jsxs)(b.a,{color:"white",weight:300,size:"1vw",style:{position:"fixed",bottom:"0.5em"},textAlign:"center",children:["Last Updated At:"," ",l()(o.page.updated_at).format("yyyy-MM-DD hh:mm:ss A"),Object(w.jsx)("br",{}),"Made with ",Object(w.jsx)("s",{children:"\u2764\ufe0f"})," \u2615\ufe0f and some hatred towards eClass.",Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"https://git.adrianleung.dev/is-eclass-down",style:{textDecoration:"none",color:"white"},children:"Powered by GitHub Pages"})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(o.a,{children:Object(w.jsx)(v,{})})}),document.getElementById("root")),p()}},[[83,1,2]]]);
//# sourceMappingURL=main.170b782d.chunk.js.map