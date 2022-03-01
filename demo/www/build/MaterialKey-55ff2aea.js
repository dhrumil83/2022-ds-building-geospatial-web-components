import { c as s } from './vec2f32-96e18450.js';
import { A as A$1, r as _$1, E as E$1 } from './Utils-b64a9f45.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return !0;default:return !1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,s){const a=A$1.SIZE_FIELD_STOPS|A$1.SIZE_MINMAX_VALUE|A$1.SIZE_SCALE_STOPS|A$1.SIZE_UNIT_VALUE,r=(t&(_$1.FIELD_TARGETS_OUTLINE|_$1.MINMAX_TARGETS_OUTLINE|_$1.SCALE_TARGETS_OUTLINE|_$1.UNIT_TARGETS_OUTLINE))>>>4;return s.isOutline||s.isOutlinedFill?a&r:a&~r}const n=0,v=8,o=7,l=8,h=11,S=11,u=12,d=13,V=14,c=15,p=15,g=16,z=17,m=18,y=19,E=20,T=21,M=22;function L(t,e){switch(t){case E$1.FILL:return x.from(e);case E$1.LINE:return B.from(e);case E$1.MARKER:return U.from(e);case E$1.TEXT:return R.from(e);case E$1.LABEL:return b.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function F(t){switch(_.load(t).geometryType){case E$1.MARKER:return new U(t);case E$1.FILL:return new x(t);case E$1.LINE:return new B(t);case E$1.TEXT:return new R(t);case E$1.LABEL:return new b(t)}}class _{constructor(t){this._data=0,this._data=t;}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t;}get data(){return this._data}get geometryType(){return this.bits(l,h)}set geometryType(t){this.setBits(t,l,h);}get mapAligned(){return !!this.bit(E)}set mapAligned(t){this.setBit(E,t);}get sdf(){return !!this.bit(S)}set sdf(t){this.setBit(S,t);}get pattern(){return !!this.bit(u)}set pattern(t){this.setBit(u,t);}get textureBinding(){return this.bits(n,v)}set textureBinding(t){this.setBits(t,n,v);}get geometryTypeString(){switch(this.geometryType){case E$1.FILL:return "fill";case E$1.MARKER:return "marker";case E$1.LINE:return "line";case E$1.TEXT:return "text";case E$1.LABEL:return "label";default:throw new s(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i;}bit(t){return (this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a));}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return !1}setVV(t,e){}getVariation(){return {mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}_.shared=new _(0);const I=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(t){this.setBit(g,t);}get vvSizeScaleStops(){return 0!==this.bit(z)}set vvSizeScaleStops(t){this.setBit(z,t);}get vvSizeFieldStops(){return 0!==this.bit(m)}set vvSizeFieldStops(t){this.setBit(m,t);}get vvSizeUnitValue(){return 0!==this.bit(y)}set vvSizeUnitValue(t){this.setBit(y,t);}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=r(t,i)&t;this.vvSizeMinMaxValue=!!(s&A$1.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&A$1.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&A$1.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&A$1.SIZE_SCALE_STOPS);}},O=t=>class extends t{get vvRotation(){return 0!==this.bit(c)}set vvRotation(t){this.setBit(c,t);}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i.isOutline&&!!(t&A$1.ROTATION);}},A=t=>class extends t{get vvColor(){return 0!==this.bit(d)}set vvColor(t){this.setBit(d,t);}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i.isOutline&&!!(t&A$1.COLOR);}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(V)}set vvOpacity(t){this.setBit(V,t);}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i.isOutline&&!!(t&A$1.OPACITY);}};class x extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return !!this.bit(p)}set dotDensity(t){this.setBit(p,t);}get simple(){return !!this.bit(M)}set simple(t){this.setBit(M,t);}get outlinedFill(){return !!this.bit(T)}set outlinedFill(t){this.setBit(T,t);}}x.shared=new x(0);class U extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0);class B extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class R extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);class b extends(I(_)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e$1=this.load(0);return e$1.geometryType=E$1.LABEL,e$1.setVV(t.vvFlags,t),e$1.mapAligned=e(t.placement),e$1.data}getVariation(){return {...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}b.shared=new b(0);

export { B, F, L, R, U, _, b, e, x };
