"use strict";var j=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var O=j(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(i,a,m,f,u,g,R,s,y,q,n,o){var c,h,e,x,l,v,w,r,t;if(i<=0||a<=0)return-1;if(k([f,u])){for(e=a,x=i,t=x-1;t>=0;t--){for(l=g+t*f+(e-1)*u,w=y+(e-1)*s,r=e-1;r>=0&&m[l]===R[w];r--)l-=u,w-=s;if(r===-1)return t}return-1}for(e=i,x=a,c=-f,h=e*f-u,v=o,r=0;r<e;r++)q[v]=1,v+=n;for(l=g+(e-1)*f+(x-1)*u,w=y+(x-1)*s,t=x-1;t>=0;t--){for(v=o+(e-1)*n,r=e-1;r>=0;r--)m[l]!==R[w]&&(q[v]=0),l+=c,v-=n;l+=h,w-=s}for(v=o+(e-1)*n,r=e-1;r>=0&&q[v]!==1;r--)v-=n;return r}p.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(i,a,m,f,u,g,R,s,y){var q,n,o;if(!B(i))throw new TypeError(d('nullFx',i));if(G(i)?o=m:o=a,u<E(1,o))throw new RangeError(d('nullIR',E(1,o),u));return H(i)?(q=1,n=u):(q=u,n=1),J(a,m,f,q,n,0,g,R,I(m,R),s,y,I(a,y))}F.exports=K
});var C=j(function(N,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=O();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),b,T=Y(U(__dirname,"./native.js"));Z(T)?b=$:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
