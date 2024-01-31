import { i18n } from "@/config/i18n.config";

export const flag = {
 "pt": "/images/icon/pt.svg",
 "crioulo" :"/images/icon/cv.svg",
}

export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) => {
  return { code, ico: flag[code as FlagKey] };
});