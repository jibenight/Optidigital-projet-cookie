/*! js-cookie v3.0.1 | MIT */function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var t=function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(o[a]=n.read(c,a),e===a)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),n=t;const o=document.getElementById("cookie-pane"),r=document.getElementById("cancel"),i=document.getElementById("valide"),c=document.getElementById("cookie-1"),a=document.getElementById("cookie-2"),d=n.get("Numerama");(n.get("Google-rubicon")||d)&&(o.style.display="none"),r.addEventListener("click",(()=>{s("#cookie-pane","fadeOut"),setTimeout((()=>{o.style.display="none"}),1e3)})),i.addEventListener("click",(()=>{c.checked&&a.checked&&(s("#cookie-pane","fadeOut"),setTimeout((()=>{o.style.display="none"}),1e3)),c.checked&&n.set("Numerama","true",{expires:30,path:"http://127.0.0.1:5500/src/index.html"}),a.checked&&n.set("Google-rubicon","true",{expires:30,path:"http://127.0.0.1:5500/src/index.html"})}));const s=(e,t,n="animate__")=>new Promise(((o,r)=>{const i=`${n}${t}`,c=document.querySelector(e);c.classList.add(`${n}animated`,i),c.addEventListener("animationend",(function(e){e.stopPropagation(),c.classList.remove(`${n}animated`,i),o("Animation ended")}),{once:!0})}));s("#cookie-pane","fadeIn");
//# sourceMappingURL=index.a4801f7d.js.map