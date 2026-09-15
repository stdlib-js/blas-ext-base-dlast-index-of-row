"use strict";var O=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var b=O(function(L,h){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(n,a,o,l,u,j,y,s,g,q,i,t){var x,d,e,w,m,v,R,r,f;if(n<=0||a<=0)return-1;if(z([l,u])){for(e=a,w=n,f=w-1;f>=0;f--){for(m=j+f*l+(e-1)*u,R=g+(e-1)*s,r=e-1;r>=0&&o[m]===y[R];r--)m-=u,R-=s;if(r===-1)return f}return-1}for(e=n,w=a,x=-l,d=e*l-u,v=t,r=0;r<e;r++)q[v]=1,v+=i;for(m=j+(e-1)*l+(w-1)*u,R=g+(w-1)*s,f=w-1;f>=0;f--){for(v=t+(e-1)*i,r=e-1;r>=0;r--)o[m]!==y[R]&&(q[v]=0),m+=x,v-=i;m+=d,R-=s}for(v=t+(e-1)*i,r=e-1;r>=0&&q[v]!==1;r--)v-=i;return r}h.exports=B
});var S=O(function(M,F){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function J(n,a,o,l,u,j,y,s,g){var q,i,t,x;if(x=C(n),x===null)throw new TypeError(E('2f7Fx',n));if(G(x)?(t=o,q=u,i=1):(t=a,q=1,i=u),u<I(1,t))throw new RangeError(E('2f7IR',I(1,t),u));return H(a,o,l,q,i,0,j,y,p(o,y),s,g,p(a,g))}F.exports=J
});var T=O(function(D,_){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),P=b();K(V,"ndarray",P);_.exports=V
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),c,k=U(Q(__dirname,"./native.js"));Y(k)?c=Z:c=k;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
