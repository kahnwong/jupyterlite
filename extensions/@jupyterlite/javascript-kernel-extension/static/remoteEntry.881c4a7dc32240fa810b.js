var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,s,d,f,c,p,h,v,b,m,y,g,j,w,k={986:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(671),t.e(517),t.e(568)]).then((()=>()=>t(568))),"./extension":()=>Promise.all([t.e(671),t.e(517),t.e(568)]).then((()=>()=>t(568)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},P={};function S(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={exports:{}};return k[e].call(t.exports,t,t.exports,S),t.exports}S.m=k,S.c=P,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{102:"c877ef340ee478be48c0",290:"70fee48cbfb0a943f851",322:"653000e2881161e5f865",441:"4368412449ba90ea9225",517:"21a7b15c0ddb049c062d",526:"d5312df4c55fd57dbce5",568:"b82c621d3e07860b80aa",671:"11d0402aaed2182a5985",866:"1ce3c77b50c9eb671961"}[e]+".js?v="+{102:"c877ef340ee478be48c0",290:"70fee48cbfb0a943f851",322:"653000e2881161e5f865",441:"4368412449ba90ea9225",517:"21a7b15c0ddb049c062d",526:"d5312df4c55fd57dbce5",568:"b82c621d3e07860b80aa",671:"11d0402aaed2182a5985",866:"1ce3c77b50c9eb671961"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlite/javascript-kernel-extension:",S.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],i="@jupyterlite/javascript-kernel-extension",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@jupyterlite/javascript-kernel-extension","0.1.0-beta.21",(()=>Promise.all([S.e(671),S.e(517),S.e(568)]).then((()=>()=>S(568))))),l("@jupyterlite/javascript-kernel","0.1.0-beta.21",(()=>Promise.all([S.e(526),S.e(671),S.e(517),S.e(290)]).then((()=>()=>S(290))))),l("@jupyterlite/kernel","0.1.0-beta.21",(()=>Promise.all([S.e(441),S.e(526),S.e(671),S.e(102)]).then((()=>()=>S(102)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",d=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,a,n)),h(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=(e,r,t,n)=>{var o=e[t];return"No satisfying version ("+a(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(c(e,r,t,n))},h=e=>(e.loaded=1,e.get()),b=(v=e=>function(r,t,n,a){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,n,a)):e(r,S.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||p(r,e,t,n)||l(r,t))))),m=v(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),y=v(((e,r,t,n,a)=>{var o=r&&S.o(r,t)&&f(r,t,n);return o?h(o):a()})),g={},j={671:()=>m("default","@jupyterlab/coreutils",[1,5,5,3]),517:()=>y("default","@jupyterlite/kernel",[2,0,1,0,,"beta",21],(()=>Promise.all([S.e(441),S.e(526),S.e(102)]).then((()=>()=>S(102))))),628:()=>y("default","@jupyterlite/javascript-kernel",[2,0,1,0,,"beta",21],(()=>Promise.all([S.e(526),S.e(322)]).then((()=>()=>S(290))))),526:()=>m("default","@lumino/coreutils",[1,1,11,0]),840:()=>m("default","@lumino/signaling",[1,1,10,0]),878:()=>m("default","@jupyterlab/services",[1,6,5,3]),911:()=>b("default","@jupyterlab/observables",[1,4,5,3])},w={102:[840,878,911],517:[517],526:[526],568:[628],671:[671]},S.f.consumes=(e,r)=>{S.o(w,e)&&w[e].forEach((e=>{if(S.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete g[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var a=j[e]();a.then?r.push(g[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{S.b=document.baseURI||self.location.href;var e={406:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(517|526|671)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=S.p+S.u(r),i=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);l&&l(S)}for(r&&r(t);u<o.length;u++)a=o[u],S.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_jupyterlite_javascript_kernel_extension=self.webpackChunk_jupyterlite_javascript_kernel_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x=S(986);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/javascript-kernel-extension"]=x})();