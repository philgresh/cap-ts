import { XMLBuilder } from "fast-xml-parser";
import get from "lodash/get";
import set from "lodash/set";
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

// <?xml version = "1.0" encoding = "UTF-8"?>
// <alert xmlns = "urn:oasis:names:tc:emergency:cap:1.2">
//   <identifier>43b080713727</identifier>
//   <sender>hsas@dhs.gov</sender>
//   <sent>2003-04-02T14:39:01-05:00</sent>
//   <status>Actual</status>
//   <msgType>Alert</msgType>
//   <scope>Public</scope>
//   <info>
//     <category>Security</category>
//     <event>Homeland Security Advisory System Update</event>
//     <urgency>Immediate</urgency>
//     <severity>Severe</severity>
//     <certainty>Likely</certainty>
//     <senderName>U.S. Government, Department of Homeland Security</senderName>
//     <headline>Homeland Security Sets Code ORANGE</headline>
//     <description>The Department of Homeland Security has elevated the Homeland Security Advisory System threat level to ORANGE / High in response to intelligence which may indicate a heightened threat of terrorism.</description>
//     <instruction> A High Condition is declared when there is a high risk of terrorist attacks. In addition to the Protective Measures taken in the previous Threat Conditions, Federal departments and agencies should consider agency-specific Protective Measures in accordance with their existing plans.</instruction>
//     <web>http://www.dhs.gov/dhspublic/display?theme=29</web>
//     <parameter>
//       <valueName>HSAS</valueName>
//       <value>ORANGE</value>
//     </parameter>
//     <resource>
//       <resourceDesc>Image file (GIF)</resourceDesc>
//       <mimeType>image/gif</mimeType>
//       <uri>http://www.dhs.gov/dhspublic/getAdvisoryImage</uri>
//     </resource>
//     <area>
//       <areaDesc>U.S. nationwide and interests worldwide</areaDesc>
//     </area>
//   </info>
// </alert>

export function alertInfoToXML(
    info: Alert_info_list_info
): Record<string, any> {
    const infoObj = {
        urgency: _to_string_Alert_info_list_info_urgency(info.urgency),
        severity: _to_string_Alert_info_list_info_severity(info.severity),
        certainty: _to_string_Alert_info_list_info_certainty(info.certainty),
    };

    const setInfoAttr = (path: string, val: string) => {
        set(infoObj, path, val);
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
        const val = get(info, path, undefined);
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
        setInfoAttr(`resource[${i}].resourceDesc`, resource.resourceDesc);
        if (resource.derefUri)
            setInfoAttr(`resource[${i}].derefUri`, resource.derefUri);
        if (resource.digest)
            setInfoAttr(`resource[${i}].digest`, resource.digest);
        if (resource.mimeType)
            setInfoAttr(`resource[${i}].mimeType`, resource.mimeType);
        if (resource.size)
            setInfoAttr(`resource[${i}].size`, resource.size.toString());
        if (resource.uri) setInfoAttr(`resource[${i}].uri`, resource.uri);
    });

    info.area_list.forEach((area, i) => {
        setInfoAttr(`area[${i}].areaDesc`, area.areaDesc);
        if (area.altitude)
            setInfoAttr(`area[${i}].altitude`, area.altitude.toString());
        if (area.ceiling)
            setInfoAttr(`area[${i}].ceiling`, area.ceiling.toString());
        if (area?.circle_list?.length > 0) {
            console.log({ circle_list: area.circle_list });
            area.circle_list.forEach((circle, j) => {
                setInfoAttr(`area[${i}].circle[${j}]`, circle);
            });
        }
        if (area?.polygon_list?.length > 0)
            area.polygon_list.forEach((polygon, j) => {
                setInfoAttr(`area[${i}].polygon[${j}]`, polygon);
            });
        if (area?.geocode_list?.length > 0)
            area.geocode_list.forEach((geocode, j) => {
                setInfoAttr(`area[${i}].geocode.valueName`, geocode.valueName);
                if (geocode.value)
                    setInfoAttr(`area[${i}].geocode.value`, geocode.value);
            });
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
        set(alertObj, attrPath, {
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
        const val = get(alert, path, undefined);
        if (val === undefined || val === "") return;
        if (val || val === 0) {
            setAlertAttr(path, String(val));
        }
    });

    alert.code_list.forEach((code, i) => {
        setAlertAttr(`code[${i}]`, code);
    });

    alert.info_list.forEach((info, i) => {
        set(alertObj, `info[${i}]`, alertInfoToXML(info));
    });

    alert.elem_list.forEach((elem, i) => {
        setAlertAttr(`elem[${i}]`, elem);
    });

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
