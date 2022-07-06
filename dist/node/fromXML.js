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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    if (Object.values(info !== null && info !== void 0 ? info : {}).length === 0) {
        throw new Error("Alert info argument cannot be empty.");
    }
    if (((_a = info === null || info === void 0 ? void 0 : info.category) !== null && _a !== void 0 ? _a : []).length === 0) {
        throw new Error("Alert info category cannot be empty.");
    }
    const categories = [];
    for (let i = 0; i < info.category.length; i++) {
        const cat = (_c = (_b = info === null || info === void 0 ? void 0 : info.category) === null || _b === void 0 ? void 0 : _b[i]) !== null && _c !== void 0 ? _c : "";
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
    if (((_d = info === null || info === void 0 ? void 0 : info.responseType) === null || _d === void 0 ? void 0 : _d.length) > 0) {
        for (let i = 0; i < info.responseType.length; i++) {
            const rt = String((_f = (_e = info === null || info === void 0 ? void 0 : info.responseType) === null || _e === void 0 ? void 0 : _e[i]) !== null && _f !== void 0 ? _f : "");
            const responseType = (0, CAP_1_2_1._from_string_Alert_info_list_info_responseType_list_responseType)(rt);
            if (responseType === undefined) {
                throw new Error(`Invalid alert info responseType: '${rt}'.`);
            }
            responseTypes.push(responseType);
        }
    }
    if (!info.urgency)
        throw new Error("Alert info urgency cannot be empty.");
    const urgency = (0, CAP_1_2_1._from_string_Alert_info_list_info_urgency)(String((_g = info === null || info === void 0 ? void 0 : info.urgency) !== null && _g !== void 0 ? _g : ""));
    if (urgency === undefined)
        throw new Error(`Invalid alert info urgency '${info.urgency}'.`);
    if (!info.severity)
        throw new Error("Alert info severity cannot be empty.");
    const severity = (0, CAP_1_2_1._from_string_Alert_info_list_info_severity)(String((_h = info === null || info === void 0 ? void 0 : info.severity) !== null && _h !== void 0 ? _h : ""));
    if (severity === undefined)
        throw new Error(`Invalid alert info severity '${info.severity}'.`);
    if (!info.certainty)
        throw new Error("Alert info certainty cannot be empty.");
    const certainty = (0, CAP_1_2_1._from_string_Alert_info_list_info_certainty)(String((_j = info === null || info === void 0 ? void 0 : info.certainty) !== null && _j !== void 0 ? _j : ""));
    if (certainty === undefined)
        throw new Error(`Invalid alert info certainty '${info.certainty}'.`);
    const eventCodes = [];
    if (((_k = info === null || info === void 0 ? void 0 : info.eventCode) === null || _k === void 0 ? void 0 : _k.length) > 0) {
        for (let i = 0; i < info.eventCode.length; i++) {
            const ec = info.eventCode[i];
            if (!(ec === null || ec === void 0 ? void 0 : ec.valueName))
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
    if (((_l = info === null || info === void 0 ? void 0 : info.parameter) === null || _l === void 0 ? void 0 : _l.length) > 0) {
        for (let i = 0; i < info.parameter.length; i++) {
            const param = info.parameter[i];
            if (!(param === null || param === void 0 ? void 0 : param.valueName)) {
                throw new Error(`Invalid alert info parameter valueName: '${param.valueName}'.`);
            }
            parameters.push(new CAP_1_2_1.Alert_info_list_info_parameter_list_parameter(param.valueName, param.value));
        }
    }
    const resources = ((_m = info.resource) !== null && _m !== void 0 ? _m : []).map((resource) => {
        return new CAP_1_2_1.Alert_info_list_info_resource_list_resource(resource.resourceDesc, resource.mimeType, resource.size ? Number.parseInt(resource.size, 10) : undefined, resource.uri ? resource.uri : undefined, resource.derefUri ? resource.derefUri : undefined, resource.digest ? resource.digest : undefined);
    });
    const areas = ((_o = info.area) !== null && _o !== void 0 ? _o : []).map((area) => {
        var _a;
        const altitude = area.altitude === undefined
            ? undefined
            : Number.parseFloat(area.altitude);
        const ceiling = area.ceiling === undefined
            ? undefined
            : Number.parseFloat(area.ceiling);
        return new CAP_1_2_1.Alert_info_list_info_area_list_area(area.areaDesc, area.polygon, area.circle, ((_a = area.geocode) !== null && _a !== void 0 ? _a : []).map((geocode) => {
            return new CAP_1_2_1.Alert_info_list_info_area_list_area_geocode_list_geocode(geocode.valueName, geocode.value);
        }), altitude, ceiling);
    });
    return new CAP_1_2_1.Alert_info_list_info((_p = info.language) !== null && _p !== void 0 ? _p : "en-US", categories, event, responseTypes, urgency, severity, certainty, (_q = info.audience) !== null && _q !== void 0 ? _q : "", eventCodes, effective, onset, expires, (_r = info.senderName) !== null && _r !== void 0 ? _r : "", (_s = info.headline) !== null && _s !== void 0 ? _s : "", (_t = info.description) !== null && _t !== void 0 ? _t : "", (_u = info.instruction) !== null && _u !== void 0 ? _u : "", (_v = info.web) !== null && _v !== void 0 ? _v : "", (_w = info.contact) !== null && _w !== void 0 ? _w : "", parameters, resources, areas);
}
exports.alertInfoFromXML = alertInfoFromXML;
function alertFromXML(str) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const parser = new fast_xml_parser_1.XMLParser(constants_1.xmlParserOptions);
    let doc;
    try {
        doc = parser.parse(str);
    }
    catch (e) {
        throw new Error(`Unable to parse XML document: ${e}`);
    }
    if (!(doc === null || doc === void 0 ? void 0 : doc.alert)) {
        throw new Error("Unable to parse alert");
    }
    const alertDoc = doc.alert;
    const status = (0, CAP_1_2_1._from_string_Alert_status)(String((_a = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.status) !== null && _a !== void 0 ? _a : ""));
    if (status === undefined)
        throw new Error(`Invalid alert status: ${alertDoc.status}`);
    const msgType = (0, CAP_1_2_1._from_string_Alert_msgType)(String((_b = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.msgType) !== null && _b !== void 0 ? _b : ""));
    if (msgType === undefined)
        throw new Error(`Invalid alert msgType: ${alertDoc.msgType}`);
    const scope = (0, CAP_1_2_1._from_string_Alert_scope)(String((_c = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.scope) !== null && _c !== void 0 ? _c : ""));
    if (scope === undefined)
        throw new Error(`Invalid alert scope: ${alertDoc.scope}`);
    let sent = "";
    try {
        sent = validateDateTime((_d = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.sent) !== null && _d !== void 0 ? _d : "");
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
    return new CAP_1_2_1.Alert(alertDoc.identifier, alertDoc.sender, alertDoc.sent, status, msgType, alertDoc.source, scope, (_e = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.restriction) !== null && _e !== void 0 ? _e : "", (_f = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.addresses) !== null && _f !== void 0 ? _f : "", (_g = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.code) !== null && _g !== void 0 ? _g : [], (_h = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.note) !== null && _h !== void 0 ? _h : "", (_j = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.references) !== null && _j !== void 0 ? _j : "", (_k = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.incidents) !== null && _k !== void 0 ? _k : "", infos, (_l = alertDoc === null || alertDoc === void 0 ? void 0 : alertDoc.elem) !== null && _l !== void 0 ? _l : []);
}
exports.default = alertFromXML;
//# sourceMappingURL=fromXML.js.map