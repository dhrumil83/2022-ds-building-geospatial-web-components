import { r as registerInstance, e as createEvent, h, F as Fragment } from './index-5d892dab.js';

const calciteOptionGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";

let CalciteOptionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteOptionGroupChange = createEvent(this, "calciteOptionGroupChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents selection from any of its associated options.
     */
    this.disabled = false;
  }
  handlePropChange() {
    this.calciteOptionGroupChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return (h(Fragment, null, h("div", null, this.label), h("slot", null)));
  }
  static get watchers() { return {
    "disabled": ["handlePropChange"],
    "label": ["handlePropChange"]
  }; }
};
CalciteOptionGroup.style = calciteOptionGroupCss;

export { CalciteOptionGroup as calcite_option_group };
