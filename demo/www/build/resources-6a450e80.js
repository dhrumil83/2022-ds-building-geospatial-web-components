import { k as getAssetPath } from './index-5d892dab.js';
import { l as locales } from './locale-8db58f05.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * Get supported locale code from raw user input
 * Exported for testing purposes.
 * @private
 */
function getSupportedLocale(lang = "") {
  if (locales.indexOf(lang) > -1) {
    return lang;
  }
  lang = lang.toLowerCase();
  if (lang.includes("-")) {
    lang = lang.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!locales.includes(lang)) {
      lang = lang.split("-")[0];
    }
  }
  return locales.includes(lang) ? lang : "en";
}
/**
 * CLDR cache.
 * Exported for testing purposes.
 * @private
 */
const translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 * @private
 */
const requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 * @public
 */
async function getLocaleData(lang) {
  const locale = getSupportedLocale(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch(getAssetPath(`./assets/calcite-date-picker/nls/${locale}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const HEADING_LEVEL = 2;
const TEXT = {
  nextMonth: "Next month",
  prevMonth: "Previous month",
  year: "Year"
};

export { HEADING_LEVEL as H, TEXT as T, getLocaleData as g };
