import { browser } from "webextension-polyfill-ts";

// Core Extensions settings props
export type ExtensionSettingsProperties = {
  active: boolean;
  applyStyle: boolean;
  buttons: { label: string; text: string }[];
};

// update extension settings in browser storage
export function saveExtensionSettings(settings: ExtensionSettingsProperties): Promise<void> {
  return browser.storage.local.set({
    settings,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getExtensionSettings(): Promise<{ [s: string]: any }> {
  return browser.storage.local.get("settings");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateExtensionSettings(newFields?: {
  [s: string]: any;
}): Promise<void> {
  const { settings = {} } = await getExtensionSettings();

  return saveExtensionSettings({ ...settings, ...newFields });
}

// ToDo: Remove in the next major release
export function migrateSettings(settings: ExtensionSettingsProperties): Promise<void> {
  // clear all keys
  browser.storage.local.clear();

  return browser.storage.local.set({
    settings,
  });
}

// ToDo: Remove in the next major release
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPreviousSettings(): Promise<{ [s: string]: any }> {
  return browser.storage.local.get(null);
}
