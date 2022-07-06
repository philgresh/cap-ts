import { XMLParser } from "fast-xml-parser";
import {
    Alert,
    Alert_info_list_info,
    Alert_info_list_info_area_list_area,
    Alert_info_list_info_area_list_area_geocode_list_geocode,
    Alert_info_list_info_category_list_category,
    Alert_info_list_info_eventCode_list_eventCode,
    Alert_info_list_info_parameter_list_parameter,
    Alert_info_list_info_resource_list_resource,
    Alert_info_list_info_responseType_list_responseType,
    _from_string_Alert_info_list_info_category_list_category,
    _from_string_Alert_info_list_info_certainty,
    _from_string_Alert_info_list_info_responseType_list_responseType,
    _from_string_Alert_info_list_info_severity,
    _from_string_Alert_info_list_info_urgency,
    _from_string_Alert_msgType,
    _from_string_Alert_scope,
    _from_string_Alert_status,
} from "./CAP-1-2";
import { xmlParserOptions } from "./constants";

/**
 * `validateDateTime` throws an error if the given `datetime` is not in the valid format.
 * `datetime` must be in ISO8601 format, excepting Zulu time ("Z" offset).
 * @example validateDateTime("2002-05-24T16:49:00-07:00") // Valid
 * @example validateDateTime("2002-05-24T16:49:00Z") // Invalid, error thrown
 */
export function validateDateTime(datetime: string): string {
    if (Number.isNaN(Date.parse(datetime))) {
        throw new Error(`Unable to parse datetime '${datetime}'.`);
    }

    if (datetime.endsWith("Z")) {
        throw new Error(`Invalid datetime '${datetime}'.`);
    }
    return datetime;
}

/**
 * `alertInfoFromXML` returns an `Alert_info_list_info` instance parsed from a given `info` arg.
 * It uses a `sent` datetime arg as a fallback for the `info.effective` datetime.
 */
export function alertInfoFromXML(
    info: any,
    sent: string
): Alert_info_list_info {
    if (Object.values(info ?? {}).length === 0) {
        throw new Error("Alert info argument cannot be empty.");
    }

    if ((info?.category ?? []).length === 0) {
        throw new Error("Alert info category cannot be empty.");
    }

    const categories: Array<Alert_info_list_info_category_list_category> = [];
    for (let i = 0; i < info.category.length; i++) {
        const cat = info?.category?.[i] ?? "";
        const category = _from_string_Alert_info_list_info_category_list_category(
            cat
        );
        if (category === undefined) {
            throw new Error(`Invalid alert info category: '${cat}'.`);
        }
        categories.push(category);
    }

    if (!info.event) {
        throw new Error("Alert info event cannot be empty.");
    }
    const event = info.event;

    const responseTypes: Array<Alert_info_list_info_responseType_list_responseType> = [];
    if (info?.responseType?.length > 0) {
        for (let i = 0; i < info.responseType.length; i++) {
            const rt = String(info?.responseType?.[i] ?? "");
            const responseType = _from_string_Alert_info_list_info_responseType_list_responseType(
                rt
            );
            if (responseType === undefined) {
                throw new Error(`Invalid alert info responseType: '${rt}'.`);
            }
            responseTypes.push(responseType);
        }
    }

    if (!info.urgency) throw new Error("Alert info urgency cannot be empty.");
    const urgency = _from_string_Alert_info_list_info_urgency(
        String(info?.urgency ?? "")
    );
    if (urgency === undefined)
        throw new Error(`Invalid alert info urgency '${info.urgency}'.`);

    if (!info.severity) throw new Error("Alert info severity cannot be empty.");
    const severity = _from_string_Alert_info_list_info_severity(
        String(info?.severity ?? "")
    );
    if (severity === undefined)
        throw new Error(`Invalid alert info severity '${info.severity}'.`);

    if (!info.certainty)
        throw new Error("Alert info certainty cannot be empty.");
    const certainty = _from_string_Alert_info_list_info_certainty(
        String(info?.certainty ?? "")
    );
    if (certainty === undefined)
        throw new Error(`Invalid alert info certainty '${info.certainty}'.`);

    const eventCodes: Array<Alert_info_list_info_eventCode_list_eventCode> = [];
    if (info?.eventCode?.length > 0) {
        for (let i = 0; i < info.eventCode.length; i++) {
            const ec = info.eventCode[i];
            if (!ec?.valueName)
                throw new Error(
                    `Invalid alert info eventCode valueName: '${ec.valueName}'.`
                );
            const eventCode = new Alert_info_list_info_eventCode_list_eventCode(
                ec.valueName,
                ec.value
            );

            eventCodes.push(eventCode);
        }
    }

    let effective = sent;
    if (info.effective) {
        try {
            effective = validateDateTime(info.effective);
        } catch (e) {
            throw new Error(
                `Invalid alert info effective datetime: '${info.effective}'.`
            );
        }
    }

    let onset = "";
    if (info.onset) {
        try {
            onset = validateDateTime(info.onset);
        } catch (e) {
            throw new Error(
                `Invalid alert info onset datetime: '${info.onset}'.`
            );
        }
    }

    let expires = "";
    if (info.expires) {
        try {
            expires = validateDateTime(info.expires);
        } catch (e) {
            throw new Error(
                `Invalid alert info expires datetime: '${info.expires}'.`
            );
        }
    }

    let parameters: Array<Alert_info_list_info_parameter_list_parameter> = [];
    if (info?.parameter?.length > 0) {
        for (let i = 0; i < info.parameter.length; i++) {
            const param = info.parameter[i];
            if (!param?.valueName) {
                throw new Error(
                    `Invalid alert info parameter valueName: '${param.valueName}'.`
                );
            }
            parameters.push(
                new Alert_info_list_info_parameter_list_parameter(
                    param.valueName,
                    param.value
                )
            );
        }
    }

    const resources = ((info.resource ?? []) as Array<any>).map(
        (resource): Alert_info_list_info_resource_list_resource => {
            return new Alert_info_list_info_resource_list_resource(
                resource.resourceDesc,
                resource.mimeType,
                resource.size ? Number.parseInt(resource.size, 10) : undefined,
                resource.uri ? resource.uri : undefined,
                resource.derefUri ? resource.derefUri : undefined,
                resource.digest ? resource.digest : undefined
            );
        }
    );

    const areas = ((info.area ?? []) as Array<any>).map(
        (area): Alert_info_list_info_area_list_area => {
            const altitude =
                area.altitude === undefined
                    ? undefined
                    : Number.parseFloat(area.altitude);
            const ceiling =
                area.ceiling === undefined
                    ? undefined
                    : Number.parseFloat(area.ceiling);
            return new Alert_info_list_info_area_list_area(
                area.areaDesc,
                area.polygon,
                area.circle,
                ((area.geocode ?? []) as Array<any>).map((geocode) => {
                    return new Alert_info_list_info_area_list_area_geocode_list_geocode(
                        geocode.valueName,
                        geocode.value
                    );
                }),
                altitude,
                ceiling
            );
        }
    );

    return new Alert_info_list_info(
        info.language ?? "en-US",
        categories,
        event,
        responseTypes,
        urgency,
        severity,
        certainty,
        info.audience ?? "",
        eventCodes,
        effective,
        onset,
        expires,
        info.senderName ?? "",
        info.headline ?? "",
        info.description ?? "",
        info.instruction ?? "",
        info.web ?? "",
        info.contact ?? "",
        parameters,
        resources,
        areas
    );
}

