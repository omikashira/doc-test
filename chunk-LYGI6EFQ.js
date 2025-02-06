import{L as Q}from"./chunk-4SRVDHFL.js";import{$ as B,A as ve,Ba as Se,Bc as Ye,C as Ee,Dc as K,E as Te,Ec as qe,Ga as Me,H as we,Ha as Y,Ia as be,Ja as b,K as J,La as q,Ma as Ae,Pa as C,Q as _e,Qa as A,Qb as $e,Ra as D,Rb as Ve,Sa as De,Ta as Oe,Ua as Ne,Va as Ce,Wa as Pe,X as N,Xa as Le,Y as y,Ya as Fe,Za as f,_ as h,a as j,b as pe,ba as R,cb as P,d as me,da as d,ea as E,eb as ke,ia as Ie,kc as We,lb as xe,lc as Xe,mb as z,n as _,o as ge,pb as Ue,r as v,rc as Z,sc as Ge,ta as Re,tc as He,uc as p,vb as je,x as ye,xc as Je,ya as M,yb as Be,za as S,zb as ze}from"./chunk-L72XLG67.js";var te=class{};var O=class o{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),s=e.slice(t+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof o?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new o;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof o?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let s=n.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(a=>s.indexOf(a)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var ne=class{encodeKey(n){return Ze(n)}encodeValue(n){return Ze(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function It(o,n){let e=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[i,a]=s==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,s)),n.decodeValue(r.slice(s+1))],c=e.get(i)||[];c.push(a),e.set(i,c)}),e}var Rt=/%(\d[a-f0-9])/gi,St={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ze(o){return encodeURIComponent(o).replace(Rt,(n,e)=>St[e]??n)}function $(o){return`${o}`}var I=class o{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new ne,n.fromString){if(n.fromObject)throw new y(2805,!1);this.map=It(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map($):[$(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(s=>{e.push({param:t,value:s,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new o({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push($(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf($(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var re=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Mt(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ke(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function Qe(o){return typeof Blob<"u"&&o instanceof Blob}function et(o){return typeof FormData<"u"&&o instanceof FormData}function bt(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}var At="X-Request-URL",nt="text/plain",rt="application/json",Nn=`${rt}, ${nt}, */*`,L=class o{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let s;if(Mt(this.method)||r?(this.body=t!==void 0?t:null,s=r):s=t,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new O,this.context??=new re,!this.params)this.params=new I,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ke(this.body)||Qe(this.body)||et(this.body)||bt(this.body)?this.body:this.body instanceof I?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||et(this.body)?null:Qe(this.body)?this.body.type||null:Ke(this.body)?null:typeof this.body=="string"?nt:this.body instanceof I?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?rt:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,s=n.transferCache??this.transferCache,i=n.body!==void 0?n.body:this.body,a=n.withCredentials??this.withCredentials,c=n.reportProgress??this.reportProgress,l=n.headers||this.headers,u=n.params||this.params,T=n.context??this.context;return n.setHeaders!==void 0&&(l=Object.keys(n.setHeaders).reduce((m,g)=>m.set(g,n.setHeaders[g]),l)),n.setParams&&(u=Object.keys(n.setParams).reduce((m,g)=>m.set(g,n.setParams[g]),u)),new o(e,t,i,{params:u,headers:l,context:T,reportProgress:c,responseType:r,withCredentials:a,transferCache:s})}},ot=function(o){return o[o.Sent=0]="Sent",o[o.UploadProgress=1]="UploadProgress",o[o.ResponseHeader=2]="ResponseHeader",o[o.DownloadProgress=3]="DownloadProgress",o[o.Response=4]="Response",o[o.User=5]="User",o}(ot||{}),oe=class{headers;status;statusText;url;ok;type;constructor(n,e=200,t="OK"){this.headers=n.headers||new O,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}};var se=class o extends oe{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ot.Response;clone(n={}){return new o({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};function ee(o,n){return{body:n,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials,transferCache:o.transferCache}}var st=(()=>{class o{handler;constructor(e){this.handler=e}request(e,t,r={}){let s;if(e instanceof L)s=e;else{let c;r.headers instanceof O?c=r.headers:c=new O(r.headers);let l;r.params&&(r.params instanceof I?l=r.params:l=new I({fromObject:r.params})),s=new L(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let i=_(s).pipe(Te(c=>this.handler.handle(c)));if(e instanceof L||r.observe==="events")return i;let a=i.pipe(ve(c=>c instanceof se));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(v(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new y(2806,!1);return c.body}));case"blob":return a.pipe(v(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new y(2807,!1);return c.body}));case"text":return a.pipe(v(c=>{if(c.body!==null&&typeof c.body!="string")throw new y(2808,!1);return c.body}));case"json":default:return a.pipe(v(c=>c.body))}case"response":return a;default:throw new y(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new I().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ee(r,t))}post(e,t,r={}){return this.request("POST",e,ee(r,t))}put(e,t,r={}){return this.request("PUT",e,ee(r,t))}static \u0275fac=function(t){return new(t||o)(d(te))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})();var Cn=RegExp(`^${At}:`,"m");var ae=class extends He{supportsDOMEvents=!0},ce=class o extends ae{static makeCurrent(){Ge(new o)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Ct();return e==null?null:Pt(e)}resetBaseElement(){F=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Je(document.cookie,n)}},F=null;function Ct(){return F=F||document.querySelector("base"),F?F.getAttribute("href"):null}function Pt(o){return new URL(o,document.baseURI).pathname}var Lt=(()=>{class o{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||o)};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})(),le=new R(""),ut=(()=>{class o{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,r,s){return this._findPluginFor(t).addEventListener(e,t,r,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new y(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||o)(d(le),d(M))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})(),W=class{_doc;constructor(n){this._doc=n}manager},V="ng-app-id";function it(o){for(let n of o)n.remove()}function at(o,n){let e=n.createElement("style");return e.textContent=o,e}function Ft(o,n,e,t){let r=o.head?.querySelectorAll(`style[${V}="${n}"],link[${V}="${n}"]`);if(r)for(let s of r)s.removeAttribute(V),s instanceof HTMLLinkElement?t.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function de(o,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",o),e}var ht=(()=>{class o{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,r,s={}){this.doc=e,this.appId=t,this.nonce=r,this.isServer=K(s),Ft(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,at);t?.forEach(r=>this.addUsage(r,this.external,de))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let s=t.get(e);s?s.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(it(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])it(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,at(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,de(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(V,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||o)(d(p),d(Y),d(q,8),d(b))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})(),ie={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},he=/%COMP%/g;var ft="%COMP%",kt=`_nghost-${ft}`,xt=`_ngcontent-${ft}`,Ut=!0,jt=new R("",{providedIn:"root",factory:()=>Ut});function Bt(o){return xt.replace(he,o)}function zt(o){return kt.replace(he,o)}function pt(o,n){return n.map(e=>e.replace(he,o))}var ct=(()=>{class o{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,r,s,i,a,c,l=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=K(a),this.defaultRenderer=new k(e,i,c,this.platformIsServer,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===C.ShadowDom&&(t=pe(j({},t),{encapsulation:C.Emulated}));let r=this.getOrCreateRenderer(e,t);return r instanceof X?r.applyToHost(e):r instanceof x&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,s=r.get(t.id);if(!s){let i=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,T=this.platformIsServer,m=this.tracingService;switch(t.encapsulation){case C.Emulated:s=new X(c,l,t,this.appId,u,i,a,T,m);break;case C.ShadowDom:return new ue(c,l,e,t,i,a,this.nonce,T,m);default:s=new x(c,l,t,u,i,a,T,m);break}r.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||o)(d(ut),d(ht),d(Y),d(jt),d(p),d(b),d(M),d(q),d(Ae,8))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})(),k=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(ie[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(lt(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(lt(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new y(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let s=ie[r];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=ie[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(P.DashCase|P.Important)?n.style.setProperty(e,t,r&P.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&P.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=Z().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);let s=this.decoratePreventDefault(t);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(n,e,s)),this.eventManager.addEventListener(n,e,s,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function lt(o){return o.tagName==="TEMPLATE"&&o.content!==void 0}var ue=class extends k{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,t,r,s,i,a,c,l){super(n,s,i,c,l),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=pt(r.id,u);for(let m of u){let g=document.createElement("style");a&&g.setAttribute("nonce",a),g.textContent=m,this.shadowRoot.appendChild(g)}let T=r.getExternalStyles?.();if(T)for(let m of T){let g=de(m,s);a&&g.setAttribute("nonce",a),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},x=class extends k{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,s,i,a,c,l){super(n,s,i,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles;this.styles=l?pt(l,u):u,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},X=class extends x{contentAttr;hostAttr;constructor(n,e,t,r,s,i,a,c,l){let u=r+"-"+t.id;super(n,e,t,s,i,a,c,l,u),this.contentAttr=Bt(u),this.hostAttr=zt(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},$t=(()=>{class o extends W{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,s){return e.addEventListener(t,r,s),()=>this.removeEventListener(e,t,r,s)}removeEventListener(e,t,r,s){return e.removeEventListener(t,r,s)}static \u0275fac=function(t){return new(t||o)(d(p))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})(),dt=["alt","control","meta","shift"],Vt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Wt={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey},Xt=(()=>{class o extends W{constructor(e){super(e)}supports(e){return o.parseEventName(e)!=null}addEventListener(e,t,r,s){let i=o.parseEventName(t),a=o.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Z().onAndCancel(e,i.domEventName,a,s))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let s=o._normalizeKey(t.pop()),i="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),i="code."),dt.forEach(l=>{let u=t.indexOf(l);u>-1&&(t.splice(u,1),i+=l+".")}),i+=s,t.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=i,c}static matchEventFullKeyCode(e,t){let r=Vt[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),dt.forEach(i=>{if(i!==r){let a=Wt[i];a(e)&&(s+=i+".")}}),s+=r,s===t)}static eventCallback(e,t,r){return s=>{o.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||o)(d(p))};static \u0275prov=h({token:o,factory:o.\u0275fac})}return o})();function or(o,n){return We(j({rootComponent:o},Gt(n)))}function Gt(o){return{appProviders:[...Zt,...o?.providers??[]],platformProviders:qt}}function Ht(){ce.makeCurrent()}function Jt(){return new S}function Yt(){return Me(document),document}var qt=[{provide:b,useValue:Ye},{provide:be,useValue:Ht,multi:!0},{provide:p,useFactory:Yt,deps:[]}];var Zt=[{provide:Ie,useValue:"root"},{provide:S,useFactory:Jt,deps:[]},{provide:le,useClass:$t,multi:!0,deps:[p,M,b]},{provide:le,useClass:Xt,multi:!0,deps:[p]},ct,ht,ut,{provide:ke,useExisting:ct},{provide:qe,useClass:Lt,deps:[]},[]];var sr=(()=>{class o{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||o)(d(p))};static \u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var fe=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275prov=h({token:o,factory:function(t){let r=null;return t?r=new(t||o):r=d(Kt),r},providedIn:"root"})}return o})(),Kt=(()=>{class o extends fe{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case f.NONE:return t;case f.HTML:return D(t,"HTML")?A(t):Fe(this._doc,String(t)).toString();case f.STYLE:return D(t,"Style")?A(t):t;case f.SCRIPT:if(D(t,"Script"))return A(t);throw new y(5200,!1);case f.URL:return D(t,"URL")?A(t):Le(String(t));case f.RESOURCE_URL:if(D(t,"ResourceURL"))return A(t);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return De(e)}bypassSecurityTrustStyle(e){return Oe(e)}bypassSecurityTrustScript(e){return Ne(e)}bypassSecurityTrustUrl(e){return Ce(e)}bypassSecurityTrustResourceUrl(e){return Pe(e)}static \u0275fac=function(t){return new(t||o)(d(p))};static \u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var en=["*"],G;function tn(){if(G===void 0&&(G=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(G=o.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return G}function U(o){return tn()?.createHTML(o)||o}function mt(o){return Error(`Unable to find icon with the name "${o}"`)}function nn(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function gt(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function yt(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var w=class{url;svgText;options;svgElement;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},rn=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,s){this._httpClient=e,this._sanitizer=t,this._errorHandler=s,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,s){return this._addSvgIconConfig(e,t,new w(r,null,s))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,s){let i=this._sanitizer.sanitize(f.HTML,r);if(!i)throw yt(r);let a=U(i);return this._addSvgIconConfig(e,t,new w("",a,s))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new w(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let s=this._sanitizer.sanitize(f.HTML,t);if(!s)throw yt(t);let i=U(s);return this._addSvgIconSetConfig(e,new w("",i,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(f.RESOURCE_URL,e);if(!t)throw gt(e);let r=this._cachedIconsByUrl.get(t);return r?_(H(r)):this._loadSvgIconFromConfig(new w(e,null)).pipe(N(s=>this._cachedIconsByUrl.set(t,s)),v(s=>H(s)))}getNamedSvgIcon(e,t=""){let r=vt(t,e),s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(t,e),s)return this._svgIconConfigs.set(r,s),this._getSvgFromConfig(s);let i=this._iconSetConfigs.get(t);return i?this._getSvgFromIconSetConfigs(e,i):ge(mt(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(H(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(v(t=>H(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return _(r);let s=t.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(Ee(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(f.RESOURCE_URL,i.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),_(null)})));return ye(s).pipe(v(()=>{let i=this._extractIconWithNameFromAnySet(e,t);if(!i)throw mt(e);return i}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let s=t[r];if(s.svgText&&s.svgText.toString().indexOf(e)>-1){let i=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(i,e,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(N(t=>e.svgText=t),v(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(N(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let s=e.querySelector(`[id="${t}"]`);if(!s)return null;let i=s.cloneNode(!0);if(i.removeAttribute("id"),i.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(i,r);if(i.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(i),r);let a=this._svgElementFromString(U("<svg></svg>"));return a.appendChild(i),this._setSvgAttributes(a,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(U("<svg></svg>")),r=e.attributes;for(let s=0;s<r.length;s++){let{name:i,value:a}=r[s];i!=="id"&&t.setAttribute(i,a)}for(let s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[s].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,s=r?.withCredentials??!1;if(!this._httpClient)throw nn();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let i=this._sanitizer.sanitize(f.RESOURCE_URL,t);if(!i)throw gt(t);let a=this._inProgressUrlFetches.get(i);if(a)return a;let c=this._httpClient.get(i,{responseType:"text",withCredentials:s}).pipe(v(l=>U(l)),J(()=>this._inProgressUrlFetches.delete(i)),_e());return this._inProgressUrlFetches.set(i,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(vt(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let s=this._resolvers[r](t,e);if(s)return on(s)?new w(s.url,null,s.options):new w(s,null)}}static \u0275fac=function(t){return new(t||o)(d(st,8),d(fe),d(p,8),d(S))};static \u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function H(o){return o.cloneNode(!0)}function vt(o,n){return o+":"+n}function on(o){return!!(o.url&&o.options)}var sn=new R("MAT_ICON_DEFAULT_OPTIONS"),an=new R("mat-icon-location",{providedIn:"root",factory:cn});function cn(){let o=E(p),n=o?o.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var Et=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ln=Et.map(o=>`[${o}]`).join(", "),dn=/^url\(['"]?#(.*?)['"]?\)$/,Tr=(()=>{class o{_elementRef=E(Se);_iconRegistry=E(rn);_location=E(an);_errorHandler=E(S);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=me.EMPTY;constructor(){let e=E(new Re("aria-hidden"),{optional:!0}),t=E(sn,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,s)=>{r.forEach(i=>{s.setAttribute(i.name,`url('${e}#${i.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ln),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<t.length;s++)Et.forEach(i=>{let a=t[s],c=a.getAttribute(i),l=c?c.match(dn):null;if(l){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:i,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(we(1)).subscribe(s=>this._setSvgElement(s),s=>{let i=`Error retrieving icon ${t}:${r}! ${s.message}`;this._errorHandler.handleError(new Error(i))})}}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=xe({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(je("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),ze(r.color?"mat-"+r.color:""),Be("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Xe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[Ue],ngContentSelectors:en,decls:1,vars:0,template:function(t,r){t&1&&($e(),Ve(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return o})(),wr=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=z({type:o});static \u0275inj=B({imports:[Q,Q]})}return o})();export{ct as a,or as b,sr as c,Tr as d,wr as e};
