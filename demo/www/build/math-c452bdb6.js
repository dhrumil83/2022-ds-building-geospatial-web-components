/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalPlaces = (value) => {
  const match = ("" + value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};

export { clamp as c, decimalPlaces as d };
