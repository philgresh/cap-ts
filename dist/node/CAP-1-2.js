"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert_info_list_info_category_list_category_rescue = exports.Alert_info_list_info_category_list_category_other = exports.Alert_info_list_info_category_list_category_met = exports.Alert_info_list_info_category_list_category_infra = exports.Alert_info_list_info_category_list_category_health = exports.Alert_info_list_info_category_list_category_geo = exports.Alert_info_list_info_category_list_category_fire = exports.Alert_info_list_info_category_list_category_env = exports.Alert_info_list_info_category_list_category_cBRNE = exports._from_string_Alert_info_list_info_category_list_category = exports._to_string_Alert_info_list_info_category_list_category = exports.Alert_info_list_info_category_list_category = exports._encode_Alert_scope = exports._decode_Alert_scope = exports.Alert_scope_restricted = exports.Alert_scope_public_ = exports.Alert_scope_private_ = exports._from_string_Alert_scope = exports._to_string_Alert_scope = exports.Alert_scope = exports._encode_Alert_msgType = exports._decode_Alert_msgType = exports.Alert_msgType_update = exports.Alert_msgType_error = exports.Alert_msgType_cancel = exports.Alert_msgType_alert = exports.Alert_msgType_ack = exports._from_string_Alert_msgType = exports._to_string_Alert_msgType = exports.Alert_msgType = exports._encode_Alert_status = exports._decode_Alert_status = exports.Alert_status_test = exports.Alert_status_system = exports.Alert_status_exercise = exports.Alert_status_draft = exports.Alert_status_actual = exports._from_string_Alert_status = exports._to_string_Alert_status = exports.Alert_status = exports._encode_String = exports._encode_Language = exports._encode_Decimal = exports._encode_DateTime = exports._encode_AnyURI = exports._decode_String = exports._decode_Language = exports._decode_Decimal = exports._decode_DateTime = exports._decode_AnyURI = void 0;
exports._decode_ValueName = exports._encode_Alert_info_list_info_certainty = exports._decode_Alert_info_list_info_certainty = exports.Alert_info_list_info_certainty_unlikely = exports.Alert_info_list_info_certainty_unknown = exports.Alert_info_list_info_certainty_possible = exports.Alert_info_list_info_certainty_observed = exports.Alert_info_list_info_certainty_likely = exports._from_string_Alert_info_list_info_certainty = exports._to_string_Alert_info_list_info_certainty = exports.Alert_info_list_info_certainty = exports._encode_Alert_info_list_info_severity = exports._decode_Alert_info_list_info_severity = exports.Alert_info_list_info_severity_unknown = exports.Alert_info_list_info_severity_severe = exports.Alert_info_list_info_severity_moderate = exports.Alert_info_list_info_severity_minor = exports.Alert_info_list_info_severity_extreme = exports._from_string_Alert_info_list_info_severity = exports._to_string_Alert_info_list_info_severity = exports.Alert_info_list_info_severity = exports._encode_Alert_info_list_info_urgency = exports._decode_Alert_info_list_info_urgency = exports.Alert_info_list_info_urgency_unknown = exports.Alert_info_list_info_urgency_past = exports.Alert_info_list_info_urgency_immediate = exports.Alert_info_list_info_urgency_future = exports.Alert_info_list_info_urgency_expected = exports._from_string_Alert_info_list_info_urgency = exports._to_string_Alert_info_list_info_urgency = exports.Alert_info_list_info_urgency = exports._encode_Alert_info_list_info_responseType_list_responseType = exports._decode_Alert_info_list_info_responseType_list_responseType = exports.Alert_info_list_info_responseType_list_responseType_shelter = exports.Alert_info_list_info_responseType_list_responseType_prepare = exports.Alert_info_list_info_responseType_list_responseType_none = exports.Alert_info_list_info_responseType_list_responseType_monitor = exports.Alert_info_list_info_responseType_list_responseType_execute = exports.Alert_info_list_info_responseType_list_responseType_evacuate = exports.Alert_info_list_info_responseType_list_responseType_avoid = exports.Alert_info_list_info_responseType_list_responseType_assess = exports.Alert_info_list_info_responseType_list_responseType_allClear = exports._from_string_Alert_info_list_info_responseType_list_responseType = exports._to_string_Alert_info_list_info_responseType_list_responseType = exports.Alert_info_list_info_responseType_list_responseType = exports._encode_Alert_info_list_info_category_list_category = exports._decode_Alert_info_list_info_category_list_category = exports.Alert_info_list_info_category_list_category_transport = exports.Alert_info_list_info_category_list_category_security = exports.Alert_info_list_info_category_list_category_safety = void 0;
exports._encode_Alert = exports._decode_Alert = exports._extension_additions_list_spec_for_Alert = exports._root_component_type_list_2_spec_for_Alert = exports._root_component_type_list_1_spec_for_Alert = exports.Alert = exports._encode_Alert_info_list_info = exports._decode_Alert_info_list_info = exports._extension_additions_list_spec_for_Alert_info_list_info = exports._root_component_type_list_2_spec_for_Alert_info_list_info = exports._root_component_type_list_1_spec_for_Alert_info_list_info = exports.Alert_info_list_info = exports._encode_Alert_info_list_info_area_list_area = exports._decode_Alert_info_list_info_area_list_area = exports._extension_additions_list_spec_for_Alert_info_list_info_area_list_area = exports._root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area = exports._root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area = exports.Alert_info_list_info_area_list_area = exports._encode_Alert_info_list_info_area_list_area_geocode_list_geocode = exports._decode_Alert_info_list_info_area_list_area_geocode_list_geocode = exports._extension_additions_list_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = exports._root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = exports._root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = exports.Alert_info_list_info_area_list_area_geocode_list_geocode = exports._encode_Alert_info_list_info_resource_list_resource = exports._decode_Alert_info_list_info_resource_list_resource = exports._extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource = exports._root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource = exports._root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource = exports.Alert_info_list_info_resource_list_resource = exports._encode_Alert_info_list_info_parameter_list_parameter = exports._decode_Alert_info_list_info_parameter_list_parameter = exports._extension_additions_list_spec_for_Alert_info_list_info_parameter_list_parameter = exports._root_component_type_list_2_spec_for_Alert_info_list_info_parameter_list_parameter = exports._root_component_type_list_1_spec_for_Alert_info_list_info_parameter_list_parameter = exports.Alert_info_list_info_parameter_list_parameter = exports._encode_Alert_info_list_info_eventCode_list_eventCode = exports._decode_Alert_info_list_info_eventCode_list_eventCode = exports._extension_additions_list_spec_for_Alert_info_list_info_eventCode_list_eventCode = exports._root_component_type_list_2_spec_for_Alert_info_list_info_eventCode_list_eventCode = exports._root_component_type_list_1_spec_for_Alert_info_list_info_eventCode_list_eventCode = exports.Alert_info_list_info_eventCode_list_eventCode = exports._encode_Value = exports._decode_Value = exports._encode_ValueName = void 0;
const tslib_1 = require("tslib");
const toXML_1 = tslib_1.__importDefault(require("./toXML"));
const fromXML_1 = tslib_1.__importDefault(require("./fromXML"));
const asn1 = tslib_1.__importStar(require("asn1-ts"));
const XSD = tslib_1.__importStar(require("./XSD"));
const __utils = tslib_1.__importStar(require("./__utils"));
var XSD_1 = require("./XSD");
Object.defineProperty(exports, "_decode_AnyURI", { enumerable: true, get: function () { return XSD_1._decode_AnyURI; } });
Object.defineProperty(exports, "_decode_DateTime", { enumerable: true, get: function () { return XSD_1._decode_DateTime; } });
Object.defineProperty(exports, "_decode_Decimal", { enumerable: true, get: function () { return XSD_1._decode_Decimal; } });
Object.defineProperty(exports, "_decode_Language", { enumerable: true, get: function () { return XSD_1._decode_Language; } });
Object.defineProperty(exports, "_decode_String", { enumerable: true, get: function () { return XSD_1._decode_String; } });
Object.defineProperty(exports, "_encode_AnyURI", { enumerable: true, get: function () { return XSD_1._encode_AnyURI; } });
Object.defineProperty(exports, "_encode_DateTime", { enumerable: true, get: function () { return XSD_1._encode_DateTime; } });
Object.defineProperty(exports, "_encode_Decimal", { enumerable: true, get: function () { return XSD_1._encode_Decimal; } });
Object.defineProperty(exports, "_encode_Language", { enumerable: true, get: function () { return XSD_1._encode_Language; } });
Object.defineProperty(exports, "_encode_String", { enumerable: true, get: function () { return XSD_1._encode_String; } });
var Alert_status;
(function (Alert_status) {
    Alert_status[Alert_status["actual"] = 0] = "actual";
    Alert_status[Alert_status["draft"] = 1] = "draft";
    Alert_status[Alert_status["exercise"] = 2] = "exercise";
    Alert_status[Alert_status["system"] = 3] = "system";
    Alert_status[Alert_status["test"] = 4] = "test";
})(Alert_status = exports.Alert_status || (exports.Alert_status = {}));
function _to_string_Alert_status(value) {
    return [
        "Actual",
        "Draft",
        "Exercise",
        "System",
        "Test",
    ][value];
}
exports._to_string_Alert_status = _to_string_Alert_status;
function _from_string_Alert_status(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["actual", Alert_status.actual],
        ["draft", Alert_status.draft],
        ["exercise", Alert_status.exercise],
        ["system", Alert_status.system],
        ["test", Alert_status.test],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_status = _from_string_Alert_status;
exports.Alert_status_actual = Alert_status.actual;
exports.Alert_status_draft = Alert_status.draft;
exports.Alert_status_exercise = Alert_status.exercise;
exports.Alert_status_system = Alert_status.system;
exports.Alert_status_test = Alert_status.test;
let _cached_decoder_for_Alert_status = null;
let _cached_encoder_for_Alert_status = null;
function _decode_Alert_status(el) {
    if (!_cached_decoder_for_Alert_status) {
        _cached_decoder_for_Alert_status = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_status(el);
}
exports._decode_Alert_status = _decode_Alert_status;
function _encode_Alert_status(value, elGetter) {
    if (!_cached_encoder_for_Alert_status) {
        _cached_encoder_for_Alert_status = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_status(value, elGetter);
}
exports._encode_Alert_status = _encode_Alert_status;
var Alert_msgType;
(function (Alert_msgType) {
    Alert_msgType[Alert_msgType["ack"] = 0] = "ack";
    Alert_msgType[Alert_msgType["alert"] = 1] = "alert";
    Alert_msgType[Alert_msgType["cancel"] = 2] = "cancel";
    Alert_msgType[Alert_msgType["error"] = 3] = "error";
    Alert_msgType[Alert_msgType["update"] = 4] = "update";
})(Alert_msgType = exports.Alert_msgType || (exports.Alert_msgType = {}));
function _to_string_Alert_msgType(value) {
    return [
        "Ack",
        "Alert",
        "Cancel",
        "Error",
        "Update",
    ][value];
}
exports._to_string_Alert_msgType = _to_string_Alert_msgType;
function _from_string_Alert_msgType(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["ack", Alert_msgType.ack],
        ["alert", Alert_msgType.alert],
        ["cancel", Alert_msgType.cancel],
        ["error", Alert_msgType.error],
        ["update", Alert_msgType.update],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_msgType = _from_string_Alert_msgType;
exports.Alert_msgType_ack = Alert_msgType.ack;
exports.Alert_msgType_alert = Alert_msgType.alert;
exports.Alert_msgType_cancel = Alert_msgType.cancel;
exports.Alert_msgType_error = Alert_msgType.error;
exports.Alert_msgType_update = Alert_msgType.update;
let _cached_decoder_for_Alert_msgType = null;
let _cached_encoder_for_Alert_msgType = null;
function _decode_Alert_msgType(el) {
    if (!_cached_decoder_for_Alert_msgType) {
        _cached_decoder_for_Alert_msgType = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_msgType(el);
}
exports._decode_Alert_msgType = _decode_Alert_msgType;
function _encode_Alert_msgType(value, elGetter) {
    if (!_cached_encoder_for_Alert_msgType) {
        _cached_encoder_for_Alert_msgType = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_msgType(value, elGetter);
}
exports._encode_Alert_msgType = _encode_Alert_msgType;
var Alert_scope;
(function (Alert_scope) {
    Alert_scope[Alert_scope["private_"] = 0] = "private_";
    Alert_scope[Alert_scope["public_"] = 1] = "public_";
    Alert_scope[Alert_scope["restricted"] = 2] = "restricted";
})(Alert_scope = exports.Alert_scope || (exports.Alert_scope = {}));
function _to_string_Alert_scope(value) {
    return [
        "Private",
        "Public",
        "Restricted",
    ][value];
}
exports._to_string_Alert_scope = _to_string_Alert_scope;
function _from_string_Alert_scope(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["private", Alert_scope.private_],
        ["public", Alert_scope.public_],
        ["restricted", Alert_scope.restricted],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_scope = _from_string_Alert_scope;
exports.Alert_scope_private_ = Alert_scope.private_;
exports.Alert_scope_public_ = Alert_scope.public_;
exports.Alert_scope_restricted = Alert_scope.restricted;
let _cached_decoder_for_Alert_scope = null;
let _cached_encoder_for_Alert_scope = null;
function _decode_Alert_scope(el) {
    if (!_cached_decoder_for_Alert_scope) {
        _cached_decoder_for_Alert_scope = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_scope(el);
}
exports._decode_Alert_scope = _decode_Alert_scope;
function _encode_Alert_scope(value, elGetter) {
    if (!_cached_encoder_for_Alert_scope) {
        _cached_encoder_for_Alert_scope = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_scope(value, elGetter);
}
exports._encode_Alert_scope = _encode_Alert_scope;
var Alert_info_list_info_category_list_category;
(function (Alert_info_list_info_category_list_category) {
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["cBRNE"] = 0] = "cBRNE";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["env"] = 1] = "env";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["fire"] = 2] = "fire";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["geo"] = 3] = "geo";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["health"] = 4] = "health";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["infra"] = 5] = "infra";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["met"] = 6] = "met";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["other"] = 7] = "other";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["rescue"] = 8] = "rescue";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["safety"] = 9] = "safety";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["security"] = 10] = "security";
    Alert_info_list_info_category_list_category[Alert_info_list_info_category_list_category["transport"] = 11] = "transport";
})(Alert_info_list_info_category_list_category = exports.Alert_info_list_info_category_list_category || (exports.Alert_info_list_info_category_list_category = {}));
function _to_string_Alert_info_list_info_category_list_category(value) {
    return [
        "CBRNE",
        "Env",
        "Fire",
        "Geo",
        "Health",
        "Infra",
        "Met",
        "Other",
        "Rescue",
        "Safety",
        "Security",
        "Transport",
    ][value];
}
exports._to_string_Alert_info_list_info_category_list_category = _to_string_Alert_info_list_info_category_list_category;
function _from_string_Alert_info_list_info_category_list_category(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["cbrne", Alert_info_list_info_category_list_category.cBRNE],
        ["env", Alert_info_list_info_category_list_category.env],
        ["fire", Alert_info_list_info_category_list_category.fire],
        ["geo", Alert_info_list_info_category_list_category.geo],
        ["health", Alert_info_list_info_category_list_category.health],
        ["infra", Alert_info_list_info_category_list_category.infra],
        ["met", Alert_info_list_info_category_list_category.met],
        ["other", Alert_info_list_info_category_list_category.other],
        ["rescue", Alert_info_list_info_category_list_category.rescue],
        ["safety", Alert_info_list_info_category_list_category.safety],
        ["security", Alert_info_list_info_category_list_category.security],
        ["transport", Alert_info_list_info_category_list_category.transport],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_info_list_info_category_list_category = _from_string_Alert_info_list_info_category_list_category;
exports.Alert_info_list_info_category_list_category_cBRNE = Alert_info_list_info_category_list_category.cBRNE;
exports.Alert_info_list_info_category_list_category_env = Alert_info_list_info_category_list_category.env;
exports.Alert_info_list_info_category_list_category_fire = Alert_info_list_info_category_list_category.fire;
exports.Alert_info_list_info_category_list_category_geo = Alert_info_list_info_category_list_category.geo;
exports.Alert_info_list_info_category_list_category_health = Alert_info_list_info_category_list_category.health;
exports.Alert_info_list_info_category_list_category_infra = Alert_info_list_info_category_list_category.infra;
exports.Alert_info_list_info_category_list_category_met = Alert_info_list_info_category_list_category.met;
exports.Alert_info_list_info_category_list_category_other = Alert_info_list_info_category_list_category.other;
exports.Alert_info_list_info_category_list_category_rescue = Alert_info_list_info_category_list_category.rescue;
exports.Alert_info_list_info_category_list_category_safety = Alert_info_list_info_category_list_category.safety;
exports.Alert_info_list_info_category_list_category_security = Alert_info_list_info_category_list_category.security;
exports.Alert_info_list_info_category_list_category_transport = Alert_info_list_info_category_list_category.transport;
let _cached_decoder_for_Alert_info_list_info_category_list_category = null;
let _cached_encoder_for_Alert_info_list_info_category_list_category = null;
function _decode_Alert_info_list_info_category_list_category(el) {
    if (!_cached_decoder_for_Alert_info_list_info_category_list_category) {
        _cached_decoder_for_Alert_info_list_info_category_list_category =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_category_list_category(el);
}
exports._decode_Alert_info_list_info_category_list_category = _decode_Alert_info_list_info_category_list_category;
function _encode_Alert_info_list_info_category_list_category(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_category_list_category) {
        _cached_encoder_for_Alert_info_list_info_category_list_category =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_category_list_category(value, elGetter);
}
exports._encode_Alert_info_list_info_category_list_category = _encode_Alert_info_list_info_category_list_category;
var Alert_info_list_info_responseType_list_responseType;
(function (Alert_info_list_info_responseType_list_responseType) {
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["allClear"] = 0] = "allClear";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["assess"] = 1] = "assess";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["avoid"] = 2] = "avoid";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["evacuate"] = 3] = "evacuate";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["execute"] = 4] = "execute";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["monitor"] = 5] = "monitor";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["none"] = 6] = "none";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["prepare"] = 7] = "prepare";
    Alert_info_list_info_responseType_list_responseType[Alert_info_list_info_responseType_list_responseType["shelter"] = 8] = "shelter";
})(Alert_info_list_info_responseType_list_responseType = exports.Alert_info_list_info_responseType_list_responseType || (exports.Alert_info_list_info_responseType_list_responseType = {}));
function _to_string_Alert_info_list_info_responseType_list_responseType(value) {
    return [
        "AllClear",
        "Assess",
        "Avoid",
        "Evacuate",
        "Execute",
        "Monitor",
        "None",
        "Prepare",
        "Shelter",
    ][value];
}
exports._to_string_Alert_info_list_info_responseType_list_responseType = _to_string_Alert_info_list_info_responseType_list_responseType;
function _from_string_Alert_info_list_info_responseType_list_responseType(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["allclear", Alert_info_list_info_responseType_list_responseType.allClear],
        ["assess", Alert_info_list_info_responseType_list_responseType.assess],
        ["avoid", Alert_info_list_info_responseType_list_responseType.avoid],
        ["evacuate", Alert_info_list_info_responseType_list_responseType.evacuate],
        ["execute", Alert_info_list_info_responseType_list_responseType.execute],
        ["monitor", Alert_info_list_info_responseType_list_responseType.monitor],
        ["none", Alert_info_list_info_responseType_list_responseType.none],
        ["prepare", Alert_info_list_info_responseType_list_responseType.prepare],
        ["shelter", Alert_info_list_info_responseType_list_responseType.shelter],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_info_list_info_responseType_list_responseType = _from_string_Alert_info_list_info_responseType_list_responseType;
exports.Alert_info_list_info_responseType_list_responseType_allClear = Alert_info_list_info_responseType_list_responseType.allClear;
exports.Alert_info_list_info_responseType_list_responseType_assess = Alert_info_list_info_responseType_list_responseType.assess;
exports.Alert_info_list_info_responseType_list_responseType_avoid = Alert_info_list_info_responseType_list_responseType.avoid;
exports.Alert_info_list_info_responseType_list_responseType_evacuate = Alert_info_list_info_responseType_list_responseType.evacuate;
exports.Alert_info_list_info_responseType_list_responseType_execute = Alert_info_list_info_responseType_list_responseType.execute;
exports.Alert_info_list_info_responseType_list_responseType_monitor = Alert_info_list_info_responseType_list_responseType.monitor;
exports.Alert_info_list_info_responseType_list_responseType_none = Alert_info_list_info_responseType_list_responseType.none;
exports.Alert_info_list_info_responseType_list_responseType_prepare = Alert_info_list_info_responseType_list_responseType.prepare;
exports.Alert_info_list_info_responseType_list_responseType_shelter = Alert_info_list_info_responseType_list_responseType.shelter;
let _cached_decoder_for_Alert_info_list_info_responseType_list_responseType = null;
let _cached_encoder_for_Alert_info_list_info_responseType_list_responseType = null;
function _decode_Alert_info_list_info_responseType_list_responseType(el) {
    if (!_cached_decoder_for_Alert_info_list_info_responseType_list_responseType) {
        _cached_decoder_for_Alert_info_list_info_responseType_list_responseType =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_responseType_list_responseType(el);
}
exports._decode_Alert_info_list_info_responseType_list_responseType = _decode_Alert_info_list_info_responseType_list_responseType;
function _encode_Alert_info_list_info_responseType_list_responseType(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_responseType_list_responseType) {
        _cached_encoder_for_Alert_info_list_info_responseType_list_responseType =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_responseType_list_responseType(value, elGetter);
}
exports._encode_Alert_info_list_info_responseType_list_responseType = _encode_Alert_info_list_info_responseType_list_responseType;
var Alert_info_list_info_urgency;
(function (Alert_info_list_info_urgency) {
    Alert_info_list_info_urgency[Alert_info_list_info_urgency["expected"] = 0] = "expected";
    Alert_info_list_info_urgency[Alert_info_list_info_urgency["future"] = 1] = "future";
    Alert_info_list_info_urgency[Alert_info_list_info_urgency["immediate"] = 2] = "immediate";
    Alert_info_list_info_urgency[Alert_info_list_info_urgency["past"] = 3] = "past";
    Alert_info_list_info_urgency[Alert_info_list_info_urgency["unknown"] = 4] = "unknown";
})(Alert_info_list_info_urgency = exports.Alert_info_list_info_urgency || (exports.Alert_info_list_info_urgency = {}));
function _to_string_Alert_info_list_info_urgency(value) {
    return [
        "Expected",
        "Future",
        "Immediate",
        "Past",
        "Unknown",
    ][value];
}
exports._to_string_Alert_info_list_info_urgency = _to_string_Alert_info_list_info_urgency;
function _from_string_Alert_info_list_info_urgency(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["expected", Alert_info_list_info_urgency.expected],
        ["future", Alert_info_list_info_urgency.future],
        ["immediate", Alert_info_list_info_urgency.immediate],
        ["past", Alert_info_list_info_urgency.past],
        ["unknown", Alert_info_list_info_urgency.unknown],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_info_list_info_urgency = _from_string_Alert_info_list_info_urgency;
exports.Alert_info_list_info_urgency_expected = Alert_info_list_info_urgency.expected;
exports.Alert_info_list_info_urgency_future = Alert_info_list_info_urgency.future;
exports.Alert_info_list_info_urgency_immediate = Alert_info_list_info_urgency.immediate;
exports.Alert_info_list_info_urgency_past = Alert_info_list_info_urgency.past;
exports.Alert_info_list_info_urgency_unknown = Alert_info_list_info_urgency.unknown;
let _cached_decoder_for_Alert_info_list_info_urgency = null;
let _cached_encoder_for_Alert_info_list_info_urgency = null;
function _decode_Alert_info_list_info_urgency(el) {
    if (!_cached_decoder_for_Alert_info_list_info_urgency) {
        _cached_decoder_for_Alert_info_list_info_urgency =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_urgency(el);
}
exports._decode_Alert_info_list_info_urgency = _decode_Alert_info_list_info_urgency;
function _encode_Alert_info_list_info_urgency(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_urgency) {
        _cached_encoder_for_Alert_info_list_info_urgency =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_urgency(value, elGetter);
}
exports._encode_Alert_info_list_info_urgency = _encode_Alert_info_list_info_urgency;
var Alert_info_list_info_severity;
(function (Alert_info_list_info_severity) {
    Alert_info_list_info_severity[Alert_info_list_info_severity["extreme"] = 0] = "extreme";
    Alert_info_list_info_severity[Alert_info_list_info_severity["minor"] = 1] = "minor";
    Alert_info_list_info_severity[Alert_info_list_info_severity["moderate"] = 2] = "moderate";
    Alert_info_list_info_severity[Alert_info_list_info_severity["severe"] = 3] = "severe";
    Alert_info_list_info_severity[Alert_info_list_info_severity["unknown"] = 4] = "unknown";
})(Alert_info_list_info_severity = exports.Alert_info_list_info_severity || (exports.Alert_info_list_info_severity = {}));
function _to_string_Alert_info_list_info_severity(value) {
    return [
        "Extreme",
        "Minor",
        "Moderate",
        "Severe",
        "Unknown",
    ][value];
}
exports._to_string_Alert_info_list_info_severity = _to_string_Alert_info_list_info_severity;
function _from_string_Alert_info_list_info_severity(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["extreme", Alert_info_list_info_severity.extreme],
        ["minor", Alert_info_list_info_severity.minor],
        ["moderate", Alert_info_list_info_severity.moderate],
        ["severe", Alert_info_list_info_severity.severe],
        ["unknown", Alert_info_list_info_severity.unknown],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_info_list_info_severity = _from_string_Alert_info_list_info_severity;
exports.Alert_info_list_info_severity_extreme = Alert_info_list_info_severity.extreme;
exports.Alert_info_list_info_severity_minor = Alert_info_list_info_severity.minor;
exports.Alert_info_list_info_severity_moderate = Alert_info_list_info_severity.moderate;
exports.Alert_info_list_info_severity_severe = Alert_info_list_info_severity.severe;
exports.Alert_info_list_info_severity_unknown = Alert_info_list_info_severity.unknown;
let _cached_decoder_for_Alert_info_list_info_severity = null;
let _cached_encoder_for_Alert_info_list_info_severity = null;
function _decode_Alert_info_list_info_severity(el) {
    if (!_cached_decoder_for_Alert_info_list_info_severity) {
        _cached_decoder_for_Alert_info_list_info_severity =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_severity(el);
}
exports._decode_Alert_info_list_info_severity = _decode_Alert_info_list_info_severity;
function _encode_Alert_info_list_info_severity(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_severity) {
        _cached_encoder_for_Alert_info_list_info_severity =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_severity(value, elGetter);
}
exports._encode_Alert_info_list_info_severity = _encode_Alert_info_list_info_severity;
var Alert_info_list_info_certainty;
(function (Alert_info_list_info_certainty) {
    Alert_info_list_info_certainty[Alert_info_list_info_certainty["likely"] = 0] = "likely";
    Alert_info_list_info_certainty[Alert_info_list_info_certainty["observed"] = 1] = "observed";
    Alert_info_list_info_certainty[Alert_info_list_info_certainty["possible"] = 2] = "possible";
    Alert_info_list_info_certainty[Alert_info_list_info_certainty["unknown"] = 3] = "unknown";
    Alert_info_list_info_certainty[Alert_info_list_info_certainty["unlikely"] = 4] = "unlikely";
})(Alert_info_list_info_certainty = exports.Alert_info_list_info_certainty || (exports.Alert_info_list_info_certainty = {}));
function _to_string_Alert_info_list_info_certainty(value) {
    return [
        "Likely",
        "Observed",
        "Possible",
        "Unknown",
        "Unlikely",
    ][value];
}
exports._to_string_Alert_info_list_info_certainty = _to_string_Alert_info_list_info_certainty;
function _from_string_Alert_info_list_info_certainty(str) {
    if (!str)
        return undefined;
    return (new Map([
        ["likely", Alert_info_list_info_certainty.likely],
        ["very likely", Alert_info_list_info_certainty.likely],
        ["observed", Alert_info_list_info_certainty.observed],
        ["possible", Alert_info_list_info_certainty.possible],
        ["unknown", Alert_info_list_info_certainty.unknown],
        ["unlikely", Alert_info_list_info_certainty.unlikely],
    ])).get(str.toLowerCase());
}
exports._from_string_Alert_info_list_info_certainty = _from_string_Alert_info_list_info_certainty;
exports.Alert_info_list_info_certainty_likely = Alert_info_list_info_certainty.likely;
exports.Alert_info_list_info_certainty_observed = Alert_info_list_info_certainty.observed;
exports.Alert_info_list_info_certainty_possible = Alert_info_list_info_certainty.possible;
exports.Alert_info_list_info_certainty_unknown = Alert_info_list_info_certainty.unknown;
exports.Alert_info_list_info_certainty_unlikely = Alert_info_list_info_certainty.unlikely;
let _cached_decoder_for_Alert_info_list_info_certainty = null;
let _cached_encoder_for_Alert_info_list_info_certainty = null;
function _decode_Alert_info_list_info_certainty(el) {
    if (!_cached_decoder_for_Alert_info_list_info_certainty) {
        _cached_decoder_for_Alert_info_list_info_certainty =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Alert_info_list_info_certainty(el);
}
exports._decode_Alert_info_list_info_certainty = _decode_Alert_info_list_info_certainty;
function _encode_Alert_info_list_info_certainty(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_certainty) {
        _cached_encoder_for_Alert_info_list_info_certainty =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Alert_info_list_info_certainty(value, elGetter);
}
exports._encode_Alert_info_list_info_certainty = _encode_Alert_info_list_info_certainty;
let _cached_decoder_for_ValueName = null;
let _cached_encoder_for_ValueName = null;
function _decode_ValueName(el) {
    if (!_cached_decoder_for_ValueName) {
        _cached_decoder_for_ValueName = XSD._decode_String;
    }
    return _cached_decoder_for_ValueName(el);
}
exports._decode_ValueName = _decode_ValueName;
function _encode_ValueName(value, elGetter) {
    if (!_cached_encoder_for_ValueName) {
        _cached_encoder_for_ValueName = XSD._encode_String;
    }
    return _cached_encoder_for_ValueName(value, elGetter);
}
exports._encode_ValueName = _encode_ValueName;
let _cached_decoder_for_Value = null;
let _cached_encoder_for_Value = null;
function _decode_Value(el) {
    if (!_cached_decoder_for_Value) {
        _cached_decoder_for_Value = XSD._decode_String;
    }
    return _cached_decoder_for_Value(el);
}
exports._decode_Value = _decode_Value;
function _encode_Value(value, elGetter) {
    if (!_cached_encoder_for_Value) {
        _cached_encoder_for_Value = XSD._encode_String;
    }
    return _cached_encoder_for_Value(value, elGetter);
}
exports._encode_Value = _encode_Value;
class Alert_info_list_info_eventCode_list_eventCode {
    constructor(valueName, value) {
        this.valueName = valueName;
        this.value = value;
    }
}
exports.Alert_info_list_info_eventCode_list_eventCode = Alert_info_list_info_eventCode_list_eventCode;
exports._root_component_type_list_1_spec_for_Alert_info_list_info_eventCode_list_eventCode = [
    new __utils.ComponentSpec("valueName", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info_eventCode_list_eventCode = [];
exports._extension_additions_list_spec_for_Alert_info_list_info_eventCode_list_eventCode = [];
let _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode = null;
let _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode = null;
function _decode_Alert_info_list_info_eventCode_list_eventCode(el) {
    if (!_cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode) {
        _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode = function (el) {
            const sequence = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError("Alert-info-list-info-eventCode-list-eventCode contained only " +
                    sequence.length.toString() +
                    " elements.");
            }
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName;
            let value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            return new Alert_info_list_info_eventCode_list_eventCode(valueName, value);
        };
    }
    return _cached_decoder_for_Alert_info_list_info_eventCode_list_eventCode(el);
}
exports._decode_Alert_info_list_info_eventCode_list_eventCode = _decode_Alert_info_list_info_eventCode_list_eventCode;
function _encode_Alert_info_list_info_eventCode_list_eventCode(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode) {
        _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                _encode_ValueName(value.valueName, __utils.BER),
                _encode_Value(value.value, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info_eventCode_list_eventCode(value, elGetter);
}
exports._encode_Alert_info_list_info_eventCode_list_eventCode = _encode_Alert_info_list_info_eventCode_list_eventCode;
class Alert_info_list_info_parameter_list_parameter {
    constructor(valueName, value) {
        this.valueName = valueName;
        this.value = value;
    }
}
exports.Alert_info_list_info_parameter_list_parameter = Alert_info_list_info_parameter_list_parameter;
exports._root_component_type_list_1_spec_for_Alert_info_list_info_parameter_list_parameter = [
    new __utils.ComponentSpec("valueName", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info_parameter_list_parameter = [];
exports._extension_additions_list_spec_for_Alert_info_list_info_parameter_list_parameter = [];
let _cached_decoder_for_Alert_info_list_info_parameter_list_parameter = null;
let _cached_encoder_for_Alert_info_list_info_parameter_list_parameter = null;
function _decode_Alert_info_list_info_parameter_list_parameter(el) {
    if (!_cached_decoder_for_Alert_info_list_info_parameter_list_parameter) {
        _cached_decoder_for_Alert_info_list_info_parameter_list_parameter = function (el) {
            const sequence = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError("Alert-info-list-info-parameter-list-parameter contained only " +
                    sequence.length.toString() +
                    " elements.");
            }
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName;
            let value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            return new Alert_info_list_info_parameter_list_parameter(valueName, value);
        };
    }
    return _cached_decoder_for_Alert_info_list_info_parameter_list_parameter(el);
}
exports._decode_Alert_info_list_info_parameter_list_parameter = _decode_Alert_info_list_info_parameter_list_parameter;
function _encode_Alert_info_list_info_parameter_list_parameter(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_parameter_list_parameter) {
        _cached_encoder_for_Alert_info_list_info_parameter_list_parameter = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                _encode_ValueName(value.valueName, __utils.BER),
                _encode_Value(value.value, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info_parameter_list_parameter(value, elGetter);
}
exports._encode_Alert_info_list_info_parameter_list_parameter = _encode_Alert_info_list_info_parameter_list_parameter;
class Alert_info_list_info_resource_list_resource {
    constructor(resourceDesc, mimeType, size, uri, derefUri, digest) {
        this.resourceDesc = resourceDesc;
        this.mimeType = mimeType;
        this.size = size;
        this.uri = uri;
        this.derefUri = derefUri;
        this.digest = digest;
    }
}
exports.Alert_info_list_info_resource_list_resource = Alert_info_list_info_resource_list_resource;
exports._root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource = [
    new __utils.ComponentSpec("resourceDesc", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("mimeType", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("size", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("uri", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("derefUri", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("digest", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource = [];
exports._extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource = [];
let _cached_decoder_for_Alert_info_list_info_resource_list_resource = null;
let _cached_encoder_for_Alert_info_list_info_resource_list_resource = null;
function _decode_Alert_info_list_info_resource_list_resource(el) {
    if (!_cached_decoder_for_Alert_info_list_info_resource_list_resource) {
        _cached_decoder_for_Alert_info_list_info_resource_list_resource = function (el) {
            let resourceDesc;
            let mimeType;
            let size;
            let uri;
            let derefUri;
            let digest;
            const callbacks = {
                resourceDesc: (_el) => {
                    resourceDesc = XSD._decode_String(_el);
                },
                mimeType: (_el) => {
                    mimeType = XSD._decode_String(_el);
                },
                size: (_el) => {
                    size = __utils._decodeInteger(_el);
                },
                uri: (_el) => {
                    uri = XSD._decode_AnyURI(_el);
                },
                derefUri: (_el) => {
                    derefUri = XSD._decode_String(_el);
                },
                digest: (_el) => {
                    digest = XSD._decode_String(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_Alert_info_list_info_resource_list_resource, exports._extension_additions_list_spec_for_Alert_info_list_info_resource_list_resource, exports._root_component_type_list_2_spec_for_Alert_info_list_info_resource_list_resource, undefined);
            return new Alert_info_list_info_resource_list_resource(resourceDesc, mimeType, size, uri, derefUri, digest);
        };
    }
    return _cached_decoder_for_Alert_info_list_info_resource_list_resource(el);
}
exports._decode_Alert_info_list_info_resource_list_resource = _decode_Alert_info_list_info_resource_list_resource;
function _encode_Alert_info_list_info_resource_list_resource(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_resource_list_resource) {
        _cached_encoder_for_Alert_info_list_info_resource_list_resource = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                XSD._encode_String(value.resourceDesc, __utils.BER),
                XSD._encode_String(value.mimeType, __utils.BER),
                value.size === undefined
                    ? undefined
                    : __utils._encodeInteger(value.size, __utils.BER),
                value.uri === undefined
                    ? undefined
                    : XSD._encode_AnyURI(value.uri, __utils.BER),
                value.derefUri === undefined
                    ? undefined
                    : XSD._encode_String(value.derefUri, __utils.BER),
                value.digest === undefined
                    ? undefined
                    : XSD._encode_String(value.digest, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info_resource_list_resource(value, elGetter);
}
exports._encode_Alert_info_list_info_resource_list_resource = _encode_Alert_info_list_info_resource_list_resource;
class Alert_info_list_info_area_list_area_geocode_list_geocode {
    constructor(valueName, value) {
        this.valueName = valueName;
        this.value = value;
    }
}
exports.Alert_info_list_info_area_list_area_geocode_list_geocode = Alert_info_list_info_area_list_area_geocode_list_geocode;
exports._root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = [
    new __utils.ComponentSpec("valueName", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = [];
exports._extension_additions_list_spec_for_Alert_info_list_info_area_list_area_geocode_list_geocode = [];
let _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = null;
let _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = null;
function _decode_Alert_info_list_info_area_list_area_geocode_list_geocode(el) {
    if (!_cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode) {
        _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = function (el) {
            const sequence = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError("Alert-info-list-info-area-list-area-geocode-list-geocode contained only " +
                    sequence.length.toString() +
                    " elements.");
            }
            sequence[0].name = "valueName";
            sequence[1].name = "value";
            let valueName;
            let value;
            valueName = _decode_ValueName(sequence[0]);
            value = _decode_Value(sequence[1]);
            return new Alert_info_list_info_area_list_area_geocode_list_geocode(valueName, value);
        };
    }
    return _cached_decoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode(el);
}
exports._decode_Alert_info_list_info_area_list_area_geocode_list_geocode = _decode_Alert_info_list_info_area_list_area_geocode_list_geocode;
function _encode_Alert_info_list_info_area_list_area_geocode_list_geocode(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode) {
        _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                _encode_ValueName(value.valueName, __utils.BER),
                _encode_Value(value.value, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info_area_list_area_geocode_list_geocode(value, elGetter);
}
exports._encode_Alert_info_list_info_area_list_area_geocode_list_geocode = _encode_Alert_info_list_info_area_list_area_geocode_list_geocode;
class Alert_info_list_info_area_list_area {
    constructor(areaDesc, polygon_list, circle_list, geocode_list, altitude, ceiling) {
        this.areaDesc = areaDesc;
        this.polygon_list = polygon_list;
        this.circle_list = circle_list;
        this.geocode_list = geocode_list;
        this.altitude = altitude;
        this.ceiling = ceiling;
    }
}
exports.Alert_info_list_info_area_list_area = Alert_info_list_info_area_list_area;
exports._root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area = [
    new __utils.ComponentSpec("areaDesc", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("polygon-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("circle-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("geocode-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("altitude", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("ceiling", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area = [];
exports._extension_additions_list_spec_for_Alert_info_list_info_area_list_area = [];
let _cached_decoder_for_Alert_info_list_info_area_list_area = null;
let _cached_encoder_for_Alert_info_list_info_area_list_area = null;
function _decode_Alert_info_list_info_area_list_area(el) {
    if (!_cached_decoder_for_Alert_info_list_info_area_list_area) {
        _cached_decoder_for_Alert_info_list_info_area_list_area = function (el) {
            let areaDesc;
            let polygon_list;
            let circle_list;
            let geocode_list;
            let altitude;
            let ceiling;
            const callbacks = {
                areaDesc: (_el) => {
                    areaDesc = XSD._decode_String(_el);
                },
                "polygon-list": (_el) => {
                    polygon_list = __utils._decodeSequenceOf(() => XSD._decode_String)(_el);
                },
                "circle-list": (_el) => {
                    circle_list = __utils._decodeSequenceOf(() => XSD._decode_String)(_el);
                },
                "geocode-list": (_el) => {
                    geocode_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_area_list_area_geocode_list_geocode)(_el);
                },
                altitude: (_el) => {
                    altitude = XSD._decode_Decimal(_el);
                },
                ceiling: (_el) => {
                    ceiling = XSD._decode_Decimal(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_Alert_info_list_info_area_list_area, exports._extension_additions_list_spec_for_Alert_info_list_info_area_list_area, exports._root_component_type_list_2_spec_for_Alert_info_list_info_area_list_area, undefined);
            return new Alert_info_list_info_area_list_area(areaDesc, polygon_list, circle_list, geocode_list, altitude, ceiling);
        };
    }
    return _cached_decoder_for_Alert_info_list_info_area_list_area(el);
}
exports._decode_Alert_info_list_info_area_list_area = _decode_Alert_info_list_info_area_list_area;
function _encode_Alert_info_list_info_area_list_area(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info_area_list_area) {
        _cached_encoder_for_Alert_info_list_info_area_list_area = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                XSD._encode_String(value.areaDesc, __utils.BER),
                __utils._encodeSequenceOf(() => XSD._encode_String, __utils.BER)(value.polygon_list, __utils.BER),
                __utils._encodeSequenceOf(() => XSD._encode_String, __utils.BER)(value.circle_list, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_area_list_area_geocode_list_geocode, __utils.BER)(value.geocode_list, __utils.BER),
                value.altitude === undefined
                    ? undefined
                    : XSD._encode_Decimal(value.altitude, __utils.BER),
                value.ceiling === undefined
                    ? undefined
                    : XSD._encode_Decimal(value.ceiling, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info_area_list_area(value, elGetter);
}
exports._encode_Alert_info_list_info_area_list_area = _encode_Alert_info_list_info_area_list_area;
class Alert_info_list_info {
    constructor(language, category_list, event, responseType_list, urgency, severity, certainty, audience, eventCode_list, effective, onset, expires, senderName, headline, description, instruction, web, contact, parameter_list, resource_list, area_list) {
        this.language = language;
        this.category_list = category_list;
        this.event = event;
        this.responseType_list = responseType_list;
        this.urgency = urgency;
        this.severity = severity;
        this.certainty = certainty;
        this.audience = audience;
        this.eventCode_list = eventCode_list;
        this.effective = effective;
        this.onset = onset;
        this.expires = expires;
        this.senderName = senderName;
        this.headline = headline;
        this.description = description;
        this.instruction = instruction;
        this.web = web;
        this.contact = contact;
        this.parameter_list = parameter_list;
        this.resource_list = resource_list;
        this.area_list = area_list;
    }
}
exports.Alert_info_list_info = Alert_info_list_info;
exports._root_component_type_list_1_spec_for_Alert_info_list_info = [
    new __utils.ComponentSpec("language", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("category-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("event", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("responseType-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("urgency", false, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("severity", false, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("certainty", false, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("audience", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("eventCode-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("effective", true, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined),
    new __utils.ComponentSpec("onset", true, __utils.hasTag(asn1.ASN1TagClass.context, 10), undefined, undefined),
    new __utils.ComponentSpec("expires", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined),
    new __utils.ComponentSpec("senderName", true, __utils.hasTag(asn1.ASN1TagClass.context, 12), undefined, undefined),
    new __utils.ComponentSpec("headline", true, __utils.hasTag(asn1.ASN1TagClass.context, 13), undefined, undefined),
    new __utils.ComponentSpec("description", true, __utils.hasTag(asn1.ASN1TagClass.context, 14), undefined, undefined),
    new __utils.ComponentSpec("instruction", true, __utils.hasTag(asn1.ASN1TagClass.context, 15), undefined, undefined),
    new __utils.ComponentSpec("web", true, __utils.hasTag(asn1.ASN1TagClass.context, 16), undefined, undefined),
    new __utils.ComponentSpec("contact", true, __utils.hasTag(asn1.ASN1TagClass.context, 17), undefined, undefined),
    new __utils.ComponentSpec("parameter-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 18), undefined, undefined),
    new __utils.ComponentSpec("resource-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 19), undefined, undefined),
    new __utils.ComponentSpec("area-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 20), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert_info_list_info = [];
exports._extension_additions_list_spec_for_Alert_info_list_info = [];
let _cached_decoder_for_Alert_info_list_info = null;
let _cached_encoder_for_Alert_info_list_info = null;
function _decode_Alert_info_list_info(el) {
    if (!_cached_decoder_for_Alert_info_list_info) {
        _cached_decoder_for_Alert_info_list_info = function (el) {
            let language;
            let category_list;
            let event;
            let responseType_list;
            let urgency;
            let severity;
            let certainty;
            let audience;
            let eventCode_list;
            let effective;
            let onset;
            let expires;
            let senderName;
            let headline;
            let description;
            let instruction;
            let web;
            let contact;
            let parameter_list;
            let resource_list;
            let area_list;
            const callbacks = {
                language: (_el) => {
                    language = XSD._decode_Language(_el);
                },
                "category-list": (_el) => {
                    category_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_category_list_category)(_el);
                },
                event: (_el) => {
                    event = XSD._decode_String(_el);
                },
                "responseType-list": (_el) => {
                    responseType_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_responseType_list_responseType)(_el);
                },
                urgency: (_el) => {
                    urgency = _decode_Alert_info_list_info_urgency(_el);
                },
                severity: (_el) => {
                    severity = _decode_Alert_info_list_info_severity(_el);
                },
                certainty: (_el) => {
                    certainty = _decode_Alert_info_list_info_certainty(_el);
                },
                audience: (_el) => {
                    audience = XSD._decode_String(_el);
                },
                "eventCode-list": (_el) => {
                    eventCode_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_eventCode_list_eventCode)(_el);
                },
                effective: (_el) => {
                    effective = XSD._decode_DateTime(_el);
                },
                onset: (_el) => {
                    onset = XSD._decode_DateTime(_el);
                },
                expires: (_el) => {
                    expires = XSD._decode_DateTime(_el);
                },
                senderName: (_el) => {
                    senderName = XSD._decode_String(_el);
                },
                headline: (_el) => {
                    headline = XSD._decode_String(_el);
                },
                description: (_el) => {
                    description = XSD._decode_String(_el);
                },
                instruction: (_el) => {
                    instruction = XSD._decode_String(_el);
                },
                web: (_el) => {
                    web = XSD._decode_AnyURI(_el);
                },
                contact: (_el) => {
                    contact = XSD._decode_String(_el);
                },
                "parameter-list": (_el) => {
                    parameter_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_parameter_list_parameter)(_el);
                },
                "resource-list": (_el) => {
                    resource_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_resource_list_resource)(_el);
                },
                "area-list": (_el) => {
                    area_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info_area_list_area)(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_Alert_info_list_info, exports._extension_additions_list_spec_for_Alert_info_list_info, exports._root_component_type_list_2_spec_for_Alert_info_list_info, undefined);
            return new Alert_info_list_info(language, category_list, event, responseType_list, urgency, severity, certainty, audience, eventCode_list, effective, onset, expires, senderName, headline, description, instruction, web, contact, parameter_list, resource_list, area_list);
        };
    }
    return _cached_decoder_for_Alert_info_list_info(el);
}
exports._decode_Alert_info_list_info = _decode_Alert_info_list_info;
function _encode_Alert_info_list_info(value, elGetter) {
    if (!_cached_encoder_for_Alert_info_list_info) {
        _cached_encoder_for_Alert_info_list_info = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                value.language === undefined
                    ? undefined
                    : XSD._encode_Language(value.language, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_category_list_category, __utils.BER)(value.category_list, __utils.BER),
                XSD._encode_String(value.event, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_responseType_list_responseType, __utils.BER)(value.responseType_list, __utils.BER),
                _encode_Alert_info_list_info_urgency(value.urgency, __utils.BER),
                _encode_Alert_info_list_info_severity(value.severity, __utils.BER),
                _encode_Alert_info_list_info_certainty(value.certainty, __utils.BER),
                value.audience === undefined
                    ? undefined
                    : XSD._encode_String(value.audience, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_eventCode_list_eventCode, __utils.BER)(value.eventCode_list, __utils.BER),
                value.effective === undefined
                    ? undefined
                    : XSD._encode_DateTime(value.effective, __utils.BER),
                value.onset === undefined
                    ? undefined
                    : XSD._encode_DateTime(value.onset, __utils.BER),
                value.expires === undefined
                    ? undefined
                    : XSD._encode_DateTime(value.expires, __utils.BER),
                value.senderName === undefined
                    ? undefined
                    : XSD._encode_String(value.senderName, __utils.BER),
                value.headline === undefined
                    ? undefined
                    : XSD._encode_String(value.headline, __utils.BER),
                value.description === undefined
                    ? undefined
                    : XSD._encode_String(value.description, __utils.BER),
                value.instruction === undefined
                    ? undefined
                    : XSD._encode_String(value.instruction, __utils.BER),
                value.web === undefined
                    ? undefined
                    : XSD._encode_AnyURI(value.web, __utils.BER),
                value.contact === undefined
                    ? undefined
                    : XSD._encode_String(value.contact, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_parameter_list_parameter, __utils.BER)(value.parameter_list, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_resource_list_resource, __utils.BER)(value.resource_list, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info_area_list_area, __utils.BER)(value.area_list, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert_info_list_info(value, elGetter);
}
exports._encode_Alert_info_list_info = _encode_Alert_info_list_info;
class Alert {
    constructor(identifier, sender, sent, status, msgType, source, scope, restriction, addresses, code_list, note, references, incidents, info_list, elem_list) {
        this.identifier = identifier;
        this.sender = sender;
        this.sent = sent;
        this.status = status;
        this.msgType = msgType;
        this.source = source;
        this.scope = scope;
        this.restriction = restriction;
        this.addresses = addresses;
        this.code_list = code_list;
        this.note = note;
        this.references = references;
        this.incidents = incidents;
        this.info_list = info_list;
        this.elem_list = elem_list;
    }
    toXML() {
        return (0, toXML_1.default)(this);
    }
    static fromXML(str) {
        return (0, fromXML_1.default)(str);
    }
}
exports.Alert = Alert;
exports._root_component_type_list_1_spec_for_Alert = [
    new __utils.ComponentSpec("identifier", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("sender", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("sent", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("status", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("msgType", false, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("source", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("scope", false, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("restriction", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("addresses", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("code-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined),
    new __utils.ComponentSpec("note", true, __utils.hasTag(asn1.ASN1TagClass.context, 10), undefined, undefined),
    new __utils.ComponentSpec("references", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined),
    new __utils.ComponentSpec("incidents", true, __utils.hasTag(asn1.ASN1TagClass.context, 12), undefined, undefined),
    new __utils.ComponentSpec("info-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 13), undefined, undefined),
    new __utils.ComponentSpec("elem-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 14), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_Alert = [];
exports._extension_additions_list_spec_for_Alert = [];
let _cached_decoder_for_Alert = null;
let _cached_encoder_for_Alert = null;
function _decode_Alert(el) {
    if (!_cached_decoder_for_Alert) {
        _cached_decoder_for_Alert = function (el) {
            let identifier;
            let sender;
            let sent;
            let status;
            let msgType;
            let source;
            let scope;
            let restriction;
            let addresses;
            let code_list;
            let note;
            let references;
            let incidents;
            let info_list;
            let elem_list;
            const callbacks = {
                identifier: (_el) => {
                    identifier = XSD._decode_String(_el);
                },
                sender: (_el) => {
                    sender = XSD._decode_String(_el);
                },
                sent: (_el) => {
                    sent = XSD._decode_DateTime(_el);
                },
                status: (_el) => {
                    status = _decode_Alert_status(_el);
                },
                msgType: (_el) => {
                    msgType = _decode_Alert_msgType(_el);
                },
                source: (_el) => {
                    source = XSD._decode_String(_el);
                },
                scope: (_el) => {
                    scope = _decode_Alert_scope(_el);
                },
                restriction: (_el) => {
                    restriction = XSD._decode_String(_el);
                },
                addresses: (_el) => {
                    addresses = XSD._decode_String(_el);
                },
                "code-list": (_el) => {
                    code_list = __utils._decodeSequenceOf(() => XSD._decode_String)(_el);
                },
                note: (_el) => {
                    note = XSD._decode_String(_el);
                },
                references: (_el) => {
                    references = XSD._decode_String(_el);
                },
                incidents: (_el) => {
                    incidents = XSD._decode_String(_el);
                },
                "info-list": (_el) => {
                    info_list = __utils._decodeSequenceOf(() => _decode_Alert_info_list_info)(_el);
                },
                "elem-list": (_el) => {
                    elem_list = __utils._decodeSequenceOf(() => XSD._decode_String)(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_Alert, exports._extension_additions_list_spec_for_Alert, exports._root_component_type_list_2_spec_for_Alert, undefined);
            return new Alert(identifier, sender, sent, status, msgType, source, scope, restriction, addresses, code_list, note, references, incidents, info_list, elem_list);
        };
    }
    return _cached_decoder_for_Alert(el);
}
exports._decode_Alert = _decode_Alert;
function _encode_Alert(value, elGetter) {
    if (!_cached_encoder_for_Alert) {
        _cached_encoder_for_Alert = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                XSD._encode_String(value.identifier, __utils.BER),
                XSD._encode_String(value.sender, __utils.BER),
                XSD._encode_DateTime(value.sent, __utils.BER),
                _encode_Alert_status(value.status, __utils.BER),
                _encode_Alert_msgType(value.msgType, __utils.BER),
                value.source === undefined
                    ? undefined
                    : XSD._encode_String(value.source, __utils.BER),
                _encode_Alert_scope(value.scope, __utils.BER),
                value.restriction === undefined
                    ? undefined
                    : XSD._encode_String(value.restriction, __utils.BER),
                value.addresses === undefined
                    ? undefined
                    : XSD._encode_String(value.addresses, __utils.BER),
                __utils._encodeSequenceOf(() => XSD._encode_String, __utils.BER)(value.code_list, __utils.BER),
                value.note === undefined
                    ? undefined
                    : XSD._encode_String(value.note, __utils.BER),
                value.references === undefined
                    ? undefined
                    : XSD._encode_String(value.references, __utils.BER),
                value.incidents === undefined
                    ? undefined
                    : XSD._encode_String(value.incidents, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_Alert_info_list_info, __utils.BER)(value.info_list, __utils.BER),
                __utils._encodeSequenceOf(() => XSD._encode_String, __utils.BER)(value.elem_list, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_Alert(value, elGetter);
}
exports._encode_Alert = _encode_Alert;
//# sourceMappingURL=CAP-1-2.js.map