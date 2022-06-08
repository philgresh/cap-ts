import { XMLParser } from "fast-xml-parser";
import type { X2jOptions } from "fast-xml-parser";
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
    Value,
    ValueName,
    _from_string_Alert_info_list_info_category_list_category,
    _from_string_Alert_info_list_info_certainty,
    _from_string_Alert_info_list_info_responseType_list_responseType,
    _from_string_Alert_info_list_info_severity,
    _from_string_Alert_info_list_info_urgency,
    _from_string_Alert_msgType,
    _from_string_Alert_scope,
    _from_string_Alert_status,
} from "./CAP-1-2";

/**
 * `validateDateTime` returns a Promise, rejecting if the given `datetime` is not in the valid format.
 * `datetime` must be in ISO8601 format, excepting Zulu time ("Z" offset).
 * @example validateDateTime("2002-05-24T16:49:00-07:00") // Promise resolved
 * @example validateDateTime("2002-05-24T16:49:00Z") // Promise rejected
 */
export async function validateDateTime(datetime: string): Promise<string> {
    if (Number.isNaN(Date.parse(datetime))) {
        return Promise.reject(`Unable to parse datetime '${datetime}'.`);
    }

    if (datetime.endsWith("Z")) {
        return Promise.reject(`Invalid datetime '${datetime}'.`);
    }
    return Promise.resolve(datetime);
}

export async function alertInfoFromXML(
    info: any,
    sent: string
): Promise<Alert_info_list_info> {
    if (Object.values(info ?? {}).length === 0)
        return Promise.reject("Alert info argument cannot be empty.");

    if ((info?.category ?? []).length === 0)
        return Promise.reject("Alert info category cannot be empty.");

    const categories: Array<Alert_info_list_info_category_list_category> = [];
    for (const cat of info.category as Array<string>) {
        const category = _from_string_Alert_info_list_info_category_list_category(
            cat
        );
        if (category === undefined) {
            return Promise.reject(`Invalid alert info category: '${cat}'.`);
        }
        categories.push(category);
    }

    if (!info.event) return Promise.reject("Alert info event cannot be empty.");
    const event = info.event;

    const responseTypes: Array<Alert_info_list_info_responseType_list_responseType> = [];
    for (const rt of info.responseType as Array<string>) {
        const responseType = _from_string_Alert_info_list_info_responseType_list_responseType(
            rt
        );
        if (responseType === undefined) {
            return Promise.reject(`Invalid alert info responseType: '${rt}'.`);
        }
        responseTypes.push(responseType);
    }

    if (!info.urgency)
        return Promise.reject("Alert info urgency cannot be empty.");
    const urgency = _from_string_Alert_info_list_info_urgency(info.urgency);
    if (urgency === undefined)
        return Promise.reject(`Invalid alert info urgency '${info.urgency}'.`);

    if (!info.severity)
        return Promise.reject("Alert info severity cannot be empty.");
    const severity = _from_string_Alert_info_list_info_severity(info.severity);
    if (severity === undefined)
        return Promise.reject(
            `Invalid alert info severity '${info.severity}'.`
        );

    if (!info.certainty)
        return Promise.reject("Alert info certainty cannot be empty.");
    const certainty = _from_string_Alert_info_list_info_certainty(
        info.certainty
    );
    if (certainty === undefined)
        return Promise.reject(
            `Invalid alert info certainty '${info.certainty}'.`
        );

    type EventCodeType = {
        valueName: ValueName;
        value: Value;
    };

    const eventCodes: Array<Alert_info_list_info_eventCode_list_eventCode> = [];
    if (info.eventCode) {
        for (const ec of info.eventCode as Array<EventCodeType>) {
            if (!ec?.valueName)
                return Promise.reject(
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
            effective = await validateDateTime(info.effective);
        } catch (e) {
            return Promise.reject(
                `Invalid alert info effective datetime: '${info.effective}'.`
            );
        }
    }

    let onset = "";
    if (info.onset) {
        try {
            onset = await validateDateTime(info.onset);
        } catch (e) {
            return Promise.reject(
                `Invalid alert info onset datetime: '${info.onset}'.`
            );
        }
    }

    let expires = "";
    if (info.expires) {
        try {
            expires = await validateDateTime(info.expires);
        } catch (e) {
            return Promise.reject(
                `Invalid alert info expires datetime: '${info.expires}'.`
            );
        }
    }

    let parameters: Array<Alert_info_list_info_parameter_list_parameter> = [];
    if (info.parameter) {
        for (const param of info.parameter as Array<EventCodeType>) {
            if (!param?.valueName)
                return Promise.reject(
                    `Invalid alert info parameter valueName: '${param.valueName}'.`
                );
            const parameter = new Alert_info_list_info_parameter_list_parameter(
                param.valueName,
                param.value
            );

            parameters.push(parameter);
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
            return new Alert_info_list_info_area_list_area(
                area.areaDesc,
                area.polygon,
                area.circle,
                ((area.geocode ?? []) as Array<any>).map(
                    (
                        geocode
                    ): Alert_info_list_info_area_list_area_geocode_list_geocode => {
                        return new Alert_info_list_info_area_list_area_geocode_list_geocode(
                            geocode.valueName,
                            geocode.value
                        );
                    }
                ),
                area.altitude ? Number.parseFloat(area.altitude) : undefined,
                area.ceiling ? Number.parseFloat(area.ceiling) : undefined
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

export default async function alertFromXML(str: string) {
    const treatAsArray = [
        "alert.code",
        "alert.info",
        "alert.info.category",
        "alert.info.eventCode",
        "alert.info.parameter",
        "alert.info.resource",
        "alert.info.responseType",
        "alert.info.area",
        "alert.info.area.geocode",
    ];

    const options: Partial<X2jOptions> = {
        isArray: (_name, jpath) => !!(treatAsArray.indexOf(jpath) !== -1),
    };

    const parser = new XMLParser(options);

    let doc;
    try {
        doc = parser.parse(str);
    } catch (e) {
        return Promise.reject(`Unable to parse XML document: ${e}`);
    }

    if (!doc?.alert) {
        return Promise.reject("Unable to parse alert");
    }

    const alertDoc = doc.alert;

    const status = _from_string_Alert_status(alertDoc.status);
    if (status === undefined)
        return Promise.reject(`Invalid alert status: ${alertDoc.status}`);

    const msgType = _from_string_Alert_msgType(alertDoc.msgType);
    if (msgType === undefined)
        return Promise.reject(`Invalid alert msgType: ${alertDoc.msgType}`);

    const scope = _from_string_Alert_scope(alertDoc.scope);
    if (scope === undefined)
        return Promise.reject(`Invalid alert scope: ${alertDoc.scope}`);

    let sent: string = "";
    try {
        sent = await validateDateTime(alertDoc?.sent ?? "");
    } catch (e) {
        return Promise.reject(`Invalid alert sent: ${sent}`);
    }

    let infos: Array<Alert_info_list_info> = [];
    try {
        infos = await Promise.all(
            (alertDoc.info as Array<any>).map((info, i) =>
                alertInfoFromXML(info, sent)
            )
        );
    } catch (e) {
        return Promise.reject(`Unable to parse info: ${e}`);
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
