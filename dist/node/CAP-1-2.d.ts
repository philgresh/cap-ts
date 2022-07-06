import * as asn1 from "asn1-ts";
import * as XSD from "./XSD";
import * as __utils from "./__utils";
export { AnyURI, DateTime, Decimal, Language, String, _decode_AnyURI, _decode_DateTime, _decode_Decimal, _decode_Language, _decode_String, _encode_AnyURI, _encode_DateTime, _encode_Decimal, _encode_Language, _encode_String, } from "./XSD";
export declare enum Alert_status {
    actual = 0,
    draft = 1,
    exercise = 2,
    system = 3,
    test = 4
}
export declare function _to_string_Alert_status(value: Alert_status): string;
export declare function _from_string_Alert_status(str: string): Alert_status | undefined;
export declare const Alert_status_actual: Alert_status;
export declare const Alert_status_draft: Alert_status;
export declare const Alert_status_exercise: Alert_status;
export declare const Alert_status_system: Alert_status;
export declare const Alert_status_test: Alert_status;
export declare function _decode_Alert_status(el: asn1.ASN1Element): Alert_status;
export declare function _encode_Alert_status(value: Alert_status, elGetter: __utils.ASN1Encoder<Alert_status>): asn1.ASN1Element;
export declare enum Alert_msgType {
    ack = 0,
    alert = 1,
    cancel = 2,
    error = 3,
    update = 4
}
export declare function _to_string_Alert_msgType(value: Alert_msgType): string;
export declare function _from_string_Alert_msgType(str: string): Alert_msgType | undefined;
export declare const Alert_msgType_ack: Alert_msgType;
export declare const Alert_msgType_alert: Alert_msgType;
export declare const Alert_msgType_cancel: Alert_msgType;
export declare const Alert_msgType_error: Alert_msgType;
export declare const Alert_msgType_update: Alert_msgType;
export declare function _decode_Alert_msgType(el: asn1.ASN1Element): Alert_msgType;
export declare function _encode_Alert_msgType(value: Alert_msgType, elGetter: __utils.ASN1Encoder<Alert_msgType>): asn1.ASN1Element;
export declare enum Alert_scope {
    private_ = 0,
    public_ = 1,
    restricted = 2
}
export declare function _to_string_Alert_scope(value: Alert_scope): string;
export declare function _from_string_Alert_scope(str: string): Alert_scope | undefined;
export declare const Alert_scope_private_: Alert_scope;
export declare const Alert_scope_public_: Alert_scope;
export declare const Alert_scope_restricted: Alert_scope;
export declare function _decode_Alert_scope(el: asn1.ASN1Element): Alert_scope;
export declare function _encode_Alert_scope(value: Alert_scope, elGetter: __utils.ASN1Encoder<Alert_scope>): asn1.ASN1Element;
export declare enum Alert_info_list_info_category_list_category {
    cBRNE = 0,
    env = 1,
    fire = 2,
    geo = 3,
    health = 4,
    infra = 5,
    met = 6,
    other = 7,
    rescue = 8,
    safety = 9,
    security = 10,
    transport = 11
}
export declare function _to_string_Alert_info_list_info_category_list_category(value: Alert_info_list_info_category_list_category): string;
export declare function _from_string_Alert_info_list_info_category_list_category(str: string): Alert_info_list_info_category_list_category | undefined;
export declare const Alert_info_list_info_category_list_category_cBRNE: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_env: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_fire: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_geo: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_health: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_infra: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_met: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_other: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_rescue: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_safety: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_security: Alert_info_list_info_category_list_category;
export declare const Alert_info_list_info_category_list_category_transport: Alert_info_list_info_category_list_category;
export declare function _decode_Alert_info_list_info_category_list_category(el: asn1.ASN1Element): Alert_info_list_info_category_list_category;
export declare function _encode_Alert_info_list_info_category_list_category(value: Alert_info_list_info_category_list_category, elGetter: __utils.ASN1Encoder<Alert_info_list_info_category_list_category>): asn1.ASN1Element;
export declare enum Alert_info_list_info_responseType_list_responseType {
    allClear = 0,
    assess = 1,
    avoid = 2,
    evacuate = 3,
    execute = 4,
    monitor = 5,
    none = 6,
    prepare = 7,
    shelter = 8
}
export declare function _to_string_Alert_info_list_info_responseType_list_responseType(value: Alert_info_list_info_responseType_list_responseType): string;
export declare function _from_string_Alert_info_list_info_responseType_list_responseType(str: string): Alert_info_list_info_responseType_list_responseType | undefined;
export declare const Alert_info_list_info_responseType_list_responseType_allClear: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_assess: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_avoid: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_evacuate: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_execute: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_monitor: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_none: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_prepare: Alert_info_list_info_responseType_list_responseType;
export declare const Alert_info_list_info_responseType_list_responseType_shelter: Alert_info_list_info_responseType_list_responseType;
export declare function _decode_Alert_info_list_info_responseType_list_responseType(el: asn1.ASN1Element): Alert_info_list_info_responseType_list_responseType;
export declare function _encode_Alert_info_list_info_responseType_list_responseType(value: Alert_info_list_info_responseType_list_responseType, elGetter: __utils.ASN1Encoder<Alert_info_list_info_responseType_list_responseType>): asn1.ASN1Element;
export declare enum Alert_info_list_info_urgency {
    expected = 0,
    future = 1,
    immediate = 2,
    past = 3,
    unknown = 4
}
export declare function _to_string_Alert_info_list_info_urgency(value: Alert_info_list_info_urgency): string;
export declare function _from_string_Alert_info_list_info_urgency(str: string): Alert_info_list_info_urgency | undefined;
export declare const Alert_info_list_info_urgency_expected: Alert_info_list_info_urgency;
export declare const Alert_info_list_info_urgency_future: Alert_info_list_info_urgency;
export declare const Alert_info_list_info_urgency_immediate: Alert_info_list_info_urgency;
export declare const Alert_info_list_info_urgency_past: Alert_info_list_info_urgency;
export declare const Alert_info_list_info_urgency_unknown: Alert_info_list_info_urgency;
export declare function _decode_Alert_info_list_info_urgency(el: asn1.ASN1Element): Alert_info_list_info_urgency;
export declare function _encode_Alert_info_list_info_urgency(value: Alert_info_list_info_urgency, elGetter: __utils.ASN1Encoder<Alert_info_list_info_urgency>): asn1.ASN1Element;
export declare enum Alert_info_list_info_severity {
    extreme = 0,
    minor = 1,
    moderate = 2,
    severe = 3,
    unknown = 4
}
export declare function _to_string_Alert_info_list_info_severity(value: Alert_info_list_info_severity): string;
export declare function _from_string_Alert_info_list_info_severity(str: string): Alert_info_list_info_severity | undefined;
export declare const Alert_info_list_info_severity_extreme: Alert_info_list_info_severity;
export declare const Alert_info_list_info_severity_minor: Alert_info_list_info_severity;
export declare const Alert_info_list_info_severity_moderate: Alert_info_list_info_severity;
export declare const Alert_info_list_info_severity_severe: Alert_info_list_info_severity;
export declare const Alert_info_list_info_severity_unknown: Alert_info_list_info_severity;
export declare function _decode_Alert_info_list_info_severity(el: asn1.ASN1Element): Alert_info_list_info_severity;
export declare function _encode_Alert_info_list_info_severity(value: Alert_info_list_info_severity, elGetter: __utils.ASN1Encoder<Alert_info_list_info_severity>): asn1.ASN1Element;
export declare enum Alert_info_list_info_certainty {
    likely = 0,
    observed = 1,
    possible = 2,
    unknown = 3,
    unlikely = 4
}
export declare function _to_string_Alert_info_list_info_certainty(value: Alert_info_list_info_certainty): string;
export declare function _from_string_Alert_info_list_info_certainty(str: string): Alert_info_list_info_certainty | undefined;
export declare const Alert_info_list_info_certainty_likely: Alert_info_list_info_certainty;
export declare const Alert_info_list_info_certainty_observed: Alert_info_list_info_certainty;
export declare const Alert_info_list_info_certainty_possible: Alert_info_list_info_certainty;
export declare const Alert_info_list_info_certainty_unknown: Alert_info_list_info_certainty;
export declare const Alert_info_list_info_certainty_unlikely: Alert_info_list_info_certainty;
export declare function _decode_Alert_info_list_info_certainty(el: asn1.ASN1Element): Alert_info_list_info_certainty;
export declare function _encode_Alert_info_list_info_certainty(value: Alert_info_list_info_certainty, elGetter: __utils.ASN1Encoder<Alert_info_list_info_certainty>): asn1.ASN1Element;
export declare type ValueName = XSD.String;
export declare function _decode_ValueName(el: asn1.ASN1Element): string;
export declare function _encode_ValueName(value: ValueName, elGetter: __utils.ASN1Encoder<ValueName>): asn1.ASN1Element;
export declare type Value = XSD.String;
export declare function _decode_Value(el: asn1.ASN1Element): string;
export declare function _encode_Value(value: Value, elGetter: __utils.ASN1Encoder<Value>): asn1.ASN1Element;
export declare class Alert_info_list_info_eventCode_list_eventCode {
    readonly valueName: ValueName;
    readonly value: Value;
    constructor(valueName: ValueName, value: Value);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info_eventCode_list_eventCode: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info_eventCode_list_eventCode(el: asn1.ASN1Element): Alert_info_list_info_eventCode_list_eventCode;
export declare function _encode_Alert_info_list_info_eventCode_list_eventCode(value: Alert_info_list_info_eventCode_list_eventCode, elGetter: __utils.ASN1Encoder<Alert_info_list_info_eventCode_list_eventCode>): asn1.ASN1Element;
export declare class Alert_info_list_info_parameter_list_parameter {
    readonly valueName: ValueName;
    readonly value: Value;
    constructor(valueName: ValueName, value: Value);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info_parameter_list_parameter: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info_parameter_list_parameter(el: asn1.ASN1Element): Alert_info_list_info_parameter_list_parameter;
export declare function _encode_Alert_info_list_info_parameter_list_parameter(value: Alert_info_list_info_parameter_list_parameter, elGetter: __utils.ASN1Encoder<Alert_info_list_info_parameter_list_parameter>): asn1.ASN1Element;
export declare class Alert_info_list_info_resource_list_resource {
    readonly resourceDesc: XSD.String;
    readonly mimeType: XSD.String;
    readonly size: asn1.OPTIONAL<asn1.INTEGER>;
    readonly uri: asn1.OPTIONAL<XSD.AnyURI>;
    readonly derefUri: asn1.OPTIONAL<XSD.String>;
    readonly digest: asn1.OPTIONAL<XSD.String>;
    constructor(resourceDesc: XSD.String, mimeType: XSD.String, size: asn1.OPTIONAL<asn1.INTEGER>, uri: asn1.OPTIONAL<XSD.AnyURI>, derefUri: asn1.OPTIONAL<XSD.String>, digest: asn1.OPTIONAL<XSD.String>);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info_resource_list_resource(el: asn1.ASN1Element): Alert_info_list_info_resource_list_resource;
export declare function _encode_Alert_info_list_info_resource_list_resource(value: Alert_info_list_info_resource_list_resource, elGetter: __utils.ASN1Encoder<Alert_info_list_info_resource_list_resource>): asn1.ASN1Element;
export declare class Alert_info_list_info_area_list_area_geocode_list_geocode {
    readonly valueName: ValueName;
    readonly value: Value;
    constructor(valueName: ValueName, value: Value);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info_area_list_area_geocode_list_geocode(el: asn1.ASN1Element): Alert_info_list_info_area_list_area_geocode_list_geocode;
export declare function _encode_Alert_info_list_info_area_list_area_geocode_list_geocode(value: Alert_info_list_info_area_list_area_geocode_list_geocode, elGetter: __utils.ASN1Encoder<Alert_info_list_info_area_list_area_geocode_list_geocode>): asn1.ASN1Element;
export declare class Alert_info_list_info_area_list_area {
    readonly areaDesc: XSD.String;
    readonly polygon_list: XSD.String[];
    readonly circle_list: XSD.String[];
    readonly geocode_list: Alert_info_list_info_area_list_area_geocode_list_geocode[];
    readonly altitude: asn1.OPTIONAL<XSD.Decimal>;
    readonly ceiling: asn1.OPTIONAL<XSD.Decimal>;
    constructor(areaDesc: XSD.String, polygon_list: XSD.String[], circle_list: XSD.String[], geocode_list: Alert_info_list_info_area_list_area_geocode_list_geocode[], altitude: asn1.OPTIONAL<XSD.Decimal>, ceiling: asn1.OPTIONAL<XSD.Decimal>);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info_area_list_area: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info_area_list_area(el: asn1.ASN1Element): Alert_info_list_info_area_list_area;
export declare function _encode_Alert_info_list_info_area_list_area(value: Alert_info_list_info_area_list_area, elGetter: __utils.ASN1Encoder<Alert_info_list_info_area_list_area>): asn1.ASN1Element;
export declare class Alert_info_list_info {
    readonly language: asn1.OPTIONAL<XSD.Language>;
    readonly category_list: Alert_info_list_info_category_list_category[];
    readonly event: XSD.String;
    readonly responseType_list: Alert_info_list_info_responseType_list_responseType[];
    readonly urgency: Alert_info_list_info_urgency;
    readonly severity: Alert_info_list_info_severity;
    readonly certainty: Alert_info_list_info_certainty;
    readonly audience: asn1.OPTIONAL<XSD.String>;
    readonly eventCode_list: Alert_info_list_info_eventCode_list_eventCode[];
    readonly effective: asn1.OPTIONAL<XSD.DateTime>;
    readonly onset: asn1.OPTIONAL<XSD.DateTime>;
    readonly expires: asn1.OPTIONAL<XSD.DateTime>;
    readonly senderName: asn1.OPTIONAL<XSD.String>;
    readonly headline: asn1.OPTIONAL<XSD.String>;
    readonly description: asn1.OPTIONAL<XSD.String>;
    readonly instruction: asn1.OPTIONAL<XSD.String>;
    readonly web: asn1.OPTIONAL<XSD.AnyURI>;
    readonly contact: asn1.OPTIONAL<XSD.String>;
    readonly parameter_list: Alert_info_list_info_parameter_list_parameter[];
    readonly resource_list: Alert_info_list_info_resource_list_resource[];
    readonly area_list: Alert_info_list_info_area_list_area[];
    constructor(language: asn1.OPTIONAL<XSD.Language>, category_list: Alert_info_list_info_category_list_category[], event: XSD.String, responseType_list: Alert_info_list_info_responseType_list_responseType[], urgency: Alert_info_list_info_urgency, severity: Alert_info_list_info_severity, certainty: Alert_info_list_info_certainty, audience: asn1.OPTIONAL<XSD.String>, eventCode_list: Alert_info_list_info_eventCode_list_eventCode[], effective: asn1.OPTIONAL<XSD.DateTime>, onset: asn1.OPTIONAL<XSD.DateTime>, expires: asn1.OPTIONAL<XSD.DateTime>, senderName: asn1.OPTIONAL<XSD.String>, headline: asn1.OPTIONAL<XSD.String>, description: asn1.OPTIONAL<XSD.String>, instruction: asn1.OPTIONAL<XSD.String>, web: asn1.OPTIONAL<XSD.AnyURI>, contact: asn1.OPTIONAL<XSD.String>, parameter_list: Alert_info_list_info_parameter_list_parameter[], resource_list: Alert_info_list_info_resource_list_resource[], area_list: Alert_info_list_info_area_list_area[]);
}
export declare const _root_component_type_list_1_spec_for_Alert_info_list_info: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert_info_list_info: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert_info_list_info: __utils.ComponentSpec[];
export declare function _decode_Alert_info_list_info(el: asn1.ASN1Element): Alert_info_list_info;
export declare function _encode_Alert_info_list_info(value: Alert_info_list_info, elGetter: __utils.ASN1Encoder<Alert_info_list_info>): asn1.ASN1Element;
export declare class Alert {
    readonly identifier: XSD.String;
    readonly sender: XSD.String;
    readonly sent: XSD.DateTime;
    readonly status: Alert_status;
    readonly msgType: Alert_msgType;
    readonly source: asn1.OPTIONAL<XSD.String>;
    readonly scope: Alert_scope;
    readonly restriction: asn1.OPTIONAL<XSD.String>;
    readonly addresses: asn1.OPTIONAL<XSD.String>;
    readonly code_list: XSD.String[];
    readonly note: asn1.OPTIONAL<XSD.String>;
    readonly references: asn1.OPTIONAL<XSD.String>;
    readonly incidents: asn1.OPTIONAL<XSD.String>;
    readonly info_list: Alert_info_list_info[];
    readonly elem_list: XSD.String[];
    constructor(identifier: XSD.String, sender: XSD.String, sent: XSD.DateTime, status: Alert_status, msgType: Alert_msgType, source: asn1.OPTIONAL<XSD.String>, scope: Alert_scope, restriction: asn1.OPTIONAL<XSD.String>, addresses: asn1.OPTIONAL<XSD.String>, code_list: XSD.String[], note: asn1.OPTIONAL<XSD.String>, references: asn1.OPTIONAL<XSD.String>, incidents: asn1.OPTIONAL<XSD.String>, info_list: Alert_info_list_info[], elem_list: XSD.String[]);
    toXML(): string;
    static fromXML(str: string): Alert;
}
export declare const _root_component_type_list_1_spec_for_Alert: __utils.ComponentSpec[];
export declare const _root_component_type_list_2_spec_for_Alert: __utils.ComponentSpec[];
export declare const _extension_additions_list_spec_for_Alert: __utils.ComponentSpec[];
export declare function _decode_Alert(el: asn1.ASN1Element): Alert;
export declare function _encode_Alert(value: Alert, elGetter: __utils.ASN1Encoder<Alert>): asn1.ASN1Element;
//# sourceMappingURL=CAP-1-2.d.ts.map