import type { X2jOptions, XmlBuilderOptions } from "fast-xml-parser";

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

export const xmlParserOptions: Partial<X2jOptions> = {
    isArray: (_name, jpath) => treatAsArray.has(jpath),
};

export const xmlBuilderOptions: Partial<XmlBuilderOptions> = {
    format: true,
    ignoreAttributes: false,
    attributeNamePrefix: "@",
};

