import { a1 as M } from './vec2f32-a88eee2e.js';
import { k as r } from './intl-f9bcf179.js';
import { s as s$1 } from './projection-60b2cc57.js';
import { u, s, v, y, B } from './pixelUtils-0e1dbd21.js';
import { P, N } from './RasterSymbolizer-edab1c90.js';
import { x, d, L } from './rasterProjectionHelper-0711fd5a.js';
import { f, c } from './dataUtils-8a30aeae.js';
import { f as f$1 } from './utils-76a06b7a.js';
import './JSONSupport-add604e3.js';
import './mat4-ae511675.js';
import './zscale-41674b48.js';
import './LercCodec-84063467.js';
import './colorUtils-a7d03078.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{convertVectorFieldData(e){const o=u.fromJSON(e.pixelBlock),s=f(o,e.type);return Promise.resolve(r(s)&&s.toJSON())}async decode(r){const e=await P(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=u.fromJSON(e.pixelBlock),e.extent=e.extent?M.fromJSON(e.extent):null;const o=this.symbolizer.symbolize(e);return Promise.resolve(r(o)&&o.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=N.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r(o)&&o.toJSON())}estimateStatisticsHistograms(r){const e=s(u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=v(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=y(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo});if(!r.coefs)return o&&o.toJSON();const s=B(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}async createStreamlinesMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),width:r.flowData.width,height:r.flowData.height},{vertexData:o,indexData:s}=await c(r.rendererSettings,t,e.signal);return {result:{vertexBuffer:o.buffer,indexBuffer:s.buffer},transferList:[o.buffer,s.buffer]}}async getProjectionOffsetGrid(r){const t=M.fromJSON(r.projectedExtent),o=M.fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationStemps&&(s=new s$1({steps:r.datumTransformationStemps})),x(t.spatialReference,o.spatialReference,s)&&await d();const i=r.rasterTransform?f$1(r.rasterTransform):null;return L({...r,projectedExtent:t,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}

export default h;
