import { ac as i$2, X as a$1, aW as s$4, dl as e, dm as t$2, z as t$3, h, bA as E$1, b0 as I, ab as e$1, aj as j, aR as M$1, bq as v, dn as m, dp as m$1, c as s$5, V as r$2, dq as G, dr as A$1, ds as T$1, dt as k, du as R$1, dv as I$1, dw as E$2, dx as G$1, dy as C, dz as r$3, as as u$1, au as c$1, an as j$1, dA as a$2, aq as s$6, a$ as H$1, I as e$2, dB as b, dC as M$2, aI as m$2, ap as n$2 } from './vec2f32-96e18450.js';
import { r as r$4, c as c$2, o as o$2 } from './mat4-59c51b41.js';
import { o as o$1 } from './zscale-075392a1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o,r$1=null;function n$1(){return !!r$1}function _(){return !!i$2("esri-wasm")}function P(){return o||(o=import('./pe-wasm-68668222.js').then((e=>e.p)).then((({default:t})=>t({locateFile:t=>a$1(`esri/geometry/support/${t}`)}))).then((e=>{N(e);})),o)}var s$3,E,i$1;!function(e){function t(e,t,o){r$1.ensureCache.prepare();const n=A(o),_=o===n,P=r$1.ensureFloat64(n),s=r$1._pe_geog_to_proj(r$1.getPointer(e),t,P);return s&&d$1(o,t,P,_),s}function o(e,o,r,_){switch(_){case E.PE_TRANSFORM_P_TO_G:return n(e,o,r);case E.PE_TRANSFORM_G_TO_P:return t(e,o,r)}return 0}function n(e,t,o){return _(e,t,o,0)}function _(e,t,o,n){r$1.ensureCache.prepare();const _=A(o),P=o===_,s=r$1.ensureFloat64(_),E=r$1._pe_proj_to_geog_center(r$1.getPointer(e),t,s,n);return E&&d$1(o,t,s,P),E}e.geogToProj=t,e.projGeog=o,e.projToGeog=n,e.projToGeogCenter=_;}(s$3||(s$3={})),function(e){function t(){e.PE_BUFFER_MAX=r$1.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=r$1.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=r$1.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=r$1.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=r$1.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=r$1.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=r$1.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=r$1.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=r$1.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=r$1.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=r$1.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=r$1.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=r$1.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=r$1.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=r$1.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=r$1.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=r$1.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=r$1.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=r$1.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=r$1.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=r$1.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=r$1.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=r$1.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=r$1.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=r$1.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=r$1.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=r$1.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=r$1.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=r$1.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=r$1.PeDefs.prototype.PE_HORIZON_DELTA;}e.init=t;}(E||(E={})),function(e){const t={},o={},n=e=>{if(e){const t=e.getType();switch(t){case E.PE_TYPE_GEOGCS:e=r$1.castObject(e,r$1.PeGeogcs);break;case E.PE_TYPE_PROJCS:e=r$1.castObject(e,r$1.PeProjcs);break;case E.PE_TYPE_GEOGTRAN:e=r$1.castObject(e,r$1.PeGeogtran);break;default:t&E.PE_TYPE_UNIT&&(e=r$1.castObject(e,r$1.PeUnit));}}return e};function _(){r$1.PeFactory.prototype.initialize(null);}function P(e){return s(E.PE_TYPE_COORDSYS,e)}function s(e,o){let _=null,P=t[e];if(P||(P={},t[e]=P),P.hasOwnProperty(String(o)))_=P[o];else {const t=r$1.PeFactory.prototype.factoryByType(e,o);r$1.compare(t,r$1.NULL)||(_=t,P[o]=_);}return _=n(_),_}function i(e,t){let _=null,P=o[e];if(P||(P={},o[e]=P),P.hasOwnProperty(t))_=P[t];else {const o=r$1.PeFactory.prototype.fromString(e,t);r$1.compare(o,r$1.NULL)||(_=o,P[t]=_);}return _=n(_),_}function p(e){return s(E.PE_TYPE_GEOGCS,e)}function u(e){return s(E.PE_TYPE_GEOGTRAN,e)}function c(e){return r$1.PeFactory.prototype.getCode(e)}function a(e){return s(E.PE_TYPE_PROJCS,e)}function g(e){return s(E.PE_TYPE_UNIT,e)}e.initialize=_,e.coordsys=P,e.factoryByType=s,e.fromString=i,e.geogcs=p,e.geogtran=u,e.getCode=c,e.projcs=a,e.unit=g;}(i$1||(i$1={}));let p=null;var u,c,a,g,T,f,O$1,S,l;function N(e){function t(e,t,o){e[t]=o(e[t]);}r$1=e,E.init(),u.init(),T.init(),O$1.init(),S.init(),p=class extends r$1.PeGCSExtent{destroy(){r$1.destroy(this);}};const o=[r$1.PeDatum,r$1.PeGeogcs,r$1.PeGeogtran,r$1.PeObject,r$1.PeParameter,r$1.PePrimem,r$1.PeProjcs,r$1.PeSpheroid,r$1.PeUnit];for(const r of o)t(r.prototype,"getName",(e=>function(){return e.call(this,new Array(E.PE_NAME_MAX))}));for(const P of [r$1.PeGeogtran,r$1.PeProjcs])t(P.prototype,"getParameters",(e=>function(){const t=new Array(E.PE_PARM_MAX);let o=e.call(this);for(let e=0;e<t.length;e++){const n=r$1.getValue(o,"*");t[e]=n?r$1.wrapPointer(n,r$1.PeParameter):null,o+=Int32Array.BYTES_PER_ELEMENT;}return t}));t(r$1.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const o=[];return d$1(o,t,e.call(this)),o})),t(r$1.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=r$1._pe_getPeGTlistExtendedGTsSize();return function(){let o=null;const n=e.call(this);if(!r$1.compare(n,r$1.NULL)){o=[n];const e=this.getSteps();if(e>1){const _=r$1.getPointer(n);for(let n=1;n<e;n++)o.push(r$1.wrapPointer(_+t*n,r$1.PeGTlistExtendedGTs));}}return o}}));const n=r$1._pe_getPeHorizonSize(),_=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let o=null;const _=e.call(this);if(!r$1.compare(_,r$1.NULL)){o=[_];const e=_.getNump();if(e>1){const t=r$1.getPointer(_);for(let _=1;_<e;_++)o.push(r$1.wrapPointer(t+n*_,r$1.PeHorizon));}}return t.set(e,o),o};t(r$1.PeProjcs.prototype,"horizonGcsGenerate",_),t(r$1.PeProjcs.prototype,"horizonPcsGenerate",_),r$1.PeObject.prototype.toString=function(e=E.PE_STR_OPTS_NONE){r$1.ensureCache.prepare();const t=r$1.getPointer(this),o=r$1.ensureInt8(new Array(E.PE_BUFFER_MAX));return r$1.UTF8ToString(r$1._pe_object_to_string_ext(t,e,o))};}function y(e){if(!e)return;const t=r$1.getClass(e);if(!t)return;const o=r$1.getCache(t);if(!o)return;const n=r$1.getPointer(e);n&&delete o[n];}function M(e,t){const o=[],n=new Array(t);for(let _=0;_<e;_++)o.push(r$1.ensureInt8(n));return o}function A(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1]);}))):t=e,t}function d$1(e,t,o,n=!1){if(n)for(let _=0;_<2*t;_++)e[_]=r$1.getValue(o+_*Float64Array.BYTES_PER_ELEMENT,"double");else {const n=0===e.length;for(let _=0;_<t;_++)n&&(e[_]=new Array(2)),e[_][0]=r$1.getValue(o,"double"),e[_][1]=r$1.getValue(o+Float64Array.BYTES_PER_ELEMENT,"double"),o+=2*Float64Array.BYTES_PER_ELEMENT;}}!function(e){let t;function o(){e.PE_GTLIST_OPTS_COMMON=r$1.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=r$1._pe_getPeGTlistExtendedEntrySize();}function n(e,o,n,_,P,s){let E=null;const i=new r$1.PeInteger(s);try{const p=r$1.PeGTlistExtended.prototype.getGTlist(e,o,n,_,P,i);if((s=i.val)&&(E=[p],s>1)){const e=r$1.getPointer(p);for(let o=1;o<s;o++)E.push(r$1.wrapPointer(e+t*o,r$1.PeGTlistExtendedEntry));}}finally{r$1.destroy(i);}return E}e.init=o,e.getGTlist=n;}(u||(u={})),function(e){function t(e){if(e&&e.length){for(const t of e)y(t),t.getEntries().forEach((e=>{y(e);const t=e.getGeogtran();y(t),t.getParameters().forEach(y),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{y(e);const t=e.getDatum();y(t),y(t.getSpheroid()),y(e.getPrimem()),y(e.getUnit());}));}));r$1.PeGTlistExtendedEntry.prototype.Delete(e[0]);}}e.destroy=t;}(c||(c={})),function(e){function t(e,t,o,n,_){r$1.ensureCache.prepare();const P=A(o),s=o===P,E=r$1.ensureFloat64(P);let i=0;n&&(i=r$1.ensureFloat64(n));const p=r$1._pe_geog_to_geog(r$1.getPointer(e),t,E,i,_);return p&&d$1(o,t,E,s),p}e.geogToGeog=t;}(a||(a={})),function(e){const t=(e,t,o,n,_,P)=>{let s,i;switch(r$1.ensureCache.prepare(),e){case"dd":s=r$1._pe_geog_to_dd,i=E.PE_DD_MAX;break;case"ddm":s=r$1._pe_geog_to_ddm,i=E.PE_DDM_MAX;break;case"dms":s=r$1._pe_geog_to_dms,i=E.PE_DMS_MAX;}let p=0;t&&(p=r$1.getPointer(t));const u=A(n),c=r$1.ensureFloat64(u),a=M(o,i),g=s(p,o,c,_,r$1.ensureInt32(a));if(g)for(let E=0;E<o;E++)P[E]=r$1.UTF8ToString(a[E]);return g},o=(e,t,o,n,_)=>{let P;switch(r$1.ensureCache.prepare(),e){case"dd":P=r$1._pe_dd_to_geog;break;case"ddm":P=r$1._pe_ddm_to_geog;break;case"dms":P=r$1._pe_dms_to_geog;}let s=0;t&&(s=r$1.getPointer(t));const E=n.map((e=>r$1.ensureString(e))),i=r$1.ensureInt32(E),p=r$1.ensureFloat64(new Array(2*o)),u=P(s,o,i,p);return u&&d$1(_,o,p),u};function n(e,o,r,n,_){return t("dms",e,o,r,n,_)}function _(e,t,r,n){return o("dms",e,t,r,n)}function P(e,o,r,n,_){return t("ddm",e,o,r,n,_)}function s(e,t,r,n){return o("ddm",e,t,r,n)}function i(e,o,r,n,_){return t("dd",e,o,r,n,_)}function p(e,t,r,n){return o("dd",e,t,r,n)}e.geog_to_dms=n,e.dms_to_geog=_,e.geog_to_ddm=P,e.ddm_to_geog=s,e.geog_to_dd=i,e.dd_to_geog=p;}(g||(g={})),function(e){function t(){e.PE_MGRS_STYLE_NEW=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=r$1.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=r$1.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=r$1.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES;}function o(e,t,o,n,_,P,s){r$1.ensureCache.prepare();let i=0;e&&(i=r$1.getPointer(e));const p=A(o),u=r$1.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r$1.ensureInt32(c),g=r$1._pe_geog_to_mgrs_extended(i,t,u,n,_,P,a);if(g)for(let E=0;E<t;E++)s[E]=r$1.UTF8ToString(c[E]);return g}function n(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=o.map((e=>r$1.ensureString(e))),E=r$1.ensureInt32(s),i=r$1.ensureFloat64(new Array(2*t)),p=r$1._pe_mgrs_to_geog_extended(P,t,E,n,i);return p&&d$1(_,t,i),p}e.init=t,e.geog_to_mgrs_extended=o,e.mgrs_to_geog_extended=n;}(T||(T={})),function(e){function t(e,t,o,n,_,P,s){r$1.ensureCache.prepare();let i=0;e&&(i=r$1.getPointer(e));const p=A(o),u=r$1.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r$1.ensureInt32(c),g=r$1._pe_geog_to_usng(i,t,u,n,_,P,a);if(g)for(let E=0;E<t;E++)s[E]=r$1.UTF8ToString(c[E]);return g}function o(e,t,o,n){r$1.ensureCache.prepare();let _=0;e&&(_=r$1.getPointer(e));const P=o.map((e=>r$1.ensureString(e))),s=r$1.ensureInt32(P),E=r$1.ensureFloat64(new Array(2*t)),i=r$1._pe_usng_to_geog(_,t,s,E);return i&&d$1(n,t,E),i}e.geog_to_usng=t,e.usng_to_geog=o;}(f||(f={})),function(e){function t(){e.PE_UTM_OPTS_NONE=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=r$1.PeNotationUtm.prototype.PE_UTM_OPTS_NS;}function o(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=A(o),i=r$1.ensureFloat64(s),p=M(t,E.PE_UTM_MAX),u=r$1.ensureInt32(p),c=r$1._pe_geog_to_utm(P,t,i,n,u);if(c)for(let E=0;E<t;E++)_[E]=r$1.UTF8ToString(p[E]);return c}function n(e,t,o,n,_){r$1.ensureCache.prepare();let P=0;e&&(P=r$1.getPointer(e));const s=o.map((e=>r$1.ensureString(e))),E=r$1.ensureInt32(s),i=r$1.ensureFloat64(new Array(2*t)),p=r$1._pe_utm_to_geog(P,t,E,n,i);return p&&d$1(_,t,i),p}e.init=t,e.geog_to_utm=o,e.utm_to_geog=n;}(O$1||(O$1={})),function(e){const t=new Map;function o(){e.PE_PCSINFO_OPTION_NONE=r$1.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=r$1.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=r$1.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=r$1.PePCSInfo.prototype.PE_POLE_POINT;}function n(o,n=e.PE_PCSINFO_OPTION_DOMAIN){let _,P;return t.has(o)&&(P=t.get(o),P[n]&&(_=P[n])),_||(_=r$1.PePCSInfo.prototype.generate(o,n),P||(P=[],t.set(o,P)),P[n]=_),_}e.init=o,e.generate=n;}(S||(S={})),function(e){function t(){return r$1.PeVersion.prototype.version_string()}e.version_string=t;}(l||(l={}));const R=Object.freeze({__proto__:null,get _pe(){return r$1},isLoaded:n$1,isSupported:_,load:P,get PeCSTransformations(){return s$3},get PeDefs(){return E},get PeFactory(){return i$1},get PeGCSExtent(){return p},get PeGTlistExtended(){return u},get PeGTlistExtendedEntry(){return c},get PeGTTransformations(){return a},get PeNotationDms(){return g},get PeNotationMgrs(){return T},get PeNotationUsng(){return f},get PeNotationUtm(){return O$1},get PePCSInfo(){return S},get PeVersion(){return l},_init:N});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=Math.PI/180,t$1=/SPHEROID\[([^\]]+)]/i,r=s$4.radius,n=s$4.eccentricitySquared,s$2={a1:r*n,a2:r*n*r*n,a3:r*n*n/2,a4:r*n*r*n*2.5,a5:r*n+r*n*n/2,a6:1-n},d={4267:{a:6378206.4,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:s$4.radius,f:s$4.flattening},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:e.radius,f:e.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:t$2.radius,f:t$2.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:t$2.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$1=0;class t{constructor(t=null){this.uid=s$1++,t?(this._wkt=void 0!==t.wkt?t.wkt:null,this._wkid=void 0!==t.wkid?t.wkid:-1,this._isInverse=void 0!==t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1);}static fromGE(s){const i=new t;return i._wkt=s.wkt,i._wkid=s.wkid,i._isInverse=s.isInverse,i}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=s$1++;}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=s$1++;}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=s$1++;}getInverse(){const s=new t;return s._wkt=this.wkt,s._wkid=this._wkid,s._isInverse=!this.isInverse,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(s){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,s&&s.steps)for(const i of s.steps)i instanceof t?this.steps.push(i):this.steps.push(new t({wkid:i.wkid,wkt:i.wkt,isInverse:i.isInverse}));}static cacheKey(t,s){return [void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==s.wkid&&null!==s.wkid?s.wkid.toString():"-1",void 0!==s.wkt&&null!==s.wkt?s.wkt.toString():""].join(",")}static fromGE(i){const e=new s;let n="";for(const s of i.steps){const i=t.fromGE(s);e.steps.push(i),n+=i.uid.toString()+",";}return e._cached_projection={},e._gtlistentry=null,e._chain=n,e}getInverse(){const t=new s;t.steps=[];for(let s=this.steps.length-1;s>=0;s--){const i=this.steps[s];t.steps.push(i.getInverse());}return t}getGTListEntry(){let t="";for(const s of this.steps)t+=s.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry}assignCachedGe(t,i,e){this._cached_projection[s.cacheKey(t,i)]=e;}getCachedGeTransformation(t,i){let e="";for(const s of this.steps)e+=s.uid.toString()+",";e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);const n=this._cached_projection[s.cacheKey(t,i)];return void 0===n?null:n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let V=null,X=null,D=null,H={};function J(){return !!V&&n$1()}function O(n){return t$3(D)&&(D=Promise.all([P(),import('./geometryEngineBase-228048ad.js').then((n=>n.g)),import('./hydrated-bedbcb3b.js')])),D.then((([,e,{hydratedAdapter:t}])=>{h(n),X=t,V=e.default,V._enableProjection(R);}))}function Q(n,e,t=null){return Array.isArray(n)?0===n.length?[]:Y(X,n,n[0].spatialReference,e,t):Y(X,[n],n.spatialReference,e,t)[0]}function Y(n,e,t,r,l=null){if(t$3(t)||t$3(r))return e;if(ln(t,r,l))return e.map((n=>e$1(an(n,t,r))));if(t$3(l)){const n=s.cacheKey(t,r);void 0!==H[n]?l=H[n]:(l=$(t,r,null),t$3(l)&&(l=new s),H[n]=l);}if(t$3(V))throw new en;return V._project(n,e,t,r,l)}function $(n,e,t=null){if(t$3(V))throw new en;if(t$3(n)||t$3(e))return null;const r=V._getTransformation(X,n,e,t,null==t?void 0:t.spatialReference);return null!==r?s.fromGE(r):null}function nn(n,e,t=null){if(t$3(V))throw new en;const r=V._getTransformationBySuitability(X,n,e,t,null==t?void 0:t.spatialReference);if(null!==r){const n=[];for(const e of r)n.push(s.fromGE(e));return n}return []}class en extends s$5{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()");}}function tn(){V=null,X=null,D=null,H={};}function rn(n,e){try{const t=Q(n,e);if(null==t)return null;"xmin"in n&&"xmin"in t&&(t.zmin=n.zmin,t.zmax=n.zmax);const r=o$1(t.type,n.spatialReference,e);return r$2(r)&&r(t),t}catch(t){if(!(t instanceof en))throw t;return null}}function ln(n,e,t){return !t&&(!!E$1(n,e)||I(n)&&I(e)&&!!we(n,e,Ie))}async function un(n,e,t,r){if(!J())if(Array.isArray(n)){for(const{source:l,dest:u,geographicTransformation:o}of n)if(!ln(l,u,o))return O(r)}else if(!ln(n,e,t))return O(r)}function on(n,e){switch(we(n,e,Ie)){case Zn:return "copy3";case oe:return "wgs84ToSphericalECEF";case Nn:return "wgs84ToWebMercator";case Dn:return "wgs84ToPlateCarree";case me:return "wgs84ToWGS84ECEF";case _n:return "webMercatorToWGS84";case Bn:return "webMercatorToSphericalECEF";case Kn:return "webMercatorToWGS84ECEF";case Jn:return "webMercatorToPlateCarree";case de:return "wgs84ECEFToWGS84";case Me:return "wgs84ECEFToSphericalECEF";case Re:return "wgs84ECEFToWebMercator";case ce:return "sphericalECEFToWGS84";case fe:return "sphericalECEFToWebMercator";case ie:return "sphericalMarsPCPFToMars2000";case se:return "sphericalMoonPCPFToMoon2000";case pe:return "sphericalECEFToWGS84ECEF";case ue:return "mars2000ToSphericalPCPF";case le:return "moon2000ToSphericalPCPF";default:return null}}function an(n,e,t){return n?"x"in n?cn(n,e,new j,t,0):"xmin"in n?jn(n,e,new M$1,t,0):"rings"in n?Mn(n,e,new v,t,0):"paths"in n?mn(n,e,new m,t,0):"points"in n?pn(n,e,new m$1,t,0):null:null}function sn(n,e,t=e.spatialReference,r=0){return !t$3(t)&&r$2(cn(n,n.spatialReference,e,t,r))}function cn(n,e,t,r,l){be[0]=n.x,be[1]=n.y;const u=n.z;return be[2]=void 0!==u?u:l,Cn(be,e,0,be,r,0,1)?(t.x=be[0],t.y=be[1],t.spatialReference=r,void 0===u?(t.z=void 0,t.hasZ=!1):(t.z=be[2],t.hasZ=!0),void 0===n.m?(t.m=void 0,t.hasM=!1):(t.m=n.m,t.hasM=!0),t):null}function fn(n,e,t=e.spatialReference,r=0){return !t$3(t)&&r$2(pn(n,n.spatialReference,e,t,r))}function pn(n,e,t,r,l){const{points:u,hasZ:o,hasM:a}=n,s=[],i=u.length,c=[];for(const f of u)c.push(f[0],f[1],o?f[2]:l);if(!Cn(c,e,0,c,r,0,i))return null;for(let f=0;f<i;++f){const n=3*f,e=c[n],t=c[n+1];o&&a?s.push([e,t,c[n+2],u[f][3]]):o?s.push([e,t,c[n+2]]):a?s.push([e,t,u[f][2]]):s.push([e,t]);}return t.points=s,t.spatialReference=r,t.hasZ=o,t.hasM=a,t}function hn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(mn(n,n.spatialReference,e,t,r))}function mn(n,e,t,r,l){const{paths:u,hasZ:o,hasM:a}=n,s=[];return Fn(u,o,a,e,s,r,l)?(t.paths=s,t.spatialReference=r,t.hasZ=o,t.hasM=a,t):null}function dn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(Mn(n,n.spatialReference,e,t,r))}function Mn(n,e,t,r,l){const{rings:u,hasZ:o,hasM:a}=n,s=[];return Fn(u,o,a,e,s,r,l)?(t.rings=s,t.spatialReference=r,t.hasZ=o,t.hasM=a,t):null}function Rn(n,e,t=e.spatialReference,r=0){return r$2(t)&&r$2(jn(n,n.spatialReference,e,t,r))}function jn(n,e,t,r,l){const{xmin:u,ymin:o,xmax:a,ymax:s,hasZ:i,hasM:c}=n;if(!En(u,o,i?n.zmin:l,e,be,r))return null;t.xmin=be[0],t.ymin=be[1],i&&(t.zmin=be[2]);return En(a,s,i?n.zmax:l,e,be,r)?(t.xmax=be[0],t.ymax=be[1],i&&(t.zmax=be[2]),c&&(t.mmin=n.mmin,t.mmax=n.mmax),t.spatialReference=r,t):null}function wn(n,e,t){if(t$3(e)||t$3(t))return null;const r=new j({spatialReference:t});return Cn(n,e,0,be,t,0,1)?(r.x=be[0],r.y=be[1],r.z=be[2],r):null}function yn(n,e,t){return Cn(n,e,0,be,t.spatialReference,0,1)?(t.x=be[0],t.y=be[1],t.z=be[2],t):null}function gn(n,e,t,r=0){be[0]=n.x,be[1]=n.y;const l=n.z;return be[2]=void 0!==l?l:r,Cn(be,n.spatialReference,0,e,t,0,1)}function En(n,e,t,r,l,u){return ze[0]=n,ze[1]=e,ze[2]=t,Cn(ze,r,0,l,u,0,1)}function xn(n,e,t,r){return !(t$3(e)||t$3(r)||n.length<2)&&(2===n.length&&(ze[0]=n[0],ze[1]=n[1],ze[2]=0,n=ze),Cn(n,e,0,t,r,0,1))}function In(n,e){be[0]=n.x,be[1]=n.y;const t=n.z;return be[2]=void 0!==t?t:0,Pn(be,n.spatialReference,e)}function Pn(n,e,t){return Tn(n,e,t)}function Tn(n,e,t){if(t$3(e))return !1;const r=Wn(e,Ee),l=je[r][6];return !t$3(l)&&(l(n,0,ze,0),t!==ze&&(t[0]=ze[0],t[1]=ze[1],t.length>2&&(t[2]=ze[2])),!0)}function Cn(n,e,t,r,l,o,a=1){const s=we(e,l,Ie);if(t$3(s))return !1;if(s===Zn){if(n===r&&t===o)return !0;const e=t+3*a;for(let l=t,u=o;l<e;l++,u++)r[u]=n[l];return !0}const i=t+3*a;for(let u=t,c=o;u<i;u+=3,c+=3)s(n,u,r,c);return !0}function zn(n,e,t,r,l){r$3(be,n),u$1(ke,n,e),xn(be,t,be,l),xn(ke,t,ke,l),c$1(r,ke,be),j$1(r,r);}function Fn(n,e,t,r,l,u,o=0){const a=new Array;for(const i of n)for(const n of i)a.push(n[0],n[1],e?n[2]:o);if(!Cn(a,r,0,a,u,0,a.length/3))return !1;let s=0;l.length=0;for(const i of n){const n=new Array;for(const r of i)e&&t?n.push([a[s++],a[s++],a[s++],r[3]]):e?n.push([a[s++],a[s++],a[s++]]):t?(n.push([a[s++],a[s++],r[2]]),s++):(n.push([a[s++],a[s++]]),s++);l.push(n);}return !0}function Sn(n,e,t,r){if(t$3(e)||t$3(r))return !1;const l=ye(e,r,Pe);if(l.projector===Zn)return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],!0;if(t$3(l.projector))return !1;const{source:o,dest:s}=l;if(3===s.spatialReferenceId){const e=je[o.spatialReferenceId][2];return !t$3(e)&&(e(n,0,Fe,0),Nn(Fe,0,t,0),t[3]=bn(Fe[1],n[2],n[3],s$4.radius),!0)}if(2!==o.spatialReferenceId&&5!==o.spatialReferenceId||12!==s.spatialReferenceId)l.projector(n,0,t,0),t[3]=n[3]*o.metersPerUnit/s.metersPerUnit;else {const e=je[o.spatialReferenceId][1],r=je[1][12];let u=n[3];r$2(e)&&r$2(r)&&(u=bn(n[1],n[2],n[3],s$4.radius)),l.projector(n,0,t,0),t[3]=u;}return !0}function bn(n,e,t,r){const l=Math.abs(Te*n)+Math.asin(t/(r+e));return l>=Math.PI/2?Number.MAX_VALUE:t/Math.cos(l)}function kn(n,e,t,r){return null!=n&&(E$1(e,r)?(a$2(t,n),!0):(ze[0]=n[0],ze[1]=n[1],ze[2]=0,!!Cn(ze,e,0,ze,r,0,1)&&(t[0]=ze[0],t[1]=ze[1],ze[0]=n[2],ze[1]=n[3],ze[2]=0,!!Cn(ze,e,0,ze,r,0,1)&&(t[2]=ze[0],t[3]=ze[1],!0))))}function vn(n,e,t,r){if(t$3(e)||t$3(r))return !1;const l=Wn(e,Ee),o=Wn(r,xe);if(l===o&&0!==l||E$1(e,r))return t[0]=1,t[1]=1,t[2]=1,!0;if(1===l){const e=s$6(n),r=e/Math.sqrt(n[0]*n[0]+n[1]*n[1]),l=e/s$4.radius;if(3===o)return t[0]=r*l,t[1]=r*l,t[2]=1,!0;if(2===o||5===o){const n=180/(s$4.radius*Math.PI);return t[0]=n*r*l,t[1]=n*l,t[2]=1,!0}}else if(12===l&&(2===o||5===o))return t[0]=Xn,t[1]=Xn,t[2]=1,!0;return !1}function qn(n,e,t,r){if(t$3(n)||t$3(r))return !1;const l=Wn(n,Ee),o=Wn(r,xe);if(l===o&&!An(o)&&(0!==l||E$1(n,r)))return r$4(t),c$2(t,t,e),!0;if(An(o)){const n=je[l][11],r=je[11][o];return !t$3(n)&&!t$3(r)&&(n(e,0,Fe,0),r(Fe,0,Se,0),Un(Te*Fe[0],Te*Fe[1],t),t[12]=Se[0],t[13]=Se[1],t[14]=Se[2],!0)}if(!(3!==o&&12!==o||2!==l&&1!==l&&3!==l)){const n=je[l][11],r=je[11][o];return !t$3(n)&&!t$3(r)&&(n(e,0,Fe,0),r(Fe,0,Se,0),1===l?Gn(Te*Fe[0],Te*Fe[1],t):r$4(t),t[12]=Se[0],t[13]=Se[1],t[14]=Se[2],!0)}return !1}function An(n){return 1===n||7===n||9===n}function Un(n,e,t){const r=Math.sin(n),l=Math.cos(n),u=Math.sin(e),o=Math.cos(e),a=t;return a[0]=-r,a[4]=-u*l,a[8]=o*l,a[12]=0,a[1]=l,a[5]=-u*r,a[9]=o*r,a[13]=0,a[2]=0,a[6]=o,a[10]=u,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1,a}function Gn(n,e,t){return Un(n,e,t),o$2(t,t),t}function Wn(n,e){return e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=H$1(n,1)),n.wkt===G.wkt?e.spatialReferenceId=1:A$1(n)?e.spatialReferenceId=2:T$1(n)?e.spatialReferenceId=3:k(n)?e.spatialReferenceId=12:n.wkt===R$1.wkt?e.spatialReferenceId=4:4490===n.wkid?e.spatialReferenceId=5:n.wkt===I$1.wkt?e.spatialReferenceId=7:n.wkt===E$2.wkt?e.spatialReferenceId=9:G$1(n)?e.spatialReferenceId=8:C(n)?e.spatialReferenceId=10:e.spatialReferenceId=0)}function Zn(n,e,t,r){n!==t&&(t[r++]=n[e++],t[r++]=n[e++],t[r]=n[e]);}function _n(n,e,t,r){t[r++]=Ce*(n[e++]/s$4.radius),t[r++]=Ce*(Math.PI/2-2*Math.atan(Math.exp(-n[e++]/s$4.radius))),t[r]=n[e];}function Bn(n,e,t,r){_n(n,e,t,r),oe(t,r,t,r);}function Kn(n,e,t,r){_n(n,e,t,r),me(t,r,t,r);}function Ln(n,t,r,l,u){const o=.4999999*Math.PI,a=e$2(Te*n[t+1],-o,o),s=Math.sin(a);r[l++]=Te*n[t]*u.radius,r[l++]=u.halfSemiMajorAxis*Math.log((1+s)/(1-s)),r[l]=n[t+2];}function Nn(n,e,t,r){Ln(n,e,t,r,s$4);}const Vn=s$4.radius*Math.PI/180,Xn=180/(s$4.radius*Math.PI);function Dn(n,e,t,r){t[r]=n[e]*Vn,t[r+1]=n[e+1]*Vn,t[r+2]=n[e+2];}function Hn(n,e,t,r){t[r]=n[e]*Xn,t[r+1]=n[e+1]*Xn,t[r+2]=n[e+2];}function Jn(n,e,t,r){_n(n,e,t,r),Dn(t,r,t,r);}function On(n,e,t,r){de(n,e,t,r),Dn(t,r,t,r);}function Qn(n,e,t,r){ce(n,e,t,r),Dn(t,r,t,r);}function Yn(n,e,t,r){Hn(n,e,t,r),oe(t,r,t,r);}function $n(n,e,t,r){Hn(n,e,t,r),Nn(t,r,t,r);}function ne(n,e,t,r){Hn(n,e,t,r),me(t,r,t,r);}function ee(n){if(t$3(n))return !1;const e=Wn(n,Ee);return !!je[e][6]}function te(n,e,t,r,l=0){const u=r+l,o=Math.cos(t);n[0]=Math.cos(e)*o*u,n[1]=Math.sin(e)*o*u,n[2]=Math.sin(t)*u;}function re(n,e,t,r,l){const u=l+n[e+2],o=Te*n[e+1],a=Te*n[e],s=Math.cos(o);t[r++]=Math.cos(a)*s*u,t[r++]=Math.sin(a)*s*u,t[r]=Math.sin(o)*u;}function le(n,e$1,t,r){re(n,e$1,t,r,e.radius);}function ue(n,e,t,r){re(n,e,t,r,t$2.radius);}function oe(n,e,t,r){re(n,e,t,r,s$4.radius);}function ae(n,e,t,r,u){const o=n[e],a=n[e+1],s=n[e+2],i=Math.sqrt(o*o+a*a+s*s),c=b(s/(0===i?1:i)),f=Math.atan2(a,o);t[r++]=Ce*f,t[r++]=Ce*c,t[r]=i-u;}function se(n,e$1,t,r){ae(n,e$1,t,r,e.radius);}function ie(n,e,t,r){ae(n,e,t,r,t$2.radius);}function ce(n,e,t,r){ae(n,e,t,r,s$4.radius);}function fe(n,e,t,r){ce(n,e,t,r),Nn(t,r,t,r);}function pe(n,e,t,r){ce(n,e,t,r),me(t,r,t,r);}function he(n,e,t,r,l){const u=Te*n[e],o=Te*n[e+1],a=n[e+2],s=Math.sin(o),i=Math.cos(o),c=l.radius/Math.sqrt(1-l.eccentricitySquared*s*s);t[r++]=(c+a)*i*Math.cos(u),t[r++]=(c+a)*i*Math.sin(u),t[r++]=(c*(1-l.eccentricitySquared)+a)*s;}function me(n,e,t,r){he(n,e,t,r,s$4);}function de(n,e,t,r){const l=s$2,u=n[e],o=n[e+1],a=n[e+2];let s,i,c,f,p,h,m,d,M,R,j,w,y,g,E,x,I,P,T,C,z;s=Math.abs(a),i=u*u+o*o,c=Math.sqrt(i),f=i+a*a,p=Math.sqrt(f),C=Math.atan2(o,u),h=a*a/f,m=i/f,g=l.a2/p,E=l.a3-l.a4/p,m>.3?(d=s/p*(1+m*(l.a1+g+h*E)/p),T=Math.asin(d),R=d*d,M=Math.sqrt(1-R)):(M=c/p*(1-h*(l.a5-g-m*E)/p),T=Math.acos(M),R=1-M*M,d=Math.sqrt(R)),j=1-s$4.eccentricitySquared*R,w=s$4.radius/Math.sqrt(j),y=l.a6*w,g=c-w*M,E=s-y*d,I=M*g+d*E,x=M*E-d*g,P=x/(y/j+I),T+=P,z=I+x*P/2,a<0&&(T=-T),t[r++]=Ce*C,t[r++]=Ce*T,t[r]=z;}function Me(n,e,t,r){de(n,e,t,r),oe(t,r,t,r);}function Re(n,e,t,r){de(n,e,t,r),Nn(t,r,t,r);}const je={2:{5:null,8:null,10:null,11:Zn,6:Zn,1:oe,7:null,9:null,0:null,3:Nn,12:Dn,2:Zn,4:me},5:{5:Zn,8:null,10:null,11:Zn,6:Zn,1:oe,7:null,9:null,0:null,3:null,12:Dn,2:null,4:me},8:{5:null,8:Zn,10:null,11:Zn,6:null,1:null,7:ue,9:null,0:null,3:null,12:null,2:null,4:null},10:{5:null,8:null,10:Zn,11:Zn,6:null,1:null,7:null,9:le,0:null,3:null,12:null,2:null,4:null},3:{5:null,8:null,10:null,11:_n,6:_n,1:Bn,7:null,9:null,0:null,3:Zn,12:Jn,2:_n,4:Kn},4:{5:de,8:null,10:null,11:de,6:de,1:Me,7:null,9:null,0:null,3:Re,12:On,2:de,4:Zn},1:{5:ce,8:null,10:null,11:ce,6:ce,1:Zn,7:null,9:null,0:null,3:fe,12:Qn,2:ce,4:pe},7:{5:null,8:ie,10:null,11:ie,6:null,1:null,7:Zn,9:null,0:null,3:null,12:null,2:null,4:null},9:{5:null,8:null,10:se,11:se,6:null,1:null,7:null,9:Zn,0:null,3:null,12:null,2:null,4:null},0:{5:null,8:null,10:null,11:null,6:null,1:null,7:null,9:null,0:Zn,3:null,12:null,2:null,4:null},11:{5:Zn,8:Zn,10:Zn,11:Zn,6:Zn,1:oe,7:ue,9:le,0:null,3:Nn,12:Dn,2:Zn,4:me},6:{5:null,8:null,10:null,11:Zn,6:Zn,1:oe,7:null,9:null,0:null,3:null,12:Dn,2:Zn,4:me},12:{5:Hn,8:null,10:null,11:Hn,6:Hn,1:Yn,7:null,9:null,0:null,3:$n,12:Zn,2:Hn,4:ne}};function we(n,e,t=ge()){return t$3(n)||t$3(e)?null:ye(n,e,t).projector}function ye(n,e,t){if(t$3(n)||t$3(e)||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const r=Wn(n,t.source),l=Wn(e,t.dest);return 0===r&&0===l?E$1(n,e)?t.projector=Zn:t.projector=null:t.projector=je[r][l],t}function ge(){return {source:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},projector:Zn}}const Ee={spatialReference:null,spatialReferenceId:0},xe={spatialReference:null,spatialReferenceId:0},Ie=ge(),Pe=ge(),Te=M$2(1),Ce=m$2(1),ze=n$2(),Fe=n$2(),Se=n$2(),be=n$2(),ke=n$2();

export { $, Cn as C, J, O, Q, Y, dn as d, gn as g, ln as l, qn as q, s, un as u };
