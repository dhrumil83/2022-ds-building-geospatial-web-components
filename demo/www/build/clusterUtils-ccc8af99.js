import { cp as b, e6 as n$1, l as l$1, e, f as d$1, g as r, i, s, ac as i$1, z as t, e7 as l$2, c as s$1 } from './vec2f32-96e18450.js';
import { x as x$1 } from './MD5-6027098a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let n=l=class extends b{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:n$1(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:n$1(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:l$1(this.levels)})}};e([d$1()],n.prototype,"levels",void 0),e([r("levels")],n.prototype,"writeLevels",null),n=l=e([i("esri.views.2d.engine.LevelDependentSizeVariable")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=s.getLogger("esri.views.2d.layers.support.clusterUtils");i$1.add("esri-cluster-arcade-enabled",!0);const u=i$1("esri-cluster-arcade-enabled"),c=(e,i,t$1,s)=>{const a=i.clone();if(!m(a))return a;if(t$1.fields)for(const r of t$1.fields)x(e,r);if("visualVariables"in a){const i=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(i);i.forEach((i=>{"rotation"===i.type?i.field?i.field=y(e,i.field,"avg_angle"):i.valueExpression&&(i.field=S(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=y(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=y(e,i.field,"avg"):(i.field=S(e,i.valueExpression,"avg"),i.valueExpression=null);})),t(n)&&!p(i)&&(i.push(f(t$1,s)),a.dynamicClusterSize=!0),a.visualVariables=i;}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=y(e,a.field,"mode"):a.valueExpression&&(a.field=S(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=y(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=y(e,a.field,"avg"):(a.field=S(e,a.valueExpression,"avg"),a.valueExpression=null);}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return !0;return !1},f=(e,i)=>{const t$1=[new l$2({value:0,size:0}),new l$2({value:1})];if(t(i))return new b({field:"cluster_count",stops:[...t$1,new l$2({value:2,size:0})]});const s=Object.keys(i).reduce(((r,s)=>({...r,[s]:[...t$1,new l$2({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new l$2({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:s})},m=i=>{const t=t=>o.error(new s$1("Unsupported-renderer",t,{renderer:i}));if("unique-value"===i.type){if(i.field2||i.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===i.type){if(i.normalizationField){const e=i.normalizationType;if("field"!==e)return t(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}}else if("simple"!==i.type)return t(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1;if(!u){if("valueExpression"in i&&i.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return !0};function v(e,i,t){switch(e){case"avg":case"avg_angle":return `cluster_avg_${i}`;case"mode":return `cluster_type_${i}`;case"norm":{const e=t,r="field",a=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return "cluster_avg_"+x$1(a)}}}function x(i,t){const{name:r,outStatistic:a}=t,{onStatisticField:n,onStatisticValueExpression:l,statisticType:u}=a;if(l){const e=x$1(l.toLowerCase());i.push({name:r,outStatistic:{onStatisticField:e,onStatisticValueExpression:l,statisticType:u}});}else n?i.push({name:r,outStatistic:{onStatisticField:n,statisticType:u}}):o.error(new s$1("mapview-unsupported-field","Unable to handle field",{field:t}));}function S(e,i,t){const r=x$1(i),a="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===a))||e.push({name:a,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),a}function y(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=v(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}

export { c, d, f, m };
