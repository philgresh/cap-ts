import { XMLBuilder } from "fast-xml-parser";
import {
    Alert,
    Alert_info_list_info,
    _to_string_Alert_info_list_info_category_list_category,
    _to_string_Alert_info_list_info_certainty,
    _to_string_Alert_info_list_info_responseType_list_responseType,
    _to_string_Alert_info_list_info_severity,
    _to_string_Alert_info_list_info_urgency,
    _to_string_Alert_msgType,
    _to_string_Alert_scope,
    _to_string_Alert_status,
} from "./CAP-1-2";
import { xmlBuilderOptions } from "./constants";

const _ = { get: require("lodash/get"), set: require("lodash/set") };

export function alertInfoToXML(
    info: Alert_info_list_info
): Record<string, any> {
    const infoObj = {
        urgency: _to_string_Alert_info_list_info_urgency(info.urgency),
        severity: _to_string_Alert_info_list_info_severity(info.severity),
        certainty: _to_string_Alert_info_list_info_certainty(info.certainty),
    };

    const setInfoAttr = (path: string, val: string) => {
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
        if (val === undefined || val === "") return;
        if (val || val === 0) {
            setInfoAttr(path, String(val));
        }
    });

    info.category_list.forEach((cl, i) => {
        setInfoAttr(
            `category[${i}]`,
            _to_string_Alert_info_list_info_category_list_category(cl)
        );
    });
    info.responseType_list.forEach((rt, i) => {
        setInfoAttr(
            `responseType[${i}]`,
            _to_string_Alert_info_list_info_responseType_list_responseType(rt)
        );
    });

    info.eventCode_list.forEach((ec, i) => {
        setInfoAttr(`eventCode[${i}].valueName`, ec.valueName);
        if (ec.value) setInfoAttr(`eventCode[${i}].value`, ec.value);
    });

    info.parameter_list.forEach((param, i) => {
        setInfoAttr(`parameter[${i}].valueName`, param.valueName);
        if (param.value) setInfoAttr(`parameter[${i}].value`, param.value);
    });

    info.resource_list.forEach((resource, i) => {
        _.set(infoObj, `resource[${i}]`, resource);
    });

    info.area_list.forEach((area, i) => {
        _.set(infoObj, `area[${i}]`, area);
    });

    return infoObj;
}

export default function alertToXML(alert: Alert): string {
    const alertStatus = _to_string_Alert_status(alert.status);
    const alertMsgType = _to_string_Alert_msgType(alert.msgType);
    const alertScope = _to_string_Alert_scope(alert.scope);
    const builder = new XMLBuilder(xmlBuilderOptions);

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

    const setAlertAttr = (attrPath: string, attrText: string) => {
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
        if (val === undefined || val === "") return;
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
