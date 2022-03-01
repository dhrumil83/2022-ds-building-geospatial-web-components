import { a4 as o, aG as K, b0 as q, k as r, B as i, t, C, a as s, a6 as o$1, e, d as d$1, i as i$2 } from './intl-f9bcf179.js';
import { m, a1 as M, a2 as k, k as h, Z as d } from './vec2f32-a88eee2e.js';
import { y } from './TimeExtent-c4789fb1.js';
import { u } from './clientSideDefaults-9d3f54d4.js';
import { i as i$1 } from './FeatureLayer-d0cffc77.js';
import { Q, a } from './QueryTask-b0a64993.js';
import './JSONSupport-add604e3.js';
import './QueryEngineCapabilities-d289cd19.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './jsonUtils-d380cab0.js';
import './aliasOf-93c38510.js';
import './Handles-c08f164d.js';
import './MultiOriginJSONSupport-9580fd5e.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './HeightModelInfo-d5d3aa1e.js';
import './HandleOwner-8815c4dd.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './workers-b2f67d28.js';
import './queryZScale-5052a726.js';
import './zscale-41674b48.js';
import './FeatureSet-4fb958ac.js';
import './APIKeyMixin-8575f837.js';
import './ArcGISService-7e7b6abe.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './BlendLayer-324633cc.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-a86b0825.js';
import './labelingInfo-25767b21.js';
import './Query-689827fc.js';
import './FeatureReductionCluster-71a4b0f9.js';
import './commonProperties-dc6e2688.js';
import './OperationalLayer-4ec71ac3.js';
import './OrderedLayer-c71463ea.js';
import './PortalLayer-1931d936.js';
import './RefreshableLayer-1f637573.js';
import './ScaleRangeLayer-e13c0aef.js';
import './TemporalLayer-53bb7671.js';
import './TimeInfo-eeca5f4b.js';
import './FeatureType-b8b87e07.js';
import './fieldProperties-49d5cbad.js';
import './FieldsIndex-a1139706.js';
import './LayerFloorInfo-b956bff1.js';
import './styleUtils-d505ace0.js';
import './TopFeaturesQuery-1ab1fe83.js';
import './popupUtils-74d35ca3.js';
import './utils-8e500178.js';
import './scaleUtils-88e9eb11.js';
import './floorFilterUtils-a09da11b.js';
import './executeQueryJSON-99aa27d5.js';
import './query-f9bc0945.js';
import './normalizeUtils-4a0b810f.js';
import './pbfQueryUtils-cdfd4767.js';
import './pbf-82f66092.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './featureConversionUtils-a3d8ec70.js';
import './Task-634f7f0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=new o({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function _(e){if("string"==typeof e){const t=K(e);return t||{data:e}}return new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(K(s.result)),s.onerror=e=>r(e);}))}const O=new Set(["Feature Layer","Table"]);let S=class extends m{constructor(){super(...arguments),this.type="feature-layer",this.refresh=q((async()=>{var e,t;await this.load();const r=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==r)return {dataChanged:!0,updates:{}};try{await this._fetchService(null);}catch{return {dataChanged:!0,updates:{}}}const s=r!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate);return {dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}));}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t$1,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,u=i("featurelayer-pbf")&&e&&t(s)?"pbf":"json";return new Q({url:t$1.path,format:u,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,i.query);try{const e=await C(a,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,n.query);try{const e=await C(i,{body:o});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);i$1(s,a,this.layer.spatialReference);const n=[],o=[],u=[...e.deleteAttachments];for(const r of e.addAttachments)n.push(await this._serializeAttachment(r));for(const r of e.updateAttachments)o.push(await this._serializeAttachment(r));const l=n.length||o.length||u.length?{adds:n,updates:o,deletes:u}:null,d={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:a,deletes:i,attachments:l}]),d.returnServiceEditsOption=I.toJSON(null==t?void 0:t.returnServiceEditsOption),d.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(d.adds=s.length?JSON.stringify(s):null,d.updates=a.length?JSON.stringify(a):null,d.deletes=i.length?null!=t&&t.globalIdUsed?JSON.stringify(i):i.join(","):null,d.attachments=l&&JSON.stringify(l));const c=this._getLayerRequestOptions({method:"post",query:d}),h=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await C(h+"/applyEdits",c);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return (await C(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:n}=await C(`${i}/${a}`,t),{id:o,extent:u,fullExtent:l,timeExtent:d}=n,c=u||l;return {id:o,fullExtent:c&&M.fromJSON(c),timeExtent:d&&y.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:s}=this.layer,a$1=s.path;await this.load();const i=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=a$1+"/"+e+"/attachments";s.push(C(t,i));}return Promise.all(s).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>a(e,a$1)))}return this.queryTask.executeAttachmentQuery(e,i)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await C(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:i("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s;}this.sourceJSON=this._patchServiceJSON(e);const s$1=e.type;if(!O.has(s$1))throw new s("feature-layer-source:unsupported-type",`Source type "${s$1}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=u(e.geometryType).renderer;o$1("drawingInfo.renderer",t,e);}return "esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t$1,attributes:r}=e;return t(t$1)?{attributes:r}:"mesh"===t$1.type||"extent"===t$1.type?null:{geometry:t$1.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:i,data:n,uploadId:o}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)u.uploadId=o;else if(n){const e=await _(n);u.contentType=e.mediaType,u.data=e.data,n instanceof File&&(u.name=n.name);}return a&&(u.name=a),i&&(u.contentType=i),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const r=e.data,{layerId:s}=this.layer,a=[];let i=null;if(Array.isArray(r))for(const u of r)a.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===s&&(i={addResults:u.addResults,updateResults:u.updateResults,deleteResults:u.deleteResults,attachments:u.attachments,editMoment:u.editMoment});else i=r;const n=null==(t=i)?void 0:t.attachments,o={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(o.editMoment=i.editMoment),a.length>0){o.editedFeatureResults=[];for(const e of a){const{adds:t,updates:r,deletes:s,spatialReference:a}=e.editedFeatures,i=a?new k(a):null;o.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,i))))||[],updates:(null==r?void 0:r.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)}))))||[],deletes:(null==s?void 0:s.map((e=>this._createEditedFeature(e,i))))||[],spatialReference:i}});}}return o}_createEditedFeature(e,r){return new h({attributes:e.attributes,geometry:d({...e.geometry,spatialReference:r})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:t?new s("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s$1=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s("feature-layer-source:attachment-failure",r,{code:s$1})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const e=t[s];null!=e&&(r.set?r.set(s,e):r.append(s,e));}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return {...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};e([d$1()],S.prototype,"type",void 0),e([d$1({constructOnly:!0})],S.prototype,"layer",void 0),e([d$1({readOnly:!0})],S.prototype,"queryTask",null),S=e([i$2("esri.layers.graphics.sources.FeatureLayerSource")],S);const E=S;

export default E;
