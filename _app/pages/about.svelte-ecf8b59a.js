import{S as mt,i as gt,s as pt,e as v,t as P,j as C,c as y,a as G,g as j,d as g,l as E,b as f,f as M,L as u,W as rt,o as it,p as R,n as B,X as bt,V as D,Y as dt,Z as vt,k as J,m as st,_ as yt,v as kt,w as Lt,x as wt,O as N,A as Ct,$ as Et,I as Gt,H as It}from"../chunks/vendor-94d1d6a2.js";function ot(h,t,a){const i=h.slice();return i[4]=t[a],i}function nt(h,t,a){const i=h.slice();return i[7]=t[a],i}function ct(h,t,a){const i=h.slice();return i[10]=t[a],i}function Ht(h){let t,a,i,n,e,s=h[10].name+"",c,L,r,l,o,p;return l=new Gt({props:{data:It}}),{c(){t=v("div"),a=v("img"),n=C(),e=v("h5"),c=P(s),L=C(),r=v("a"),kt(l.$$.fragment),this.h()},l(_){t=y(_,"DIV",{class:!0});var w=G(t);a=y(w,"IMG",{src:!0,class:!0,alt:!0}),n=E(w),e=y(w,"H5",{class:!0});var V=G(e);c=j(V,s),V.forEach(g),L=E(w),r=y(w,"A",{target:!0,href:!0,alt:!0,class:!0});var T=G(r);Lt(l.$$.fragment,T),T.forEach(g),w.forEach(g),this.h()},h(){D(a.src,i=h[10].profileUrl)||f(a,"src",i),f(a,"class","rounded-full w-32 mb-4 mx-auto shadow-lg"),f(a,"alt","Avatar"),f(e,"class","text-xl font-medium leading-tight mb-2"),f(r,"target","_blank"),f(r,"href",o="https://github.com/"+h[10].login),f(r,"alt","github"),f(r,"class","text-gray-500"),f(t,"class","text-center")},m(_,w){M(_,t,w),u(t,a),u(t,n),u(t,e),u(e,c),u(t,L),u(t,r),wt(l,r,null),p=!0},p:N,i(_){p||(R(l.$$.fragment,_),p=!0)},o(_){B(l.$$.fragment,_),p=!1},d(_){_&&g(t),Ct(l)}}}function ut(h,t){let a,i,n,e=t[10].affiliation===t[7]&&Ht(t);return{key:h,first:null,c(){a=J(),e&&e.c(),i=J(),this.h()},l(s){a=J(),e&&e.l(s),i=J(),this.h()},h(){this.first=a},m(s,c){M(s,a,c),e&&e.m(s,c),M(s,i,c),n=!0},p(s,c){t=s,t[10].affiliation===t[7]&&e.p(t,c)},i(s){n||(R(e),n=!0)},o(s){B(e),n=!1},d(s){s&&g(a),e&&e.d(s),s&&g(i)}}}function ht(h){let t,a,i,n,e=[],s=new Map,c,L=h[1];const r=l=>l[10].name;for(let l=0;l<L.length;l+=1){let o=ct(h,L,l),p=r(o);s.set(p,e[l]=ut(p,o))}return{c(){t=v("h3"),a=P(h[7]),i=C(),n=v("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=y(l,"H3",{});var o=G(t);a=j(o,h[7]),o.forEach(g),i=E(l),n=y(l,"DIV",{class:!0});var p=G(n);for(let _=0;_<e.length;_+=1)e[_].l(p);p.forEach(g),this.h()},h(){f(n,"class","flex justify-start space-x-24")},m(l,o){M(l,t,o),u(t,a),M(l,i,o),M(l,n,o);for(let p=0;p<e.length;p+=1)e[p].m(n,null);c=!0},p(l,o){o&2&&(L=l[1],st(),e=rt(e,o,r,1,l,L,s,n,yt,ut,null,ct),it())},i(l){if(!c){for(let o=0;o<L.length;o+=1)R(e[o]);c=!0}},o(l){for(let o=0;o<e.length;o+=1)B(e[o]);c=!1},d(l){l&&g(t),l&&g(i),l&&g(n);for(let o=0;o<e.length;o+=1)e[o].d()}}}function Mt(h){return{c:N,l:N,m:N,p:N,d:N}}function Nt(h){let t,a,i,n,e=[],s=new Map,c=h[3];const L=r=>r[4].login;for(let r=0;r<c.length;r+=1){let l=ot(h,c,r),o=L(l);s.set(o,e[r]=ft(o,l))}return{c(){t=v("h2"),a=P("Contributors"),i=C(),n=v("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=y(r,"H2",{});var l=G(t);a=j(l,"Contributors"),l.forEach(g),i=E(r),n=y(r,"DIV",{class:!0});var o=G(n);for(let p=0;p<e.length;p+=1)e[p].l(o);o.forEach(g),this.h()},h(){f(n,"class","flex flex-wrap justify-start space-x-2")},m(r,l){M(r,t,l),u(t,a),M(r,i,l),M(r,n,l);for(let o=0;o<e.length;o+=1)e[o].m(n,null)},p(r,l){l&1&&(c=r[3],e=rt(e,l,L,1,r,c,s,n,Et,ft,null,ot))},d(r){r&&g(t),r&&g(i),r&&g(n);for(let l=0;l<e.length;l+=1)e[l].d()}}}function ft(h,t){let a,i,n,e;return{key:h,first:null,c(){a=v("a"),i=v("img"),e=C(),this.h()},l(s){a=y(s,"A",{target:!0,href:!0,alt:!0,class:!0});var c=G(a);i=y(c,"IMG",{src:!0,class:!0,alt:!0}),e=E(c),c.forEach(g),this.h()},h(){D(i.src,n=t[4].avatar_url)||f(i,"src",n),f(i,"class","rounded-full w-16 mb-4 mx-auto shadow-lg"),f(i,"alt","Avatar"),f(a,"target","_blank"),f(a,"href",t[4].html_url),f(a,"alt","github"),f(a,"class","text-gray-500"),this.first=a},m(s,c){M(s,a,c),u(a,i),u(a,e)},p(s,c){t=s},d(s){s&&g(a)}}}function Dt(h){return{c:N,l:N,m:N,p:N,d:N}}function Tt(h){let t,a,i,n,e,s,c,L,r,l,o,p,_,w,V,T,$,z,K,x,Q,O,S,tt,W,A,et,X,U,lt,F,Y=["Pacific Northwest National Laboratory","Lawrence Livermore National Laboratory","National Renewable Energy Laboratory"],k=[];for(let b=0;b<3;b+=1)k[b]=ht(nt(h,Y,b));const _t=b=>B(k[b],1,1,()=>{k[b]=null});let H={ctx:h,current:null,token:null,hasCatch:!1,pending:Dt,then:Nt,catch:Mt,value:3};return bt(h[0],H),{c(){t=v("article"),a=v("h2"),i=P("Core Team"),n=C();for(let b=0;b<3;b+=1)k[b].c();e=C(),H.block.c(),s=C(),c=v("h2"),L=P("Statistics"),r=C(),l=v("h3"),o=P("Badges"),p=C(),_=v("div"),w=v("img"),T=C(),$=v("img"),K=C(),x=v("img"),O=C(),S=v("img"),W=C(),A=v("img"),X=C(),U=v("img"),this.h()},l(b){t=y(b,"ARTICLE",{class:!0});var m=G(t);a=y(m,"H2",{});var d=G(a);i=j(d,"Core Team"),d.forEach(g),n=E(m);for(let Z=0;Z<3;Z+=1)k[Z].l(m);e=E(m),H.block.l(m),s=E(m),c=y(m,"H2",{});var q=G(c);L=j(q,"Statistics"),q.forEach(g),r=E(m),l=y(m,"H3",{});var at=G(l);o=j(at,"Badges"),at.forEach(g),p=E(m),_=y(m,"DIV",{class:!0});var I=G(_);w=y(I,"IMG",{alt:!0,src:!0}),T=E(I),$=y(I,"IMG",{alt:!0,src:!0}),K=E(I),x=y(I,"IMG",{alt:!0,src:!0}),O=E(I),S=y(I,"IMG",{alt:!0,src:!0}),W=E(I),A=y(I,"IMG",{alt:!0,src:!0}),X=E(I),U=y(I,"IMG",{alt:!0,src:!0}),I.forEach(g),m.forEach(g),this.h()},h(){f(w,"alt","GitHub all releases"),D(w.src,V="https://img.shields.io/github/downloads/GMLC-TDC/helics/total")||f(w,"src",V),f($,"alt","GitHub issues"),D($.src,z="https://img.shields.io/github/issues-raw/GMLC-TDC/HELICS")||f($,"src",z),f(x,"alt","GitHub closed issues"),D(x.src,Q="https://img.shields.io/github/issues-closed-raw/GMLC-TDC/HELICS")||f(x,"src",Q),f(S,"alt","GitHub pull requests"),D(S.src,tt="https://img.shields.io/github/issues-pr-raw/GMLC-TDC/HELICS")||f(S,"src",tt),f(A,"alt","GitHub closed pull requests"),D(A.src,et="https://img.shields.io/github/issues-pr-closed-raw/GMLC-TDC/HELICS")||f(A,"src",et),f(U,"alt","GitHub contributors"),D(U.src,lt="https://img.shields.io/github/contributors-anon/GMLC-TDC/HELICS")||f(U,"src",lt),f(_,"class","flex space-x-4"),f(t,"class","prose prose-lg max-w-none")},m(b,m){M(b,t,m),u(t,a),u(a,i),u(t,n);for(let d=0;d<3;d+=1)k[d].m(t,null);u(t,e),H.block.m(t,H.anchor=null),H.mount=()=>t,H.anchor=s,u(t,s),u(t,c),u(c,L),u(t,r),u(t,l),u(l,o),u(t,p),u(t,_),u(_,w),u(_,T),u(_,$),u(_,K),u(_,x),u(_,O),u(_,S),u(_,W),u(_,A),u(_,X),u(_,U),F=!0},p(b,[m]){if(h=b,m&2){Y=["Pacific Northwest National Laboratory","Lawrence Livermore National Laboratory","National Renewable Energy Laboratory"];let d;for(d=0;d<3;d+=1){const q=nt(h,Y,d);k[d]?(k[d].p(q,m),R(k[d],1)):(k[d]=ht(q),k[d].c(),R(k[d],1),k[d].m(t,e))}for(st(),d=3;d<3;d+=1)_t(d);it()}dt(H,h,m)},i(b){if(!F){for(let m=0;m<3;m+=1)R(k[m]);F=!0}},o(b){k=k.filter(Boolean);for(let m=0;m<3;m+=1)B(k[m]);F=!1},d(b){b&&g(t),vt(k,b),H.block.d(),H.token=null,H=null}}}function $t(h){async function t(){const n=[fetch("https://api.github.com/repos/GMLC-TDC/HELICS/contributors"),fetch("https://api.github.com/repos/GMLC-TDC/pyhelics/contributors")];var e=[];for(const s of n)e=e.concat(await(await s).json());return e=e.filter(s=>{if(s.login.includes("bot"))return!1;for(const c of i)if(console.log(c),s.login===c.login)return!1;return!0}),e}const a=t();let i=[{name:"Philip Top",affiliation:"Lawrence Livermore National Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/20667153?v=4",login:"phlptp"},{name:"Jason Fuller",affiliation:"Pacific Northwest National Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/4552618?v=4",login:"jcfuller1"},{name:"Trevor Hardy",affiliation:"Pacific Northwest National Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/8697189?v=4",login:"trevorhardy"},{name:"Bryan Palmintier",affiliation:"National Renewable Energy Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/249272?v=4",login:"bpalmintier"},{name:"Andy Fisher",affiliation:"Pacific Northwest National Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/4552674?v=4",login:"afisher1"},{name:"Ryan Mast",affiliation:"Lawrence Livermore National Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/3969255?v=4",login:"nightlark"},{name:"Dheepak Krishnamurthy",affiliation:"National Renewable Energy Laboratory",profileUrl:"https://avatars.githubusercontent.com/u/1813121?v=4",login:"kdheepak"}];return[a,i]}class St extends mt{constructor(t){super();gt(this,t,$t,Tt,pt,{})}}export{St as default};
