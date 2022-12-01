// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var o=Math.floor;function i(r){return o(r)===r}function u(r){return i(r/2)}function a(r){return u(r>0?r-1:r+1)}var f=Math.sqrt;function c(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty,v=Object.prototype,p=v.toString,b=v.__defineGetter__,s=v.__defineSetter__,w=v.__lookupGetter__,A=v.__lookupSetter__;var _=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?y:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===p.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(w.call(r,n)||A.call(r,n)?(e=r.__proto__,r.__proto__=v,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&b&&b.call(r,n,t.get),u&&s&&s.call(r,n,t.set),r};function m(r,n,t){_(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var g=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return g.call(r);t=r[h],i=h,n=null!=(o=r)&&U.call(o,i);try{r[h]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[h]=t:delete r[h],e}:function(r){return g.call(r)},I="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null;var V,W="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var x=V,k="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:x};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}m(nr,"assign",rr);var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var ar,fr,cr=!0===K?1:0,lr=new P(1),yr=new E(lr.buffer);function vr(r){return lr[0]=r,yr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),sr=new E(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,mr[1])}var gr=!0===K?1:0,Ur=new P(1),hr=new E(Ur.buffer);function jr(r,n){return Ur[0]=r,hr[gr]=n>>>0,Ur[0]}var Ir=[1,1.5],Nr=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(n,t,o,i){return r(n)||e(n)?(t[i]=n,t[i+o]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+o]=-52,t):(t[i]=n,t[i+o]=0,t)}m((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Hr(o,i){var u,a;return 0===i||0===o||r(o)||e(o)?o:(Sr(o,Er,1,0),i+=Er[1],i+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(o=Er[0]),i<-1074?dr(0,o):i>1023?o<0?t:n:(i<=-1023?(i+=52,a=2220446049250313e-31):a=1,nr.assign(o,Fr,1,0),u=Fr[0],u&=2148532223,a*_r(u|=i+1023<<20,Fr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Lr=[0,0];function Mr(o,u){var l,y,v,p,b,s,w,A,_,m,d,g,U,h;if(r(o)||r(u))return NaN;if(nr.assign(u,Pr,1,0),b=Pr[0],0===Pr[1]){if(0===u)return 1;if(1===u)return o;if(-1===u)return 1/o;if(.5===u)return f(o);if(-.5===u)return 1/f(o);if(2===u)return o*o;if(3===u)return o*o*o;if(4===u)return(o*=o)*o;if(e(u))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(o,u)}if(nr.assign(o,Pr,1,0),p=Pr[0],0===Pr[1]){if(0===p)return function(r,e){return e===t?n:e===n?0:e>0?a(e)?r:0:a(e)?dr(n,r):n}(o,u);if(1===o)return 1;if(-1===o&&a(u))return-1;if(e(o))return o===t?Mr(-0,-u):u<0?0:n}if(o<0&&!1===i(u))return(o-o)/(o-o);if(v=c(o),l=2147483647&p|0,y=2147483647&b|0,w=b>>>31|0,s=(s=p>>>31|0)&&a(u)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,u);if(l<1072693247)return 1===w?s*Tr*Tr:s*Gr*Gr;if(l>1072693248)return 0===w?s*Tr*Tr:s*Gr*Gr;d=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Lr,v)}else d=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p,b,s,w,A,_,m,d,g,U,h;return d=0,t<1048576&&(d-=53,t=vr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?U=0:g<767610?U=1:(U=0,d+=1,t-=1048576),u=ir(o=(_=(n=jr(n,t))-(c=Ir[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=U<<18),A=(i=o*o)*i*(0===(h=i)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),f=ir(f=3+(i=u*u)+(A+=(a=m*(_-u*f-u*(n-(f-c))))*(u+o)),0),s=(p=-7.028461650952758e-9*(y=ir(y=(_=u*f)+(m=a*f+(A-(f-3-i))*o),0))+.9617966939259756*(m-(y-_))+Or[U])-((b=ir(b=(v=.9617967009544373*y)+p+(l=Nr[U])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Lr,v,l);if(g=(m=(u-(A=ir(u,0)))*d[0]+u*d[1])+(_=A*d[0]),nr.assign(g,Pr,1,0),U=ur(Pr[0]),h=ur(Pr[1]),U>=1083179008){if(0!=(U-1083179008|h))return s*Tr*Tr;if(m+8008566259537294e-32>g-_)return s*Tr*Tr}else if((2147483647&U)>=1083231232){if(0!=(U-3230714880|h))return s*Gr*Gr;if(m<=g-_)return s*Gr*Gr}return g=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=jr(0,e)),r=ur(r=vr(c=1-((c=(u=.6931471824645996*(i=ir(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(o=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-u))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Hr(c,l):jr(c,r)}(U,_,m),s*g}var Vr=Math.ceil;var Wr=[0,0];function xr(n){var e,o,i,u,a;if(r(n)||n<0)return NaN;if(nr.assign(n,Wr,1,0),a=0,(o=Wr[0])<1048576){if(0==(2147483647&o|Wr[1]))return t;a-=54,o=vr(n*=0x40000000000000)}return o>=2146435072?n+n:(a+=(o>>20)-1023|0,a+=(u=(o&=1048575)+614244&1048576|0)>>20|0,i=function(r){var n,t,e,o,i,u,a,f,c,l,y;return i=r-1,(1048575&2+(o=vr(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=1048575)-398458|0,y=440401-o|0,t=(c=(a=(u=i/(2+i))*u)*a)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=a*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(l|=y)>0?u*((n=.5*i*i)+f)-n:u*(f-i))}(n=jr(n,o|1072693248^u)),1.6751713164886512e-10*((n-=1)+i)+1.4426950407214463*(n-(e=ir(n,0))+i)+1.4426950407214463*e+a)}function kr(t){var i,u;return r(t)||e(t)||0===t?t:(t<0?(t=-t,i=-1):i=1,-1074===(u=xr(t))?t:(u=-1===i?o(u):Vr(u))>1023?n:i*Mr(2,u))}export{kr as default};
//# sourceMappingURL=mod.js.map
