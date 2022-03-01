import { bY as a, bq as v, b1 as p, dP as L, a$ as H, dn as m, aR as M, aj as j$1, dp as m$2, az as d$1 } from './vec2f32-96e18450.js';
import { c as s, d as e, h as c, i as r, j as a$1, l as l$1, k as u } from './arcadeUtils-eded193a.js';
import { P, O, h as de, G, X, J, z, s as se, L as L$1, p as pe, y as ye, x as xe, n as ne, o as oe } from './languageUtils-f4f0b3a9.js';
import { F, S, g, A, w, x, p as p$1, O as O$1, d, h, j, k, R, E, l, y, W, K, M as M$1, m as m$1, P as P$1, U, G as G$1, V, b, I, q, J as J$1, v as v$1 } from './geometryEngineAsync-6b37dfea.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './featureConversionUtils-7cc244e3.js';
import './OptimizedFeature-e99a2ed3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './number-7fa2c19d.js';
import './FeatureSetReader-4c6ce98c.js';
import './centroid-888033a9.js';
import './_commonjsHelpers-321aa363.js';
import './workers-2517158a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function un(t){return 0===a.indexOf("4.")?v.fromExtent(t):new v({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function sn(n){if(P(n,2,2),n[0]instanceof p&&n[1]instanceof p);else if(n[0]instanceof p&&null===n[1]);else if(n[1]instanceof p&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function an(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return L(0);let r=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){r=s(n.spatialReference)/H(n.spatialReference);}let e$1=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)e$1+=e(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)e$1+=e(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(e$1+=e(i[0],i[i.length-1],r));}else "extent"===n.type&&(e$1+=2*e([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),e$1+=2*e([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),e$1*=2,e$1+=4*Math.abs(O(n.zmax,0)*r-O(n.zmin,0)*r));const o=new m({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e$1]]});return F(o,t)}function fn(n){"async"===n.mode&&(n.functions.disjoint=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null===r[0]||null===r[1]||S(r[0],r[1])}))},n.functions.intersects=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&g(r[0],r[1])}))},n.functions.touches=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&A(r[0],r[1])}))},n.functions.crosses=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&w(r[0],r[1])}))},n.functions.within=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&x(r[0],r[1])}))},n.functions.contains=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&p$1(r[0],r[1])}))},n.functions.overlaps=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null!==r[0]&&null!==r[1]&&O$1(r[0],r[1])}))},n.functions.equals=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return P(r,2,2),r[0]===r[1]||(r[0]instanceof p&&r[1]instanceof p?d(r[0],r[1]):!(!G(r[0])||!G(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.functions.relate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,3,3),r[0]instanceof p&&r[1]instanceof p)return h(r[0],r[1],X(r[2]));if(r[0]instanceof p&&null===r[1])return !1;if(r[1]instanceof p&&null===r[0])return !1;if(null===r[0]&&null===r[1])return !1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=de(r)),null===r[0]||null===r[1]?null:j(r[0],r[1])}))},n.functions.union=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,i){const l=[];if(0===(i=de(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(J(i[0])){const n=de(i[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof p))throw new Error("Illegal Argument");l.push(n[t]);}}else {if(!z(i[0])){if(i[0]instanceof p)return se(c(i[0]),r.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=de(i[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof p))throw new Error("Illegal Argument");l.push(n[t]);}}}else for(let t=0;t<i.length;t++)if(null!==i[t]){if(!(i[t]instanceof p))throw new Error("Illegal Argument");l.push(i[t]);}return 0===l.length?null:k(l)}))},n.functions.difference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=de(e)),null!==e[0]&&null===e[1]?c(e[0]):null===e[0]?null:R(e[0],e[1])}))},n.functions.symmetricdifference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=de(e)),null===e[0]&&null===e[1]?null:null===e[0]?c(e[1]):null===e[1]?c(e[0]):E(e[0],e[1])}))},n.functions.clip=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,2,2),!(r[1]instanceof M)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof p))throw new Error("Illegal Argument");return null===r[1]?null:l(r[0],r[1])}))},n.functions.cut=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){if(e=de(e),P(e,2,2),!(e[1]instanceof m)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return [];if(!(e[0]instanceof p))throw new Error("Illegal Argument");return null===e[1]?[c(e[0])]:y(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(P(l,1,2),null===(l=de(l))[0])return 0;if(L$1(l[0]))return l[0].sumArea(r(O(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(J(l[0])||z(l[0])){const n=pe(l[0],t.spatialReference);return null===n?0:W(n,r(O(l[1],-1)))}if(!(l[0]instanceof p))throw new Error("Illegal Argument");return W(l[0],r(O(l[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if(P(l,1,2),null===(l=de(l))[0])return 0;if(L$1(l[0]))return l[0].sumArea(r(O(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(J(l[0])||z(l[0])){const n=pe(l[0],t.spatialReference);return null===n?0:K(n,r(O(l[1],-1)))}if(!(l[0]instanceof p))throw new Error("Illegal Argument");return K(l[0],r(O(l[1],-1)))}))},n.functions.length=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(P(l,1,2),null===(l=de(l))[0])return 0;if(L$1(l[0]))return l[0].sumLength(a$1(O(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(J(l[0])||z(l[0])){const n=ye(l[0],t.spatialReference);return null===n?0:F(n,a$1(O(l[1],-1)))}if(!(l[0]instanceof p))throw new Error("Illegal Argument");return F(l[0],a$1(O(l[1],-1)))}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(P(l,1,2),null===(l=de(l))[0])return 0;if(J(l[0])||z(l[0])){const n=ye(l[0],t.spatialReference);return null===n?0:!0===n.hasZ?an(n,a$1(O(l[1],-1))):F(n,a$1(O(l[1],-1)))}if(!(l[0]instanceof p))throw new Error("Illegal Argument");return !0===l[0].hasZ?an(l[0],a$1(O(l[1],-1))):F(l[0],a$1(O(l[1],-1)))}))},n.functions.lengthgeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if(P(l,1,2),null===(l=de(l))[0])return 0;if(L$1(l[0]))return l[0].sumLength(a$1(O(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(J(l[0])||z(l[0])){const n=ye(l[0],t.spatialReference);return null===n?0:M$1(n,a$1(O(l[1],-1)))}if(!(l[0]instanceof p))throw new Error("Illegal Argument");return M$1(l[0],a$1(O(l[1],-1)))}))},n.functions.distance=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){l=de(l),P(l,2,3);let u=l[0];(J(l[0])||z(l[0]))&&(u=xe(l[0],t.spatialReference));let f=l[1];if((J(l[1])||z(l[1]))&&(f=xe(l[1],t.spatialReference)),!(u instanceof p))throw new Error("Illegal Argument");if(!(f instanceof p))throw new Error("Illegal Argument");return m$1(u,f,a$1(O(l[2],-1)))}))},n.functions.distancegeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=de(r),P(r,2,3);const l=r[0],u=r[1];if(!(l instanceof j$1))throw new Error("Illegal Argument");if(!(u instanceof j$1))throw new Error("Illegal Argument");const s=new m({paths:[],spatialReference:l.spatialReference});return s.addPath([l,u]),M$1(s,a$1(O(r[2],-1)))}))},n.functions.densify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,2,3),null===r[0])return null;if(!(r[0]instanceof p))throw new Error("Illegal Argument");const l=ne(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof v||r[0]instanceof m?P$1(r[0],l,a$1(O(r[2],-1))):r[0]instanceof M?P$1(un(r[0]),l,a$1(O(r[2],-1))):r[0]}))},n.functions.densifygeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,2,3),null===r[0])return null;if(!(r[0]instanceof p))throw new Error("Illegal Argument");const l=ne(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof v||r[0]instanceof m?U(r[0],l,a$1(O(r[2],-1))):r[0]instanceof M?U(un(r[0]),l,a$1(O(r[2],-1))):r[0]}))},n.functions.generalize=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,2,4),null===r[0])return null;if(!(r[0]instanceof p))throw new Error("Illegal Argument");const l=ne(r[1]);if(isNaN(l))throw new Error("Illegal Argument");return G$1(r[0],l,oe(O(r[2],!0)),a$1(O(r[3],-1)))}))},n.functions.buffer=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=de(l),P(l,2,3),null===l[0])return null;if(!(l[0]instanceof p))throw new Error("Illegal Argument");const u=ne(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?c(l[0]):V(l[0],u,a$1(O(l[2],-1)))}))},n.functions.buffergeodetic=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=de(l),P(l,2,3),null===l[0])return null;if(!(l[0]instanceof p))throw new Error("Illegal Argument");const u=ne(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?c(l[0]):b(l[0],u,a$1(O(l[2],-1)))}))},n.functions.offset=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,2,6),null===r[0])return null;if(!(r[0]instanceof v||r[0]instanceof m))throw new Error("Illegal Argument");const l=ne(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const s=ne(O(r[4],10));if(isNaN(s))throw new Error("Illegal Argument");const a=ne(O(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return I(r[0],l,a$1(O(r[2],-1)),X(O(r[3],"round")).toLowerCase(),s,a)}))},n.functions.rotate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=de(r),P(r,2,3);let e=r[0];if(null===e)return null;if(!(e instanceof p))throw new Error("Illegal Argument");e instanceof M&&(e=v.fromExtent(e));const l=ne(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const u=O(r[2],null);if(null===u)return q(e,l);if(u instanceof j$1)return q(e,l,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){if(l=de(l),P(l,1,1),null===l[0])return null;let u$1=l[0];if((J(l[0])||z(l[0]))&&(u$1=xe(l[0],r.spatialReference)),null===u$1)return null;if(!(u$1 instanceof p))throw new Error("Illegal Argument");return u$1 instanceof j$1?se(c(l[0]),r.spatialReference):u$1 instanceof v?u$1.centroid:u$1 instanceof m?l$1(u$1):u$1 instanceof m$2?u(u$1):u$1 instanceof M?u$1.center:null}))},n.functions.multiparttosinglepart=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){l=de(l),P(l,1,1);const u=[];if(null===l[0])return null;if(!(l[0]instanceof p))throw new Error("Illegal Argument");if(l[0]instanceof j$1)return [se(c(l[0]),r.spatialReference)];if(l[0]instanceof M)return [se(c(l[0]),r.spatialReference)];return J$1(l[0]).then((n=>{if(n instanceof v){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=d$1({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r);}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof m){const t=[];for(let r=0;r<n.paths.length;r++){const e=d$1({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e);}return t}if(l[0]instanceof m$2){const n=se(c(l[0]),r.spatialReference);for(let t=0;t<n.points.length;t++)u.push(n.getPoint(t));return u}return null}))}))},n.functions.issimple=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,1,1),null===r[0])return !0;if(!(r[0]instanceof p))throw new Error("Illegal Argument");return v$1(r[0])}))},n.functions.simplify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=de(r),P(r,1,1),null===r[0])return null;if(!(r[0]instanceof p))throw new Error("Illegal Argument");return J$1(r[0])}))});}

export { fn as registerFunctions };
