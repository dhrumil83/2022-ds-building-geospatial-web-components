import { $ as C$1, bI as O, h as h$1, e, f as d$1, ax as o, aR as M, aS as k, i, cv as t, s, cr as r$1, m, c as s$1, gO as s$2, dF as x, t as b$1, S, eW as C$2, ct as e$1, l as l$1, V as r$2, j as S$1, bN as j$1, g as r$3, bO as B$1, cY as v, B as c$1, cw as n$1 } from './vec2f32-96e18450.js';
import { r } from './Version-ecfcdd2f.js';
import { j, p as p$1 } from './commonProperties-73952058.js';
import { p as p$3 } from './CollectionFlattener-52fb1d3d.js';
import './UniqueValueRenderer-59efe757.js';
import './DictionaryRenderer-148f4879.js';
import { m as m$1, n } from './jsonUtils-e58c15d9.js';
import './VisualVariablesMixin-f7c8cd7e.js';
import { a } from './HandleOwner-e0d82d22.js';
import { l } from './MultiOriginJSONSupport-4c0182cb.js';
import { m as m$2 } from './FeatureType-3ed2e985.js';
import { y as y$1 } from './Field-9ae21d09.js';
import { d as d$2 } from './FieldsIndex-a573ae50.js';
import { p as p$2 } from './LayerFloorInfo-742e79c9.js';
import { c, b as b$2, K as K$1 } from './Query-f41de01f.js';
import { a as a$1 } from './popupUtils-0b9004db.js';
import { l as l$2 } from './floorFilterUtils-a09da11b.js';
import { i as i$1 } from './sublayerUtils-c6a17833.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=y=>{let m=class extends y{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null;}readCapabilities(e,r$1){const s=r$1.capabilities&&r$1.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return {operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,i=-1!==s.indexOf("query"),p=-1!==s.indexOf("map"),a=!!r$1.exportTilesAllowed,l=-1!==s.indexOf("tilemap"),n="tile"!==t&&!!r$1.supportsDynamicLayers,u="tile"!==t&&(!r$1.tileInfo||n),c="tile"!==t&&(!r$1.tileInfo||n),y="tile"!==t,m=!!r$1.cimVersion&&r.parse(r$1.cimVersion).since(1,4);return {operations:{supportsQuery:i,supportsExportMap:p,supportsExportTiles:a,supportsTileMap:l},exportMap:p?{supportsArcadeExpressionForLabeling:m,supportsSublayersChanges:y,supportsDynamicLayers:n,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:c}:null,exportTiles:a?{maxExportTilesCount:+r$1.maxExportTilesCount}:null}}readVersion(e,r){let s=r.currentVersion;return s||(s=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=C$1(O(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return {result:e.data}}),(e=>({error:e}))));const o=await this._allLayersAndTablesPromise;if(h$1(e),"result"in o)return o.result;throw o.error}};return e([d$1({readOnly:!0})],m.prototype,"capabilities",void 0),e([o("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],m.prototype,"readCapabilities",null),e([d$1({json:{read:{source:"copyrightText"}}})],m.prototype,"copyright",void 0),e([d$1({type:M})],m.prototype,"fullExtent",void 0),e([d$1(j)],m.prototype,"id",void 0),e([d$1({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],m.prototype,"legendEnabled",void 0),e([d$1(p$1)],m.prototype,"popupEnabled",void 0),e([d$1({type:k})],m.prototype,"spatialReference",void 0),e([d$1()],m.prototype,"version",void 0),e([o("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],m.prototype,"readVersion",null),m=e([i("esri.layers.mixins.ArcGISMapService")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var C;function U(e){return e&&"esriSMS"===e.type}function q(e,r,i){var t$1;const o=this.originIdOf(r)>=t(i.origin);return {ignoreOrigin:!0,allowNull:o,enabled:!!i&&("map-image"===(null==(t$1=i.layer)?void 0:t$1.type)&&(i.writeSublayerStructure||o))}}function $(e,r,i){var t;return {enabled:!!i&&("tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r))}}function J(e,r,i){return {ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function R(e,r,i){return {ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=t(i.origin))}}const B=s.getLogger("esri.layers.support.Sublayer");let Q=0;const G=new Set;G.add("layer"),G.add("parent"),G.add("loaded"),G.add("loadStatus"),G.add("loadError"),G.add("loadWarnings");let H=C=class extends(a(l(r$1(m)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null;}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new s$1("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(r=this.source)?void 0:r.type)){i=(await C$1(this.url,{responseType:"json",query:{f:"json"},...e})).data;}else {var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e);}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}));})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return {exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e);}get fieldsIndex(){return new d$2(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e);}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeGlobalID"===i.type)return i.name}get id(){const e=this._get("id");return null==e?Q++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e);}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}});}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e);}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}set listMode(e){this._set("listMode",e);}set minScale(e){this._setAndNotifyLayer("minScale",e);}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e);}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeOID"===i.type)return i.name}set opacity(e){this._setAndNotifyLayer("opacity",e);}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}};}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=s$2(this.parent.id):r.parentLayerId=-1;}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if(x(r)){B.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e);}get source(){return this._get("source")||new c({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e);}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e);}castSublayers(e){return b$1(S.ofType(C),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse());}readTypeIdField(e,r){let i=(r=r.layerDefinition||r).typeIdField;if(i&&r.fields){i=i.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name);}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return `${i.path}/${t.mapLayerId}`;const o={layer:JSON.stringify({source:this.source})};return `${i.path}/dynamicLayer?${C$2(o)}`}set url(e){e?this._override("url",e):this._clearOverride("url");}set visible(e){this._setAndNotifyLayer("visible",e);}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e;}clone(){const{store:e}=e$1(this),r=new C;return e$1(r).store=e.clone(G),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return a$1(this,e)}createQuery(){return new b$2({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,t=new(0,(await import('./FeatureLayer-41ac22f1.js').then(function (n) { return n.F; })).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(t.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=l$1(this.floorInfo)),this.originIdOf("labelingInfo")>2&&(t.labelingInfo=l$1(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(t.visible=this.visible),this.originIdOf("minScale")>0&&(t.minScale=this.minScale),this.originIdOf("maxScale")>0&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(t.popupTemplate=l$1(this.popupTemplate)),this.originIdOf("renderer")>2&&(t.renderer=l$1(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(t.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(t.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(t.customParameters=this.layer.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let o=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){var i,t,o,s;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new s$1("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:l},{default:n}]=await Promise.all([import('./query-9613ab47.js').then(function (n) { return n.q; }),import('./FeatureSet-d05d7baa.js')]),p=await l(this.url,b$2.from(e),null!=(i=null==(t=this.layer)?void 0:t.spatialReference)?i:null,{...r,query:{...null==(o=this.layer)?void 0:o.customParameters,token:null==(s=this.layer)?void 0:s.apiKey}}),y=n.fromJSON(p.data);if(null!=y&&y.features)for(const a of y.features)a.sourceLayer=this;return y}toExportImageJSON(e){var r;const i={id:this.id,source:(null==(r=this.source)?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const r=r$2(e)?l$2(e,this):this.definitionExpression;i.definitionExpression=r;}else r$2(e)&&(i.definitionExpression=e);const t=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),o=Object.keys(t).some((e=>t[e]>2));if(o){const e=i.drawingInfo={};t.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),t.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&t.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),t.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer);}return i}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0]);}));}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)U(e.symbol)&&r(e.symbol);"symbol"in e&&U(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&U(e.defaultSymbol)&&r(e.defaultSymbol);}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let o,s;switch(e){case"definitionExpression":case"floorInfo":o="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":o="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":o="supportsDynamicLayers",s="supportsModification";}const l=e$1(this).getDefaultOrigin();if("service"!==l){if(o&&!1===this.get(`layer.capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${o}'`);if(s&&!1===this.get(`capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(B.error(new s$1("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault());}))]));}_logLockedError(e,r){B.error(new s$1("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}));}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};H.test={isMapImageLayerOverridePolicy:e=>e===J||e===q,isTileImageLayerOverridePolicy:e=>e===$},e([d$1({readOnly:!0})],H.prototype,"capabilities",void 0),e([o("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],H.prototype,"readCapabilities",null),e([d$1({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:q}}})],H.prototype,"definitionExpression",null),e([d$1({type:[y$1],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],H.prototype,"fields",void 0),e([d$1({readOnly:!0})],H.prototype,"fieldsIndex",null),e([d$1({type:p$2,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:q},origins:{"web-scene":{read:!1,write:!1}}}})],H.prototype,"floorInfo",null),e([d$1({type:M,json:{read:{source:"layerDefinition.extent"}}})],H.prototype,"fullExtent",void 0),e([d$1({type:String})],H.prototype,"globalIdField",void 0),e([o("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],H.prototype,"readGlobalIdFieldFromService",null),e([d$1({type:S$1,json:{write:{ignoreOrigin:!0}}})],H.prototype,"id",null),e([d$1({value:null,type:[j$1],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:J}}})],H.prototype,"labelingInfo",null),e([r$3("labelingInfo")],H.prototype,"writeLabelingInfo",null),e([d$1({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:J}}})],H.prototype,"labelsVisible",null),e([d$1({value:null})],H.prototype,"layer",null),e([d$1({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:R}}})],H.prototype,"legendEnabled",void 0),e([d$1({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],H.prototype,"listMode",null),e([d$1({type:Number,value:0,json:{write:{overridePolicy:J}}})],H.prototype,"minScale",null),e([o("minScale",["minScale","layerDefinition.minScale"])],H.prototype,"readMinScale",null),e([d$1({type:Number,value:0,json:{write:{overridePolicy:J}}})],H.prototype,"maxScale",null),e([o("maxScale",["maxScale","layerDefinition.maxScale"])],H.prototype,"readMaxScale",null),e([d$1({type:String})],H.prototype,"objectIdField",void 0),e([o("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],H.prototype,"readObjectIdFieldFromService",null),e([d$1({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:J}}})],H.prototype,"opacity",null),e([o("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],H.prototype,"readOpacity",null),e([r$3("opacity")],H.prototype,"writeOpacity",null),e([d$1({json:{type:S$1,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:J}}})],H.prototype,"parent",void 0),e([r$3("parent")],H.prototype,"writeParent",null),e([d$1({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:R,writer(e,r,i){r[i]=!e;}}}})],H.prototype,"popupEnabled",void 0),e([d$1({type:B$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:R}}})],H.prototype,"popupTemplate",void 0),e([d$1({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),e([d$1({types:m$1,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:J},origins:{"web-scene":{types:n,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:J}}}}})],H.prototype,"renderer",null),e([d$1({types:{key:"type",base:null,typeMap:{"data-layer":K$1,"map-layer":c}},cast(e){if(e){if("mapLayerId"in e)return v(c,e);if("dataSource"in e)return v(K$1,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:J}}})],H.prototype,"source",null),e([d$1()],H.prototype,"sourceJSON",void 0),e([d$1({value:null,json:{type:[S$1],write:{target:"subLayerIds",allowNull:!0,overridePolicy:J}}})],H.prototype,"sublayers",null),e([c$1("sublayers")],H.prototype,"castSublayers",null),e([r$3("sublayers")],H.prototype,"writeSublayers",null),e([d$1({type:String,json:{name:"name",write:{overridePolicy:R}}})],H.prototype,"title",void 0),e([d$1({type:String})],H.prototype,"typeIdField",void 0),e([o("typeIdField",["layerDefinition.typeIdField"])],H.prototype,"readTypeIdField",null),e([d$1({type:[m$2],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],H.prototype,"types",void 0),e([d$1({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:$}}})],H.prototype,"url",null),e([d$1({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:J}}})],H.prototype,"visible",null),e([r$3("visible")],H.prototype,"writeVisible",null),H=C=e([i("esri.layers.support.Sublayer")],H);const K=H;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b=s.getLogger("esri.layers.TileLayer");function p(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new K;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o);}else s.unshift(o);})),s):s}const d=S.ofType(K);function h(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&h(e.sublayers,r);}));}const f=o=>{let f=class extends o{constructor(...e){super(...e),this.allSublayers=new p$3({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0));}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t$1=t(r.origin);if(t$1<2)return;if(s[t$1]={context:r,visibleLayers:e.visibleLayers||s[t$1].visibleLayers,layers:e.layers||s[t$1].layers},t$1>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:o,origin:a}=this.createSublayersForOrigin("web-document"),i=e$1(this);i.setDefaultOrigin(a),this._set("sublayers",new d(o)),i.setDefaultOrigin("user");}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=t("web-document"===e?"web-map":e);let s=2,t$1=this.sublayersSourceJSON[2].layers,o=this.sublayersSourceJSON[2].context,a=null;const l=[3,4,5].filter((e=>e<=r));for(const n of l){const e=this.sublayersSourceJSON[n];i$1(e.layers)&&(s=n,t$1=e.layers,o=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}));}const i=[3,4,5].filter((e=>e>s&&e<=r));let y=null;for(const n of i){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[n];e&&(y={layers:e,context:s}),r&&(a={visibleLayers:r,context:s});}const b=p(t$1,o),f=new Map,S=new Set;if(y)for(const n of y.layers)f.set(n.id,n);if(a)for(const n of a.visibleLayers)S.add(n);return h(b,(e=>{y&&e.read(f.get(e.id),y.context),a&&e.read({defaultVisibility:S.has(e.id)},a.context);})),{origin:n$1(s),sublayers:new d({items:b})}}read(e,r){super.read(e,r),this.readSublayers(e,r);}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new s$1("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault();})),"sublayers-owner"));}};return e([d$1({readOnly:!0})],f.prototype,"allSublayers",void 0),e([d$1({readOnly:!0,type:S.ofType(K)})],f.prototype,"serviceSublayers",void 0),e([d$1({value:null,type:d,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],f.prototype,"sublayers",void 0),e([d$1({readOnly:!0})],f.prototype,"sublayersSourceJSON",void 0),f=e([i("esri.layers.mixins.SublayersOwner")],f),f};

export { K, f, y };
