/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ThemePrefs = t.iface([], {
  "appearance": "ThemeAppearance",
  "syncWithOS": "boolean",
  "colors": t.iface([], {
    "light": "ThemeNameOrColors",
    "dark": "ThemeNameOrColors",
  }),
});

export const ThemeAppearance = t.union(t.lit('light'), t.lit('dark'));

export const ThemeNameOrColors = t.union("ThemeName", "ThemeColors");

export const ThemeName = t.union(t.lit('GristLight'), t.lit('GristDark'));

export const Theme = t.iface([], {
  "appearance": "ThemeAppearance",
  "colors": "ThemeColors",
});

export const ThemeColors = t.iface([], {
  "text": "string",
  "text-light": "string",
  "text-medium": "string",
  "text-dark": "string",
  "text-error": "string",
  "text-error-hover": "string",
  "text-danger": "string",
  "text-disabled": "string",
  "page-bg": "string",
  "page-backdrop": "string",
  "page-panels-main-panel-bg": "string",
  "page-panels-left-panel-bg": "string",
  "page-panels-right-panel-bg": "string",
  "page-panels-top-header-bg": "string",
  "page-panels-bottom-footer-bg": "string",
  "page-panels-border": "string",
  "page-panels-border-resizing": "string",
  "page-panels-side-panel-opener-fg": "string",
  "page-panels-side-panel-opener-active-fg": "string",
  "page-panels-side-panel-opener-active-bg": "string",
  "add-new-circle-fg": "string",
  "add-new-circle-bg": "string",
  "add-new-circle-hover-bg": "string",
  "add-new-circle-small-fg": "string",
  "add-new-circle-small-bg": "string",
  "add-new-circle-small-hover-bg": "string",
  "top-bar-button-primary-fg": "string",
  "top-bar-button-secondary-fg": "string",
  "top-bar-button-disabled-fg": "string",
  "top-bar-button-error-fg": "string",
  "notifications-panel-header-bg": "string",
  "notifications-panel-body-bg": "string",
  "notifications-panel-border": "string",
  "toast-text": "string",
  "toast-text-light": "string",
  "toast-bg": "string",
  "toast-memo-text": "string",
  "toast-memo-bg": "string",
  "toast-error-icon": "string",
  "toast-error-bg": "string",
  "toast-success-icon": "string",
  "toast-success-bg": "string",
  "toast-warning-icon": "string",
  "toast-warning-bg": "string",
  "toast-info-icon": "string",
  "toast-info-bg": "string",
  "toast-control-fg": "string",
  "toast-control-info-fg": "string",
  "tooltip-fg": "string",
  "tooltip-bg": "string",
  "tooltip-icon": "string",
  "tooltip-close-button-fg": "string",
  "tooltip-close-button-hover-fg": "string",
  "tooltip-close-button-hover-bg": "string",
  "modal-bg": "string",
  "modal-backdrop": "string",
  "modal-border": "string",
  "modal-border-dark": "string",
  "modal-border-hover": "string",
  "modal-shadow-inner": "string",
  "modal-shadow-outer": "string",
  "modal-close-button-fg": "string",
  "modal-backdrop-close-button-fg": "string",
  "modal-backdrop-close-button-hover-fg": "string",
  "popup-bg": "string",
  "popup-shadow-inner": "string",
  "popup-shadow-outer": "string",
  "popup-close-button-fg": "string",
  "prompt-fg": "string",
  "progress-bar-fg": "string",
  "progress-bar-error-fg": "string",
  "progress-bar-bg": "string",
  "link": "string",
  "link-hover": "string",
  "hover": "string",
  "hover-light": "string",
  "cell-editor-fg": "string",
  "cell-editor-placeholder-fg": "string",
  "cell-editor-bg": "string",
  "cursor": "string",
  "cursor-inactive": "string",
  "cursor-readonly": "string",
  "table-header-fg": "string",
  "table-header-selected-fg": "string",
  "table-header-bg": "string",
  "table-header-selected-bg": "string",
  "table-header-border": "string",
  "table-body-bg": "string",
  "table-body-border": "string",
  "table-add-new-bg": "string",
  "table-scroll-shadow": "string",
  "table-frozen-columns-border": "string",
  "table-drag-drop-indicator": "string",
  "table-drag-drop-shadow": "string",
  "table-cell-summary-bg": "string",
  "card-compact-widget-bg": "string",
  "card-compact-record-bg": "string",
  "card-blocks-bg": "string",
  "card-form-label": "string",
  "card-compact-label": "string",
  "card-blocks-label": "string",
  "card-form-border": "string",
  "card-compact-border": "string",
  "card-editing-layout-bg": "string",
  "card-editing-layout-border": "string",
  "card-list-form-border": "string",
  "card-list-blocks-border": "string",
  "selection": "string",
  "selection-darker": "string",
  "selection-darkest": "string",
  "selection-opaque-fg": "string",
  "selection-opaque-bg": "string",
  "selection-opaque-dark-bg": "string",
  "selection-header": "string",
  "widget-bg": "string",
  "widget-border": "string",
  "widget-active-border": "string",
  "widget-inactive-stripes-light": "string",
  "widget-inactive-stripes-dark": "string",
  "pinned-doc-footer-bg": "string",
  "pinned-doc-border": "string",
  "pinned-doc-border-hover": "string",
  "pinned-doc-editor-bg": "string",
  "raw-data-table-border": "string",
  "raw-data-table-border-hover": "string",
  "control-fg": "string",
  "control-primary-fg": "string",
  "control-primary-bg": "string",
  "control-secondary-fg": "string",
  "control-secondary-disabled-fg": "string",
  "control-hover-fg": "string",
  "control-primary-hover-bg": "string",
  "control-secondary-hover-fg": "string",
  "control-secondary-hover-bg": "string",
  "control-disabled-fg": "string",
  "control-disabled-bg": "string",
  "control-border": "string",
  "checkbox-bg": "string",
  "checkbox-disabled-bg": "string",
  "checkbox-border": "string",
  "checkbox-border-hover": "string",
  "move-docs-selected-fg": "string",
  "move-docs-selected-bg": "string",
  "move-docs-disabled-bg": "string",
  "filter-bar-button-saved-fg": "string",
  "filter-bar-button-saved-bg": "string",
  "filter-bar-button-saved-hover-bg": "string",
  "icon-disabled": "string",
  "icon-error": "string",
  "icon-button-fg": "string",
  "icon-button-primary-bg": "string",
  "icon-button-primary-hover-bg": "string",
  "icon-button-secondary-bg": "string",
  "icon-button-secondary-hover-bg": "string",
  "left-panel-page-hover-bg": "string",
  "left-panel-active-page-fg": "string",
  "left-panel-active-page-bg": "string",
  "left-panel-disabled-page-fg": "string",
  "left-panel-page-options-fg": "string",
  "left-panel-page-options-hover-fg": "string",
  "left-panel-page-options-hover-bg": "string",
  "left-panel-page-options-selected-hover-bg": "string",
  "left-panel-page-initials-fg": "string",
  "left-panel-page-initials-bg": "string",
  "left-panel-page-emoji-fg": "string",
  "left-panel-page-emoji-outline": "string",
  "right-panel-tab-fg": "string",
  "right-panel-tab-bg": "string",
  "right-panel-tab-icon": "string",
  "right-panel-tab-icon-hover": "string",
  "right-panel-tab-hover-bg": "string",
  "right-panel-tab-selected-fg": "string",
  "right-panel-tab-selected-bg": "string",
  "right-panel-tab-button-hover-bg": "string",
  "right-panel-subtab-fg": "string",
  "right-panel-subtab-selected-fg": "string",
  "right-panel-subtab-selected-underline": "string",
  "right-panel-subtab-hover-fg": "string",
  "right-panel-subtab-hover-underline": "string",
  "right-panel-disabled-overlay": "string",
  "right-panel-toggle-button-enabled-fg": "string",
  "right-panel-toggle-button-enabled-bg": "string",
  "right-panel-toggle-button-disabled-fg": "string",
  "right-panel-toggle-button-disabled-bg": "string",
  "right-panel-field-settings-bg": "string",
  "right-panel-field-settings-button-bg": "string",
  "document-history-snapshot-fg": "string",
  "document-history-snapshot-selected-fg": "string",
  "document-history-snapshot-bg": "string",
  "document-history-snapshot-selected-bg": "string",
  "document-history-snapshot-border": "string",
  "document-history-activity-text": "string",
  "document-history-activity-text-light": "string",
  "document-history-table-header-fg": "string",
  "document-history-table-border": "string",
  "document-history-table-border-light": "string",
  "accent-icon": "string",
  "accent-border": "string",
  "accent-text": "string",
  "input-fg": "string",
  "input-bg": "string",
  "input-disabled-fg": "string",
  "input-disabled-bg": "string",
  "input-placeholder-fg": "string",
  "input-border": "string",
  "input-valid": "string",
  "input-invalid": "string",
  "input-focus": "string",
  "input-readonly-bg": "string",
  "input-readonly-border": "string",
  "choice-token-fg": "string",
  "choice-token-blank-fg": "string",
  "choice-token-bg": "string",
  "choice-token-selected-bg": "string",
  "choice-token-selected-border": "string",
  "choice-token-invalid-fg": "string",
  "choice-token-invalid-bg": "string",
  "choice-token-invalid-border": "string",
  "choice-entry-bg": "string",
  "choice-entry-border": "string",
  "choice-entry-border-hover": "string",
  "select-button-fg": "string",
  "select-button-placeholder-fg": "string",
  "select-button-bg": "string",
  "select-button-border": "string",
  "select-button-border-invalid": "string",
  "menu-text": "string",
  "menu-light-text": "string",
  "menu-bg": "string",
  "menu-subheader-fg": "string",
  "menu-border": "string",
  "menu-shadow": "string",
  "menu-item-fg": "string",
  "menu-item-selected-fg": "string",
  "menu-item-selected-bg": "string",
  "menu-item-disabled-fg": "string",
  "menu-item-icon-fg": "string",
  "menu-item-icon-selected-fg": "string",
  "autocomplete-match-text": "string",
  "autocomplete-selected-match-text": "string",
  "autocomplete-item-selected-bg": "string",
  "autocomplete-add-new-circle-fg": "string",
  "autocomplete-add-new-circle-bg": "string",
  "autocomplete-add-new-circle-selected-bg": "string",
  "search-border": "string",
  "search-prev-next-button-fg": "string",
  "search-prev-next-button-bg": "string",
  "loader-fg": "string",
  "loader-bg": "string",
  "site-switcher-active-fg": "string",
  "site-switcher-active-bg": "string",
  "doc-menu-doc-options-fg": "string",
  "doc-menu-doc-options-hover-fg": "string",
  "doc-menu-doc-options-hover-bg": "string",
  "shortcut-key-fg": "string",
  "shortcut-key-primary-fg": "string",
  "shortcut-key-secondary-fg": "string",
  "shortcut-key-bg": "string",
  "shortcut-key-border": "string",
  "breadcrumbs-tag-fg": "string",
  "breadcrumbs-tag-bg": "string",
  "breadcrumbs-tag-alert-bg": "string",
  "widget-picker-primary-bg": "string",
  "widget-picker-secondary-bg": "string",
  "widget-picker-item-fg": "string",
  "widget-picker-item-selected-bg": "string",
  "widget-picker-item-disabled-bg": "string",
  "widget-picker-icon": "string",
  "widget-picker-primary-icon": "string",
  "widget-picker-summary-icon": "string",
  "widget-picker-border": "string",
  "widget-picker-shadow": "string",
  "code-view-text": "string",
  "code-view-keyword": "string",
  "code-view-comment": "string",
  "code-view-meta": "string",
  "code-view-title": "string",
  "code-view-params": "string",
  "code-view-string": "string",
  "code-view-number": "string",
  "code-view-builtin": "string",
  "code-view-literal": "string",
  "importer-table-info-border": "string",
  "importer-preview-border": "string",
  "importer-skipped-table-overlay": "string",
  "importer-match-icon": "string",
  "importer-outside-bg": "string",
  "importer-main-content-bg": "string",
  "importer-active-file-bg": "string",
  "importer-active-file-fg": "string",
  "importer-inactive-file-bg": "string",
  "importer-inactive-file-fg": "string",
  "menu-toggle-fg": "string",
  "menu-toggle-hover-fg": "string",
  "menu-toggle-active-fg": "string",
  "menu-toggle-bg": "string",
  "menu-toggle-border": "string",
  "info-button-fg": "string",
  "info-button-hover-fg": "string",
  "info-button-active-fg": "string",
  "button-group-fg": "string",
  "button-group-light-fg": "string",
  "button-group-bg": "string",
  "button-group-bg-hover": "string",
  "button-group-icon": "string",
  "button-group-border": "string",
  "button-group-border-hover": "string",
  "button-group-selected-fg": "string",
  "button-group-light-selected-fg": "string",
  "button-group-selected-bg": "string",
  "button-group-selected-border": "string",
  "access-rules-table-header-fg": "string",
  "access-rules-table-header-bg": "string",
  "access-rules-table-body-fg": "string",
  "access-rules-table-body-light-fg": "string",
  "access-rules-table-border": "string",
  "access-rules-column-list-border": "string",
  "access-rules-column-item-fg": "string",
  "access-rules-column-item-bg": "string",
  "access-rules-column-item-icon-fg": "string",
  "access-rules-column-item-icon-hover-fg": "string",
  "access-rules-column-item-icon-hover-bg": "string",
  "access-rules-formula-editor-bg": "string",
  "access-rules-formula-editor-border-hover": "string",
  "access-rules-formula-editor-bg-disabled": "string",
  "access-rules-formula-editor-focus": "string",
  "cell-fg": "string",
  "cell-bg": "string",
  "cell-zebra-bg": "string",
  "chart-fg": "string",
  "chart-bg": "string",
  "chart-legend-bg": "string",
  "chart-x-axis": "string",
  "chart-y-axis": "string",
  "comments-popup-header-bg": "string",
  "comments-popup-body-bg": "string",
  "comments-popup-border": "string",
  "comments-user-name-fg": "string",
  "comments-panel-topic-bg": "string",
  "comments-panel-topic-border": "string",
  "comments-panel-resolved-topic-bg": "string",
  "date-picker-selected-fg": "string",
  "date-picker-selected-bg": "string",
  "date-picker-selected-bg-hover": "string",
  "date-picker-today-fg": "string",
  "date-picker-today-bg": "string",
  "date-picker-today-bg-hover": "string",
  "date-picker-range-start-end-bg": "string",
  "date-picker-range-start-end-bg-hover": "string",
  "date-picker-range-bg": "string",
  "date-picker-range-bg-hover": "string",
  "tutorials-popup-border": "string",
  "tutorials-popup-header-fg": "string",
  "tutorials-popup-box-bg": "string",
  "tutorials-popup-code-fg": "string",
  "tutorials-popup-code-bg": "string",
  "tutorials-popup-code-border": "string",
  "ace-editor-bg": "string",
  "ace-autocomplete-primary-fg": "string",
  "ace-autocomplete-secondary-fg": "string",
  "ace-autocomplete-highlighted-fg": "string",
  "ace-autocomplete-bg": "string",
  "ace-autocomplete-border": "string",
  "ace-autocomplete-link": "string",
  "ace-autocomplete-link-highlighted": "string",
  "ace-autocomplete-active-line-bg": "string",
  "ace-autocomplete-line-border-hover": "string",
  "ace-autocomplete-line-bg-hover": "string",
  "color-select-fg": "string",
  "color-select-bg": "string",
  "color-select-shadow": "string",
  "color-select-font-options-border": "string",
  "color-select-font-option-fg": "string",
  "color-select-font-option-bg-hover": "string",
  "color-select-font-option-fg-selected": "string",
  "color-select-font-option-bg-selected": "string",
  "color-select-color-square-border": "string",
  "color-select-color-square-border-empty": "string",
  "color-select-input-fg": "string",
  "color-select-input-bg": "string",
  "color-select-input-border": "string",
  "highlighted-code-block-bg": "string",
  "highlighted-code-block-bg-disabled": "string",
  "highlighted-code-fg": "string",
  "highlighted-code-border": "string",
  "highlighted-code-bg-disabled": "string",
  "login-page-bg": "string",
  "login-page-backdrop": "string",
  "login-page-line": "string",
  "login-page-google-button-fg": "string",
  "login-page-google-button-bg": "string",
  "login-page-google-button-bg-hover": "string",
  "login-page-google-button-border": "string",
  "formula-assistant-header-bg": "string",
  "formula-assistant-border": "string",
  "formula-assistant-preformatted-text-bg": "string",
  "attachments-editor-button-fg": "string",
  "attachments-editor-button-hover-fg": "string",
  "attachments-editor-button-bg": "string",
  "attachments-editor-button-hover-bg": "string",
  "attachments-editor-button-border": "string",
  "attachments-editor-button-icon": "string",
  "attachments-editor-border": "string",
  "attachments-cell-icon-fg": "string",
  "attachments-cell-icon-bg": "string",
  "attachments-cell-icon-hover-bg": "string",
  "switch-slider-fg": "string",
  "switch-circle-fg": "string",
  "announcement-popup-fg": "string",
  "announcement-popup-bg": "string",
  "scroll-shadow": "string",
  "toggle-checkbox-fg": "string",
  "numeric-spinner-fg": "string",
});

const exportedTypeSuite: t.ITypeSuite = {
  ThemePrefs,
  ThemeAppearance,
  ThemeNameOrColors,
  ThemeName,
  Theme,
  ThemeColors,
};
export default exportedTypeSuite;
