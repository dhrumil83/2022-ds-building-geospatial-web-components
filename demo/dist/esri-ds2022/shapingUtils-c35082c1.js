import { C, t as t$2 } from './Rect-988189d5.js';
import { bs as t$1, e8 as n$2, br as n$3, b6 as n$4, b8 as c$1, e9 as o$1, ea as e$1, bj as h, aX as r$1, bk as D, b7 as i$2 } from './vec2f32-96e18450.js';
import { w as w$1 } from './number-237bc27c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$1=new C;function n$1(r){if(!i$1.hasBidiChar(r))return [r,!1];let n;return n="rtl"===i$1.checkContextual(r)?"IDNNN":"ICNNN",[i$1.bidiTransform(r,n,"VLYSN"),!0]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e,t;function r(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}function n(e){switch(e){case"top":return t.Top;case"middle":return t.Center;case"baseline":return t.Baseline;case"bottom":return t.Bottom}}function a(r){switch(r){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return [e.Right,t.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return [e.Center,t.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return [e.Left,t.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return [e.Right,t.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return [e.Center,t.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return [e.Left,t.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return [e.Right,t.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return [e.Center,t.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return [e.Left,t.Top];default:return console.debug(`Found invalid placement type ${r}`),[e.Center,t.Center]}}function c(t){switch(t){case e.Right:return -1;case e.Center:return 0;case e.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function o(e){switch(e){case t.Top:return 1;case t.Center:return 0;case t.Bottom:case t.Baseline:return -1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right";}(e||(e={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline";}(t||(t={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(i,e,s,r){this.center=t$1(i,e),this.centerT=n$2(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r;}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t;}set y(t){this.center[1]=t;}clone(){return new i(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,h=4){const i=Math.abs(t.centerT[0]-this.centerT[0]),e=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+h)/i,r=(t.halfHeight+this.halfHeight+h)/e,n=Math.min(s,r);return Math.log2(n)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n;}static deserialize(t){const h=t.readF32(),e=t.readF32(),s=t.readInt32(),r=t.readInt32();return new i(h,e,s,r)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=26,g=4,_=u+g,p=u-6,x=3,w=8,y=Math.PI/180;class T{constructor(t,s,e,i){this._rotationT=n$3(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const h=e.rect,o=new Float32Array(8);t*=i,s*=i;const r=e.code?h.width*i:e.metrics.width,a=e.code?h.height*i:e.metrics.height;o[0]=t,o[1]=s,o[2]=t+r,o[3]=s,o[4]=t,o[5]=s+a,o[6]=t+r,o[7]=s+a,this._data=o,this._setTextureCoords(h),this._scale=i,this._mosaic=e,this.x=t,this.y=s,this.maxOffset=Math.max(t+r,s+a);}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,n$4(this._rotationT),c$1(this._rotationT,this._rotationT,-e),this._setOffsets(this._data);}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:t,width:s}=this._mosaic.metrics,i$1=s*this._scale,h=Math.abs(t)*this._scale,r=new Float32Array(8);r[0]=this.x,r[1]=this.y,r[2]=this.x+i$1,r[3]=this.y,r[4]=this.x,r[5]=this.y+h,r[6]=this.x+i$1,r[7]=this.y+h;const a=o$1(n$3(),this._rotationT,this._T);e$1(r,r,a);let c=1/0,d=1/0,f=0,l=0;for(let e=0;e<4;e++){const t=r[2*e],s=r[2*e+1];c=Math.min(c,t),d=Math.min(d,s),f=Math.max(f,t),l=Math.max(l,s);}const u=f-c,g=l-d,_=c+u/2,p=d+g/2;this._bounds=new i(_,p,u,g);}return this._bounds}setTransform(t){this._T=t,this._offsets=null;}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const s=this._offsets,i=new Float32Array(8),h=o$1(n$3(),this._rotationT,this._T);e$1(i,t,h),s.upperLeft=w$1(i[0]*w,i[1]*w),s.upperRight=w$1(i[2]*w,i[3]*w),s.lowerLeft=w$1(i[4]*w,i[5]*w),s.lowerRight=w$1(i[6]*w,i[7]*w);}_setTextureCoords({x:t,y:s,width:e,height:i}){this._texcoords={upperLeft:w$1(t,s),upperRight:w$1(t+e,s),lowerLeft:w$1(t,s+i),lowerRight:w$1(t+e,s+i)};}}const M=(t,s)=>({code:0,page:0,sdf:!0,rect:new t$2(0,0,11,8),textureBinding:s,metrics:{advance:0,height:4,width:t,left:0,top:0}});class B{constructor(t,s,e){this._rotation=0,this._decorate(t,s,e),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=s.length>1,this._hasRotation=0!==e.angle,this._T=this._createGlyphTransform(this.bounds,e);for(const i of t)i.setTransform(this._T);}setRotation(t){if(0===t&&0===this._rotation)return;this._rotation=t;const s=this._T,h$1=h(n$3(),t);o$1(s,h$1,s);for(const e of this.glyphs)e.setTransform(this._T);}_decorate(t,s,e){if(!e.decoration||"none"===e.decoration||!t.length)return;const i=e.scale,h="underline"===e.decoration?_:p,n=t[0].textureBinding;for(const o of s){const s=o.startX*i,e=o.startY*i,r=(o.width+o.glyphWidthEnd)*i;t.push(new T(s,e+h*i,M(r,n),1));}}get boundsT(){const t=this.bounds,s=r$1(n$2(),t.x,t.y);if(D(s,s,this._T),this._hasRotation){const e=Math.max(t.width,t.height);return new i(s[0],s[1],e,e)}return new i(s[0],s[1],t.width,t.height)}_createBounds(t){let s=1/0,e=1/0,i$1=0,h=0;for(const r of t)s=Math.min(s,r.xTopLeft),e=Math.min(e,r.yTopLeft),i$1=Math.max(i$1,r.xTopLeft+r.width),h=Math.max(h,r.yBottomRight);const n=i$1-s,o=h-e;return new i(s+n/2,e+o/2,n,o)}_createGlyphTransform(t,e){const i=y*e.angle,o=n$3(),a=n$2();return i$2(o,o,r$1(a,e.xOffset,-e.yOffset)),e.isCIM?c$1(o,o,i):(i$2(o,o,r$1(a,t.x,t.y)),c$1(o,o,i),i$2(o,o,r$1(a,-t.x,-t.y))),o}}class b{constructor(t,s,e,i,h,n){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(s,e)),this.end=Math.max(0,Math.max(s,e)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=h,this.yMax=n;}}const R=t=>10===t,L=t=>32===t;function v(t,s,e){const i=new Array,h=1/e.scale,n=e.maxLineWidth*h,o=s?t.length-1:0,r=s?-1:t.length,a=s?-1:1;let c=o,d=0,f=0,l=c,m=l,u=0,g=1/0,_=0;for(;c!==r;){const{code:s,metrics:e}=t[c],h=Math.abs(e.top);if(R(s)||L(s)||(g=Math.min(g,h),_=Math.max(_,h+e.height)),R(s))c!==o&&(i.push(new b(t,l,c-a,d,g,_)),g=1/0,_=0),d=0,l=c+a,m=c+a,f=0;else if(L(s))m=c+a,f=0,u=e.advance,d+=e.advance;else if(d>n){if(m!==l){const s=m-2*a;d-=u,i.push(new b(t,l,s,d-f,g,_)),g=1/0,_=0,l=m,d=f;}else i.push(new b(t,l,c-a,d,g,_)),g=1/0,_=0,l=c,m=c,d=0;d+=e.advance,f+=e.advance;}else d+=e.advance,f+=e.advance;c+=a;}const p=new b(t,l,c-a,d,g,_);return p.start>=0&&p.end<t.length&&i.push(p),i}function j(t,s){let e=0;for(let n=0;n<t.length;n++){const{width:s}=t[n];e=Math.max(s,e);}const i="underline"===s.decoration?g:0,h=t[0].yMin;return {x:0,y:h,height:t[t.length-1].yMax+s.lineHeight*(t.length-1)+i-h,width:e}}function A(t$1,s,e){const i=e.scale,h=new Array,n=v(t$1,s,e),o=j(n,e),{vAlign:r,hAlign:a}=e,c=r===t.Baseline?1:0,f=c?0:r-1,l=(1-c)*-o.y+f*(o.height/2)+(c?1:0)*-u;for(let d=0;d<n.length;d++){const{start:s,end:o,width:r}=n[d];let c=-1*(a+1)*(r/2)-x;const f=d*e.lineHeight+l-x;n[d].startX=c,n[d].startY=f;for(let e=s;e<=o;e++){const s=t$1[e];if(R(s.code))continue;const n=new T(c+s.metrics.left,f-s.metrics.top,s,i);c+=s.metrics.advance,h.push(n);}}return new B(h,n,e)}

export { A, n$1 as a, a as b, c, e, n, o, r, s, t };
