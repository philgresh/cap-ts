"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlBuilderOptions = exports.xmlParserOptions = void 0;
const treatAsArray = new Set([
    "alert.code",
    "alert.info",
    "alert.info.category",
    "alert.info.eventCode",
    "alert.info.parameter",
    "alert.info.resource",
    "alert.info.responseType",
    "alert.info.area",
    "alert.info.area.geocode",
    "alert.info.area.circle",
]);
exports.xmlParserOptions = {
    isArray: (_name, jpath) => treatAsArray.has(jpath),
};
exports.xmlBuilderOptions = {
    format: true,
    ignoreAttributes: false,
    attributeNamePrefix: "@",
};
//# sourceMappingURL=constants.js.map