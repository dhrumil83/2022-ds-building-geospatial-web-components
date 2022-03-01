import { gS as G, a as a$1, e, f as d$1, aR as M$1, i as i$1, ax as o$1, S as S$1, c as s, gT as r, gU as u$1, aj as j$1, V as r$1, bG as b$2, eV as t, $ as C$2, l as l$3, bI as O$2, eW as C$3, g as r$2 } from './vec2f32-96e18450.js';
import { u as u$2 } from './Handles-b3021138.js';
import { l as l$2, b as b$1 } from './MultiOriginJSONSupport-4c0182cb.js';
import { a as a$2, x as x$1 } from './WebTileLayer-ed787059.js';
import { i as i$2 } from './BlendLayer-9582dc10.js';
import { y as y$1 } from './OperationalLayer-f90d3a65.js';
import { w as w$1 } from './PortalLayer-f5d3d653.js';
import { n as n$1 } from './RefreshableLayer-7eca1761.js';
import { s as s$1 } from './ScaleRangeLayer-cc4d317e.js';
import { j } from './TileInfo-6783c707.js';
import { o as o$2 } from './xmlUtils-ed1df04b.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './commonProperties-73952058.js';
import './TimeExtent-ef5feff1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l$1{constructor(i,l=0,a=i.lods.length-1){this.tileInfo=i,this.minLOD=l,this.maxLOD=a;}getAvailability(i,l,a){const t=this.tileInfo.lodAt(i);return !t||i<this.minLOD||i>this.maxLOD?"unavailable":t.cols&&t.rows?a>=t.cols[0]&&a<=t.cols[1]&&l>=t.rows[0]&&l<=t.rows[1]?"available":"unavailable":"available"}async fetchAvailability(l,a,t,e){return await G(e),this.getAvailability(l,a,t)}async fetchAvailabilityUpsample(l,a,t,e,s){await G(s),e.level=l,e.row=a,e.col=t;const o=this.tileInfo;for(o.updateTileInfo(e);;){const i=this.getAvailability(e.level,e.row,e.col);if("unavailable"!==i)return i;if(!o.upsampleTile(e))return "unavailable"}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let n=l=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new l;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([d$1({type:M$1,json:{read:{source:"fullExtent"}}})],n.prototype,"fullExtent",void 0),e([d$1({type:String,json:{read:{source:"id"}}})],n.prototype,"id",void 0),e([d$1({type:j,json:{read:{source:"tileInfo"}}})],n.prototype,"tileInfo",void 0),n=l=e([i$1("esri.layer.support.TileMatrixSet")],n);const p$3=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o;let i=o=class extends a$1{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new o;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([d$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([d$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([d$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([d$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([d$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([d$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=o=e([i$1("esri.layer.support.WMTSStyle")],i);const p$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let h$1=p$1=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}get description(){return this._get("description")}set description(t){this._set("description",t);}readFullExtent(t,e){return (t=e.fullExtent)?M$1.fromJSON(t):null}readFullExtents(t,e){var r;return null!=(r=e.fullExtents)&&r.length?e.fullExtents.map((t=>M$1.fromJSON(t))):e.tileMatrixSets.map((t=>M$1.fromJSON(t.fullExtent))).filter((t=>t))}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t}set styleId(t){this._set("styleId",t);}get title(){return this._get("title")}set title(t){this._set("title",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new p$1;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([d$1()],h$1.prototype,"description",null),e([d$1()],h$1.prototype,"fullExtent",void 0),e([o$1("fullExtent",["fullExtent"])],h$1.prototype,"readFullExtent",null),e([d$1({readOnly:!0})],h$1.prototype,"fullExtents",void 0),e([o$1("fullExtents",["fullExtents","tileMatrixSets"])],h$1.prototype,"readFullExtents",null),e([d$1()],h$1.prototype,"imageFormat",null),e([d$1({json:{read:{source:"formats"}}})],h$1.prototype,"imageFormats",void 0),e([d$1()],h$1.prototype,"id",void 0),e([d$1()],h$1.prototype,"layer",void 0),e([d$1()],h$1.prototype,"styleId",null),e([d$1({type:S$1.ofType(p$2),json:{read:{source:"styles"}}})],h$1.prototype,"styles",void 0),e([d$1({value:null,json:{write:{ignoreOrigin:!0}}})],h$1.prototype,"title",null),e([d$1()],h$1.prototype,"tileMatrixSetId",void 0),e([d$1({readOnly:!0})],h$1.prototype,"tileMatrixSet",null),e([d$1({type:S$1.ofType(p$3),json:{read:{source:"tileMatrixSets"}}})],h$1.prototype,"tileMatrixSets",void 0),h$1=p$1=e([i$1("esri.layers.support.WMTSSublayer")],h$1);const m$1=h$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=90.71428571428571,c=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function u(t,n){var i,r;t=t.replace(/ows:/gi,"");const o=(new DOMParser).parseFromString(t,"text/xml").documentElement,l=new Map,s$1=new Map,a=f("Contents",o);if(!a)throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=f("OperationsMetadata",o),u=null==c?void 0:c.querySelector("[name='GetTile']"),p=null==u?void 0:u.getElementsByTagName("Get"),d=p&&Array.prototype.slice.call(p),g=null!=(i=(null==n||null==(r=n.url)?void 0:r.indexOf("https"))>-1)&&i;let M,T,C=n.serviceMode,y=n&&n.url;if(d&&d.length&&d.some((e=>{const t=f("Constraint",e);return !t||h("AllowedValues","Value",C,t)?(y=e.attributes[0].nodeValue,!0):(!t||h("AllowedValues","Value","RESTful",t)||h("AllowedValues","Value","REST",t)?T=e.attributes[0].nodeValue:t&&!h("AllowedValues","Value","KVP",t)||(M=e.attributes[0].nodeValue),!1)})),!y)if(T)y=T,C="RESTful";else if(M)y=M,C="KVP";else {const e=f("ServiceMetadataURL",o);y=e&&e.getAttribute("xlink:href");}const R=y.indexOf("1.0.0/");-1===R&&"RESTful"===C?y+="/":R>-1&&(y=y.substring(0,R)),"KVP"===C&&(y+=R>-1?"":"?"),g&&(y=y.replace(/^http:/i,"https:"));const S=x("ServiceIdentification>ServiceTypeVersion",o),V=x("ServiceIdentification>AccessConstraints",o),v=m("Layer",a),E=m("TileMatrixSet",a),b=v.map((e=>{const t=x("Identifier",e);return l.set(t,e),w(t,e,E,g,S)}));return {copyright:V,dimensionMap:s$1,layerMap:l,layers:b,serviceMode:C,tileUrl:y}}function p(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((n=>{n.scale=96*n.scale/t.dpi,n.resolution=D(t.spatialReference.wkid,n.scale*a/96,e.id);})),t.dpi=96);}));})),e}function d(e){return e.nodeType===Node.ELEMENT_NODE}function f(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(d(i)&&i.nodeName===e)return i}return null}function m(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];d(r)&&r.nodeName===e&&n.push(r);}return n}function g(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];d(r)&&r.nodeName===e&&n.push(r);}return n.map((e=>e.textContent))}function x(e,t){return e.split(">").forEach((e=>{t&&(t=f(e,t));})),t&&t.textContent}function h(e,t,n,i){let r;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=f(t,i),o=e&&e.textContent;if(o===n||n.split(":")&&n.split(":")[1]===o)return r=i,!0}return !1})),r}function w(e,t,n,i,r){const o=x("Abstract",t),l=g("Format",t);return {id:e,fullExtent:R$1(t),fullExtents:S(t),description:o,formats:l,styles:V(t,i),title:x("Title",t),tileMatrixSets:v(r,t,n)}}function M(e,t){var n;const i=[],r=null==(n=e.layerMap)?void 0:n.get(t);if(!r)return;const o=m("ResourceURL",r),l=m("Dimension",r);let s,a,c,u;return l.length&&(s=x("Identifier",l[0]),a=g("Default",l[0])||g("Value",l[0])),l.length>1&&(c=x("Identifier",l[1]),u=g("Default",l[1])||g("Value",l[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:u}),o.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(s&&a.length)if(t.indexOf("{"+s+"}")>-1)t=t.replace("{"+s+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+s.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+s.length+2));}if(c&&u.length)if(t.indexOf("{"+c+"}")>-1)t=t.replace("{"+c+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+c.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+c.length+2));}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),i}function T(e,t,n,i,r,o,l,s){var a,c;const u=C$1(e,t,i);if(!((null==u?void 0:u.length)>0))return "";const{dimensionMap:p}=e,d=null==(a=p.get(t).dimensions)?void 0:a[0],f=null==(c=p.get(t).dimensions2)?void 0:c[0];return u[l%u.length].template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,n).replace(/\{TileMatrix\}/gi,o).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,d).replace(/\{dimensionValue2\}/gi,f)}function C$1(e,t,n){const i=M(e,t),r=i.filter((e=>e.format===n));return r.length?r:i}function y(e,t,n,i){const{dimensionMap:r}=e,o=M(e,t);let l="";if(o&&o.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,n),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,s);}return l}function R$1(e){const t=f("WGS84BoundingBox",e),n=t?x("LowerCorner",t).split(" "):["-180","-90"],i=t?x("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(n[0]),ymin:parseFloat(n[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function S(e){const t=[];return o$2(e,{BoundingBox:e=>{const n=e.getAttribute("crs").toLowerCase(),i=b(n),r=n.includes("epsg")&&F(i.wkid);let o,s,a,c;o$2(e,{LowerCorner:e=>{[o,s]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([o,s]=[s,o]);},UpperCorner:e=>{[a,c]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([a,c]=[c,a]);}}),t.push({xmin:o,ymin:s,xmax:a,ymax:c,spatialReference:i});}}),t}function V(e,t){return m("Style",e).map((e=>{const n=f("LegendURL",e),i=f("Keywords",e),r=i&&g("Keyword",i);let o=n&&n.getAttribute("xlink:href");t&&(o=o&&o.replace(/^http:/i,"https:"));return {abstract:x("Abstract",e),id:x("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:o,title:x("Title",e)}}))}function v(e,t,n){return m("TileMatrixSetLink",t).map((t=>E(e,t,n)))}function E(e,t,n){const i=f("TileMatrixSet",t).textContent,r=g("TileMatrix",t),o=n.find((e=>{const t=f("Identifier",e),n=t&&t.textContent;return !!(n===i||i.split(":")&&i.split(":")[1]===n)})),l=f("TileMatrixSetLimits",t),a=l&&m("TileMatrixLimits",l),c=new Map;if(null!=a&&a.length)for(const s of a){const e=f("TileMatrix",s).textContent,t=+f("MinTileRow",s).textContent,n=+f("MaxTileRow",s).textContent,i=+f("MinTileCol",s).textContent,r=+f("MaxTileCol",s).textContent;c.set(e,{minCol:i,maxCol:r,minRow:t,maxRow:n});}const u=x("SupportedCRS",o).toLowerCase(),p=L(o,u),d=p.spatialReference,w=f("TileMatrix",o),M=[parseInt(x("TileWidth",w),10),parseInt(x("TileHeight",w),10)],T=[];if(r.length)r.forEach(((e,t)=>{const n=h("TileMatrix","Identifier",e,o);T.push(k(n,u,t,i,c));}));else {m("TileMatrix",o).forEach(((e,t)=>{T.push(k(e,u,t,i,c));}));}const C=N(e,o,p,M,T[0]).toJSON(),y=new j({dpi:96,spatialReference:d,size:M,origin:p,lods:T}).toJSON();return {id:i,fullExtent:C,tileInfo:y}}function b(e){e=e.toLowerCase();let n=parseInt(e.split(":").pop(),10);900913!==n&&3857!==n||(n=102100);const i=O$1(e);return r$1(i)&&(n=i),{wkid:n}}function L(e,t){return I(f("TileMatrix",e),t)}function I(e,t){const n=b(t),[r,o]=x("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),l=t.includes("epsg")&&F(n.wkid);return new j$1(l?{x:o,y:r,spatialReference:n}:{x:r,y:o,spatialReference:n})}function N(e,t,i,r,o){const l=f("BoundingBox",t);let s,a,c,u,p,d;if(l&&(s=x("LowerCorner",l).split(" "),a=x("UpperCorner",l).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),d=parseFloat(a[1]);else {const e=f("TileMatrix",t),n=parseInt(x("MatrixWidth",e),10),l=parseInt(x("MatrixHeight",e),10);c=i.x,d=i.y,u=c+n*r[0]*o.resolution,p=d-l*r[1]*o.resolution;}return A(e,i.spatialReference)?new M$1(p,c,d,u,i.spatialReference):new M$1(c,p,u,d,i.spatialReference)}function A(e,t){return "1.0.0"===e&&F(t.wkid)}function F(e){return c.some((([t,n])=>e>=t&&e<=n))}function O$1(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}function k(e,t,n,i,r){var o;const l=b(t),s=x("Identifier",e);let c=parseFloat(x("ScaleDenominator",e));const u=D(l.wkid,c,i);c*=96/a;const p=+x("MatrixWidth",e),d=+x("MatrixHeight",e),{maxCol:f=p-1,maxRow:m=d-1,minCol:g=0,minRow:h=0}=null!=(o=r.get(s))?o:{},{x:w,y:M}=I(e,t);return {cols:[g,f],level:n,levelValue:s,origin:[w,M],scale:c,resolution:u,rows:[h,m]}}function D(e,t,n){let i;return i=r.hasOwnProperty(""+e)?r.values[r[e]]:"default028mm"===n?6370997*Math.PI/180:u$1(e).metersPerDegree,7*t/25e3/i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},O=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let R=class extends(i$2(n$1(s$1(y$1(w$1(l$2(b$1))))))){constructor(...e){super(...e),this._sublayersHandles=new u$2,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this);}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new u$2),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this;})),e.on("after-remove",(({item:e})=>{e.layer=null;}))]));}),!0);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(b$2).then((()=>this._fetchService(e))).catch((e=>{throw b$2(e),new s("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'");}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e);}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new m$1);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=null==i?void 0:i.layerIdentifier;let o=null;const l=null==i?void 0:i.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=null==s?void 0:s.format,m=null==s?void 0:s.style;return new m$1({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t$1,r,i){const s=this.activeLayer;t$1.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=t("tileMatrixSet.tileInfo",s);t$1.tileInfo=a?a.toJSON(i):null,t$1.wmtsInfo={...t$1.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return U(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get tilemapCache(){var e,t;const r=null==(e=this.activeLayer)||null==(t=e.tileMatrixSet)?void 0:t.tileInfo;return new l$1(r)}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title");}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new a$2({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new x$1({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,r,i){const s=this.getTileUrl(e,r,i);return C$2(s,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":T({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);if(!a){a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`);}return a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=y({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return C[r.toLowerCase()]&&(s=C[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e);}catch{const s$1="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(s$1,e),this.serviceMode=s$1;}catch(r){throw new s("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=p(t.data):t.data=u(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,r){const i=this._getCapabilitiesUrl(e);return await C$2(i,{...r,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...l$3(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=O$2(e),i={...r.query,...t},s=C$3(i);return ""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=O$2(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?l$3(e):{},t.forEach((t=>{e.hasOwnProperty(t)||O.has(t)||(e[t]=r[t]);})));}return e}};function U(e,t){return e.map((e=>{const r=new m$1;return r.read(e,t),r}))}e([d$1()],R.prototype,"dimensionMap",void 0),e([d$1()],R.prototype,"layerMap",void 0),e([d$1({type:m$1,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],R.prototype,"activeLayer",null),e([o$1("service","activeLayer",["layers"])],R.prototype,"readActiveLayerFromService",null),e([o$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],R.prototype,"readActiveLayerFromItemOrWebDoc",null),e([r$2(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:j},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],R.prototype,"writeActiveLayer",null),e([d$1({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),e([d$1({type:["show","hide"]})],R.prototype,"listMode",void 0),e([d$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],R.prototype,"customParameters",void 0),e([o$1(["portal-item","web-document"],"customParameters")],R.prototype,"readCustomParameters",null),e([d$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],R.prototype,"customLayerParameters",void 0),e([d$1({type:M$1,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],R.prototype,"fullExtent",void 0),e([d$1({readOnly:!0})],R.prototype,"fullExtents",null),e([d$1({type:["WebTiledLayer"]})],R.prototype,"operationalLayerType",void 0),e([d$1()],R.prototype,"resourceInfo",void 0),e([d$1()],R.prototype,"serviceMode",void 0),e([o$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],R.prototype,"readServiceMode",null),e([d$1({type:S$1.ofType(m$1)})],R.prototype,"sublayers",void 0),e([o$1("service","sublayers",["layers"])],R.prototype,"readSublayersFromService",null),e([d$1({readOnly:!0})],R.prototype,"supportedSpatialReferences",null),e([d$1({readOnly:!0})],R.prototype,"tilemapCache",null),e([d$1({json:{read:{source:"title"}}})],R.prototype,"title",null),e([d$1({json:{read:!1},readOnly:!0,value:"wmts"})],R.prototype,"type",void 0),e([d$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],R.prototype,"url",null),e([d$1()],R.prototype,"version",void 0),R=e([i$1("esri.layers.WMTSLayer")],R);const W=R;

export default W;
