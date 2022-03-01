import { r as registerInstance, h, g as getElement } from './index-5d892dab.js';
import { c as createObserver } from './observers-43ae7e70.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};

const calciteFlowCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;width:100%;flex:1 1 auto;align-items:stretch;background-color:transparent;overflow:hidden}:host .frame{position:relative;margin:0px;display:flex;width:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-panel){height:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5}0%{transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1}100%{transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5}0%{transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1}100%{transform:translate3d(0, 0, 0)}}";

let CalciteFlow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.panelCount = 0;
    this.flowDirection = null;
    this.panels = [];
    this.getFlowDirection = (oldPanelCount, newPanelCount) => {
      const allowRetreatingDirection = oldPanelCount > 1;
      const allowAdvancingDirection = oldPanelCount && newPanelCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newPanelCount < oldPanelCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const { panels } = this;
      const newPanels = Array.from(this.el.querySelectorAll("calcite-panel"));
      const oldPanelCount = panels.length;
      const newPanelCount = newPanels.length;
      const activePanel = newPanels[newPanelCount - 1];
      const previousPanel = newPanels[newPanelCount - 2];
      if (newPanelCount && activePanel) {
        newPanels.forEach((panelNode) => {
          panelNode.showBackButton = newPanelCount > 1;
          panelNode.hidden = panelNode !== activePanel;
        });
      }
      if (previousPanel) {
        previousPanel.menuOpen = false;
      }
      this.panels = newPanels;
      if (oldPanelCount !== newPanelCount) {
        const flowDirection = this.getFlowDirection(oldPanelCount, newPanelCount);
        this.panelCount = newPanelCount;
        this.flowDirection = flowDirection;
      }
    };
    this.panelItemMutationObserver = createObserver("mutation", this.updateFlowProps);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-panel`.
   */
  async back() {
    const lastItem = this.el.querySelector("calcite-panel:last-child");
    if (!lastItem) {
      return;
    }
    const beforeBack = lastItem.beforeBack
      ? lastItem.beforeBack
      : () => Promise.resolve();
    return beforeBack.call(lastItem).then(() => {
      lastItem.remove();
      return lastItem;
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    (_a = this.panelItemMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.updateFlowProps();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.panelItemMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleCalcitePanelBackClick() {
    this.back();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection, panelCount } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating"
    };
    return (h("div", { class: frameDirectionClasses, key: panelCount }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
CalciteFlow.style = calciteFlowCss;

export { CalciteFlow as calcite_flow };
