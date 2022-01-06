import{D as ht,S as Y,i as Z,s as tt,I as pt,E as dt,F as vt,e as f,t as G,j as S,v as J,c as p,a as h,g as V,d as u,l as D,w as K,b as e,f as et,G as s,x as R,p as j,n as M,A as U,H as gt,J as mt,K as at,L as _t,M as $t,N as bt,O as yt}from"../chunks/vendor-51f8c06b.js";const xt=()=>{const o=ht("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session}},Et={subscribe(o){return xt().page.subscribe(o)}};function wt(o){let t,a,i,r,m,d,c,_,l,n,v,k,A,$,z,F,P,H,b,Q,N,W,y,x,I,X,E,C,L;return I=new pt({props:{data:dt}}),C=new pt({props:{data:vt}}),{c(){t=f("nav"),a=f("div"),i=f("div"),r=f("a"),m=G("HELICS"),d=S(),c=f("ul"),_=f("li"),l=f("a"),n=G("Getting Started"),k=S(),A=f("li"),$=f("a"),z=G("Integrated Tools"),P=S(),H=f("li"),b=f("a"),Q=G("Team"),W=S(),y=f("div"),x=f("a"),J(I.$$.fragment),X=S(),E=f("a"),J(C.$$.fragment),this.h()},l(g){t=p(g,"NAV",{class:!0});var w=h(t);a=p(w,"DIV",{class:!0});var O=h(a);i=p(O,"DIV",{class:!0,id:!0});var q=h(i);r=p(q,"A",{class:!0,href:!0});var st=h(r);m=V(st,"HELICS"),st.forEach(u),d=D(q),c=p(q,"UL",{class:!0});var T=h(c);_=p(T,"LI",{class:!0});var rt=h(_);l=p(rt,"A",{class:!0,href:!0});var lt=h(l);n=V(lt,"Getting Started"),lt.forEach(u),rt.forEach(u),k=D(T),A=p(T,"LI",{class:!0});var nt=h(A);$=p(nt,"A",{class:!0,href:!0});var ot=h($);z=V(ot,"Integrated Tools"),ot.forEach(u),nt.forEach(u),P=D(T),H=p(T,"LI",{class:!0});var it=h(H);b=p(it,"A",{class:!0,href:!0});var ct=h(b);Q=V(ct,"Team"),ct.forEach(u),it.forEach(u),T.forEach(u),q.forEach(u),W=D(O),y=p(O,"DIV",{class:!0});var B=h(y);x=p(B,"A",{alt:!0,class:!0,href:!0});var ut=h(x);K(I.$$.fragment,ut),ut.forEach(u),X=D(B),E=p(B,"A",{alt:!0,class:!0,href:!0});var ft=h(E);K(C.$$.fragment,ft),ft.forEach(u),B.forEach(u),O.forEach(u),w.forEach(u),this.h()},h(){e(r,"class","text-xl text-white pr-2 font-semibold"),e(r,"href","/"),e(l,"class",v="nav-link text-white "+(o[0].url.pathname=="/introduction"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")),e(l,"href","/introduction"),e(_,"class","nav-item p-2"),e($,"class",F="nav-link text-white "+(o[0].url.pathname=="/tools"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")),e($,"href","/tools"),e(A,"class","nav-item p-2"),e(b,"class",N="nav-link text-white "+(o[0].url.pathname=="/about"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")),e(b,"href","/about"),e(H,"class","nav-item p-2"),e(c,"class","navbar-nav flex flex-col pl-0 list-style-none mr-auto"),e(i,"class","collapse navbar-collapse flex-grow items-center"),e(i,"id","navbarSupportedContent1"),e(x,"alt","download"),e(x,"class","nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"),e(x,"href","https://github.com/GMLC-TDC/HELICS/releases/latest"),e(E,"alt","github"),e(E,"class","nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"),e(E,"href","https://github.com/GMLC-TDC/HELICS"),e(y,"class","flex items-center relative space-x-4"),e(a,"class","container-fluid w-full flex flex-wrap items-center justify-between px-6"),e(t,"class","relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light mb-6")},m(g,w){et(g,t,w),s(t,a),s(a,i),s(i,r),s(r,m),s(i,d),s(i,c),s(c,_),s(_,l),s(l,n),s(c,k),s(c,A),s(A,$),s($,z),s(c,P),s(c,H),s(H,b),s(b,Q),s(a,W),s(a,y),s(y,x),R(I,x,null),s(y,X),s(y,E),R(C,E,null),L=!0},p(g,[w]){(!L||w&1&&v!==(v="nav-link text-white "+(g[0].url.pathname=="/introduction"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")))&&e(l,"class",v),(!L||w&1&&F!==(F="nav-link text-white "+(g[0].url.pathname=="/tools"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")))&&e($,"class",F),(!L||w&1&&N!==(N="nav-link text-white "+(g[0].url.pathname=="/about"?"":"opacity-60 hover:opacity-80 focus:opacity-80 p-0")))&&e(b,"class",N)},i(g){L||(j(I.$$.fragment,g),j(C.$$.fragment,g),L=!0)},o(g){M(I.$$.fragment,g),M(C.$$.fragment,g),L=!1},d(g){g&&u(t),U(I),U(C)}}}function It(o,t,a){let i;return gt(o,Et,r=>a(0,i=r)),[i]}class Ct extends Y{constructor(t){super();Z(this,t,It,wt,tt,{})}}function Lt(o){let t,a,i,r,m;return{c(){t=f("footer"),a=f("div"),i=G(`\xA9 2021 Copyright:
    `),r=f("a"),m=G("HELICS"),this.h()},l(d){t=p(d,"FOOTER",{class:!0});var c=h(t);a=p(c,"DIV",{class:!0,style:!0});var _=h(a);i=V(_,`\xA9 2021 Copyright:
    `),r=p(_,"A",{class:!0,href:!0});var l=h(r);m=V(l,"HELICS"),l.forEach(u),_.forEach(u),c.forEach(u),this.h()},h(){e(r,"class","text-gray-100"),e(r,"href","https://github.com/GMLC-TDC/HELICS"),e(a,"class","text-gray-200 text-center p-4"),mt(a,"background-color","rgba(0, 0, 0, 0.2)"),e(t,"class","bg-gray-900 text-gray-200 shadow-lg text-center lg:text-left mt-6")},m(d,c){et(d,t,c),s(t,a),s(a,i),s(a,r),s(r,m)},p:at,i:at,o:at,d(d){d&&u(t)}}}class St extends Y{constructor(t){super();Z(this,t,null,Lt,tt,{})}}function Dt(o){let t,a,i,r,m,d,c;a=new Ct({});const _=o[1].default,l=_t(_,o,o[0],null);return d=new St({}),{c(){t=f("div"),J(a.$$.fragment),i=S(),r=f("div"),l&&l.c(),m=S(),J(d.$$.fragment),this.h()},l(n){t=p(n,"DIV",{class:!0});var v=h(t);K(a.$$.fragment,v),i=D(v),r=p(v,"DIV",{class:!0});var k=h(r);l&&l.l(k),k.forEach(u),m=D(v),K(d.$$.fragment,v),v.forEach(u),this.h()},h(){e(r,"class","grid mx-8 md:mx-16 mt-6"),e(t,"class","h-screen w-full grid grid-rows-[auto_1fr_auto]")},m(n,v){et(n,t,v),R(a,t,null),s(t,i),s(t,r),l&&l.m(r,null),s(t,m),R(d,t,null),c=!0},p(n,[v]){l&&l.p&&(!c||v&1)&&$t(l,_,n,n[0],c?yt(_,n[0],v,null):bt(n[0]),null)},i(n){c||(j(a.$$.fragment,n),j(l,n),j(d.$$.fragment,n),c=!0)},o(n){M(a.$$.fragment,n),M(l,n),M(d.$$.fragment,n),c=!1},d(n){n&&u(t),U(a),l&&l.d(n),U(d)}}}function kt(o,t,a){let{$$slots:i={},$$scope:r}=t;return o.$$set=m=>{"$$scope"in m&&a(0,r=m.$$scope)},[r,i]}class Ht extends Y{constructor(t){super();Z(this,t,kt,Dt,tt,{})}}export{Ht as default};