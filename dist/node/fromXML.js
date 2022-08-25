"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertInfoFromXML = exports.validateDateTime = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const CAP_1_2_1 = require("./CAP-1-2");
const constants_1 = require("./constants");
function validateDateTime(datetime) {
    if (Number.isNaN(Date.parse(datetime))) {
        throw new Error(`Unable to parse datetime '${datetime}'.`);
    }
    if (datetime.endsWith("Z")) {
        throw new Error(`Invalid datetime '${datetime}'.`);
    }
    return datetime;
}
exports.validateDateTime = validateDateTime;
function alertInfoFromXML(info, sent) {
    if (Object.values(info ?? {}).length === 0) {
        throw new Error("Alert info argument cannot be empty.");
    }
    if ((info?.category ?? []).length === 0) {
        throw new Error("Alert info category cannot be empty.");
    }
    const categories = [];
    for (let i = 0; i < info.category.length; i++) {
        const cat = info?.category?.[i] ?? "";
        const category = (0, CAP_1_2_1._from_string_Alert_info_list_info_category_list_category)(cat);
        if (category === undefined) {
            throw new Error(`Invalid alert info category: '${cat}'.`);
        }
        categories.push(category);
    }
    if (!info.event) {
        throw new Error("Alert info event cannot be empty.");
    }
    const event = info.event;
    const responseTypes = [];
    if (info?.responseType?.length > 0) {
        for (let i = 0; i < info.responseType.length; i++) {
            const rt = String(info?.responseType?.[i] ?? "");
            const responseType = (0, CAP_1_2_1._from_string_Alert_info_list_info_responseType_list_responseType)(rt);
            if (responseType === undefined) {
                throw new Error(`Invalid alert info responseType: '${rt}'.`);
            }
            responseTypes.push(responseType);
        }
    }
    if (!info.urgency)
        throw new Error("Alert info urgency cannot be empty.");
    const urgency = (0, CAP_1_2_1._from_string_Alert_info_list_info_urgency)(String(info?.urgency ?? ""));
    if (urgency === undefined)
        throw new Error(`Invalid alert info urgency '${info.urgency}'.`);
    if (!info.severity)
        throw new Error("Alert info severity cannot be empty.");
    const severity = (0, CAP_1_2_1._from_string_Alert_info_list_info_severity)(String(info?.severity ?? ""));
    if (severity === undefined)
        throw new Error(`Invalid alert info severity '${info.severity}'.`);
    if (!info.certainty)
        throw new Error("Alert info certainty cannot be empty.");
    const certainty = (0, CAP_1_2_1._from_string_Alert_info_list_info_certainty)(String(info?.certainty ?? ""));
    if (certainty === undefined)
        throw new Error(`Invalid alert info certainty '${info.certainty}'.`);
    const eventCodes = [];
    if (info?.eventCode?.length > 0) {
        for (let i = 0; i < info.eventCode.length; i++) {
            const ec = info.eventCode[i];
            if (!ec?.valueName)
                throw new Error(`Invalid alert info eventCode valueName: '${ec.valueName}'.`);
            const eventCode = new CAP_1_2_1.Alert_info_list_info_eventCode_list_eventCode(ec.valueName, ec.value);
            eventCodes.push(eventCode);
        }
    }
    let effective = sent;
    if (info.effective) {
        try {
            effective = validateDateTime(info.effective);
        }
        catch (e) {
            throw new Error(`Invalid alert info effective datetime: '${info.effective}'.`);
        }
    }
    let onset = "";
    if (info.onset) {
        try {
            onset = validateDateTime(info.onset);
        }
        catch (e) {
            throw new Error(`Invalid alert info onset datetime: '${info.onset}'.`);
        }
    }
    let expires = "";
    if (info.expires) {
        try {
            expires = validateDateTime(info.expires);
        }
        catch (e) {
            throw new Error(`Invalid alert info expires datetime: '${info.expires}'.`);
        }
    }
    let parameters = [];
    if (info?.parameter?.length > 0) {
        for (let i = 0; i < info.parameter.length; i++) {
            const param = info.parameter[i];
            if (!param?.valueName) {
                throw new Error(`Invalid alert info parameter valueName: '${param.valueName}'.`);
            }
            parameters.push(new CAP_1_2_1.Alert_info_list_info_parameter_list_parameter(param.valueName, param.value));
        }
    }
    const resources = (info.resource ?? []).map((resource) => {
        return new CAP_1_2_1.Alert_info_list_info_resource_list_resource(resource.resourceDesc, resource.mimeType, resource.size ? Number.parseInt(resource.size, 10) : undefined, resource.uri ? resource.uri : undefined, resource.derefUri ? resource.derefUri : undefined, resource.digest ? resource.digest : undefined);
    });
    const areas = (info.area ?? []).map((area) => {
        const altitude = area.altitude === undefined
            ? undefined
            : Number.parseFloat(area.altitude);
        const ceiling = area.ceiling === undefined
            ? undefined
            : Number.parseFloat(area.ceiling);
        return new CAP_1_2_1.Alert_info_list_info_area_list_area(area.areaDesc, area.polygon, area.circle, (area.geocode ?? []).map((geocode) => {
            return new CAP_1_2_1.Alert_info_list_info_area_list_area_geocode_list_geocode(geocode.valueName, geocode.value);
        }), altitude, ceiling);
    });
    return new CAP_1_2_1.Alert_info_list_info(info.language ?? "en-US", categories, event, responseTypes, urgency, severity, certainty, info.audience ?? "", eventCodes, effective, onset, expires, info.senderName ?? "", info.headline ?? "", info.description ?? "", info.instruction ?? "", info.web ?? "", info.contact ?? "", parameters, resources, areas);
}
exports.alertInfoFromXML = alertInfoFromXML;
function alertFromXML(str) {
    const parser = new fast_xml_parser_1.XMLParser(constants_1.xmlParserOptions);
    let doc;
    try {
        doc = parser.parse(str);
    }
    catch (e) {
        throw new Error(`Unable to parse XML document: ${e}`);
    }
    if (!doc?.alert) {
        throw new Error("Unable to parse alert");
    }
    const alertDoc = doc.alert;
    const status = (0, CAP_1_2_1._from_string_Alert_status)(String(alertDoc?.status ?? ""));
    if (status === undefined)
        throw new Error(`Invalid alert status: ${alertDoc.status}`);
    const msgType = (0, CAP_1_2_1._from_string_Alert_msgType)(String(alertDoc?.msgType ?? ""));
    if (msgType === undefined)
        throw new Error(`Invalid alert msgType: ${alertDoc.msgType}`);
    const scope = (0, CAP_1_2_1._from_string_Alert_scope)(String(alertDoc?.scope ?? ""));
    if (scope === undefined)
        throw new Error(`Invalid alert scope: ${alertDoc.scope}`);
    let sent = "";
    try {
        sent = validateDateTime(alertDoc?.sent ?? "");
    }
    catch (e) {
        throw new Error(`Invalid alert 'sent' datetime: '${sent}'`);
    }
    let infos = [];
    try {
        infos = alertDoc.info.map((info, i) => alertInfoFromXML(info, sent));
    }
    catch (e) {
        throw new Error(`Unable to parse info: ${e}`);
    }
    return new CAP_1_2_1.Alert(alertDoc.identifier, alertDoc.sender, alertDoc.sent, status, msgType, alertDoc.source, scope, alertDoc?.restriction ?? "", alertDoc?.addresses ?? "", alertDoc?.code ?? [], alertDoc?.note ?? "", alertDoc?.references ?? "", alertDoc?.incidents ?? "", infos, alertDoc?.elem ?? []);
}
exports.default = alertFromXML;
//# sourceMappingURL=fromXML.js.map