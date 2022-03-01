import { r as registerInstance, e as createEvent, h, F as Fragment, g as getElement } from './index-5d892dab.js';
import { d as debounce, f as forIn } from './lodash-48790aa4.js';
import { f as focusElement } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  searchIcon: "search-icon",
  clearButton: "clear-button"
};
const TEXT = {
  filterLabel: "Filter",
  clear: "Clear filter"
};
const ICONS = {
  search: "search",
  close: "x"
};

const calciteFilterCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;width:100%}.container{display:flex;width:100%;padding:0.5rem}label{position:relative;margin-left:0.25rem;margin-right:0.25rem;margin-top:0px;margin-bottom:0px;display:flex;width:100%;align-items:center;overflow:hidden}input[type=text]{margin-bottom:0.25rem;width:100%;border-style:none;background-color:transparent;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:left var(--calcite-animation-timing), right var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

const filterDebounceInMs = 250;
let CalciteFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteFilterChange = createEvent(this, "calciteFilterChange", 7);
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * The resulting items after filtering.
     *
     * @readonly
     */
    this.filteredItems = [];
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce((value) => {
      const regex = new RegExp(value, "i");
      if (this.items.length === 0) {
        this.updateFiltered([]);
        return;
      }
      const find = (input, RE) => {
        let found = false;
        forIn(input, (val) => {
          if (typeof val === "function") {
            return;
          }
          if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
            if (find(val, RE)) {
              found = true;
            }
          }
          else if (RE.test(val)) {
            found = true;
          }
        });
        return found;
      };
      const result = this.items.filter((item) => {
        return find(item, regex);
      });
      this.updateFiltered(result);
    }, filterDebounceInMs);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
    };
    this.keyDownHandler = ({ key }) => {
      if (key === "Escape") {
        this.clear();
      }
    };
    this.clear = () => {
      this.value = "";
      this.setFocus();
    };
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  valueHandler(value) {
    this.filter(value);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.textInput);
  }
  updateFiltered(filtered) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    this.calciteFilterChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled } = this;
    return (h(Fragment, null, disabled ? h("calcite-scrim", null) : null, h("div", { class: CSS.container }, h("label", null, h("calcite-input", { "aria-label": this.intlLabel || TEXT.filterLabel, disabled: this.disabled, icon: ICONS.search, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (el) => {
        this.textInput = el;
      }, type: "text", value: this.value })), this.value ? (h("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, onClick: this.clear }, h("calcite-icon", { icon: ICONS.close }))) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "value": ["valueHandler"]
  }; }
};
CalciteFilter.style = calciteFilterCss;

export { CalciteFilter as calcite_filter };
