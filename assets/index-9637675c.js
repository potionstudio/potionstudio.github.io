(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var kn,_,go,Lt,Gr,mo,ln={},yo=[],Hc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Et(e,t){for(var n in t)e[n]=t[n];return e}function vo(e){var t=e.parentNode;t&&t.removeChild(e)}function Es(e,t,n){var s,r,i,o={};for(i in t)i=="key"?s=t[i]:i=="ref"?r=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?kn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return sn(e,o,s,r,null)}function sn(e,t,n,s,r){var i={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++go};return r==null&&_.vnode!=null&&_.vnode(i),i}function at(e){return e.children}function gt(e,t){this.props=e,this.context=t}function Te(e,t){if(t==null)return e.__?Te(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Te(e):null}function _o(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _o(e)}}function Wr(e){(!e.__d&&(e.__d=!0)&&Lt.push(e)&&!hn.__r++||Gr!==_.debounceRendering)&&((Gr=_.debounceRendering)||mo)(hn)}function hn(){var e,t,n,s,r,i,o,a;for(Lt.sort(function(c,l){return c.__v.__b-l.__v.__b});e=Lt.shift();)e.__d&&(t=Lt.length,s=void 0,r=void 0,o=(i=(n=e).__v).__e,(a=n.__P)&&(s=[],(r=Et({},i)).__v=i.__v+1,nr(a,i,r,n.__n,a.ownerSVGElement!==void 0,i.__h!=null?[o]:null,s,o??Te(i),i.__h),Co(s,i),i.__e!=o&&_o(i)),Lt.length>t&&Lt.sort(function(c,l){return c.__v.__b-l.__v.__b}));hn.__r=0}function wo(e,t,n,s,r,i,o,a,c,l){var u,d,p,f,y,N,S,L=s&&s.__k||yo,O=L.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?sn(null,f,null,null,f):Array.isArray(f)?sn(at,{children:f},null,null,null):f.__b>0?sn(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(p=L[u])===null||p&&f.key==p.key&&f.type===p.type)L[u]=void 0;else for(d=0;d<O;d++){if((p=L[d])&&f.key==p.key&&f.type===p.type){L[d]=void 0;break}p=null}nr(e,f,p=p||ln,r,i,o,a,c,l),y=f.__e,(d=f.ref)&&p.ref!=d&&(S||(S=[]),p.ref&&S.push(p.ref,null,f),S.push(d,f.__c||y,f)),y!=null?(N==null&&(N=y),typeof f.type=="function"&&f.__k===p.__k?f.__d=c=Eo(f,c,e):c=bo(e,f,p,L,y,c),typeof n.type=="function"&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=Te(p))}for(n.__e=N,u=O;u--;)L[u]!=null&&(typeof n.type=="function"&&L[u].__e!=null&&L[u].__e==n.__d&&(n.__d=To(s).nextSibling),Io(L[u],L[u]));if(S)for(u=0;u<S.length;u++)So(S[u],S[++u],S[++u])}function Eo(e,t,n){for(var s,r=e.__k,i=0;r&&i<r.length;i++)(s=r[i])&&(s.__=e,t=typeof s.type=="function"?Eo(s,t,n):bo(n,s,s,r,s.__e,t));return t}function dn(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){dn(n,t)}):t.push(e)),t}function bo(e,t,n,s,r,i){var o,a,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||r!=i||r.parentNode==null)t:if(i==null||i.parentNode!==e)e.appendChild(r),o=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<s.length;c+=1)if(a==r)break t;e.insertBefore(r,i),o=i}return o!==void 0?o:r.nextSibling}function To(e){var t,n,s;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(s=To(n)))return s}return null}function Kc(e,t,n,s,r){var i;for(i in n)i==="children"||i==="key"||i in t||fn(e,i,null,n[i],s);for(i in t)r&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||fn(e,i,t[i],n[i],s)}function Qr(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Hc.test(t)?n:n+"px"}function fn(e,t,n,s,r){var i;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Qr(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||Qr(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?s||e.addEventListener(t,i?Yr:Xr,i):e.removeEventListener(t,i?Yr:Xr,i);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Xr(e){return this.l[e.type+!1](_.event?_.event(e):e)}function Yr(e){return this.l[e.type+!0](_.event?_.event(e):e)}function nr(e,t,n,s,r,i,o,a,c){var l,u,d,p,f,y,N,S,L,O,ft,it,Nt,Kt,xt,ot=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(l=_.__b)&&l(t);try{t:if(typeof ot=="function"){if(S=t.props,L=(l=ot.contextType)&&s[l.__c],O=l?L?L.props.value:l.__:s,n.__c?N=(u=t.__c=n.__c).__=u.__E:("prototype"in ot&&ot.prototype.render?t.__c=u=new ot(S,O):(t.__c=u=new gt(S,O),u.constructor=ot,u.render=Gc),L&&L.sub(u),u.props=S,u.state||(u.state={}),u.context=O,u.__n=s,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),ot.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Et({},u.__s)),Et(u.__s,ot.getDerivedStateFromProps(S,u.__s))),p=u.props,f=u.state,u.__v=t,d)ot.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(ot.getDerivedStateFromProps==null&&S!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(S,O),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(S,u.__s,O)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(u.props=S,u.state=u.__s,u.__d=!1),u.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Qe){Qe&&(Qe.__=t)}),ft=0;ft<u._sb.length;ft++)u.__h.push(u._sb[ft]);u._sb=[],u.__h.length&&o.push(u);break t}u.componentWillUpdate!=null&&u.componentWillUpdate(S,u.__s,O),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,f,y)})}if(u.context=O,u.props=S,u.__P=e,it=_.__r,Nt=0,"prototype"in ot&&ot.prototype.render){for(u.state=u.__s,u.__d=!1,it&&it(t),l=u.render(u.props,u.state,u.context),Kt=0;Kt<u._sb.length;Kt++)u.__h.push(u._sb[Kt]);u._sb=[]}else do u.__d=!1,it&&it(t),l=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++Nt<25);u.state=u.__s,u.getChildContext!=null&&(s=Et(Et({},s),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(y=u.getSnapshotBeforeUpdate(p,f)),xt=l!=null&&l.type===at&&l.key==null?l.props.children:l,wo(e,Array.isArray(xt)?xt:[xt],t,n,s,r,i,o,a,c),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),N&&(u.__E=u.__=null),u.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=zc(n.__e,t,n,s,r,i,o,c);(l=_.diffed)&&l(t)}catch(Qe){t.__v=null,(c||i!=null)&&(t.__e=a,t.__h=!!c,i[i.indexOf(a)]=null),_.__e(Qe,t,n)}}function Co(e,t){_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){_.__e(s,n.__v)}})}function zc(e,t,n,s,r,i,o,a){var c,l,u,d=n.props,p=t.props,f=t.type,y=0;if(f==="svg"&&(r=!0),i!=null){for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,i[y]=null;break}}if(e==null){if(f===null)return document.createTextNode(p);e=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,p.is&&p),i=null,a=!1}if(f===null)d===p||a&&e.data===p||(e.data=p);else{if(i=i&&kn.call(e.childNodes),l=(d=n.props||ln).dangerouslySetInnerHTML,u=p.dangerouslySetInnerHTML,!a){if(i!=null)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(u||l)&&(u&&(l&&u.__html==l.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(Kc(e,p,d,r,a),u)t.__k=[];else if(y=t.props.children,wo(e,Array.isArray(y)?y:[y],t,n,s,r&&f!=="foreignObject",i,o,i?i[0]:n.__k&&Te(n,0),a),i!=null)for(y=i.length;y--;)i[y]!=null&&vo(i[y]);a||("value"in p&&(y=p.value)!==void 0&&(y!==e.value||f==="progress"&&!y||f==="option"&&y!==d.value)&&fn(e,"value",y,d.value,!1),"checked"in p&&(y=p.checked)!==void 0&&y!==e.checked&&fn(e,"checked",y,d.checked,!1))}return e}function So(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){_.__e(s,n)}}function Io(e,t,n){var s,r;if(_.unmount&&_.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||So(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(i){_.__e(i,t)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&Io(s[r],t,n||typeof e.type!="function");n||e.__e==null||vo(e.__e),e.__=e.__e=e.__d=void 0}function Gc(e,t,n){return this.constructor(e,n)}function Wc(e,t,n){var s,r,i;_.__&&_.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,i=[],nr(t,e=(!s&&n||t).__k=Es(at,null,[e]),r||ln,ln,t.ownerSVGElement!==void 0,!s&&n?[n]:r?null:t.firstChild?kn.call(t.childNodes):null,i,!s&&n?n:r?r.__e:t.firstChild,s),Co(i,e)}kn=yo.slice,_={__e:function(e,t,n,s){for(var r,i,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),o=r.__d),o)return r.__E=r}catch(a){e=a}throw e}},go=0,gt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Et({},this.state),typeof e=="function"&&(e=e(Et({},n),this.props)),e&&Et(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Wr(this))},gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Wr(this))},gt.prototype.render=at,Lt=[],mo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hn.__r=0;var sr,B,ts,Jr,bs=0,Ao=[],rn=[],Zr=_.__b,ti=_.__r,ei=_.diffed,ni=_.__c,si=_.unmount;function Do(e,t){_.__h&&_.__h(B,e,bs||t),bs=0;var n=B.__H||(B.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:rn}),n.__[e]}function rr(e){return bs=1,Qc(No,e)}function Qc(e,t,n){var s=Do(sr++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):No(void 0,t),function(i){var o=s.__N?s.__N[0]:s.__[0],a=s.t(o,i);o!==a&&(s.__N=[a,s.__[1]],s.__c.setState({}))}],s.__c=B,!B.u)){B.u=!0;var r=B.shouldComponentUpdate;B.shouldComponentUpdate=function(i,o,a){if(!s.__c.__H)return!0;var c=s.__c.__H.__.filter(function(u){return u.__c});if(c.every(function(u){return!u.__N}))return!r||r.call(this,i,o,a);var l=!1;return c.forEach(function(u){if(u.__N){var d=u.__[0];u.__=u.__N,u.__N=void 0,d!==u.__[0]&&(l=!0)}}),!(!l&&s.__c.props===i)&&(!r||r.call(this,i,o,a))}}return s.__N||s.__}function ko(e,t){var n=Do(sr++,3);!_.__s&&Jc(n.__H,t)&&(n.__=e,n.i=t,B.__H.__h.push(n))}function Xc(){for(var e;e=Ao.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(on),e.__H.__h.forEach(Ts),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){B=null,Zr&&Zr(e)},_.__r=function(e){ti&&ti(e),sr=0;var t=(B=e.__c).__H;t&&(ts===B?(t.__h=[],B.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=rn,n.__N=n.i=void 0})):(t.__h.forEach(on),t.__h.forEach(Ts),t.__h=[])),ts=B},_.diffed=function(e){ei&&ei(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ao.push(t)!==1&&Jr===_.requestAnimationFrame||((Jr=_.requestAnimationFrame)||Yc)(Xc)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==rn&&(n.__=n.__V),n.i=void 0,n.__V=rn})),ts=B=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(on),n.__h=n.__h.filter(function(s){return!s.__||Ts(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],_.__e(s,n.__v)}}),ni&&ni(e,t)},_.unmount=function(e){si&&si(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{on(s)}catch(r){t=r}}),n.__H=void 0,t&&_.__e(t,n.__v))};var ri=typeof requestAnimationFrame=="function";function Yc(e){var t,n=function(){clearTimeout(s),ri&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,100);ri&&(t=requestAnimationFrame(n))}function on(e){var t=B,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),B=t}function Ts(e){var t=B;e.__c=e.__(),B=t}function Jc(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function No(e,t){return typeof t=="function"?t(e):t}function Zc(e,t){for(var n in t)e[n]=t[n];return e}function ii(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function oi(e){this.props=e}(oi.prototype=new gt).isPureReactComponent=!0,oi.prototype.shouldComponentUpdate=function(e,t){return ii(this.props,e)||ii(this.state,t)};var ai=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ai&&ai(e)};var tu=_.__e;_.__e=function(e,t,n,s){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}tu(e,t,n,s)};var ci=_.unmount;function xo(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(s){typeof s.__c=="function"&&s.__c()}),e.__c.__H=null),(e=Zc({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(s){return xo(s,t,n)})),e}function Ro(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(s){return Ro(s,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function es(){this.__u=0,this.t=null,this.__b=null}function Lo(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Xe(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ci&&ci(e)},(es.prototype=new gt).__c=function(e,t){var n=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(n);var r=Lo(s.__v),i=!1,o=function(){i||(i=!0,n.__R=null,r?r(a):a())};n.__R=o;var a=function(){if(!--s.__u){if(s.state.__a){var l=s.state.__a;s.__v.__k[0]=Ro(l,l.__c.__P,l.__c.__O)}var u;for(s.setState({__a:s.__b=null});u=s.t.pop();)u.forceUpdate()}},c=t.__h===!0;s.__u++||c||s.setState({__a:s.__b=s.__v.__k[0]}),e.then(o,o)},es.prototype.componentWillUnmount=function(){this.t=[]},es.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=xo(this.__b,n,s.__O=s.__P)}this.__b=null}var r=t.__a&&Es(at,null,e.fallback);return r&&(r.__h=null),[Es(at,null,t.__a?null:e.children),r]};var ui=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Xe.prototype=new gt).__a=function(e){var t=this,n=Lo(t.__v),s=t.o.get(e);return s[0]++,function(r){var i=function(){t.props.revealOrder?(s.push(r),ui(t,e,s)):r()};n?n(i):i()}},Xe.prototype.render=function(e){this.u=null,this.o=new Map;var t=dn(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Xe.prototype.componentDidUpdate=Xe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){ui(e,n,t)})};var eu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,nu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,su=typeof document<"u",ru=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};gt.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(gt.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var li=_.event;function iu(){}function ou(){return this.cancelBubble}function au(){return this.defaultPrevented}_.event=function(e){return li&&(e=li(e)),e.persist=iu,e.isPropagationStopped=ou,e.isDefaultPrevented=au,e.nativeEvent=e};var hi={configurable:!0,get:function(){return this.class}},di=_.vnode;_.vnode=function(e){var t=e.type,n=e.props,s=n;if(typeof t=="string"){var r=t.indexOf("-")===-1;for(var i in s={},n){var o=n[i];su&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in n&&o==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&o===!0?o="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!ru(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():r&&nu.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),s[i]&&(i="oninputCapture")),s[i]=o)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=dn(n.children).forEach(function(a){a.props.selected=s.value.indexOf(a.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=dn(n.children).forEach(function(a){a.props.selected=s.multiple?s.defaultValue.indexOf(a.props.value)!=-1:s.defaultValue==a.props.value})),e.props=s,n.class!=n.className&&(hi.enumerable="className"in n,n.className!=null&&(s.class=n.className),Object.defineProperty(s,"className",hi))}e.$$typeof=eu,di&&di(e)};var fi=_.__r;_.__r=function(e){fi&&fi(e),e.__c};var pi=_.diffed;_.diffed=function(e){pi&&pi(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};var cu=0;function h(e,t,n,s,r,i){var o,a,c={};for(a in t)a=="ref"?o=t[a]:c[a]=t[a];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--cu,__source:r,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return _.vnode&&_.vnode(l),l}let an="/";const ns=[];let Oo=null;const uu=({children:e})=>{e.forEach(r=>{ns[r.props.path]=r});const[t,n]=rr(0);Oo=()=>{n(()=>t+1)};const s=ns[an];return h(at,{children:[s||ns["/err"],h("p",{style:{display:"none"},children:t})]})},Zt=({children:e,to:t,className:n})=>t.substr(0,5)==="https"||t.substr(0,4)==="http"?h("a",{class:n,href:t,children:e}):h("a",{class:n,onClick:()=>{an!==t&&(an=t,console.log(`Router | location was changed to ${an}`),Oo())},children:e}),lu=({title:e,description:t,btn:n})=>h("div",{class:"px-4 py-5 my-5 text-center",children:[h("h1",{class:"display-5 fw-bold",children:e}),h("div",{class:"col-lg-6 mx-auto",children:[h("p",{class:"lead mb-4",children:t}),h("div",{class:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:[h(Zt,{className:"btn btn-primary btn-lg px-4 gap-3",to:n[0].href,children:n[0].text}),h(Zt,{className:"btn btn-outline-secondary btn-lg px-4",to:n[1].href,children:n[1].text})]})]})]}),hu="✌🏠👉",du="https://youtu.be/HH5Je8B-eUE",gi={name:hu,link:du},fu="https://discord.gg/Aucek5yXhy",pu="https://github.com/potionstudio",gu="https://velog.io/@potionstudio",mu="mailto:groomusemail@gmail.com",yu="https://www.reddit.com/u/Character-Bird-7090?utm_medium=android_app&utm_source=share",wt={discord:fu,github:pu,velog:gu,email:mu,reddit:yu},ss=screen.width>768,vu=()=>h(at,{children:[h("h1",{class:"fw-bold fs-1 text-center",style:{marginTop:"35vh",marginBottom:"35vh"},children:["체력물약의",h("br",{}),"포트폴리오",h("br",{}),h("a",{class:"deco-non",href:gi.link,style:{textDecoration:"none"},children:gi.name})]}),h("div",{class:"R85 mx-auto",children:[h(lu,{title:"Welcome!",description:"Rust, C++등의 저수준 언어를 이용해 게임을 만드는 것을 좋아하는 사람입니다. 접근성을 위해 웹을 적극 활용합니다!",btn:[{text:"📦 서비스",href:"/service"},{text:"💬 디스코드",href:wt.discord}]}),h("hr",{style:{marginBottom:"65vh"}}),h("div",{class:`${ss?"p-5":"p-1"} mb-4 my-5 bg-light rounded-3`,children:h("div",{class:"container-fluid py-5",children:[h("h1",{class:"display-5 fw-bold",children:"만든 서비스 구경하기"}),ss?h("p",{class:"col-md-8 fs-4",children:["아래의 버튼을 클릭해 보세요! 제가 만든 서비스를 구경할 수 있습니다. 주로 게임이나, 웹과 같은 모두가 사용하기 위운 서비스, 혹은 제가 코딩하다가 어려움에 처했던 문제를 해결하기 위한 툴들을 만들고 있습니다. 소스코드는",h("a",{href:wt.github,children:"Github"}),"에 공유되어 있습니다."]}):h("p",{class:"col-md-8 fs-4",children:["아래의 버튼을 클릭해 보세요! 소스코드는"," ",h("a",{href:wt.github,children:"Github"}),"에 공유되어 있습니다."]}),h(Zt,{className:`btn btn-primary ${ss?"btn-lg":""}`,to:"/service",children:"📦 서비스 목록 보기"})]})}),h("div",{class:"row align-items-md-stretch",children:[h("div",{class:"col-md-6",children:h("div",{class:"h-100 p-5 text-bg-dark rounded-3",children:[h("h2",{children:"소스코드"}),h("p",{children:"'대부분'의 소스코드는 MIT라이센스 혹은 CopyLeft로 관리됩니다."}),h("a",{class:"btn btn-outline-light",href:"https://ko.wikipedia.org/wiki/%EC%B9%B4%ED%94%BC%EB%A0%88%ED%94%84%ED%8A%B8",children:"📌 CopyLeft란?"})]})}),h("div",{class:"col-md-6",children:h("div",{class:"h-100 p-5 bg-light border rounded-3",children:[h("h2",{children:"자주 사용하는 도구"}),h("div",{children:"Lang: TS, Rust, C++, Go"}),h("hr",{}),h("div",{children:"Framework: React, Gin, Unity, Phaser, Vulkan(예정)"}),h("hr",{}),h("div",{children:"Linux: Bash/Ubuntu"})]})})]})]})]});function _u({children:e}){return h("div",{class:"responsive-grid",children:e})}const wu=({img:e,title:t,description:n,btn:s})=>h("div",{class:"card d-linline-display",children:[h("img",{class:"card-img-top",src:e}),h("div",{class:"card-body",children:[h("h5",{class:"card-title fw-bold",children:t}),h("p",{class:"card-text",children:n}),h("a",{href:s.href,class:"btn btn-primary",children:s.text})]})]}),Eu=({children:e,title:t,description:n,btn:s})=>h("div",{class:"card d-linline-display",children:[h("div",{class:"card-img-top",children:e}),h("div",{class:"card-body",children:[h("h5",{class:"card-title fw-bold",children:t}),h("p",{class:"card-text",children:n}),h("a",{href:s.href,class:"btn btn-primary",children:s.text})]})]}),bu={Card:wu,Thumbnailless:Eu},ct=[];ct["c/c++"]="c";ct["c++"]="c";ct.typescript="ts";ct.java="deprecated";ct.php="deprecated";ct["html/css/js"]="html-css-js";ct["unity 3d"]="unity";ct["unreal engine"]="ue";ct.directx="dx";ct.springboot="spring";const Tu=e=>{let t;const n=e.toLowerCase(),s=ct[n];return s===void 0?t=n:t=s,t},Cu=({lang:e})=>{const t=Tu(e);return h("div",{class:`position-relative thumbnail-${t} thumbnail-default`,children:h("div",{class:"position-absolute top-50 start-50 translate-middle",children:h("h1",{class:"fs-1 fst-italic",children:e})})})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Su=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(p=64)),s.push(n[u],n[d],n[p],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Su(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const f=a<<4&240|l>>2;if(s.push(f),d!==64){const y=l<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Iu=function(e){const t=Mo(e);return Po.encodeByteArray(t,!0)},pn=function(e){return Iu(e).replace(/\./g,"")},Au=function(e){try{return Po.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=()=>Du().__FIREBASE_DEFAULTS__,Nu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Au(e[1]);return t&&JSON.parse(t)},Fo=()=>{try{return ku()||Nu()||xu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ru=e=>{var t,n;return(n=(t=Fo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Lu=e=>{const t=Ru(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Ou=()=>{var e;return(e=Fo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[pn(JSON.stringify(n)),pn(JSON.stringify(o)),a].join(".")}function Fu(){try{return typeof indexedDB=="object"}catch{return!1}}function Vu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="FirebaseError";class ae extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=$u,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Uu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ae(r,a,s)}}function Uu(e,t){return e.replace(Bu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Bu=/\{\$([^}]+)}/g;function Cs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(mi(i)&&mi(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(e){return e&&e._delegate?e._delegate:e}class Ce{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Mu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ku(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hu(e){return e===Rt?void 0:e}function Ku(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ju(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const Gu={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Wu=x.INFO,Qu={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Xu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Qu[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $o{constructor(t){this.name=t,this._logLevel=Wu,this._logHandler=Xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const Yu=(e,t)=>t.some(n=>e instanceof n);let yi,vi;function Ju(){return yi||(yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zu(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,Ss=new WeakMap,Bo=new WeakMap,rs=new WeakMap,ir=new WeakMap;function tl(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Tt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Uo.set(n,e)}).catch(()=>{}),ir.set(t,e),t}function el(e){if(Ss.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ss.set(e,t)}let Is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ss.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nl(e){Is=e(Is)}function sl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(is(this),t,...n);return Bo.set(s,t.sort?t.sort():[t]),Tt(s)}:Zu().includes(e)?function(...t){return e.apply(is(this),t),Tt(Uo.get(this))}:function(...t){return Tt(e.apply(is(this),t))}}function rl(e){return typeof e=="function"?sl(e):(e instanceof IDBTransaction&&el(e),Yu(e,Ju())?new Proxy(e,Is):e)}function Tt(e){if(e instanceof IDBRequest)return tl(e);if(rs.has(e))return rs.get(e);const t=rl(e);return t!==e&&(rs.set(e,t),ir.set(t,e)),t}const is=e=>ir.get(e);function il(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],os=new Map;function _i(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(os.get(t))return os.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=al.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ol.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return os.set(t,i),i}nl(e=>({...e,get:(t,n,s)=>_i(t,n)||e.get(t,n,s),has:(t,n)=>!!_i(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ul(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ul(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const As="@firebase/app",wi="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new $o("@firebase/app"),ll="@firebase/app-compat",hl="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",pl="@firebase/app-check",gl="@firebase/auth",ml="@firebase/auth-compat",yl="@firebase/database",vl="@firebase/database-compat",_l="@firebase/functions",wl="@firebase/functions-compat",El="@firebase/installations",bl="@firebase/installations-compat",Tl="@firebase/messaging",Cl="@firebase/messaging-compat",Sl="@firebase/performance",Il="@firebase/performance-compat",Al="@firebase/remote-config",Dl="@firebase/remote-config-compat",kl="@firebase/storage",Nl="@firebase/storage-compat",xl="@firebase/firestore",Rl="@firebase/firestore-compat",Ll="firebase",Ol="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]",Ml={[As]:"fire-core",[ll]:"fire-core-compat",[dl]:"fire-analytics",[hl]:"fire-analytics-compat",[pl]:"fire-app-check",[fl]:"fire-app-check-compat",[gl]:"fire-auth",[ml]:"fire-auth-compat",[yl]:"fire-rtdb",[vl]:"fire-rtdb-compat",[_l]:"fire-fn",[wl]:"fire-fn-compat",[El]:"fire-iid",[bl]:"fire-iid-compat",[Tl]:"fire-fcm",[Cl]:"fire-fcm-compat",[Sl]:"fire-perf",[Il]:"fire-perf-compat",[Al]:"fire-rc",[Dl]:"fire-rc-compat",[kl]:"fire-gcs",[Nl]:"fire-gcs-compat",[xl]:"fire-fst",[Rl]:"fire-fst-compat","fire-js":"fire-js",[Ll]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Map,ks=new Map;function Pl(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mn(e){const t=e.name;if(ks.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;ks.set(t,e);for(const n of gn.values())Pl(n,e);return!0}function Fl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new Vo("app","Firebase",Vl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=Ol;function qo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=Ou()),!n)throw Ct.create("no-options");const i=gn.get(r);if(i){if(Cs(n,i.options)&&Cs(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new zu(r);for(const c of ks.values())o.addComponent(c);const a=new $l(n,s,o);return gn.set(r,a),a}function Bl(e=Ds){const t=gn.get(e);if(!t&&e===Ds)return qo();if(!t)throw Ct.create("no-app",{appName:e});return t}function Qt(e,t,n){var s;let r=(s=Ml[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}mn(new Ce(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="firebase-heartbeat-database",jl=1,Se="firebase-heartbeat-store";let as=null;function jo(){return as||(as=il(ql,jl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Se)}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),as}async function Hl(e){try{return(await jo()).transaction(Se).objectStore(Se).get(Ho(e))}catch(t){if(t instanceof ae)Bt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(n.message)}}}async function Ei(e,t){try{const s=(await jo()).transaction(Se,"readwrite");return await s.objectStore(Se).put(t,Ho(e)),s.done}catch(n){if(n instanceof ae)Bt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(s.message)}}}function Ho(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=1024,zl=30*24*60*60*1e3;class Gl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ql(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=zl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bi(),{heartbeatsToSend:n,unsentEntries:s}=Wl(this._heartbeatsCache.heartbeats),r=pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bi(){return new Date().toISOString().substring(0,10)}function Wl(e,t=Kl){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ti(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ti(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ql{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fu()?Vu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ti(e){return pn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){mn(new Ce("platform-logger",t=>new cl(t),"PRIVATE")),mn(new Ce("heartbeat",t=>new Gl(t),"PRIVATE")),Qt(As,wi,e),Qt(As,wi,"esm2017"),Qt("fire-js","")}Xl("");var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,or=or||{},T=Yl||self;function yn(){}function Nn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Pe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Jl(e){return Object.prototype.hasOwnProperty.call(e,cs)&&e[cs]||(e[cs]=++Zl)}var cs="closure_uid_"+(1e9*Math.random()>>>0),Zl=0;function th(e,t,n){return e.call.apply(e.bind,arguments)}function eh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=th:J=eh,J.apply(null,arguments)}function Ye(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var nh=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nh!=0)&&Jl(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ko=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ar(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ci(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Nn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var sh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",yn,t),T.removeEventListener("test",yn,t)}catch{}return e}();function vn(e){return/^[\s\xa0]*$/.test(e)}var Si=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function us(e,t){return e<t?-1:e>t?1:0}function xn(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return xn().indexOf(e)!=-1}function cr(e){return cr[" "](e),e}cr[" "]=yn;function rh(e){var t=ah;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var ih=ut("Opera"),te=ut("Trident")||ut("MSIE"),zo=ut("Edge"),Ns=zo||te,Go=ut("Gecko")&&!(xn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),oh=xn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function Wo(){var e=T.document;return e?e.documentMode:void 0}var _n;t:{var ls="",hs=function(){var e=xn();if(Go)return/rv:([^\);]+)(\)|;)/.exec(e);if(zo)return/Edge\/([\d\.]+)/.exec(e);if(te)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(oh)return/WebKit\/(\S+)/.exec(e);if(ih)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(hs&&(ls=hs?hs[1]:""),te){var ds=Wo();if(ds!=null&&ds>parseFloat(ls)){_n=String(ds);break t}}_n=ls}var ah={};function ch(){return rh(function(){let e=0;const t=Si(String(_n)).split("."),n=Si("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=us(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||us(r[2].length==0,i[2].length==0)||us(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var xs;if(T.document&&te){var Ii=Wo();xs=Ii||parseInt(_n,10)||void 0}else xs=void 0;var uh=xs;function Ie(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Go){t:{try{cr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:lh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ie.X.h.call(this)}}Q(Ie,Z);var lh={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),hh=0;function dh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++hh,this.ba=this.ea=!1}function Rn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ur(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Qo(e){const t={};for(const n in e)t[n]=e[n];return t}const Ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Ai.length;i++)n=Ai[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ln(e){this.src=e,this.g={},this.h=0}Ln.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ls(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new dh(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Rs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Ko(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Rn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ls(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),fs={};function Yo(e,t,n,s,r){if(s&&s.once)return Zo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yo(e,t[i],n,s,r);return null}return n=fr(n),e&&e[Fe]?e.N(t,n,Pe(s)?!!s.capture:!!s,r):Jo(e,t,n,!1,s,r)}function Jo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Pe(r)?!!r.capture:!!r,a=dr(e);if(a||(e[lr]=a=new Ln(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=fh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)sh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ea(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fh(){function e(n){return t.call(e.src,e.listener,n)}const t=ph;return e}function Zo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Zo(e,t[i],n,s,r);return null}return n=fr(n),e&&e[Fe]?e.O(t,n,Pe(s)?!!s.capture:!!s,r):Jo(e,t,n,!0,s,r)}function ta(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ta(e,t[i],n,s,r);else s=Pe(s)?!!s.capture:!!s,n=fr(n),e&&e[Fe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ls(i,n,s,r),-1<n&&(Rn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=dr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ls(t,n,s,r)),(n=-1<e?t[e]:null)&&hr(n))}function hr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Fe])Rs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ea(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=dr(t))?(Rs(n,e),n.h==0&&(n.src=null,t[lr]=null)):Rn(e)}}}function ea(e){return e in fs?fs[e]:fs[e]="on"+e}function ph(e,t){if(e.ba)e=!0;else{t=new Ie(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&hr(e),e=n.call(s,t)}return e}function dr(e){return e=e[lr],e instanceof Ln?e:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function fr(e){return typeof e=="function"?e:(e[ps]||(e[ps]=function(t){return e.handleEvent(t)}),e[ps])}function K(){Dt.call(this),this.i=new Ln(this),this.P=this,this.I=null}Q(K,Dt);K.prototype[Fe]=!0;K.prototype.removeEventListener=function(e,t,n,s){ta(this,e,t,n,s)};function G(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var r=t;t=new Z(s,e),Xo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Je(o,s,!0,t)&&r}if(o=t.g=e,r=Je(o,s,!0,t)&&r,r=Je(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Je(o,s,!1,t)&&r}K.prototype.M=function(){if(K.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Rn(n[s]);delete e.g[t],e.h--}}this.I=null};K.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};K.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Je(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Rs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var pr=T.JSON.stringify;function gh(){var e=ra;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mh{constructor(){this.h=this.g=null}add(t,n){const s=na.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var na=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new yh,e=>e.reset());class yh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vh(e){T.setTimeout(()=>{throw e},0)}function sa(e,t){Os||_h(),Ms||(Os(),Ms=!0),ra.add(e,t)}var Os;function _h(){var e=T.Promise.resolve(void 0);Os=function(){e.then(wh)}}var Ms=!1,ra=new mh;function wh(){for(var e;e=gh();){try{e.h.call(e.g)}catch(n){vh(n)}var t=na;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ms=!1}function On(e,t){K.call(this),this.h=e||1,this.g=t||T,this.j=J(this.lb,this),this.l=Date.now()}Q(On,K);v=On.prototype;v.ca=!1;v.R=null;v.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),G(this,"tick"),this.ca&&(gr(this),this.start()))}};v.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gr(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}v.M=function(){On.X.M.call(this),gr(this),delete this.g};function mr(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function ia(e){e.g=mr(()=>{e.g=null,e.i&&(e.i=!1,ia(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Eh extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ia(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(e){Dt.call(this),this.h=e,this.g={}}Q(Ae,Dt);var Di=[];function oa(e,t,n,s){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var r=0;r<n.length;r++){var i=Yo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function aa(e){ur(e.g,function(t,n){this.g.hasOwnProperty(n)&&hr(t)},e),e.g={}}Ae.prototype.M=function(){Ae.X.M.call(this),aa(this)};Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mn(){this.g=!0}Mn.prototype.Aa=function(){this.g=!1};function bh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Th(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Wt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Sh(e,n)+(s?" "+s:"")})}function Ch(e,t){e.info(function(){return"TIMEOUT: "+t})}Mn.prototype.info=function(){};function Sh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return pr(n)}catch{return t}}var Ht={},ki=null;function Pn(){return ki=ki||new K}Ht.Pa="serverreachability";function ca(e){Z.call(this,Ht.Pa,e)}Q(ca,Z);function De(e){const t=Pn();G(t,new ca(t))}Ht.STAT_EVENT="statevent";function ua(e,t){Z.call(this,Ht.STAT_EVENT,e),this.stat=t}Q(ua,Z);function et(e){const t=Pn();G(t,new ua(t,e))}Ht.Qa="timingevent";function la(e,t){Z.call(this,Ht.Qa,e),this.size=t}Q(la,Z);function Ve(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Fn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ha={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function yr(){}yr.prototype.h=null;function Ni(e){return e.h||(e.h=e.i())}function da(){}var $e={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vr(){Z.call(this,"d")}Q(vr,Z);function _r(){Z.call(this,"c")}Q(_r,Z);var Ps;function Vn(){}Q(Vn,yr);Vn.prototype.g=function(){return new XMLHttpRequest};Vn.prototype.i=function(){return{}};Ps=new Vn;function Ue(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Ae(this),this.O=Ih,e=Ns?125:void 0,this.T=new On(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fa}function fa(){this.i=null,this.g="",this.h=!1}var Ih=45e3,Fs={},wn={};v=Ue.prototype;v.setTimeout=function(e){this.O=e};function Vs(e,t,n){e.K=1,e.v=Un(yt(t)),e.s=n,e.P=!0,pa(e,null)}function pa(e,t){e.F=Date.now(),Be(e),e.A=yt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ba(n.i,"t",s),e.C=0,n=e.l.H,e.h=new fa,e.g=ja(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Eh(J(e.La,e,e.g),e.N)),oa(e.S,e.g,"readystatechange",e.ib),t=e.H?Qo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),De(),bh(e.j,e.u,e.A,e.m,e.U,e.s)}v.ib=function(e){e=e.target;const t=this.L;t&&pt(e)==3?t.l():this.La(e)};v.La=function(e){try{if(e==this.g)t:{const u=pt(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||Ns||this.g&&(this.h.h||this.g.fa()||Oi(this.g)))){this.I||u!=4||t==7||(t==8||0>=d?De(3):De(2)),$n(this);var n=this.g.aa();this.Y=n;e:if(ga(this)){var s=Oi(this.g);e="";var r=s.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ot(this),ve(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Th(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vn(a)){var l=a;break e}}l=null}if(n=l)Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$s(this,n);else{this.i=!1,this.o=3,et(12),Ot(this),ve(this);break t}}this.P?(ma(this,u,o),Ns&&this.i&&u==3&&(oa(this.S,this.T,"tick",this.hb),this.T.start())):(Wt(this.j,this.m,o,null),$s(this,o)),u==4&&Ot(this),this.i&&!this.I&&(u==4?$a(this.l,this):(this.i=!1,Be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Ot(this),ve(this)}}}catch{}finally{}};function ga(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function ma(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Ah(e,n),r==wn){t==4&&(e.o=4,et(14),s=!1),Wt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Fs){e.o=4,et(15),Wt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Wt(e.j,e.m,r,null),$s(e,r);ga(e)&&r!=wn&&r!=Fs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ir(t),t.K=!0,et(11))):(Wt(e.j,e.m,n,"[Invalid Chunked Response]"),Ot(e),ve(e))}v.hb=function(){if(this.g){var e=pt(this.g),t=this.g.fa();this.C<t.length&&($n(this),ma(this,e,t),this.i&&e!=4&&Be(this))}};function Ah(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?wn:(n=Number(t.substring(n,s)),isNaN(n)?Fs:(s+=1,s+n>t.length?wn:(t=t.substr(s,n),e.C=s+n,t)))}v.cancel=function(){this.I=!0,Ot(this)};function Be(e){e.V=Date.now()+e.O,ya(e,e.O)}function ya(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ve(J(e.gb,e),t)}function $n(e){e.B&&(T.clearTimeout(e.B),e.B=null)}v.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ch(this.j,this.A),this.K!=2&&(De(),et(17)),Ot(this),this.o=2,ve(this)):ya(this,this.V-e)};function ve(e){e.l.G==0||e.I||$a(e.l,e)}function Ot(e){$n(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,gr(e.T),aa(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function $s(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Us(n.h,e))){if(!e.J&&Us(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Tn(n),jn(n);else break t;Sr(n),et(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ve(J(n.cb,n),6e3));if(1>=Sa(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Mt(n,11)}else if((e.J||n.g==e)&&Tn(n),!vn(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(wr(i,i.h),i.h=null))}if(s.D){const N=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.za=N,M(s.F,s.D,N))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=qa(s,s.H?s.ka:null,s.V),o.J){Ia(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&($n(a),Be(a)),s.g=o}else Fa(s);0<n.i.length&&Hn(n)}else l[0]!="stop"&&l[0]!="close"||Mt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mt(n,7):Cr(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}De(4)}catch{}}function Dh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Nn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function kh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Nn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function va(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Nn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=kh(e),s=Dh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var _a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=t!==void 0?t:e.h,En(this,e.j),this.s=e.s,this.g=e.g,bn(this,e.m),this.l=e.l,t=e.i;var n=new ke;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xi(this,n),this.o=e.o}else e&&(n=String(e).match(_a))?(this.h=!!t,En(this,n[1]||"",!0),this.s=ge(n[2]||""),this.g=ge(n[3]||"",!0),bn(this,n[4]),this.l=ge(n[5]||"",!0),xi(this,n[6]||"",!0),this.o=ge(n[7]||"")):(this.h=!!t,this.i=new ke(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(me(t,Ri,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(me(t,Ri,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(me(n,n.charAt(0)=="/"?Lh:Rh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",me(n,Mh)),e.join("")};function yt(e){return new Ft(e)}function En(e,t,n){e.j=n?ge(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function bn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xi(e,t,n){t instanceof ke?(e.i=t,Ph(e.i,e.h)):(n||(t=me(t,Oh)),e.i=new ke(t,e.h))}function M(e,t,n){e.i.set(t,n)}function Un(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ge(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function me(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,xh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function xh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ri=/[#\/\?@]/g,Rh=/[#\?:]/g,Lh=/[#\?]/g,Oh=/[#\?@]/g,Mh=/#/g;function ke(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Nh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=ke.prototype;v.add=function(e,t){kt(this),this.i=null,e=ce(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function wa(e,t){kt(e),t=ce(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ea(e,t){return kt(e),t=ce(e,t),e.g.has(t)}v.forEach=function(e,t){kt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};v.oa=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};v.W=function(e){kt(this);let t=[];if(typeof e=="string")Ea(this,e)&&(t=t.concat(this.g.get(ce(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return kt(this),this.i=null,e=ce(this,e),Ea(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ba(e,t,n){wa(e,t),0<n.length&&(e.i=null,e.g.set(ce(e,t),ar(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ce(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ph(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wa(this,s),ba(this,r,n))},e)),e.j=t}var Fh=class{constructor(e,t){this.h=e,this.g=t}};function Ta(e){this.l=e||Vh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vh=10;function Ca(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Sa(e){return e.h?1:e.g?e.g.size:0}function Us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function wr(e,t){e.g?e.g.add(t):e.h=t}function Ia(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ta.prototype.cancel=function(){if(this.i=Aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Aa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ar(e.i)}function Er(){}Er.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Er.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function $h(){this.g=new Er}function Uh(e,t,n){const s=n||"";try{va(e,function(r,i){let o=r;Pe(r)&&(o=pr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Bh(e,t){const n=new Mn;if(T.Image){const s=new Image;s.onload=Ye(Ze,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ye(Ze,n,s,"TestLoadImage: error",!1,t),s.onabort=Ye(Ze,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ye(Ze,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ze(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function qe(e){this.l=e.ac||null,this.j=e.jb||!1}Q(qe,yr);qe.prototype.g=function(){return new Bn(this.l,this.j)};qe.prototype.i=function(e){return function(){return e}}({});function Bn(e,t){K.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=br,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(Bn,K);var br=0;v=Bn.prototype;v.open=function(e,t){if(this.readyState!=br)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ne(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=br};v.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Da(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Da(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}v.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?je(this):Ne(this),this.readyState==3&&Da(this)}};v.Va=function(e){this.g&&(this.response=this.responseText=e,je(this))};v.Ua=function(e){this.g&&(this.response=e,je(this))};v.ga=function(){this.g&&je(this)};function je(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ne(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ne(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var qh=T.JSON.parse;function F(e){K.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ka,this.K=this.L=!1}Q(F,K);var ka="",jh=/^https?$/i,Hh=["POST","PUT"];v=F.prototype;v.Ka=function(e){this.L=e};v.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ps.g(),this.C=this.u?Ni(this.u):Ni(Ps),this.g.onreadystatechange=J(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Li(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=Ko(Hh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ra(this),0<this.B&&((this.K=Kh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.qa,this)):this.A=mr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Li(this,i)}};function Kh(e){return te&&ch()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.qa=function(){typeof or<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Li(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Na(e),qn(e)}function Na(e){e.D||(e.D=!0,G(e,"complete"),G(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),qn(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qn(this,!0)),F.X.M.call(this)};v.Ha=function(){this.s||(this.F||this.v||this.l?xa(this):this.fb())};v.fb=function(){xa(this)};function xa(e){if(e.h&&typeof or<"u"&&(!e.C[1]||pt(e)!=4||e.aa()!=2)){if(e.v&&pt(e)==4)mr(e.Ha,0,e);else if(G(e,"readystatechange"),pt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(_a)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!jh.test(r?r.toLowerCase():"")}n=s}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var o=2<pt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Na(e)}}finally{qn(e)}}}}function qn(e,t){if(e.g){Ra(e);const n=e.g,s=e.C[0]?yn:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ra(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function pt(e){return e.g?e.g.readyState:0}v.aa=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};v.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),qh(t)}};function Oi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ka:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}v.Ea=function(){return this.m};v.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function La(e){let t="";return ur(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Tr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=La(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function fe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Oa(e){this.Ca=0,this.i=[],this.j=new Mn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fe("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fe("baseRetryDelayMs",5e3,e),this.bb=fe("retryDelaySeedMs",1e4,e),this.$a=fe("forwardChannelMaxRetries",2,e),this.ta=fe("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ta(e&&e.concurrentRequestLimit),this.Fa=new $h,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}v=Oa.prototype;v.ma=8;v.G=1;function Cr(e){if(Ma(e),e.G==3){var t=e.U++,n=yt(e.F);M(n,"SID",e.I),M(n,"RID",t),M(n,"TYPE","terminate"),He(e,n),t=new Ue(e,e.j,t,void 0),t.K=2,t.v=Un(yt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ja(t.l,null),t.g.da(t.v)),t.F=Date.now(),Be(t)}Ba(e)}function jn(e){e.g&&(Ir(e),e.g.cancel(),e.g=null)}function Ma(e){jn(e),e.u&&(T.clearTimeout(e.u),e.u=null),Tn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Hn(e){Ca(e.h)||e.m||(e.m=!0,sa(e.Ja,e),e.C=0)}function zh(e,t){return Sa(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ve(J(e.Ja,e,t),Ua(e,e.C)),e.C++,!0)}v.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Ue(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Qo(i),Xo(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Pa(this,r,t),n=yt(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),He(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(La(i)))+"&"+t:this.o&&Tr(n,this.o,i)),wr(this.h,r),this.Ya&&M(n,"TYPE","init"),this.O?(M(n,"$req",t),M(n,"SID","null"),r.Z=!0,Vs(r,n,null)):Vs(r,n,t),this.G=2}}else this.G==3&&(e?Mi(this,e):this.i.length==0||Ca(this.h)||Mi(this))};function Mi(e,t){var n;t?n=t.m:n=e.U++;const s=yt(e.F);M(s,"SID",e.I),M(s,"RID",n),M(s,"AID",e.T),He(e,s),e.o&&e.s&&Tr(s,e.o,e.s),n=new Ue(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Pa(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),wr(e.h,n),Vs(n,s,t)}function He(e,t){e.ia&&ur(e.ia,function(n,s){M(t,s,n)}),e.l&&va({},function(n,s){M(t,s,n)})}function Pa(e,t,n){n=Math.min(e.i.length,n);var s=e.l?J(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Uh(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Fa(e){e.g||e.u||(e.Z=1,sa(e.Ia,e),e.A=0)}function Sr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ve(J(e.Ia,e),Ua(e,e.A)),e.A++,!0)}v.Ia=function(){if(this.u=null,Va(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ve(J(this.eb,this),e)}};v.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,et(10),jn(this),Va(this))};function Ir(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Va(e){e.g=new Ue(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=yt(e.sa);M(t,"RID","rpc"),M(t,"SID",e.I),M(t,"CI",e.L?"0":"1"),M(t,"AID",e.T),M(t,"TYPE","xmlhttp"),He(e,t),e.o&&e.s&&Tr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Un(yt(t)),n.s=null,n.P=!0,pa(n,e)}v.cb=function(){this.v!=null&&(this.v=null,jn(this),Sr(this),et(19))};function Tn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function $a(e,t){var n=null;if(e.g==t){Tn(e),Ir(e),e.g=null;var s=2}else if(Us(e.h,t))n=t.D,Ia(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Pn(),G(s,new la(s,n)),Hn(e)}else Fa(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&zh(e,t)||s==2&&Sr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Ua(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Mt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=J(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||En(n,"https"),Un(n)),Bh(n.toString(),s)}else et(2);e.G=0,e.l&&e.l.va(t),Ba(e),Ma(e)}v.kb=function(e){e?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Ba(e){if(e.G=0,e.la=[],e.l){const t=Aa(e.h);(t.length!=0||e.i.length!=0)&&(Ci(e.la,t),Ci(e.la,e.i),e.h.i.length=0,ar(e.i),e.i.length=0),e.l.ua()}}function qa(e,t,n){var s=n instanceof Ft?yt(n):new Ft(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),bn(s,s.m);else{var r=T.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Ft(null,void 0);s&&En(i,s),t&&(i.g=t),r&&bn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&M(s,n,t),M(s,"VER",e.ma),He(e,s),s}function ja(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new F(new qe({jb:!0})):new F(e.ra),t.Ka(e.H),t}function Ha(){}v=Ha.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Ra=function(){};function Cn(){if(te&&!(10<=Number(uh)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){K.call(this),this.g=new Oa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!vn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ue(this)}Q(rt,K);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=qa(e,null,e.V),Hn(e)};rt.prototype.close=function(){Cr(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pr(e),e=n);t.i.push(new Fh(t.ab++,e)),t.G==3&&Hn(t)};rt.prototype.M=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,rt.X.M.call(this)};function Ka(e){vr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Ka,vr);function za(){_r.call(this),this.status=1}Q(za,_r);function ue(e){this.g=e}Q(ue,Ha);ue.prototype.xa=function(){G(this.g,"a")};ue.prototype.wa=function(e){G(this.g,new Ka(e))};ue.prototype.va=function(e){G(this.g,new za)};ue.prototype.ua=function(){G(this.g,"b")};Cn.prototype.createWebChannel=Cn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Fn.NO_ERROR=0;Fn.TIMEOUT=8;Fn.HTTP_ERROR=6;ha.COMPLETE="complete";da.EventType=$e;$e.OPEN="a";$e.CLOSE="b";$e.ERROR="c";$e.MESSAGE="d";K.prototype.listen=K.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.Oa;F.prototype.getLastErrorCode=F.prototype.Ea;F.prototype.getStatus=F.prototype.aa;F.prototype.getResponseJson=F.prototype.Sa;F.prototype.getResponseText=F.prototype.fa;F.prototype.send=F.prototype.da;F.prototype.setWithCredentials=F.prototype.Ka;var Gh=function(){return new Cn},Wh=function(){return Pn()},gs=Fn,Qh=ha,Xh=Ht,Pi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Yh=qe,tn=da,Jh=F;const Fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new $o("@firebase/firestore");function Vi(){return qt.logLevel}function w(e,...t){if(qt.logLevel<=x.DEBUG){const n=t.map(Ar);qt.debug(`Firestore (${le}): ${e}`,...n)}}function vt(e,...t){if(qt.logLevel<=x.ERROR){const n=t.map(Ar);qt.error(`Firestore (${le}): ${e}`,...n)}}function Bs(e,...t){if(qt.logLevel<=x.WARN){const n=t.map(Ar);qt.warn(`Firestore (${le}): ${e}`,...n)}}function Ar(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+e;throw vt(t),new Error(t)}function U(e,t){e||I()}function k(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends ae{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class td{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ed{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new Ga(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new X(t)}}class nd{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(U(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sd{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nd(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class id{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.A=n.token,new rd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=od(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function R(e,t){return e<t?-1:e>t?1:0}function ee(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new st(0,0))}static max(){return new C(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return xe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof xe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class P extends xe{construct(t,n,s){return new P(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new b(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new P(n)}static emptyPath(){return new P([])}}const ad=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends xe{construct(t,n,s){return new nt(t,n,s)}static isValidIdentifier(t){return ad.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new b(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new b(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new b(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new b(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(P.fromString(t))}static fromName(t){return new E(P.fromString(t).popFirst(5))}static empty(){return new E(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return P.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new P(t.slice()))}}function cd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new St(r,E.empty(),t)}function ud(e){return new St(e.readTime,e.key,-1)}class St{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new St(C.min(),E.empty(),-1)}static max(){return new St(C.max(),E.empty(),-1)}}function ld(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:R(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==hd)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Ke(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}kr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Re{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Re("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Re&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){return e==null}function qs(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new tt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(U(!!e),typeof e=="string"){let t=0;const n=gd.exec(e);if(U(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ne(e){return typeof e=="string"?tt.fromBase64String(e):tt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xa(e){const t=e.mapValue.fields.__previous_value__;return Qa(t)?Xa(t):t}function Le(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Qa(e)?4:md(e)?9007199254740991:10:I()}function ht(e,t){if(e===t)return!0;const n=jt(e);if(n!==jt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Le(e).isEqual(Le(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=It(s.timestampValue),o=It(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ne(s.bytesValue).isEqual(ne(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return $(s.geoPointValue.latitude)===$(r.geoPointValue.latitude)&&$(s.geoPointValue.longitude)===$(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return $(s.integerValue)===$(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=$(s.doubleValue),o=$(r.doubleValue);return i===o?qs(i)===qs(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ee(e.arrayValue.values||[],t.arrayValue.values||[],ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($i(i)!==$i(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ht(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Oe(e,t){return(e.values||[]).find(n=>ht(n,t))!==void 0}function se(e,t){if(e===t)return 0;const n=jt(e),s=jt(t);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=$(r.integerValue||r.doubleValue),a=$(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ui(e.timestampValue,t.timestampValue);case 4:return Ui(Le(e),Le(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(r,i){const o=ne(r),a=ne(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=R(o[c],a[c]);if(l!==0)return l}return R(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=R($(r.latitude),$(i.latitude));return o!==0?o:R($(r.longitude),$(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=se(o[c],a[c]);if(l)return l}return R(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===en.mapValue&&i===en.mapValue)return 0;if(r===en.mapValue)return 1;if(i===en.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const d=R(a[u],l[u]);if(d!==0)return d;const p=se(o[a[u]],c[l[u]]);if(p!==0)return p}return R(a.length,l.length)}(e.mapValue,t.mapValue);default:throw I()}}function Ui(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return R(e,t);const n=It(e),s=It(t),r=R(n.seconds,s.seconds);return r!==0?r:R(n.nanos,s.nanos)}function re(e){return js(e)}function js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=It(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ne(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=js(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${js(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function Hs(e){return!!e&&"integerValue"in e}function Nr(e){return!!e&&"arrayValue"in e}function Bi(e){return!!e&&"nullValue"in e}function qi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ms(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=_e(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function md(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n){this.position=t,this.inclusive=n}}function ji(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=se(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ht(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{}class q extends Ya{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new vd(t,n,s):n==="array-contains"?new Ed(t,s):n==="in"?new bd(t,s):n==="not-in"?new Td(t,s):n==="array-contains-any"?new Cd(t,s):new q(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new _d(t,s):new wd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(se(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.matchesComparison(se(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends Ya{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new dt(t,n)}matches(t){return Ja(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ja(e){return e.op==="and"}function Za(e){return yd(e)&&Ja(e)}function yd(e){for(const t of e.filters)if(t instanceof dt)return!1;return!0}function Ks(e){if(e instanceof q)return e.field.canonicalString()+e.op.toString()+re(e.value);if(Za(e))return e.filters.map(t=>Ks(t)).join(",");{const t=e.filters.map(n=>Ks(n)).join(",");return`${e.op}(${t})`}}function tc(e,t){return e instanceof q?function(n,s){return s instanceof q&&n.op===s.op&&n.field.isEqual(s.field)&&ht(n.value,s.value)}(e,t):e instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&tc(i,s.filters[o]),!0):!1}(e,t):void I()}function ec(e){return e instanceof q?function(t){return`${t.field.canonicalString()} ${t.op} ${re(t.value)}`}(e):e instanceof dt?function(t){return t.op.toString()+" {"+t.getFilters().map(ec).join(" ,")+"}"}(e):"Filter"}class vd extends q{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class _d extends q{constructor(t,n){super(t,"in",n),this.keys=nc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class wd extends q{constructor(t,n){super(t,"not-in",n),this.keys=nc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Ed extends q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Nr(n)&&Oe(n.arrayValue,this.value)}}class bd extends q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Oe(this.value.arrayValue,n)}}class Td extends q{constructor(t,n){super(t,"not-in",n)}matches(t){if(Oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Oe(this.value.arrayValue,n)}}class Cd extends q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Nr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Oe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n="asc"){this.field=t,this.dir=n}}function Sd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){this.comparator=t,this.root=n||z.EMPTY}insert(t,n){return new W(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(t){return new W(this.comparator,this.root.remove(t,this.comparator).copy(null,null,z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nn(this.root,t,this.comparator,!0)}}class nn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class z{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??z.RED,this.left=r??z.EMPTY,this.right=i??z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new z(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.comparator=t,this.data=new W(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ki(this.data.getIterator())}getIteratorFrom(t){return new Ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class Ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new bt([])}unionWith(t){let n=new j(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new bt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!ms(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=_e(n)}setAll(t){let n=nt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_e(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());ms(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ht(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];ms(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Kn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new lt(_e(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,C.min(),C.min(),C.min(),lt.empty(),0)}static newFoundDocument(t,n,s,r){return new Y(t,1,n,C.min(),s,r,0)}static newNoDocument(t,n){return new Y(t,2,n,C.min(),C.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,C.min(),C.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function zi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Id(e,t,n,s,r,i,o)}function xr(e){const t=k(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ks(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),zn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>re(s)).join(",")),t.ft=n}return t.ft}function Rr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Sd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hi(e.startAt,t.startAt)&&Hi(e.endAt,t.endAt)}function zs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ad(e,t,n,s,r,i,o,a){return new Gn(e,t,n,s,r,i,o,a)}function Lr(e){return new Gn(e)}function Gi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function kd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Nd(e){return e.collectionGroup!==null}function Xt(e){const t=k(e);if(t.dt===null){t.dt=[];const n=kd(t),s=Dd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new we(n)),t.dt.push(new we(nt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new we(nt.keyField(),i))}}}return t.dt}function _t(e){const t=k(e);if(!t._t)if(t.limitType==="F")t._t=zi(t.path,t.collectionGroup,Xt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Xt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new we(i.field,o))}const s=t.endAt?new Sn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sn(t.startAt.position,t.startAt.inclusive):null;t._t=zi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Gs(e,t,n){return new Gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Wn(e,t){return Rr(_t(e),_t(t))&&e.limitType===t.limitType}function sc(e){return`${xr(_t(e))}|lt:${e.limitType}`}function Ws(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ec(s)).join(", ")}]`),zn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>re(s)).join(",")),`Target(${n})`}(_t(e))}; limitType=${e.limitType})`}function Qn(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Xt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ji(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Xt(n),s)||n.endAt&&!function(r,i,o){const a=ji(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Xt(n),s))}(e,t)}function xd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function rc(e){return(t,n)=>{let s=!1;for(const r of Xt(e)){const i=Rd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Rd(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?se(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(t)?"-0":t}}function Od(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this._=void 0}}function Md(e,t,n){return e instanceof Qs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof In?ic(e,t):e instanceof An?oc(e,t):function(s,r){const i=Fd(s,r),o=Wi(i)+Wi(s.gt);return Hs(i)&&Hs(s.gt)?Od(o):Ld(s.yt,o)}(e,t)}function Pd(e,t,n){return e instanceof In?ic(e,t):e instanceof An?oc(e,t):n}function Fd(e,t){return e instanceof Xs?Hs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Qs extends Xn{}class In extends Xn{constructor(t){super(),this.elements=t}}function ic(e,t){const n=ac(t);for(const s of e.elements)n.some(r=>ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class An extends Xn{constructor(t){super(),this.elements=t}}function oc(e,t){let n=ac(t);for(const s of e.elements)n=n.filter(r=>!ht(r,s));return{arrayValue:{values:n}}}class Xs extends Xn{constructor(t,n){super(),this.yt=t,this.gt=n}}function Wi(e){return $(e.integerValue||e.doubleValue)}function ac(e){return Nr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Vd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof In&&s instanceof In||n instanceof An&&s instanceof An?ee(n.elements,s.elements,ht):n instanceof Xs&&s instanceof Xs?ht(n.gt,s.gt):n instanceof Qs&&s instanceof Qs}(e.transform,t.transform)}class $t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new $t}static exists(t){return new $t(void 0,t)}static updateTime(t){return new $t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Or{}function cc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ud(e.key,$t.none()):new Mr(e.key,e.data,$t.none());{const n=e.data,s=lt.empty();let r=new j(nt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yn(e.key,s,new bt(r.toArray()),$t.none())}}function $d(e,t,n){e instanceof Mr?function(s,r,i){const o=s.value.clone(),a=Xi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Yn?function(s,r,i){if(!cn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(uc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ee(e,t,n,s){return e instanceof Mr?function(r,i,o,a){if(!cn(r.precondition,i))return o;const c=r.value.clone(),l=Yi(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Yn?function(r,i,o,a){if(!cn(r.precondition,i))return o;const c=Yi(r.fieldTransforms,a,i),l=i.data;return l.setAll(uc(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return cn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Qi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ee(n,s,(r,i)=>Vd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mr extends Or{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yn extends Or{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Xi(e,t,n){const s=new Map;U(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Pd(o,a,n[r]))}return s}function Yi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Md(i,o,t))}return s}class Ud extends Or{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V,A;function lc(e){if(e===void 0)return vt("GRPC error has no .code"),m.UNKNOWN;switch(e){case V.OK:return m.OK;case V.CANCELLED:return m.CANCELLED;case V.UNKNOWN:return m.UNKNOWN;case V.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case V.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case V.INTERNAL:return m.INTERNAL;case V.UNAVAILABLE:return m.UNAVAILABLE;case V.UNAUTHENTICATED:return m.UNAUTHENTICATED;case V.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case V.NOT_FOUND:return m.NOT_FOUND;case V.ALREADY_EXISTS:return m.ALREADY_EXISTS;case V.PERMISSION_DENIED:return m.PERMISSION_DENIED;case V.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case V.ABORTED:return m.ABORTED;case V.OUT_OF_RANGE:return m.OUT_OF_RANGE;case V.UNIMPLEMENTED:return m.UNIMPLEMENTED;case V.DATA_LOSS:return m.DATA_LOSS;default:return I()}}(A=V||(V={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Kn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new W(E.comparator);function At(){return qd}const hc=new W(E.comparator);function ye(...e){let t=hc;for(const n of e)t=t.insert(n.key,n);return t}function jd(e){let t=hc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Pt(){return be()}function dc(){return be()}function be(){return new he(e=>e.toString(),(e,t)=>e.isEqual(t))}const Hd=new j(E.comparator);function D(...e){let t=Hd;for(const n of e)t=t.add(n);return t}const Kd=new j(R);function fc(){return Kd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,ze.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Jn(C.min(),r,fc(),At(),D())}}class ze{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ze(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class pc{constructor(t,n){this.targetId=t,this.Et=n}}class gc{constructor(t,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ji{constructor(){this.At=0,this.Rt=to(),this.bt=tt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=D(),n=D(),s=D();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new ze(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=to()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class zd{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=At(),this.qt=Zi(),this.Ut=new j(R)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(zs(i))if(s===0){const o=new E(i.path);this.Qt(n,o,Y.newNoDocument(o,C.min()))}else U(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&zs(a.target)){const c=new E(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Y.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=D();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Jn(t,n,this.Ut,this.Lt,s);return this.Lt=At(),this.qt=Zi(),this.Ut=new j(R),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new Ji,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new j(R),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Ji),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Zi(){return new W(E.comparator)}function to(){return new W(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qd=(()=>({and:"AND",or:"OR"}))();class Xd{constructor(t,n){this.databaseId=t,this.wt=n}}function Yd(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jd(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Yt(e){return U(!!e),C.fromTimestamp(function(t){const n=It(t);return new st(n.seconds,n.nanos)}(e))}function Zd(e,t){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function mc(e){const t=P.fromString(e);return U(wc(t)),t}function ys(e,t){const n=mc(t);if(n.get(1)!==e.databaseId.projectId)throw new b(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(yc(n))}function Ys(e,t){return Zd(e.databaseId,t)}function tf(e){const t=mc(e);return t.length===4?P.emptyPath():yc(t)}function eo(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yc(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ef(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,l){return c.wt?(U(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(U(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:lc(c.code);return new b(l,c.message||"")}(o);n=new gc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ys(e,s.document.name),i=Yt(s.document.updateTime),o=s.document.createTime?Yt(s.document.createTime):C.min(),a=new lt({mapValue:{fields:s.document.fields}}),c=Y.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new un(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ys(e,s.document),i=s.readTime?Yt(s.readTime):C.min(),o=Y.newNoDocument(r,i),a=s.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ys(e,s.document),i=s.removedTargetIds||[];n=new un([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Bd(r),o=s.targetId;n=new pc(o,i)}}return n}function nf(e,t){return{documents:[Ys(e,t.path)]}}function sf(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ys(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ys(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return _c(dt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:zt(u.field),direction:af(u.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||zn(l)?l:{value:l}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function rf(e){let t=tf(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){U(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=vc(u);return d instanceof dt&&Za(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new we(Gt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,zn(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,p=u.values||[];return new Sn(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const d=!u.before,p=u.values||[];return new Sn(p,d)}(n.endAt)),Ad(t,r,o,i,a,"F",c,l)}function of(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function vc(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Gt(t.unaryFilter.field);return q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Gt(t.unaryFilter.field);return q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gt(t.unaryFilter.field);return q.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gt(t.unaryFilter.field);return q.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return q.create(Gt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return dt.create(t.compositeFilter.filters.map(n=>vc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function af(e){return Gd[e]}function cf(e){return Wd[e]}function uf(e){return Qd[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Gt(e){return nt.fromServerFormat(e.fieldPath)}function _c(e){return e instanceof q?function(t){if(t.op==="=="){if(qi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NAN"}};if(Bi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NAN"}};if(Bi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(t.field),op:cf(t.op),value:t.value}}}(e):e instanceof dt?function(t){const n=t.getFilters().map(s=>_c(s));return n.length===1?n[0]:{compositeFilter:{op:uf(t.op),filters:n}}}(e):I()}function wc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&$d(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ee(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ee(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=dc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=cc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(n,s)=>Qi(n,s))&&ee(this.baseMutations,t.baseMutations,(n,s)=>Qi(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,n,s,r,i=C.min(),o=C.min(),a=tt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ut(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.ie=t}}function ff(e){const t=rf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Gs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Je=new gf}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(St.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(St.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class gf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new j(P.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new j(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ie(0)}static vn(){return new ie(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.changes=new he(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ee(s.mutation,r,bt.empty(),st.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const r=Pt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=ye();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Pt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=At();const o=be(),a=be();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Yn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ee(u.mutation,l,u.mutation.getFieldMask(),st.now())):o.set(l.key,bt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new yf(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=be();let r=new W((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||bt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const d=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=dc();u.forEach(p=>{if(!i.has(p)){const f=cc(n.get(p),s.get(p));f!==null&&d.set(p,f),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,d))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Nd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(Pt());let a=-1,c=i;return o.next(l=>g.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?g.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,D())).next(u=>({batchId:a,changes:jd(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let r=ye();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=ye();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(l,u){return new Gn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Y.newInvalidDocument(l)))});let o=ye();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ee(l.mutation,c,bt.empty(),st.now()),Qn(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ff(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.overlays=new W(E.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Pt();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=Pt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new W((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Pt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return g.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hf(n,s));let i=this.es.get(n);i===void 0&&(i=D(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.ns=new j(H.ss),this.rs=new j(H.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new H(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new H(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new E(new P([])),s=new H(n,t),r=new H(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new E(new P([])),s=new H(n,t),r=new H(n,t+1);let i=D();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new H(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class H{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return E.comparator(t.key,n.key)||R(t._s,n._s)}static os(t,n){return R(t._s,n._s)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new j(H.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lf(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new H(n,0),r=new H(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(R);return n.forEach(r=>{const i=new H(r,0),o=new H(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new H(new E(i),0);let a=new j(R);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){U(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,r=>{const i=new H(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new H(n,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.Es=t,this.docs=new W(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let s=At();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Y.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=At();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ld(ud(u),s)<=0||(r.has(u.key)||Qn(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,r){I()}As(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tf(this)}getSize(t){return g.resolve(this.size)}}class Tf extends mf{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.persistence=t,this.Rs=new he(n=>xr(n),Rr),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pr,this.targetCount=0,this.vs=ie.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ie(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new kr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Cf(this),this.indexManager=new pf,this.remoteDocumentCache=function(s){return new bf(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new df(n),this.Ns=new _f(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Ef(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const r=new If(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class If extends dd{constructor(t){super(),this.currentSequenceNumber=t}}class Fr{constructor(t){this.persistence=t,this.Fs=new Pr,this.$s=null}static Bs(t){return new Fr(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=E.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(Gi(n))return g.resolve(null);let s=_t(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Gs(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=D(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(t,Gs(n,null,"F")):this.Bi(t,l,n,c)}))})))}Oi(t,n,s,r){return Gi(n)||r.isEqual(C.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(Vi()<=x.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ws(n)),this.Bi(t,o,n,cd(r,-1)))})}Fi(t,n){let s=new j(rc(t));return n.forEach((r,i)=>{Qn(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return Vi()<=x.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Ni.getDocumentsMatchingQuery(t,n,St.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new W(R),this.Ui=new he(i=>xr(i),Rr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vf(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function kf(e,t,n,s){return new Df(e,t,n,s)}async function Ec(e,t){const n=k(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function bc(e){const t=k(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Nf(e,t){const n=k(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((u,d)=>{const p=r.get(d);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,d)));let f=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(d)?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(d,f),function(y,N,S){return y.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,f,u)&&a.push(n.Cs.updateTargetData(i,f))});let c=At(),l=D();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(xf(i,o,t.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(C.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(d=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function xf(e,t,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=At();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Rf(e,t){const n=k(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Ut(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function Js(e,t,n){const s=k(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ke(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function no(e,t,n){const s=k(e);let r=C.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=k(a),d=u.Ui.get(l);return d!==void 0?g.resolve(u.qi.get(d)):u.Cs.getTargetData(c,l)}(s,o,_t(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:D())).next(a=>(Lf(s,xd(t),a),{documents:a,Hi:i})))}function Lf(e,t,n){let s=e.Ki.get(t)||C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class so{constructor(){this.activeTargetIds=fc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Of{constructor(){this.Lr=new so,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new so,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw Bs("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+le,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Pf[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Jh;a.setWithCredentials(!0),a.listenOnce(Qh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gs.NO_ERROR:const l=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(l)),i(l);break;case gs.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new b(m.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const u=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const f=function(y){const N=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(N)>=0?N:m.UNKNOWN}(p.status);o(new b(f,p.message))}else o(new b(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(m.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Gh(),o=Wh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Yh({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,d=!1;const p=new Ff({Hr:y=>{d?w("Connection","Not sending because WebChannel is closed:",y):(u||(w("Connection","Opening WebChannel transport."),l.open(),u=!0),w("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),f=(y,N,S)=>{y.listen(N,L=>{try{S(L)}catch(O){setTimeout(()=>{throw O},0)}})};return f(l,tn.EventType.OPEN,()=>{d||w("Connection","WebChannel transport opened.")}),f(l,tn.EventType.CLOSE,()=>{d||(d=!0,w("Connection","WebChannel transport closed"),p.io())}),f(l,tn.EventType.ERROR,y=>{d||(d=!0,Bs("Connection","WebChannel transport errored:",y),p.io(new b(m.UNAVAILABLE,"The operation could not be completed")))}),f(l,tn.EventType.MESSAGE,y=>{var N;if(!d){const S=y.data[0];U(!!S);const L=S,O=L.error||((N=L[0])===null||N===void 0?void 0:N.error);if(O){w("Connection","WebChannel received error:",O);const ft=O.status;let it=function(Kt){const xt=V[Kt];if(xt!==void 0)return lc(xt)}(ft),Nt=O.message;it===void 0&&(it=m.INTERNAL,Nt="Unknown error status: "+ft+" with message "+O.message),d=!0,p.io(new b(it,Nt)),l.close()}else w("Connection","WebChannel received:",S),p.ro(S)}}),f(o,Xh.STAT_EVENT,y=>{y.stat===Pi.PROXY?w("Connection","Detected buffering proxy"):y.stat===Pi.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){return new Xd(e,!0)}class Cc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Cc(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new b(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uf extends $f{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=ef(this.yt,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?Yt(i.readTime):C.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=eo(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=zs(a)?{documents:nf(r,a)}:{query:sf(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Jd(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Yd(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=of(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=eo(this.yt),n.removeTarget=t,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new b(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new b(m.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(m.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class qf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(vt(n),this.ou=!1):w("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{We(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c._u.add(4),await Ge(c),c.gu.set("Unknown"),c._u.delete(4),await Zn(c)}(this))})}),this.gu=new qf(s,r)}}async function Zn(e){if(We(e))for(const t of e.wu)await t(!0)}async function Ge(e){for(const t of e.wu)await t(!1)}function Sc(e,t){const n=k(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Br(n)?Ur(n):de(n).ko()&&$r(n,t))}function Ic(e,t){const n=k(e),s=de(n);n.du.delete(t),s.ko()&&Ac(n,t),n.du.size===0&&(s.ko()?s.Fo():We(n)&&n.gu.set("Unknown"))}function $r(e,t){e.yu.Ot(t.targetId),de(e).zo(t)}function Ac(e,t){e.yu.Ot(t),de(e).Ho(t)}function Ur(e){e.yu=new zd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),de(e).start(),e.gu.uu()}function Br(e){return We(e)&&!de(e).No()&&e.du.size>0}function We(e){return k(e)._u.size===0}function Dc(e){e.yu=void 0}async function Hf(e){e.du.forEach((t,n)=>{$r(e,t)})}async function Kf(e,t){Dc(e),Br(e)?(e.gu.hu(t),Ur(e)):e.gu.set("Unknown")}async function zf(e,t,n){if(e.gu.set("Online"),t instanceof gc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await io(e,s)}else if(t instanceof un?e.yu.Kt(t):t instanceof pc?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(C.min()))try{const s=await bc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),Ac(r,a);const l=new Ut(c.target,a,1,c.sequenceNumber);$r(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await io(e,s)}}async function io(e,t,n){if(!Ke(t))throw t;e._u.add(1),await Ge(e),e.gu.set("Offline"),n||(n=()=>bc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Zn(e)})}async function oo(e,t){const n=k(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=We(n);n._u.add(3),await Ge(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Zn(n)}async function Gf(e,t){const n=k(e);t?(n._u.delete(2),await Zn(n)):t||(n._u.add(2),await Ge(n),n.gu.set("Unknown"))}function de(e){return e.pu||(e.pu=function(t,n,s){const r=k(t);return r.su(),new Uf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Hf.bind(null,e),Zr:Kf.bind(null,e),Wo:zf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Br(e)?Ur(e):e.gu.set("Unknown")):(await e.pu.stop(),Dc(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new qr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kc(e,t){if(vt("AsyncQueue",`${t}: ${e}`),Ke(e))return new b(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=ye(),this.sortedSet=new W(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.Tu=new W(E.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class oe{constructor(t,n,s,r,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oe(t,n,Jt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.Au=void 0,this.listeners=[]}}class Qf{constructor(){this.queries=new he(t=>sc(t),Wn),this.onlineState="Unknown",this.Ru=new Set}}async function Xf(e,t){const n=k(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Wf),r)try{i.Au=await n.onListen(s)}catch(o){const a=kc(o,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&jr(n)}async function Yf(e,t){const n=k(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Jf(e,t){const n=k(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&jr(n)}function Zf(e,t,n){const s=k(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function jr(e){e.Ru.forEach(t=>{t.next()})}class tp{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.key=t}}class xc{constructor(t){this.key=t}}class ep{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=D(),this.mutatedKeys=D(),this.Gu=rc(t),this.Qu=new Jt(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new ao,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,d)=>{const p=r.get(u),f=Qn(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),N=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let S=!1;p&&f?p.data.isEqual(f.data)?y!==N&&(s.track({type:3,doc:f}),S=!0):this.Hu(p,f)||(s.track({type:2,doc:f}),S=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!p&&f?(s.track({type:0,doc:f}),S=!0):p&&!f&&(s.track({type:1,doc:p}),S=!0,(c||l)&&(a=!0)),S&&(f?(o=o.add(f),i=N?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((l,u)=>function(d,p){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return f(d)-f(p)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new oe(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ao,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=D(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new xc(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Nc(s))}),n}tc(t){this.qu=t.Hi,this.Ku=D();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return oe.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class np{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class sp{constructor(t){this.key=t,this.nc=!1}}class rp{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new he(a=>sc(a),Wn),this.rc=new Map,this.oc=new Set,this.uc=new W(E.comparator),this.cc=new Map,this.ac=new Pr,this.hc={},this.lc=new Map,this.fc=ie.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ip(e,t){const n=dp(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Rf(n.localStore,_t(t));n.isPrimaryClient&&Sc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await op(n,t,s,a==="current",o.resumeToken)}return r}async function op(e,t,n,s,r){e._c=(d,p,f)=>async function(y,N,S,L){let O=N.view.Wu(S);O.$i&&(O=await no(y.localStore,N.query,!1).then(({documents:Nt})=>N.view.Wu(Nt,O)));const ft=L&&L.targetChanges.get(N.targetId),it=N.view.applyChanges(O,y.isPrimaryClient,ft);return uo(y,N.targetId,it.Xu),it.snapshot}(e,d,p,f);const i=await no(e.localStore,t,!0),o=new ep(t,i.Hi),a=o.Wu(i.documents),c=ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),l=o.applyChanges(a,e.isPrimaryClient,c);uo(e,n,l.Xu);const u=new np(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function ap(e,t){const n=k(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Wn(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Js(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ic(n.remoteStore,s.targetId),Zs(n,s.targetId)}).catch(Dr)):(Zs(n,s.targetId),await Js(n.localStore,s.targetId,!0))}async function Rc(e,t){const n=k(e);try{const s=await Nf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(U(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?U(o.nc):r.removedDocuments.size>0&&(U(o.nc),o.nc=!1))}),await Oc(n,s,t)}catch(s){await Dr(s)}}function co(e,t,n){const s=k(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=k(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const d of u.listeners)d.bu(o)&&(c=!0)}),c&&jr(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function cp(e,t,n){const s=k(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new W(E.comparator);o=o.insert(i,Y.newNoDocument(i,C.min()));const a=D().add(i),c=new Jn(C.min(),new Map,new j(R),o,a);await Rc(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Hr(s)}else await Js(s.localStore,t,!1).then(()=>Zs(s,t,n)).catch(Dr)}function Zs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Lc(e,s)})}function Lc(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Ic(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Hr(e))}function uo(e,t,n){for(const s of n)s instanceof Nc?(e.ac.addReference(s.key,t),up(e,s)):s instanceof xc?(w("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Lc(e,s.key)):I()}function up(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(w("SyncEngine","New document in limbo: "+n),e.oc.add(s),Hr(e))}function Hr(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new E(P.fromString(t)),s=e.fc.next();e.cc.set(s,new sp(n)),e.uc=e.uc.insert(n,s),Sc(e.remoteStore,new Ut(_t(Lr(n.path)),s,2,kr.at))}}async function Oc(e,t,n){const s=k(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Vr.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=k(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>g.forEach(c,d=>g.forEach(d.Si,p=>l.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>g.forEach(d.Di,p=>l.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!Ke(u))throw u;w("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const p=l.qi.get(d),f=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(d,y)}}}(s.localStore,i))}async function lp(e,t){const n=k(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Ec(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new b(m.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Oc(n,s.ji)}}function hp(e,t){const n=k(e),s=n.cc.get(t);if(s&&s.nc)return D().add(s.key);{let r=D();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function dp(e){const t=k(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cp.bind(null,t),t.sc.Wo=Jf.bind(null,t.eventManager),t.sc.wc=Zf.bind(null,t.eventManager),t}class fp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Tc(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return kf(this.persistence,new Af,t.initialUser,this.yt)}yc(t){return new Sf(Fr.Bs,this.yt)}gc(t){return new Of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>co(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lp.bind(null,this.syncEngine),await Gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qf}createDatastore(t){const n=Tc(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Vf(r));var r;return function(i,o,a,c){return new Bf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>co(this.syncEngine,a,0),o=ro.C()?new ro:new Mf,new jf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,l){const u=new rp(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=k(t);w("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ge(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t,n){if(!n)throw new b(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mp(e,t,n,s){if(t===!0&&s===!0)throw new b(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lo(e){if(!E.isDocumentKey(e))throw new b(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function tr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yp(e);throw new b(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;class fo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,mp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zh;switch(n.type){case"gapi":const s=n.client;return new sd(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ho.get(t);n&&(w("ComponentProvider","Removing Datastore"),ho.delete(t),n.terminate())}(this),Promise.resolve()}}function vp(e,t,n,s={}){var r;const i=(e=tr(e,Kr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Bs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=X.MOCK_USER;else{o=Pu(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new b(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(c)}e._authCredentials=new td(new Ga(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class zr{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new zr(this.firestore,t,this._query)}}class Me extends zr{constructor(t,n,s){super(t,n,Lr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new E(t))}withConverter(t){return new Me(this.firestore,t,this._path)}}function Mc(e,t,...n){if(e=qu(e),arguments.length===1&&(t=Wa.R()),gp("doc","path",t),e instanceof Kr){const s=P.fromString(t,...n);return lo(s),new mt(e,null,new E(s))}{if(!(e instanceof mt||e instanceof Me))throw new b(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return lo(s),new mt(e.firestore,e instanceof Me?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=X.UNAUTHENTICATED,this.clientId=Wa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=kc(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ep(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ec(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function bp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tp(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>oo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>oo(t.remoteStore,i)),e.onlineComponents=t}async function Tp(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Ep(e,new fp)),e.offlineComponents}async function Cp(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await bp(e,new pp)),e.onlineComponents}async function Sp(e){const t=await Cp(e),n=t.eventManager;return n.onListen=ip.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n}function Ip(e,t,n={}){const s=new Vt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new _p({next:d=>{i.enqueueAndForget(()=>Yf(r,u));const p=d.docs.has(o);!p&&d.fromCache?c.reject(new b(m.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&a&&a.source==="server"?c.reject(new b(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new tp(Lr(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Xf(r,u)}(await Sp(e),e.asyncQueue,t,n,s)),s.promise}class Ap{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Cc(this,"async_queue_retry"),this.Wc=()=>{const n=vs();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=vs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Vt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ke(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=qr.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Pc extends Kr{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Ap,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fc(this),this._firestoreClient.terminate()}}function Dp(e,t){const n=typeof e=="object"?e:Bl(),s=typeof e=="string"?e:t||"(default)",r=Fl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Lu("firestore");i&&vp(r,...i)}return r}function kp(e){return e._firestoreClient||Fc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new fd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new wp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dn(tt.fromBase64String(t))}catch(n){throw new b(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Dn(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}const xp=new RegExp("[~\\*/\\[\\]]");function Rp(e,t,n){if(t.search(xp)>=0)throw po(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vc(...t.split("."))._internalPath}catch{throw po(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function po(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new b(m.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lp extends $c{data(){return super.data()}}function Uc(e,t){return typeof t=="string"?Rp(e,t):t instanceof Vc?t._internalPath:t._delegate._internalPath}class Op{convertValue(t,n="none"){switch(jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Kn(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Np($(t.latitude),$(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Xa(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Le(t));default:return null}}convertTimestamp(t){const n=It(t);return new st(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=P.fromString(t);U(wc(s));const r=new Re(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bc extends $c{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Uc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pp extends Bc{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e){e=tr(e,mt);const t=tr(e.firestore,Pc);return Ip(kp(t),e._key).then(n=>Vp(t,e,n))}class Fp extends Op{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function Vp(e,t,n){const s=n.docs.get(t._key),r=new Fp(e);return new Bc(e,r,t._key,s,new Mp(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){le=n})(Ul),mn(new Ce("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Pc(new ed(n.getProvider("auth-internal")),new id(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Re(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Qt(Fi,"3.8.3",e),Qt(Fi,"3.8.3","esm2017")})();var $p="firebase",Up="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt($p,Up,"app");const Bp={apiKey:"AIzaSyBfHxfMzMRGF9T-_Wh_I40g__4hfjBFFEw",authDomain:"portfolio-b5db8.firebaseapp.com",projectId:"portfolio-b5db8",storageBucket:"portfolio-b5db8.appspot.com",messagingSenderId:"243112160497",appId:"1:243112160497:web:a827699f88976b88a44d50",measurementId:"G-TZ4R4EBYJ0"},qp=qo(Bp),jc=Dp(qp);let jp=new Array(20).fill({lang:"Loading",description:"아직 로딩 중 입니다...",link:null,name:"🃏"}),_s=null;async function Hp(e){let t=new Array;if(_s===null){const n=Mc(jc,"v2","service");t=(await qc(n)).data().list,_s=t,console.log("model: cache miss!"),console.log("model: saved cache")}else t=_s,console.log("model: catched cache!");e(t)}let ws=null;async function Kp(e){let t=new Array;if(ws===null){const n=Mc(jc,"v2","skill");t=(await qc(n)).data().list,ws=t,console.log("model: cache miss!"),console.log("model: saved cache")}else t=ws,console.log("model: catched cache!");e(t)}const zp=()=>{const[e,t]=rr(jp);return ko(()=>{Hp(n=>{t(n)})},[]),h("div",{class:"R85 mx-auto",children:[h("hr",{class:"my-5"}),h(_u,{children:e.map((n,s)=>h(bu.Thumbnailless,{title:n.name,description:n.description,btn:{href:n.link,text:"더보기.. 💡"},children:h(Cu,{lang:n.lang})},s))})]})};const Gp=({elements:e})=>h("section",{class:"py-2",children:h("ul",{class:"timeline",children:e.map((t,n)=>h("li",{class:"timeline-item mb-5",children:[h("h5",{class:"fw-bold",children:t.name}),h("p",{class:"text-muted mb-2 fw-bold",children:t.subname}),h("p",{class:"text-muted text-break",children:t.description})]},n))})}),Wp=()=>{const[e,t]=rr(new Array);return ko(()=>{Kp(n=>{t(n)})},[]),h(at,{children:[h("h1",{class:"text-center fw-bold mt-2",children:"My skills 🔨"}),h("hr",{}),h("div",{class:"R85 mx-auto",children:e.map((n,s)=>h("div",{children:[h("h3",{class:"timeline-title__sort-by-list-icon",children:n.title}),h(Gp,{elements:n.content})]},s))})]})},pe=({text:e,href:t})=>h("a",{href:t,class:"btn btn-outline-secondary m-1",children:e}),Qp=()=>h(at,{children:h("div",{class:"container my-5",children:h("div",{class:"row justify-content-center",children:h("div",{class:"col-md-10",children:h("div",{class:"row align-items-center",children:[h("div",{class:"col-lg-7 mb-5 mb-lg-0",children:[h("h2",{class:"mb-5",children:"이것은 Contact Form일 지어다."}),h("form",{class:"border-right pr-5 mb-5",method:"post",id:"contactForm",name:"contactForm",novalidate:"novalidate",children:[h("div",{class:"row",children:[h("div",{class:"col-md-6 form-group",children:h("input",{type:"text",class:"form-control",name:"fname",id:"fname",placeholder:"First name"})}),h("div",{class:"col-md-6 form-group",children:h("input",{type:"text",class:"form-control",name:"lname",id:"lname",placeholder:"Last name"})})]}),h("div",{class:"row",children:h("div",{class:"col-md-12 form-group",children:h("input",{type:"text",class:"form-control my-2",name:"email",id:"email",placeholder:"Email"})})}),h("div",{class:"row",children:h("div",{class:"col-md-12 form-group",children:h("textarea",{class:"form-control mb-2",name:"message",id:"message",cols:"30",rows:"7",placeholder:"Write your message"})})}),h("div",{class:"row",children:h("div",{class:"col-md-12",children:[h("input",{type:"submit",value:"기능 구현 안됨 🥲",class:"btn btn-primary py-2 px-4 disabled"}),h("span",{class:"submitting"})]})})]})]}),h("div",{class:"col-lg-4 ml-auto",children:[h("h3",{class:"mb-4",children:"SNS로 소통하기"}),h(pe,{text:"💬 Discord",href:wt.discord}),h(pe,{text:"🐙 Github",href:wt.github}),h(pe,{text:"🗞️ Velog",href:wt.velog}),h(pe,{text:"📧 Email",href:wt.email}),h(pe,{text:"🗿 Reddit",href:wt.reddit})]})]})})})})}),Xp=()=>h("h1",{className:"fs-1 fw-bold text-center",style:{marginTop:"35vh",marginBottom:"35vh"},children:"찾는 페이지가 없는 거 같아요... 🔥"}),Yp="체력물약 | STUD",Jp=[{name:"📦 Service",path:"/service"},{name:"🔥 My Skils",path:"/skill"},{name:"🙏 Contact",path:"/contact"},{name:"📝 Blog",path:"https://velog.io/@potionstudio"}],er={title:Yp,links:Jp},Zp=()=>h("nav",{class:"navbar navbar-expand-lg bg-body-tertiary non-selectable",children:h("div",{class:"container-fluid",children:[h(Zt,{className:"navbar-brand fw-bold",to:"/",children:er.title}),h("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:h("span",{class:"navbar-toggler-icon"})}),h("div",{class:"collapse navbar-collapse",id:"navbarNav",children:h("ul",{class:"navbar-nav",children:er.links.map((e,t)=>h("li",{class:"nav-item",children:h(Zt,{className:"nav-link",to:e.path,children:e.name})},t))})})]})}),tg=()=>h("p",{className:"text-center text-muted",children:["Built with"," ",h("a",{href:"https://github.com/twbs/bootstrap/blob/main/LICENSE",children:"Bootstrap"})," ",","," ",h("a",{href:"https://github.com/preactjs/preact/blob/master/LICENSE",children:"Preact"})," ","and ",h("a",{href:"https://firebase.google.com/",children:"Firebase"})]}),eg=()=>h("div",{class:"container non-selectable",children:h("footer",{class:"py-3 my-4",children:[h("ul",{class:"nav justify-content-center border-bottom pb-3 mb-3",children:er.links.map((e,t)=>h("li",{class:"nav-item",children:h(Zt,{to:e.path,className:"nav-link px-2 text-muted",children:e.name})},t))}),h(tg,{})]})}),ng=({children:e})=>h(at,{children:[h(Zp,{}),e,h(eg,{})]});function sg(){return h(ng,{children:h(uu,{children:[h(vu,{path:"/"}),h(zp,{path:"/service"}),h(Wp,{path:"/skill"}),h(Qp,{path:"/contact"}),h(Xp,{path:"/err"})]})})}Wc(h(sg,{}),document.getElementById("app"));
