/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ImportSourceAPI = t.iface([], {
  "getImportSource": t.func(t.union("ImportSource", "undefined")),
});

export const ImportProcessorAPI = t.iface([], {
  "processImport": t.func(t.array("GristTable"), t.param("source", "ImportSource")),
});

export const FileContent = t.iface([], {
  "content": "any",
  "name": "string",
});

export const FileListItem = t.iface([], {
  "kind": t.lit("fileList"),
  "files": t.array("FileContent"),
});

export const URL = t.iface([], {
  "kind": t.lit("url"),
  "url": "string",
});

export const ImportSource = t.iface([], {
  "item": t.union("FileListItem", "URL"),
  "options": t.opt(t.union("string", "Buffer")),
  "description": t.opt("string"),
});

const exportedTypeSuite: t.ITypeSuite = {
  ImportSourceAPI,
  ImportProcessorAPI,
  FileContent,
  FileListItem,
  URL,
  ImportSource,
};
export default exportedTypeSuite;
