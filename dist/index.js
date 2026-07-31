"use strict";var j=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var O=j(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(i,a,o,q,u,g,R,s,y,l,n,t){var c,h,e,x,m,v,w,r,f;if(i<=0||a<=0)return-1;if(k([q,u])){for(e=a,x=i,f=x-1;f>=0;f--){for(m=g+f*q+(e-1)*u,w=y+(e-1)*s,r=e-1;r>=0&&o[m]===R[w];r--)m-=u,w-=s;if(r===-1)return f}return-1}for(e=i,x=a,c=-q,h=e*q-u,v=t,r=0;r<e;r++)l[v]=1,v+=n;for(m=g+(e-1)*q+(x-1)*u,w=y+(x-1)*s,f=x-1;f>=0;f--){for(v=t+(e-1)*n,r=e-1;r>=0;r--)o[m]!==R[w]&&(l[v]=0),m+=c,v-=n;m+=h,w-=s}for(v=t+(e-1)*n,r=e-1;r>=0&&l[v]!==1;r--)v-=n;return r}p.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(i,a,o,q,u,g,R,s,y){var l,n,t;if(!B(i))throw new TypeError(d('2f7Fx',i));if(G(i)?t=o:t=a,u<E(1,t))throw new RangeError(d('2f7IR',E(1,t),u));return H(i)?(l=1,n=u):(l=u,n=1),J(a,o,q,l,n,0,g,R,I(o,R),s,y,I(a,y))}F.exports=K
});var C=j(function(N,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=O();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),b,T=Y(U(__dirname,"./native.js"));Z(T)?b=$:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
