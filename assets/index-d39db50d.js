var cr=Object.defineProperty,lr=Object.defineProperties;var dr=Object.getOwnPropertyDescriptors;var ct=Object.getOwnPropertySymbols;var ur=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable;var Le=(e,t,r)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))ur.call(t,r)&&Le(e,r,t[r]);if(ct)for(var r of ct(t))fr.call(t,r)&&Le(e,r,t[r]);return e},lt=(e,t)=>lr(e,dr(t));var hr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var M=(e,t,r)=>(Le(e,typeof t!="symbol"?t+"":t,r),r);var ce=(e,t,r)=>new Promise((i,n)=>{var a=l=>{try{s(r.next(l))}catch(d){n(d)}},o=l=>{try{s(r.throw(l))}catch(d){n(d)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as f,b as dt,a as mr,R as At,d as pr}from"./vendor-ef013e4e.js";import{J as gr,A as yr}from"./animations-d97477bb.js";import{I as br,G as wr,p as It}from"./gallery-1bdcb658.js";var Ra=hr(sr=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Pt={exports:{}},we={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=f,xr=Symbol.for("react.element"),Sr=Symbol.for("react.fragment"),kr=Object.prototype.hasOwnProperty,Er=vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cr={key:!0,ref:!0,__self:!0,__source:!0};function Mt(e,t,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)kr.call(t,i)&&!Cr.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:xr,type:e,key:a,ref:o,props:n,_owner:Er.current}}we.Fragment=Sr;we.jsx=Mt;we.jsxs=Mt;Pt.exports=we;var ne=Pt.exports;function Tr(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ar(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ir=function(){function e(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ar(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Tr(n);try{a.insertRule(i,a.cssRules.length)}catch(o){}}else n.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),L="-ms-",ge="-moz-",x="-webkit-",Ot="comm",Ke="rule",Je="decl",Pr="@import",_t="@keyframes",Mr="@layer",Or=Math.abs,ve=String.fromCharCode,_r=Object.assign;function $r(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function $t(e){return e.trim()}function Rr(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,r){return e.replace(t,r)}function We(e,t){return e.indexOf(t)}function R(e,t){return e.charCodeAt(t)|0}function ie(e,t,r){return e.slice(t,r)}function D(e){return e.length}function Qe(e){return e.length}function le(e,t){return t.push(e),e}function Nr(e,t){return e.map(t).join("")}var xe=1,Q=1,Rt=0,F=0,P=0,ee="";function Se(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:xe,column:Q,length:o,return:""}}function re(e,t){return _r(Se("",null,null,"",null,null,0),e,{length:-e.length},t)}function Lr(){return P}function Fr(){return P=F>0?R(ee,--F):0,Q--,P===10&&(Q=1,xe--),P}function z(){return P=F<Rt?R(ee,F++):0,Q++,P===10&&(Q=1,xe++),P}function V(){return R(ee,F)}function he(){return F}function se(e,t){return ie(ee,e,t)}function ae(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nt(e){return xe=Q=1,Rt=D(ee=e),F=0,[]}function Lt(e){return ee="",e}function me(e){return $t(se(F-1,De(e===91?e+2:e===40?e+1:e)))}function zr(e){for(;(P=V())&&P<33;)z();return ae(e)>2||ae(P)>3?"":" "}function jr(e,t){for(;--t&&z()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return se(e,he()+(t<6&&V()==32&&z()==32))}function De(e){for(;z();)switch(P){case e:return F;case 34:case 39:e!==34&&e!==39&&De(P);break;case 40:e===41&&De(e);break;case 92:z();break}return F}function Wr(e,t){for(;z()&&e+P!==47+10;)if(e+P===42+42&&V()===47)break;return"/*"+se(t,F-1)+"*"+ve(e===47?e:z())}function Dr(e){for(;!ae(V());)z();return se(e,F)}function qr(e){return Lt(pe("",null,null,null,[""],e=Nt(e),0,[0],e))}function pe(e,t,r,i,n,a,o,s,l){for(var d=0,h=0,g=o,I=0,A=0,y=0,p=1,b=1,v=1,k=0,C="",W=n,_=a,N=i,m=C;b;)switch(y=k,k=z()){case 40:if(y!=108&&R(m,g-1)==58){We(m+=S(me(k),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:m+=me(k);break;case 9:case 10:case 13:case 32:m+=zr(y);break;case 92:m+=jr(he()-1,7);continue;case 47:switch(V()){case 42:case 47:le(Vr(Wr(z(),he()),t,r),l);break;default:m+="/"}break;case 123*p:s[d++]=D(m)*v;case 125*p:case 59:case 0:switch(k){case 0:case 125:b=0;case 59+h:v==-1&&(m=S(m,/\f/g,"")),A>0&&D(m)-g&&le(A>32?ft(m+";",i,r,g-1):ft(S(m," ","")+";",i,r,g-2),l);break;case 59:m+=";";default:if(le(N=ut(m,t,r,d,h,n,s,C,W=[],_=[],g),a),k===123)if(h===0)pe(m,t,N,N,W,a,g,s,_);else switch(I===99&&R(m,3)===110?100:I){case 100:case 108:case 109:case 115:pe(e,N,N,i&&le(ut(e,N,N,0,0,n,s,C,n,W=[],g),_),n,_,g,s,i?W:_);break;default:pe(m,N,N,N,[""],_,0,s,_)}}d=h=A=0,p=v=1,C=m="",g=o;break;case 58:g=1+D(m),A=y;default:if(p<1){if(k==123)--p;else if(k==125&&p++==0&&Fr()==125)continue}switch(m+=ve(k),k*p){case 38:v=h>0?1:(m+="\f",-1);break;case 44:s[d++]=(D(m)-1)*v,v=1;break;case 64:V()===45&&(m+=me(z())),I=V(),h=g=D(C=m+=Dr(he())),k++;break;case 45:y===45&&D(m)==2&&(p=0)}}return a}function ut(e,t,r,i,n,a,o,s,l,d,h){for(var g=n-1,I=n===0?a:[""],A=Qe(I),y=0,p=0,b=0;y<i;++y)for(var v=0,k=ie(e,g+1,g=Or(p=o[y])),C=e;v<A;++v)(C=$t(p>0?I[v]+" "+k:S(k,/&\f/g,I[v])))&&(l[b++]=C);return Se(e,t,r,n===0?Ke:s,l,d,h)}function Vr(e,t,r){return Se(e,t,r,Ot,ve(Lr()),ie(e,2,-2),0)}function ft(e,t,r,i){return Se(e,t,r,Je,ie(e,0,i),ie(e,i+1,-1),i)}function J(e,t){for(var r="",i=Qe(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function Br(e,t,r,i){switch(e.type){case Mr:if(e.children.length)break;case Pr:case Je:return e.return=e.return||e.value;case Ot:return"";case _t:return e.return=e.value+"{"+J(e.children,i)+"}";case Ke:e.value=e.props.join(",")}return D(r=J(e.children,i))?e.return=e.value+"{"+r+"}":""}function Hr(e){var t=Qe(e);return function(r,i,n,a){for(var o="",s=0;s<t;s++)o+=e[s](r,i,n,a)||"";return o}}function Ur(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ft(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Gr=function(t,r,i){for(var n=0,a=0;n=a,a=V(),n===38&&a===12&&(r[i]=1),!ae(a);)z();return se(t,F)},Yr=function(t,r){var i=-1,n=44;do switch(ae(n)){case 0:n===38&&V()===12&&(r[i]=1),t[i]+=Gr(F-1,r,i);break;case 2:t[i]+=me(n);break;case 4:if(n===44){t[++i]=V()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=ve(n)}while(n=z());return t},Xr=function(t,r){return Lt(Yr(Nt(t),r))},ht=new WeakMap,Zr=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,n=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!ht.get(i))&&!n){ht.set(t,!0);for(var a=[],o=Xr(r,a),s=i.props,l=0,d=0;l<o.length;l++)for(var h=0;h<s.length;h++,d++)t.props[d]=a[l]?o[l].replace(/&\f/g,s[h]):s[h]+" "+o[l]}}},Kr=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function zt(e,t){switch($r(e,t)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+ge+e+L+e+e;case 6828:case 4268:return x+e+L+e+e;case 6165:return x+e+L+"flex-"+e+e;case 5187:return x+e+S(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return x+e+L+"flex-item-"+S(e,/flex-|-self/,"")+e;case 4675:return x+e+L+"flex-line-pack"+S(e,/align-content|flex-|-self/,"")+e;case 5548:return x+e+L+S(e,"shrink","negative")+e;case 5292:return x+e+L+S(e,"basis","preferred-size")+e;case 6060:return x+"box-"+S(e,"-grow","")+x+e+L+S(e,"grow","positive")+e;case 4554:return x+S(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+ge+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~We(e,"stretch")?zt(S(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(R(e,t+1)!==115)break;case 6444:switch(R(e,D(e)-3-(~We(e,"!important")&&10))){case 107:return S(e,":",":"+x)+e;case 101:return S(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+x+(R(e,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(R(e,t+11)){case 114:return x+e+L+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+L+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+L+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return x+e+L+e+e}return e}var Jr=function(t,r,i,n){if(t.length>-1&&!t.return)switch(t.type){case Je:t.return=zt(t.value,t.length);break;case _t:return J([re(t,{value:S(t.value,"@","@"+x)})],n);case Ke:if(t.length)return Nr(t.props,function(a){switch(Rr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([re(t,{props:[S(a,/:(read-\w+)/,":"+ge+"$1")]})],n);case"::placeholder":return J([re(t,{props:[S(a,/:(plac\w+)/,":"+x+"input-$1")]}),re(t,{props:[S(a,/:(plac\w+)/,":"+ge+"$1")]}),re(t,{props:[S(a,/:(plac\w+)/,L+"input-$1")]})],n)}return""})}},Qr=[Jr],en=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(p){var b=p.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var n=t.stylisPlugins||Qr,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(p){for(var b=p.getAttribute("data-emotion").split(" "),v=1;v<b.length;v++)a[b[v]]=!0;s.push(p)});var l,d=[Zr,Kr];{var h,g=[Br,Ur(function(p){h.insert(p)})],I=Hr(d.concat(n,g)),A=function(b){return J(qr(b),I)};l=function(b,v,k,C){h=k,A(b?b+"{"+v.styles+"}":v.styles),C&&(y.inserted[v.name]=!0)}}var y={key:r,sheet:new Ir({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return y.sheet.hydrate(s),y};function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},qe.apply(this,arguments)}var jt={exports:{}},E={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,et=O?Symbol.for("react.element"):60103,tt=O?Symbol.for("react.portal"):60106,ke=O?Symbol.for("react.fragment"):60107,Ee=O?Symbol.for("react.strict_mode"):60108,Ce=O?Symbol.for("react.profiler"):60114,Te=O?Symbol.for("react.provider"):60109,Ae=O?Symbol.for("react.context"):60110,rt=O?Symbol.for("react.async_mode"):60111,Ie=O?Symbol.for("react.concurrent_mode"):60111,Pe=O?Symbol.for("react.forward_ref"):60112,Me=O?Symbol.for("react.suspense"):60113,tn=O?Symbol.for("react.suspense_list"):60120,Oe=O?Symbol.for("react.memo"):60115,_e=O?Symbol.for("react.lazy"):60116,rn=O?Symbol.for("react.block"):60121,nn=O?Symbol.for("react.fundamental"):60117,an=O?Symbol.for("react.responder"):60118,on=O?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case et:switch(e=e.type,e){case rt:case Ie:case ke:case Ce:case Ee:case Me:return e;default:switch(e=e&&e.$$typeof,e){case Ae:case Pe:case _e:case Oe:case Te:return e;default:return t}}case tt:return t}}}function Wt(e){return j(e)===Ie}E.AsyncMode=rt;E.ConcurrentMode=Ie;E.ContextConsumer=Ae;E.ContextProvider=Te;E.Element=et;E.ForwardRef=Pe;E.Fragment=ke;E.Lazy=_e;E.Memo=Oe;E.Portal=tt;E.Profiler=Ce;E.StrictMode=Ee;E.Suspense=Me;E.isAsyncMode=function(e){return Wt(e)||j(e)===rt};E.isConcurrentMode=Wt;E.isContextConsumer=function(e){return j(e)===Ae};E.isContextProvider=function(e){return j(e)===Te};E.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===et};E.isForwardRef=function(e){return j(e)===Pe};E.isFragment=function(e){return j(e)===ke};E.isLazy=function(e){return j(e)===_e};E.isMemo=function(e){return j(e)===Oe};E.isPortal=function(e){return j(e)===tt};E.isProfiler=function(e){return j(e)===Ce};E.isStrictMode=function(e){return j(e)===Ee};E.isSuspense=function(e){return j(e)===Me};E.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ke||e===Ie||e===Ce||e===Ee||e===Me||e===tn||typeof e=="object"&&e!==null&&(e.$$typeof===_e||e.$$typeof===Oe||e.$$typeof===Te||e.$$typeof===Ae||e.$$typeof===Pe||e.$$typeof===nn||e.$$typeof===an||e.$$typeof===on||e.$$typeof===rn)};E.typeOf=j;jt.exports=E;var sn=jt.exports,Dt=sn,cn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qt={};qt[Dt.ForwardRef]=cn;qt[Dt.Memo]=ln;var dn=!0;function Vt(e,t,r){var i="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):i+=n+" "}),i}var nt=function(t,r,i){var n=t.key+"-"+r.name;(i===!1||dn===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Bt=function(t,r,i){nt(t,r,i);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+n:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function un(e){for(var t=0,r,i=0,n=e.length;n>=4;++i,n-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var fn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hn=/[A-Z]|^ms/g,mn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ht=function(t){return t.charCodeAt(1)===45},mt=function(t){return t!=null&&typeof t!="boolean"},Fe=Ft(function(e){return Ht(e)?e:e.replace(hn,"-$&").toLowerCase()}),pt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(mn,function(i,n,a){return q={name:n,styles:a,next:q},n})}return fn[t]!==1&&!Ht(t)&&typeof r=="number"&&r!==0?r+"px":r};function oe(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return q={name:r.name,styles:r.styles,next:q},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)q={name:i.name,styles:i.styles,next:q},i=i.next;var n=r.styles+";";return n}return pn(e,t,r)}case"function":{if(e!==void 0){var a=q,o=r(e);return q=a,oe(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function pn(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=oe(e,t,r[n])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?i+=a+"{"+t[o]+"}":mt(o)&&(i+=Fe(a)+":"+pt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)mt(o[s])&&(i+=Fe(a)+":"+pt(a,o[s])+";");else{var l=oe(e,t,o);switch(a){case"animation":case"animationName":{i+=Fe(a)+":"+l+";";break}default:i+=a+"{"+l+"}"}}}return i}var gt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,q,it=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";q=void 0;var o=t[0];o==null||o.raw===void 0?(n=!1,a+=oe(i,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=oe(i,r,t[s]),n&&(a+=o[s]);gt.lastIndex=0;for(var l="",d;(d=gt.exec(a))!==null;)l+="-"+d[1];var h=un(a)+l;return{name:h,styles:a,next:q}},gn=function(t){return t()},yn=dt["useInsertionEffect"]?dt["useInsertionEffect"]:!1,Ut=yn||gn,$e={}.hasOwnProperty,Gt=f.createContext(typeof HTMLElement!="undefined"?en({key:"css"}):null);Gt.Provider;var Yt=function(t){return f.forwardRef(function(r,i){var n=f.useContext(Gt);return t(r,n,i)})},Xt=f.createContext({}),Ve="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Zt=function(t,r){var i={};for(var n in r)$e.call(r,n)&&(i[n]=r[n]);return i[Ve]=t,i},bn=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return nt(r,i,n),Ut(function(){return Bt(r,i,n)}),null},wn=Yt(function(e,t,r){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var n=e[Ve],a=[i],o="";typeof e.className=="string"?o=Vt(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=it(a,void 0,f.useContext(Xt));o+=t.key+"-"+s.name;var l={};for(var d in e)$e.call(e,d)&&d!=="css"&&d!==Ve&&(l[d]=e[d]);return l.ref=r,l.className=o,f.createElement(f.Fragment,null,f.createElement(bn,{cache:t,serialized:s,isStringTag:typeof n=="string"}),f.createElement(n,l))}),Kt=wn,Jt=ne.Fragment;function c(e,t,r){return $e.call(t,"css")?ne.jsx(Kt,Zt(e,t),r):ne.jsx(e,t,r)}function w(e,t,r){return $e.call(t,"css")?ne.jsxs(Kt,Zt(e,t),r):ne.jsxs(e,t,r)}var Be={},yt=mr;Be.createRoot=yt.createRoot,Be.hydrateRoot=yt.hydrateRoot;const vn=.3,xn=.1,Sn=.1,kn=.5,En=.2,Cn=.5,bt=.5,Tn=.02,ze=200,An=50,In=5e3;function Pn(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function Mn(e){const t=Pn(),r=Math.min(e,An),i=window.innerWidth*window.innerHeight,n=400*800,a=Math.min(1,i/n);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const be=class be{constructor(t,r,i,n){M(this,"x",0);M(this,"y",0);M(this,"size",0);M(this,"speed",0);M(this,"angle",0);M(this,"spin",0);M(this,"canvas");M(this,"ctx");M(this,"color");M(this,"windX",0);M(this,"windY",0);M(this,"windDecay",.96);M(this,"lastWindApplied",0);M(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=n,this.reset(r,i)}reset(t,r){const n=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*n,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const i=be.tempPoint;i.x=this.x-r.x,i.y=this.y-r.y;const n=i.x*i.x+i.y*i.y,a=ze*ze;if(n<a){const s=1-Math.sqrt(n)/ze,l=t.x*(Sn+Math.random()*kn)*s,d=t.y*(En+Math.random()*Cn)*s;this.windX=this.windX*this.windDecay+l*bt,this.windY=this.windY*this.windDecay+d*bt,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*Tn;const t=50,r=-t,i=this.canvas.width+t,n=this.canvas.height+t;(this.y>n||this.x<r||this.x>i)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4&&(this.ctx.strokeStyle="rgba(255, 182, 193, 0.3)",this.ctx.lineWidth=.5,this.ctx.stroke()),this.ctx.restore()}deactivate(){this.isActive=!1}};M(be,"tempPoint",{x:0,y:0});let He=be;function On({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:i="rgba(255, 182, 193, 0.8)"}={}){const n=document.createElement("canvas");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.zIndex="1",n.style.overflow="hidden",document.body.appendChild(n);const a=n.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=Mn(e),s=Array.from({length:o},()=>new He(n,t,r,i));function l(){n.width=window.innerWidth,n.height=window.innerHeight,s.forEach(m=>{m.reset(t,r),m.y=Math.random()*n.height-n.height*.5})}const d={x:0,y:0},h=.95;let g=!1,I={x:0,y:0},A=null,y={x:0,y:0},p,b=Date.now(),v=!1;const k=16;function C(m){g=!0;const $="touches"in m?m.touches[0]:m;I={x:$.clientX,y:$.clientY}}function W(m){if(!g||v)return;v=!0,setTimeout(()=>{v=!1},k);const $="touches"in m?m.touches[0]:m,Z=$.clientX-I.x,K=$.clientY-I.y;d.x=Z*vn,d.y=K*xn,I={x:$.clientX,y:$.clientY}}function _(m){g=!1;const $="touches"in m&&m.changedTouches?m.changedTouches[0]:m;A={x:$.clientX,y:$.clientY},y=U({},d)}window.addEventListener("mousedown",C,{passive:!0}),window.addEventListener("mousemove",W,{passive:!0}),window.addEventListener("mouseup",_,{passive:!0}),window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",W,{passive:!0}),window.addEventListener("touchend",_,{passive:!0});function N(){const m=Date.now();if(m-b>In){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch($){}b=m}a&&a.clearRect(0,0,n.width,n.height);for(const $ of s)A&&(Math.abs(y.x)>.01||Math.abs(y.y)>.01)&&$.applyWind(y,A),$.update(),$.draw();g||(d.x*=h,d.y*=h,Math.abs(d.x)<.01&&(d.x=0),Math.abs(d.y)<.01&&(d.y=0),y.x*=h,y.y*=h,Math.abs(y.x)<.01&&(y.x=0),Math.abs(y.y)<.01&&(y.y=0),y.x===0&&y.y===0&&(A=null)),p=requestAnimationFrame(N)}return window.addEventListener("resize",l),l(),N(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousedown",C),window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",_),window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",W),window.removeEventListener("touchend",_),window.removeEventListener("resize",l),s.forEach(m=>m.deactivate()),n.parentNode&&n.parentNode.removeChild(n)}}const _n="/mobile-wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var $n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rn=Ft(function(e){return $n.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Nn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return it(t)}var Qt=function(){var t=Nn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ln=Rn,Fn=function(t){return t!=="theme"},wt=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Ln:Fn},vt=function(t,r,i){var n;if(r){var a=r.shouldForwardProp;n=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof n!="function"&&i&&(n=t.__emotion_forwardProp),n},zn=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return nt(r,i,n),Ut(function(){return Bt(r,i,n)}),null},jn=function e(t,r){var i=t.__emotion_real===t,n=i&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=vt(t,r,i),l=s||wt(n),d=!l("as");return function(){var h=arguments,g=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&g.push("label:"+a+";"),h[0]==null||h[0].raw===void 0)g.push.apply(g,h);else{g.push(h[0][0]);for(var I=h.length,A=1;A<I;A++)g.push(h[A],h[0][A])}var y=Yt(function(p,b,v){var k=d&&p.as||n,C="",W=[],_=p;if(p.theme==null){_={};for(var N in p)_[N]=p[N];_.theme=f.useContext(Xt)}typeof p.className=="string"?C=Vt(b.registered,W,p.className):p.className!=null&&(C=p.className+" ");var m=it(g.concat(W),b.registered,_);C+=b.key+"-"+m.name,o!==void 0&&(C+=" "+o);var $=d&&s===void 0?wt(k):l,Z={};for(var K in p)d&&K==="as"||$(K)&&(Z[K]=p[K]);return Z.className=C,Z.ref=v,f.createElement(f.Fragment,null,f.createElement(zn,{cache:b,serialized:m,isStringTag:typeof k=="string"}),f.createElement(k,Z))});return y.displayName=a!==void 0?a:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=n,y.__emotion_styles=g,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(p,b){return e(p,qe({},r,b,{shouldForwardProp:vt(y,b,!0)})).apply(void 0,g)},y}},Wn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],u=jn.bind();Wn.forEach(function(e){u[e]=u(e)});const G=u.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
`,Dn=u.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,Ue=u.p`
  font-family: HSSanTokki20-Regular, serif;
  line-height: 1;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`,qn=u.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Ge=u.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,B=u.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`,Vn=()=>c(Bn,{children:c(Hn,{src:"https://www.youtube-nocookie.com/embed/_GQr5ciW8JI?si=hucyuZGTTEEGYthF&",title:"YouTube Live Stream",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Bn=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto; /* Updated margin to align with the rest of the site */
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 2px solid #e88ca6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`,Hn=u.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`,Un={title:`Sakyawira 💍 Debbie
We are getting married!`,message:`To our dear ones who have always warmed us with their love.
We invite you to share the precious moment of our first step as a married couple.

You'll find all the details about when and where below. And if you can't make it in person, no worries—there will be a livestream link so you can celebrate with us from anywhere!`,host:{groom:{name:"Sakyawira Ruslim",relation:"",parents:[]},bride:{name:"Debbie Hartono",relation:"",parents:[]},groomFather:{name:"Djajadi Ruslim & Silvi Oktavia Wijaya",relation:"Son of",parents:[]},brideFather:{name:"Aris Budiman Hartono & Karuniawati Tjahjadi",relation:"Daughter of ",parents:[]}},eventDetail:"August 16, 2025 (Saturday) 15:30"},Gn=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],Yn={address1:"Cox's Bay Pavillion Hall",address2:"40 Kingsley Street, Westmere, Auckland 1022, New Zealand",googleMap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3192.578970161224!2d174.7206804!3d-36.8525583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47ad31af6991%3A0xce879c376d6703ba!2sCox's%20Bay%20Pavillion%20Hall!5e0!3m2!1sen!2snz!4v1749964637684!5m2!1sen!2snz",lat:-36.8525583,lon:174.7206804},Xn=[{title:"📅 Time",desc:"August 16, 2025 (Saturday) 15:30 NZT"},{title:"📍 Place",desc:"Cox's Bay Pavillion Hall, 40 Kingsley Street, Westmere, Auckland 1022, New Zealand."}],Zn=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],te={greeting:Un,hostInfo:Gn,mapInfo:Yn,locationInfo:Xn,emojis:Zn},Kn=e=>f.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),f.createElement("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"})),Jn="/mobile-wedding-invitation/assets/images/kakaopay-b0bb60b9.png",Qn="/mobile-wedding-invitation/assets/images/toss-665116ae.png",ei=({name:e,relation:t,bank:r,account:i,kakaopayAccount:n,tossAccount:a})=>w(ti,{children:[w(ri,{children:[c(ni,{children:t}),c(ii,{children:e})]}),w(ai,{children:[w(oi,{children:[r," ",i]}),c(si,{onClick:()=>{navigator.clipboard.writeText(i).then(()=>{alert("Account number has been copied.😉😉")},()=>{alert("Failed to copy account number.🥲🥲")})},children:c(Kn,{fill:"#dfdfdf"})})]}),w(ci,{children:[n&&c(xt,{href:n,target:"_blank",rel:"noreferrer",children:c(li,{src:Jn,alt:"kakaopay"})}),a&&c(xt,{href:a,target:"_blank",rel:"noreferrer",children:c(di,{src:Qn,alt:"toss"})})]})]}),ti=u.div`
  font-family: 'SUITE-Regular';
  padding: 20px;
  margin: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`,ri=u.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`,ni=u.span`
  color: #44484d;
`,ii=u.span`
  font-size: 1rem
`,ai=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oi=u.div``,si=u.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`,ci=u.div`
  display: flex;
  width: 100%;
  gap: 2px;
`,xt=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`.withComponent("a"),li=u.img`
  width: 50px;
`,di=u.img`
  width: 70px;
`,ui=e=>f.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),f.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),fi=({title:e,children:t})=>{const[r,i]=f.useState(!1);return w(hi,{children:[w(mi,{isActive:r,onClick:()=>{i(!r)},children:[c("p",{children:e}),c("span",{children:c(ui,{fill:"#e88ca6"})})]}),r&&c(pi,{children:t})]})},hi=u.div`
  font-family: HSSanTokki20-Regular, serif;
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`,mi=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: #44484d;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${e=>e.isActive?"rotate(180deg)":void 0};
  }
`,pi=u.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
`,gi=()=>{const{hostInfo:e}=te;return c(yi,{children:e.map(t=>c(fi,{title:t.host,children:t.accountInfo.map(r=>c(ei,{name:r.name,relation:r.relation,bank:r.bank,account:r.account,kakaopayAccount:r.kakaopayAccount,tossAccount:r.tossAccount},r.name))},t.host))})},yi=u.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`,bi=u.div`
  border: 30px solid transparent; /* Initial value for the border */
  border-image-source: url('./background.png'); /* Set the image path */
  border-image-slice: 30% 49%; /* Set the size of the image */
  border-image-width: 280px; /* Set the width of the border image */
  background-color: #ffffff;
  width: 85vw;
  margin: 0 auto;

  @media screen and (min-width: 500px) {
      width: 500px;
  }
`,wi=e=>f.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),f.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),vi=e=>f.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),f.createElement("path",{d:"M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z"})),xi=e=>f.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),f.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),je=u.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
`.withComponent("a"),Si=({isVisible:e})=>{const{emojis:t}=te,r=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{alert("Address copied successfully. 😉😉")},()=>{alert("Failed to copy the address. 🥲🥲")})},i=()=>{n.addConfetti({emojis:t})},n=new gr;return w(Ei,{isVisible:e,children:[c(je,{onClick:i,children:c(wi,{fill:"#e88ca6"})}),w(je,{onClick:r,children:[c(vi,{fill:"#e88ca6"}),"Share"]}),w(je,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[c(xi,{fill:"#e88ca6"}),"Scroll Up"]})]})},ki=Qt`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Ei=u.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${e=>e.isVisible?"flex":"none"};
  animation: ${e=>e.isVisible?ki:"none"} 0.5s ease-out;
`,Ci="/mobile-wedding-invitation/assets/images/01-15be4fbb.jpg",Ti="/mobile-wedding-invitation/assets/images/02-d5068223.jpg",Ai="/mobile-wedding-invitation/assets/images/03-2fa304fa.jpg",Ii="/mobile-wedding-invitation/assets/images/04-1b00c50a.jpg",er="/mobile-wedding-invitation/assets/images/05-369820ba.jpg",Pi="/mobile-wedding-invitation/assets/images/06-10e36295.jpg",Mi="/mobile-wedding-invitation/assets/images/07-c0b8fca0.jpg",Oi="/mobile-wedding-invitation/assets/images/08-17704c28.jpg",_i="/mobile-wedding-invitation/assets/images/09-0a42ab04.jpg",$i="/mobile-wedding-invitation/assets/images/10-4774c332.jpg",Ri="/mobile-wedding-invitation/assets/images/11-c97ae3e8.jpg",Ni="/mobile-wedding-invitation/assets/images/12-3be7f6a8.jpg",H=[{alt:"image01",source:Ci,width:640,height:960},{alt:"image02",source:Ti,width:640,height:960},{alt:"image03",source:Ai,width:640,height:960},{alt:"image04",source:Ii,width:640,height:960},{alt:"image05",source:er,width:640,height:960},{alt:"image06",source:Pi,width:640,height:960},{alt:"image07",source:Mi,width:640,height:960},{alt:"image08",source:Oi,width:640,height:960},{alt:"image09",source:_i,width:640,height:960},{alt:"image10",source:$i,width:640,height:960},{alt:"image11",source:Ri,width:640,height:960},{alt:"image12",source:Ni,width:640,height:960}],Li=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?H.slice(0,8):H;return c(wr,{children:c("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((i,n)=>c(br,{cropped:!0,original:i.source,thumbnail:i.source,width:i.width,height:i.height,children:({ref:a,open:o})=>c("img",{style:e,alt:i.alt,src:i.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},n))})})},Fi=()=>{const[e,t]=f.useState(!1);return w(zi,{children:[w(ji,{isMoreView:e,children:[!e&&c(Wi,{}),c(Li,{})]}),!e&&c(Di,{onClick:()=>{t(!e)},children:"Expand"})]})},zi=u.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ji=u.div`
  position: relative;
  max-height: ${e=>e.isMoreView?"":"60vh"}; /* When isMoreView is true, no height limit; when false, limit to 195px */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Wi=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`,Di=u.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;class qi{constructor(){M(this,"formUrl");M(this,"nameFieldId");M(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdqh6LYuVn7Dqd7UgOLdgL3NS8aARLvi_P-HhXKSeBqfRGdSw/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return ce(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const i=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",i.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return ce(this,null,function*(){try{const t="1bhjyVtpmLeHN4fCaVWLUnrw1oBSYVyWWYiGeG-AbmjU",r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,i=yield fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return(yield i.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[l,d,h]=s.split(",").map(g=>g.replace(/"/g,"").trim());return{name:d||"",message:h||"",timestamp:l||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const Vi=new qi,Bi=()=>{const[e,t]=f.useState(""),[r,i]=f.useState(""),[n,a]=f.useState(!1);return w(Hi,{onSubmit:s=>ce(sr,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield Vi.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),i(""),alert("Thank you for your message! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(l){console.error("Error submitting message:",l),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[c(Ui,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),c(Gi,{placeholder:"Message",value:r,onChange:s=>i(s.target.value)}),c(Yi,{type:"submit",disabled:n,children:n?"Submitting...":"Submit"})]})},Hi=u.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`,Ui=u.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`,Gi=u.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
  font-weight: 300;
`,Yi=u.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: #999;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }
`,Xi=()=>w(Zi,{children:[w(Dn,{children:["Please leave a message.",c("br",{}),"After the wedding, it will be delivered to the bride and groom."]}),c(Bi,{})]}),Zi=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,Ki=()=>{const{groom:e,bride:t,groomFather:r,brideFather:i}=te.greeting.host;return c(Jt,{children:w(Qi,{children:[c("h2",{children:"Groom"}),c(de,{person:e}),c(de,{person:r}),c("span",{role:"img","aria-label":"pink heart",children:"💗"}),c("h2",{children:"Bride"}),c(de,{person:t}),c(de,{person:i})]})})},de=({person:e})=>w(ea,{children:[e.parents&&c(Jt,{children:e.parents.map((t,r)=>w(At.Fragment,{children:[r>0&&" · ",t.name]},r))}),c(ta,{children:e.relation}),c(Ji,{children:e.name})]}),Ji=u.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #4f4f4f;
  margin-right: 5px;
  font-style: italic;
  word-break: break-word;
  hyphens: auto;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.95rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`,Qi=u.div`
  gap: 8px;
  font-family: HSSanTokki20-Regular, serif;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,ea=u.div`
  padding: 10px 8px;
  justify-content: center;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
  flex-wrap: wrap;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    padding: 8px 4px;
    gap: 4px;
    font-size: 0.95rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    padding: 6px 2px;
    gap: 3px;
    font-size: 0.9rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    padding: 4px 1px;
    gap: 2px;
    font-size: 0.85rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    padding: 4px 0px;
    gap: 2px;
    font-size: 0.8rem;
  }
`,ta=u.div`
  width: auto;
  min-width: 0;
  word-break: break-word;
  hyphens: auto;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.9rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`,ra=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=te;return f.useEffect(()=>{const i=new Date("2025-08-16T15:30:00"),n=new Date(i.getTime()+2*60*60*1e3),a=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",l=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",l)},[]),w(na,{children:[c(ia,{children:e.message}),c(Ki,{})]})},na=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,ia=u(qn)`
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  text-align: center;
  line-height: 1.5;
  
  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 8px;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.3;
    padding: 0 4px;
  }
`,aa=({src:e})=>c(oa,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),oa=u.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,sa=u.button`
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #44484d;
  text-decoration: none;
  background-color: #e6ece1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`.withComponent("a"),ca=()=>{const{mapInfo:e,locationInfo:t}=te;return w(la,{children:[w(St,{children:[c(Ue,{children:t[1].title}),c(Ge,{children:t[1].desc}),c(aa,{src:e.googleMap})]}),w(St,{children:[c(Ue,{children:t[0].title}),c(Ge,{children:t[0].desc}),c(sa,{id:"google-calendar-link",target:"_blank",href:"",rel:"noreferrer",children:"Add to Calendar"})]})]})},la=u.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,St=u.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`,tr=Qt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,da=()=>{const{greeting:e}=te,r=new URLSearchParams(window.location.search).get("name"),i=r?`Hi, ${r}! 💍 Sakya & Debbie are getting married - come celebrate! 🎉✨`:e.title;return w("div",{children:[c(ua,{src:er}),c(fa,{children:i})]})},ua=u.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding: 20px;
  animation: ${tr} 1s ease-out;
`,fa=u.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${tr} 1.2s ease-out;
`;var Re={},rr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=n(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=n(o,s));return o}function n(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(rr);var nr=rr.exports;Re.__esModule=!0;Re.default=void 0;var ha=at(f),Y=at(It),ma=at(nr);function at(e){return e&&e.__esModule?e:{default:e}}const ir=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),ha.default.createElement("div",{className:(0,ma.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},n));ir.propTypes={children:Y.default.oneOfType([Y.default.arrayOf(Y.default.node),Y.default.node]).isRequired,className:Y.default.string,animate:Y.default.bool,layout:Y.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:Y.default.string};var pa=ir;Re.default=pa;var Ne={};function Ye(){return Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ye.apply(this,arguments)}function ga(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Xe(e,t)}function Xe(e,t){return Xe=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Xe(e,t)}function ya(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Ze=new Map,ue=new WeakMap,kt=0,ar=void 0;function ba(e){ar=e}function wa(e){return e?(ue.has(e)||(kt+=1,ue.set(e,kt.toString())),ue.get(e)):"0"}function va(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?wa(e.root):e[t])}).toString()}function xa(e){var t=va(e),r=Ze.get(t);if(!r){var i=new Map,n,a=new IntersectionObserver(function(o){o.forEach(function(s){var l,d=s.isIntersecting&&n.some(function(h){return s.intersectionRatio>=h});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(l=i.get(s.target))==null||l.forEach(function(h){h(d,s)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Ze.set(t,r)}return r}function ot(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=ar),typeof window.IntersectionObserver=="undefined"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var a=xa(r),o=a.id,s=a.observer,l=a.elements,d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(l.delete(e),s.unobserve(e)),l.size===0&&(s.disconnect(),Ze.delete(o))}}var Sa=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Et(e){return typeof e.children!="function"}var ye=function(e){ga(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(a){n.node&&(n.unobserve(),!a&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=a||null,n.observeNode()},n.handleChange=function(a,o){a&&n.props.triggerOnce&&n.unobserve(),Et(n.props)||n.setState({inView:a,entry:o}),n.props.onChange&&n.props.onChange(a,o)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,a=n.threshold,o=n.root,s=n.rootMargin,l=n.trackVisibility,d=n.delay,h=n.fallbackInView;this._unobserveCb=ot(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:l,delay:d},h)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Et(this.props)){var n=this.state,a=n.inView,o=n.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,l=s.children,d=s.as,h=ya(s,Sa);return f.createElement(d||"div",Ye({ref:this.handleNode},h),l)},t}(f.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ka(e){var t=e===void 0?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,l=t.skip,d=t.initialInView,h=t.fallbackInView,g=f.useRef(),I=f.useState({inView:!!d}),A=I[0],y=I[1],p=f.useCallback(function(v){g.current!==void 0&&(g.current(),g.current=void 0),!l&&v&&(g.current=ot(v,function(k,C){y({inView:k,entry:C}),C.isIntersecting&&s&&g.current&&(g.current(),g.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:n,delay:i},h))},[Array.isArray(r)?r.toString():r,o,a,s,l,n,h,i]);f.useEffect(function(){!g.current&&A.entry&&!s&&!l&&y({inView:!!d})});var b=[p,A.inView,A.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const Ea=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:ba,observe:ot,useInView:ka},Symbol.toStringTag,{value:"Module"})),Ca=pr(Ea);Ne.__esModule=!0;Ne.default=void 0;var X=st(f),T=st(It),fe=st(nr),Ta=Ca;function st(e){return e&&e.__esModule?e:{default:e}}const or=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:n="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:l=null,onTimelineElementClick:d=null,iconStyle:h=null,id:g="",position:I="",style:A=null,textClassName:y="",intersectionObserverProps:p={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1,shadowSize:v="small"})=>X.default.createElement(Ta.InView,p,({inView:k,ref:C})=>X.default.createElement("div",{ref:C,id:g,className:(0,fe.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":I==="left","vertical-timeline-element--right":I==="right","vertical-timeline-element--no-children":e===""}),style:A},X.default.createElement(X.default.Fragment,null,X.default.createElement("span",{style:h,onClick:l,className:(0,fe.default)(s,"vertical-timeline-element-icon",`shadow-size-${v}`,{"bounce-in":k||b,"is-hidden":!(k||b)})},o),X.default.createElement("div",{style:i,onClick:d,className:(0,fe.default)(y,"vertical-timeline-element-content",{"bounce-in":k||b,"is-hidden":!(k||b)})},X.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,X.default.createElement("span",{className:(0,fe.default)(a,"vertical-timeline-element-date")},n)))));or.propTypes={children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),className:T.default.string,contentArrowStyle:T.default.shape({}),contentStyle:T.default.shape({}),date:T.default.node,dateClassName:T.default.string,icon:T.default.element,iconClassName:T.default.string,iconStyle:T.default.shape({}),iconOnClick:T.default.func,onTimelineElementClick:T.default.func,id:T.default.string,position:T.default.string,style:T.default.shape({}),textClassName:T.default.string,visible:T.default.bool,shadowSize:T.default.string,intersectionObserverProps:T.default.shape({root:T.default.object,rootMargin:T.default.string,threshold:T.default.number,triggerOnce:T.default.bool})};var Aa=or;Ne.default=Aa;var Ct={VerticalTimeline:Re.default,VerticalTimelineElement:Ne.default};const Tt=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:H[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:H[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:H[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:H[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:H[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:H[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:H[7].source}],Ia=({isCollapsed:e=!1,onExpand:t})=>w(Pa,{style:{position:"relative",width:"100%",maxWidth:500},children:[c(Ct.VerticalTimeline,{lineColor:"#e88ca6",children:(e?Tt.slice(0,1):Tt).map((i,n)=>w(Ct.VerticalTimelineElement,{date:i.date,dateClassName:"timeline-date-centered",iconStyle:{background:"#e88ca6",color:"#fff",boxShadow:"0 0 0 4px #e6ece1"},contentStyle:{background:"#fff",color:"#2F2120",border:"1px solid #e6ece1"},contentArrowStyle:{borderRight:"7px solid #e6ece1"},children:[c(Ue,{children:i.title}),c(Ge,{children:i.description}),c(Ma,{src:i.image,alt:i.title}),e&&n===1-1&&c(Oa,{onClick:t,children:"Show Full Timeline"})]},n))}),e&&c(_a,{})]}),Pa=u.div`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	background: #ffffff;
	border-radius: 16px;
	box-shadow: 0 4px 12px rgba(232, 140, 166, 0.08);
	padding: 20px 0;
	position: relative;
`,Ma=u.img`
	width: 100%;
	max-width: 320px;
	border-radius: 12px;
	margin-top: 12px;
	box-shadow: 0 2px 8px rgba(232, 140, 166, 0.1);
`,Oa=u.button`
	width: 100%;
	margin-top: 16px;
	padding: 10px 0;
	border-radius: 8px;
	border: none;
	background: linear-gradient(90deg, #e88ca6 0%, #fcde70 100%);
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0 2px 8px rgba(232, 140, 166, 0.1);
	transition: background 0.2s, color 0.2s;
	&:hover {
		background: linear-gradient(90deg, #fcde70 0%, #e88ca6 100%);
		color: #2f2120;
	}
`,_a=u.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80px;
	background: linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 90%);
	pointer-events: none;
`;function $a(){const[e,t]=f.useState({}),[r,i]=f.useState(!1),n={main:f.useRef(null),invitation:f.useRef(null),gallery:f.useRef(null),liveStream:f.useRef(null),giftInfo:f.useRef(null),directions:f.useRef(null),messages:f.useRef(null)};return f.useEffect(()=>{const a=/iPad|iPhone|iPod/.test(navigator.userAgent),o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=new IntersectionObserver(l=>{l.forEach(d=>{d.isIntersecting&&t(h=>lt(U({},h),{[d.target.id]:!0}))})},{threshold:a?.05:o?.08:.1,rootMargin:a?"50px":"20px"});return Object.values(n).forEach(l=>{l.current&&s.observe(l.current)}),()=>{Object.values(n).forEach(l=>{l.current&&s.unobserve(l.current)})}},[n]),f.useEffect(()=>{const a=/iPad|iPhone|iPod/.test(navigator.userAgent),o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);yr.init({duration:a?600:o?800:1e3,once:!0,disable:a&&window.innerWidth<768,throttleDelay:a?100:50})},[]),f.useEffect(()=>{const a=/iPad|iPhone|iPod/.test(navigator.userAgent),o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return a?void 0:On({density:o?8:15,sizeRange:[1,3],speedRange:[.3,.8],color:"rgba(255, 182, 193, 0.6)"})},[]),w(bi,{children:[c(B,{id:"main",ref:n.main,"data-aos":"fade-up",children:c(da,{})}),c("hr",{className:"separator"}),w(B,{id:"invitation",ref:n.invitation,"data-aos":"fade-up",children:[c(G,{children:"Invitation"}),c(ra,{})]}),c("hr",{className:"separator"}),w(B,{id:"directions",ref:n.directions,"data-aos":"fade-up",children:[c(G,{children:"Place & Time"}),c(ca,{})]}),c("hr",{className:"separator"}),w(B,{id:"timeline","data-aos":"fade-up",children:[c(G,{children:"Our Story Timeline"}),c(Ia,{isCollapsed:!r,onExpand:()=>i(!0)})]}),c("hr",{className:"separator"}),w(B,{id:"liveStream",ref:n.liveStream,"data-aos":"fade-up",children:[c(G,{children:"Live Stream"}),c(Vn,{})]}),c("hr",{className:"separator"}),w(B,{id:"giftInfo",ref:n.giftInfo,"data-aos":"fade-up",children:[c(G,{children:"Gift Information"}),c(gi,{})]}),c("hr",{className:"separator"}),w(B,{id:"messages",ref:n.messages,"data-aos":"fade-up",children:[c(G,{children:"Messages to the Couple"}),c(Xi,{})]}),c("hr",{className:"separator"}),w(B,{id:"gallery",ref:n.gallery,"data-aos":"fade-up",children:[c(G,{children:"Gallery"}),c(Fi,{})]}),c("hr",{className:"separator",style:{marginBottom:"10px"}}),c(B,{id:"thankyou","data-aos":"fade-up",children:w("div",{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",color:"#8B4513",fontFamily:"serif",maxWidth:"100%",overflow:"hidden"},children:[c(G,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),c("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),c("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",color:"#D2691E",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),c("img",{src:_n,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})]})}),c(Si,{isVisible:Object.values(e).some(Boolean)})]})}Be.createRoot(document.getElementById("root")).render(c(At.StrictMode,{children:c($a,{})}))});export default Ra();
