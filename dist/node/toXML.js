"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertInfoToXML = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const CAP_1_2_1 = require("./CAP-1-2");
const constants_1 = require("./constants");
const _ = { get: require("lodash/get"), set: require("lodash/set") };
function alertInfoToXML(info) {
    const infoObj = {
        urgency: (0, CAP_1_2_1._to_string_Alert_info_list_info_urgency)(info.urgency),
        severity: (0, CAP_1_2_1._to_string_Alert_info_list_info_severity)(info.severity),
        certainty: (0, CAP_1_2_1._to_string_Alert_info_list_info_certainty)(info.certainty),
    };
    const setInfoAttr = (path, val) => {
        _.set(infoObj, path, val);
    };
    [
        "language",
        "event",
        "audience",
        "effective",
        "onset",
        "expires",
        "senderName",
        "headline",
        "description",
        "instruction",
        "web",
        "contact",
    ].forEach((path, i) => {
        const val = _.get(info, path, undefined);
        if (val === undefined || val === "")
            return;
        if (val || val === 0) {
            setInfoAttr(path, String(val));
        }
    });
    info.category_list.forEach((cl, i) => {
        setInfoAttr(`category[${i}]`, (0, CAP_1_2_1._to_string_Alert_info_list_info_category_list_category)(cl));
    });
    info.responseType_list.forEach((rt, i) => {
        setInfoAttr(`responseType[${i}]`, (0, CAP_1_2_1._to_string_Alert_info_list_info_responseType_list_responseType)(rt));
    });
    info.eventCode_list.forEach((ec, i) => {
        setInfoAttr(`eventCode[${i}].valueName`, ec.valueName);
        if (ec.value)
            setInfoAttr(`eventCode[${i}].value`, ec.value);
    });
    info.parameter_list.forEach((param, i) => {
        setInfoAttr(`parameter[${i}].valueName`, param.valueName);
        if (param.value)
            setInfoAttr(`parameter[${i}].value`, param.value);
    });
    info.resource_list.forEach((resource, i) => {
        _.set(infoObj, `resource[${i}]`, resource);
    });
    info.area_list.forEach((area, i) => {
        _.set(infoObj, `area[${i}]`, area);
    });
    return infoObj;
}
exports.alertInfoToXML = alertInfoToXML;
function alertToXML(alert) {
    const alertStatus = (0, CAP_1_2_1._to_string_Alert_status)(alert.status);
    const alertMsgType = (0, CAP_1_2_1._to_string_Alert_msgType)(alert.msgType);
    const alertScope = (0, CAP_1_2_1._to_string_Alert_scope)(alert.scope);
    const builder = new fast_xml_parser_1.XMLBuilder(constants_1.xmlBuilderOptions);
    const alertObj = {
        status: {
            "#text": alertStatus,
        },
        msgType: {
            "#text": alertMsgType,
        },
        scope: {
            "#text": alertScope,
        },
    };
    const setAlertAttr = (attrPath, attrText) => {
        _.set(alertObj, attrPath, {
            "#text": attrText,
        });
    };
    [
        "addresses",
        "identifier",
        "incidents",
        "note",
        "references",
        "restriction",
        "sender",
        "sent",
        "source",
    ].forEach((path) => {
        const val = _.get(alert, path, undefined);
        if (val === undefined || val === "")
            return;
        if (val || val === 0) {
            setAlertAttr(path, String(val));
        }
    });
    alert.code_list.forEach((code, i) => {
        setAlertAttr(`code[${i}]`, code);
    });
    alert.info_list.forEach((info, i) => {
        _.set(alertObj, `info[${i}]`, alertInfoToXML(info));
    });
    alert.elem_list.forEach((elem, i) => {
        setAlertAttr(`elem[${i}]`, elem);
    });
    console.log(JSON.stringify(alert, null, 2));
    const doc = {
        "?xml": {
            "@version": "1.0",
            alert: {
                "@xmlns": "urn:oasis:names:tc:emergency:cap:1.2",
                ...alertObj,
            },
        },
    };
    return builder.build(doc);
}
exports.default = alertToXML;
//# sourceMappingURL=toXML.js.map