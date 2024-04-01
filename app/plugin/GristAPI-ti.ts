/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const UIRowId = t.union("number", t.lit('new'));

export const CursorPos = t.iface([], {
  "rowId": t.opt("UIRowId"),
  "rowIndex": t.opt("number"),
  "fieldIndex": t.opt("number"),
  "sectionId": t.opt("number"),
  "linkingRowIds": t.opt(t.array("UIRowId")),
});

export const ComponentKind = t.union(t.lit("safeBrowser"), t.lit("safePython"), t.lit("unsafeNode"));

export const GristAPI = t.iface([], {
  "render": t.func("number", t.param("path", "string"), t.param("target", "RenderTarget"), t.param("options", "RenderOptions", true)),
  "dispose": t.func("void", t.param("procId", "number")),
  "subscribe": t.func("void", t.param("tableId", "string")),
  "unsubscribe": t.func("void", t.param("tableId", "string")),
});

export const GristDocAPI = t.iface([], {
  "getDocName": t.func("string"),
  "listTables": t.func(t.array("string")),
  "fetchTable": t.func("any", t.param("tableId", "string")),
  "applyUserActions": t.func("any", t.param("actions", t.array(t.array("any"))), t.param("options", "any", true)),
  "getAccessToken": t.func("AccessTokenResult", t.param("options", "AccessTokenOptions")),
});

export const FetchSelectedOptions = t.iface([], {
  "keepEncoded": t.opt("boolean"),
  "format": t.opt(t.union(t.lit('rows'), t.lit('columns'))),
  "includeColumns": t.opt(t.union(t.lit('shown'), t.lit('normal'), t.lit('all'))),
});

export const GristView = t.iface([], {
  "fetchSelectedTable": t.func("any", t.param("options", "FetchSelectedOptions", true)),
  "fetchSelectedRecord": t.func("any", t.param("rowId", "number"), t.param("options", "FetchSelectedOptions", true)),
  "allowSelectBy": t.func("void"),
  "setSelectedRows": t.func("void", t.param("rowIds", t.union(t.array("number"), "null"))),
  "setCursorPos": t.func("void", t.param("pos", "CursorPos")),
});

export const AccessTokenOptions = t.iface([], {
  "readOnly": t.opt("boolean"),
});

export const AccessTokenResult = t.iface([], {
  "token": "string",
  "baseUrl": "string",
  "ttlMsecs": "number",
});

const exportedTypeSuite: t.ITypeSuite = {
  UIRowId,
  CursorPos,
  ComponentKind,
  GristAPI,
  GristDocAPI,
  FetchSelectedOptions,
  GristView,
  AccessTokenOptions,
  AccessTokenResult,
};
export default exportedTypeSuite;