export default function alertFromXML(str: string): Alert {
    const parser = new XMLParser(xmlParserOptions);

    let doc;
    try {
        doc = parser.parse(str);
    } catch (e) {
        throw new Error(`Unable to parse XML document: ${e}`);
    }

    if (!doc?.alert) {
        throw new Error("Unable to parse alert");
    }

    const alertDoc = doc.alert;

    const status = _from_string_Alert_status(String(alertDoc?.status ?? ""));
    if (status === undefined)
        throw new Error(`Invalid alert status: ${alertDoc.status}`);

    const msgType = _from_string_Alert_msgType(String(alertDoc?.msgType ?? ""));
    if (msgType === undefined)
        throw new Error(`Invalid alert msgType: ${alertDoc.msgType}`);

    const scope = _from_string_Alert_scope(String(alertDoc?.scope ?? ""));
    if (scope === undefined)
        throw new Error(`Invalid alert scope: ${alertDoc.scope}`);

    let sent: string = "";
    try {
        sent = validateDateTime(alertDoc?.sent ?? "");
    } catch (e) {
        throw new Error(`Invalid alert 'sent' datetime: '${sent}'`);
    }

    let infos: Array<Alert_info_list_info> = [];
    try {
        infos = (alertDoc.info as Array<any>).map((info, i) =>
            alertInfoFromXML(info, sent)
        );
    } catch (e) {
        throw new Error(`Unable to parse info: ${e}`);
    }
    return new Alert(
        alertDoc.identifier,
        alertDoc.sender,
        alertDoc.sent,
        status,
        msgType,
        alertDoc.source,
        scope,
        alertDoc?.restriction ?? "",
        alertDoc?.addresses ?? "",
        alertDoc?.code ?? [],
        alertDoc?.note ?? "",
        alertDoc?.references ?? "",
        alertDoc?.incidents ?? "",
        infos,
        alertDoc?.elem ?? []
    );
}
