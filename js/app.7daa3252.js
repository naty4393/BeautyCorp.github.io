(function(e){function n(n){for(var r,o,s=n[0],c=n[1],l=n[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({home:"home","login~register~reset":"login~register~reset",login:"login",register:"register",reset:"reset",products:"products"}[e]||e)+"."+{home:"a9e2917d","login~register~reset":"8b46caa2",login:"cdead7a1",register:"1d03f484",reset:"4f6ff369",products:"8a8c005e"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={home:1,"login~register~reset":1,login:1,register:1,reset:1,products:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({home:"home","login~register~reset":"login~register~reset",login:"login",register:"register",reset:"reset",products:"products"}[e]||e)+"."+{home:"22b930ad","login~register~reset":"d4ed6e64",login:"03af9c2b",register:"0fc35619",reset:"c9bd9d17",products:"c145ab09"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),t(a)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(p);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var p=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1f68":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),o=t("4989"),i=t.n(o),a=(t("1f68"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),s=[],c={},l=c,u=(t("5c0b"),t("2877")),d=Object(u["a"])(l,a,s,!1,null,null,null),p=d.exports,f=t("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var m=t("8c4f");r["a"].use(m["a"]);var g=[{path:"/home",name:"Home",component:function(){return t.e("home").then(t.bind(null,"792c"))}},{path:"/",name:"Login",component:function(){return Promise.all([t.e("login~register~reset"),t.e("login")]).then(t.bind(null,"4823"))}},{path:"/reset",name:"Reset",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"eeb0"))}},{path:"/register",name:"Register",component:function(){return Promise.all([t.e("login~register~reset"),t.e("register")]).then(t.bind(null,"32d1"))}},{path:"/points",name:"Points",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"bec7"))}},{path:"/orders",name:"Orders",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"d6ef"))}},{path:"/clients",name:"clients",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"f4ca"))}},{path:"/products",name:"Products",component:function(){return t.e("products").then(t.bind(null,"4a29"))}},{path:"/catalogue",name:"Catalogue",component:function(){return t.e("products").then(t.bind(null,"3a51"))}},{path:"/confirm",name:"Confirm",component:function(){return t.e("products").then(t.bind(null,"fb1b"))}},{path:"/ordercli",name:"Ordercli",component:function(){return t.e("products").then(t.bind(null,"cda8"))}},{path:"/logincli",name:"LoginCli",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"85bb"))}},{path:"/datos",name:"Registercli",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"b593"))}},{path:"/home-catalogo",name:"homeCatalogo",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"4ff6"))}},{path:"/c-novedades",name:"Cnovedades",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"6c3c"))}},{path:"/C-offerts",name:"Cofferts",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"0a66"))}},{path:"/dispatches",name:"dispatches",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"8672"))}},{path:"/C-orders",name:"Corders",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"29a8"))}},{path:"/Orders-Register",name:"OrderRegister",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"9af7"))}},{path:"/Orders-RegisterD",name:"OrderRegisterD",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"45aa"))}},{path:"/Orders-RegisterS",name:"OrderRegisterS",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"a8b2"))}},{path:"/dispatch-places",name:"Dispatch",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"934e"))}},{path:"/Resumen-catalogo",name:"ResumenCatalogo",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"9a9e"))}},{path:"/Resumen-catalogoS",name:"ResumenCatalogoS",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"e198"))}},{path:"/pay-customer",name:"PayCustomer",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"1937"))}},{path:"/pay-customer-S",name:"PayCustomerS",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"e367"))}},{path:"/pay-confirm",name:"PayConfirm",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"d0e4"))}},{path:"/pay-confirmS",name:"PayConfirmS",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"ad88"))}},{path:"/shipping-day",name:"ShippingDay",component:function(){return Promise.all([t.e("login~register~reset"),t.e("reset")]).then(t.bind(null,"ba17"))}}],h=new m["a"]({mode:"history",base:"/",routes:g}),b=h,v=(t("4160"),t("a434"),t("b0c0"),t("159b"),t("5530")),y=t("2f62"),P=t("3317"),C=t("59ca"),O=(t("e71f"),{apiKey:"AIzaSyAZHUCFZ6X1v-V4IzVgoflz6fg9YETBR9M",authDomain:"beautycorp-a8012.firebaseapp.com",databaseURL:"https://beautycorp-a8012.firebaseio.com",projectId:"beautycorp-a8012",storageBucket:"beautycorp-a8012.appspot.com",messagingSenderId:"915148224057",appId:"1:915148224057:web:d176dca19cfcf5d248bfe8",measurementId:"G-5LVWV0T0C6"}),w=C["initializeApp"](O).firestore(),j=w;r["a"].use(y["a"]);var S=new y["a"].Store({state:{name:"",dataEsika:[],dataOffert:[],dataCLientes:[],dataPremios:[],dataCyzone:[],consultent:[],dataConsulter:[]},mutations:Object(v["a"])({},P["b"],{saveName:function(e,n){e.name=n},storeData:function(e,n){e.consultent.push(n)},increment:function(e,n){e.pedido.productUnit[n].count+=1},decrement:function(e,n){e.pedido.productUnit[n].count-=1},deleteProduct:function(e,n){e.pedido.productUnit.splice(n,1)},sumarTodo:function(e,n){var t=n.value;e.pedido.total=t}}),actions:{bindEsika:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataEsika",j.collection("Esika"))})),bindconsulter:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataConsulter",j.collection("consulter"))})),bindOfert:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataOffert",j.collection("Ofertas"))})),bindCLientes:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataClientes",j.collection("Clientes"))})),bindPremios:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataPremios",j.collection("Premios"))})),bindCyzone:Object(P["a"])((function(e){var n=e.bindFirestoreRef;return n("dataCyzone",j.collection("Cyzone"))})),getName:function(e,n){e.commit("saveName",n)},savedata:function(e,n){e.commit("storeData",n)},sumarTodo:function(e){var n=0;e.state.pedido.productUnit.forEach((function(e){n+=e.price*e.count}));var t={value:n};e.commit("sumarTodo",t),console.log(n)}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:S,bootstrap:i.a,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.7daa3252.js.map