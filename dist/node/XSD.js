"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._encode_Float = exports._decode_Float = exports._encode_ENTITIES = exports._decode_ENTITIES = exports._encode_ENTITY = exports._decode_ENTITY = exports._encode_NCName = exports._decode_NCName = exports._encode_Name = exports._decode_Name = exports._encode_Token = exports._decode_Token = exports._encode_NormalizedString = exports._decode_NormalizedString = exports._encode_Duration = exports._decode_Duration = exports._encode_Double = exports._decode_Double = exports._encode_Decimal = exports._decode_Decimal = exports._encode_DateTime = exports._decode_DateTime = exports._encode_Date = exports._decode_Date = exports._get_encoder_for_GenericTimeTypeChoice = exports._get_decoder_for_GenericTimeTypeChoice = exports._encode_AnyType_nillable = exports._decode_AnyType_nillable = exports._extension_additions_list_spec_for_AnyType_nillable = exports._root_component_type_list_2_spec_for_AnyType_nillable = exports._root_component_type_list_1_spec_for_AnyType_nillable = exports.AnyType_nillable = exports._encode_AnyType_nillable_content = exports._decode_AnyType_nillable_content = exports._extension_additions_list_spec_for_AnyType_nillable_content = exports._root_component_type_list_2_spec_for_AnyType_nillable_content = exports._root_component_type_list_1_spec_for_AnyType_nillable_content = exports.AnyType_nillable_content = exports._encode_AnyType = exports._decode_AnyType = exports._extension_additions_list_spec_for_AnyType = exports._root_component_type_list_2_spec_for_AnyType = exports._root_component_type_list_1_spec_for_AnyType = exports.AnyType = exports._encode_String = exports._decode_String = exports._encode_AnySimpleType = exports._decode_AnySimpleType = exports._encode_XMLCompatibleString = exports._decode_XMLCompatibleString = void 0;
exports._encode_UnsignedShort = exports._decode_UnsignedShort = exports._encode_UnsignedLong = exports._decode_UnsignedLong = exports._encode_UnsignedInt = exports._decode_UnsignedInt = exports._encode_Time = exports._decode_Time = exports._encode_Short = exports._decode_Short = exports._encode_NOTATION = exports._decode_NOTATION = exports._encode_QName = exports._decode_QName = exports._extension_additions_list_spec_for_QName = exports._root_component_type_list_2_spec_for_QName = exports._root_component_type_list_1_spec_for_QName = exports.QName = exports._encode_AnyURI = exports._decode_AnyURI = exports._encode_XMLStringWithNoCRLFHT = exports._decode_XMLStringWithNoCRLFHT = exports._encode_NMTOKENS = exports._decode_NMTOKENS = exports._encode_NMTOKEN = exports._decode_NMTOKEN = exports._encode_Long = exports._decode_Long = exports._encode_Language = exports._decode_Language = exports._encode_Int = exports._decode_Int = exports._encode_IDREFS = exports._decode_IDREFS = exports._encode_IDREF = exports._decode_IDREF = exports._encode_ID = exports._decode_ID = exports._encode_GYearMonth = exports._decode_GYearMonth = exports._encode_GYear = exports._decode_GYear = exports._encode_GMonthDay = exports._decode_GMonthDay = exports._encode_GMonth = exports._decode_GMonth = exports._encode_GDay = exports._decode_GDay = exports._encode_DateTimeType = exports._decode_DateTimeType = void 0;
exports._encode_MonthDay = exports._decode_MonthDay = exports._encode_Month = exports._decode_Month = exports._encode_Day = exports._decode_Day = exports._encode_XMLStringWithNoWhitespace = exports._decode_XMLStringWithNoWhitespace = void 0;
const tslib_1 = require("tslib");
const asn1 = tslib_1.__importStar(require("asn1-ts"));
const __utils = tslib_1.__importStar(require("./__utils"));
let _cached_decoder_for_XMLCompatibleString = null;
let _cached_encoder_for_XMLCompatibleString = null;
function _decode_XMLCompatibleString(el) {
    if (!_cached_decoder_for_XMLCompatibleString) {
        _cached_decoder_for_XMLCompatibleString = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLCompatibleString(el);
}
exports._decode_XMLCompatibleString = _decode_XMLCompatibleString;
function _encode_XMLCompatibleString(value, elGetter) {
    if (!_cached_encoder_for_XMLCompatibleString) {
        _cached_encoder_for_XMLCompatibleString = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLCompatibleString(value, elGetter);
}
exports._encode_XMLCompatibleString = _encode_XMLCompatibleString;
let _cached_decoder_for_AnySimpleType = null;
let _cached_encoder_for_AnySimpleType = null;
function _decode_AnySimpleType(el) {
    if (!_cached_decoder_for_AnySimpleType) {
        _cached_decoder_for_AnySimpleType = _decode_XMLCompatibleString;
    }
    return _cached_decoder_for_AnySimpleType(el);
}
exports._decode_AnySimpleType = _decode_AnySimpleType;
function _encode_AnySimpleType(value, elGetter) {
    if (!_cached_encoder_for_AnySimpleType) {
        _cached_encoder_for_AnySimpleType = _encode_XMLCompatibleString;
    }
    return _cached_encoder_for_AnySimpleType(value, elGetter);
}
exports._encode_AnySimpleType = _encode_AnySimpleType;
let _cached_decoder_for_String = null;
let _cached_encoder_for_String = null;
function _decode_String(el) {
    if (!_cached_decoder_for_String) {
        _cached_decoder_for_String = _decode_XMLCompatibleString;
    }
    return _cached_decoder_for_String(el);
}
exports._decode_String = _decode_String;
function _encode_String(value, elGetter) {
    if (!_cached_encoder_for_String) {
        _cached_encoder_for_String = _encode_XMLCompatibleString;
    }
    return _cached_encoder_for_String(value, elGetter);
}
exports._encode_String = _encode_String;
class AnyType {
    constructor(embed_values, attr, elem_list) {
        this.embed_values = embed_values;
        this.attr = attr;
        this.elem_list = elem_list;
    }
}
exports.AnyType = AnyType;
exports._root_component_type_list_1_spec_for_AnyType = [
    new __utils.ComponentSpec("embed-values", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("attr", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("elem-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_AnyType = [];
exports._extension_additions_list_spec_for_AnyType = [];
let _cached_decoder_for_AnyType = null;
let _cached_encoder_for_AnyType = null;
function _decode_AnyType(el) {
    if (!_cached_decoder_for_AnyType) {
        _cached_decoder_for_AnyType = function (el) {
            const sequence = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError("AnyType contained only " +
                    sequence.length.toString() +
                    " elements.");
            }
            sequence[0].name = "embed-values";
            sequence[1].name = "attr";
            sequence[2].name = "elem-list";
            let embed_values;
            let attr;
            let elem_list;
            embed_values = __utils._decodeSequenceOf(() => _decode_String)(sequence[0]);
            attr = __utils._decodeSequenceOf(() => _decode_String)(sequence[1]);
            elem_list = __utils._decodeSequenceOf(() => _decode_String)(sequence[2]);
            return new AnyType(embed_values, attr, elem_list);
        };
    }
    return _cached_decoder_for_AnyType(el);
}
exports._decode_AnyType = _decode_AnyType;
function _encode_AnyType(value, elGetter) {
    if (!_cached_encoder_for_AnyType) {
        _cached_encoder_for_AnyType = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.embed_values, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.attr, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.elem_list, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_AnyType(value, elGetter);
}
exports._encode_AnyType = _encode_AnyType;
class AnyType_nillable_content {
    constructor(elem_list) {
        this.elem_list = elem_list;
    }
}
exports.AnyType_nillable_content = AnyType_nillable_content;
exports._root_component_type_list_1_spec_for_AnyType_nillable_content = [
    new __utils.ComponentSpec("elem-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_AnyType_nillable_content = [];
exports._extension_additions_list_spec_for_AnyType_nillable_content = [];
let _cached_decoder_for_AnyType_nillable_content = null;
let _cached_encoder_for_AnyType_nillable_content = null;
function _decode_AnyType_nillable_content(el) {
    if (!_cached_decoder_for_AnyType_nillable_content) {
        _cached_decoder_for_AnyType_nillable_content = function (el) {
            const sequence = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError("AnyType-nillable-content contained only " +
                    sequence.length.toString() +
                    " elements.");
            }
            sequence[0].name = "elem-list";
            let elem_list;
            elem_list = __utils._decodeSequenceOf(() => _decode_String)(sequence[0]);
            return new AnyType_nillable_content(elem_list);
        };
    }
    return _cached_decoder_for_AnyType_nillable_content(el);
}
exports._decode_AnyType_nillable_content = _decode_AnyType_nillable_content;
function _encode_AnyType_nillable_content(value, elGetter) {
    if (!_cached_encoder_for_AnyType_nillable_content) {
        _cached_encoder_for_AnyType_nillable_content = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.elem_list, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_AnyType_nillable_content(value, elGetter);
}
exports._encode_AnyType_nillable_content = _encode_AnyType_nillable_content;
class AnyType_nillable {
    constructor(embed_values, attr, content) {
        this.embed_values = embed_values;
        this.attr = attr;
        this.content = content;
    }
}
exports.AnyType_nillable = AnyType_nillable;
exports._root_component_type_list_1_spec_for_AnyType_nillable = [
    new __utils.ComponentSpec("embed-values", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("attr", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("content", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_AnyType_nillable = [];
exports._extension_additions_list_spec_for_AnyType_nillable = [];
let _cached_decoder_for_AnyType_nillable = null;
let _cached_encoder_for_AnyType_nillable = null;
function _decode_AnyType_nillable(el) {
    if (!_cached_decoder_for_AnyType_nillable) {
        _cached_decoder_for_AnyType_nillable = function (el) {
            let embed_values;
            let attr;
            let content;
            const callbacks = {
                "embed-values": (_el) => {
                    embed_values = __utils._decodeSequenceOf(() => _decode_String)(_el);
                },
                attr: (_el) => {
                    attr = __utils._decodeSequenceOf(() => _decode_String)(_el);
                },
                content: (_el) => {
                    content = _decode_AnyType_nillable_content(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_AnyType_nillable, exports._extension_additions_list_spec_for_AnyType_nillable, exports._root_component_type_list_2_spec_for_AnyType_nillable, undefined);
            return new AnyType_nillable(embed_values, attr, content);
        };
    }
    return _cached_decoder_for_AnyType_nillable(el);
}
exports._decode_AnyType_nillable = _decode_AnyType_nillable;
function _encode_AnyType_nillable(value, elGetter) {
    if (!_cached_encoder_for_AnyType_nillable) {
        _cached_encoder_for_AnyType_nillable = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.embed_values, __utils.BER),
                __utils._encodeSequenceOf(() => _encode_String, __utils.BER)(value.attr, __utils.BER),
                value.content === undefined
                    ? undefined
                    : _encode_AnyType_nillable_content(value.content, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_AnyType_nillable(value, elGetter);
}
exports._encode_AnyType_nillable = _encode_AnyType_nillable;
function _get_decoder_for_GenericTimeTypeChoice(_decode_BasicType, _decode_Alternative) {
    return __utils._decode_inextensible_choice({
        "CONTEXT 0": ["asn1supportedvalue", _decode_BasicType],
        "CONTEXT 1": ["othervalues", _decode_Alternative],
    });
}
exports._get_decoder_for_GenericTimeTypeChoice = _get_decoder_for_GenericTimeTypeChoice;
function _get_encoder_for_GenericTimeTypeChoice(_encode_BasicType, _encode_Alternative) {
    return __utils._encode_choice({
        asn1supportedvalue: _encode_BasicType,
        othervalues: _encode_Alternative,
    }, __utils.BER);
}
exports._get_encoder_for_GenericTimeTypeChoice = _get_encoder_for_GenericTimeTypeChoice;
let _cached_decoder_for_Date = null;
let _cached_encoder_for_Date = null;
function _decode_Date(el) {
    if (!_cached_decoder_for_Date) {
        _cached_decoder_for_Date = _get_decoder_for_GenericTimeTypeChoice(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_Date(el);
}
exports._decode_Date = _decode_Date;
function _encode_Date(value, elGetter) {
    if (!_cached_encoder_for_Date) {
        _cached_encoder_for_Date = _get_encoder_for_GenericTimeTypeChoice(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_Date(value, elGetter);
}
exports._encode_Date = _encode_Date;
let _cached_decoder_for_DateTime = null;
let _cached_encoder_for_DateTime = null;
function _decode_DateTime(el) {
    if (!_cached_decoder_for_DateTime) {
        _cached_decoder_for_DateTime = __utils._decodeTime;
    }
    return _cached_decoder_for_DateTime(el);
}
exports._decode_DateTime = _decode_DateTime;
function _encode_DateTime(value, elGetter) {
    if (!_cached_encoder_for_DateTime) {
        _cached_encoder_for_DateTime = __utils._encodeTime;
    }
    return _cached_encoder_for_DateTime(value, elGetter);
}
exports._encode_DateTime = _encode_DateTime;
let _cached_decoder_for_Decimal = null;
let _cached_encoder_for_Decimal = null;
function _decode_Decimal(el) {
    if (!_cached_decoder_for_Decimal) {
        _cached_decoder_for_Decimal = __utils._decodeReal;
    }
    return _cached_decoder_for_Decimal(el);
}
exports._decode_Decimal = _decode_Decimal;
function _encode_Decimal(value, elGetter) {
    if (!_cached_encoder_for_Decimal) {
        _cached_encoder_for_Decimal = __utils._encodeReal;
    }
    return _cached_encoder_for_Decimal(value, elGetter);
}
exports._encode_Decimal = _encode_Decimal;
let _cached_decoder_for_Double = null;
let _cached_encoder_for_Double = null;
function _decode_Double(el) {
    if (!_cached_decoder_for_Double) {
        _cached_decoder_for_Double = __utils._decodeReal;
    }
    return _cached_decoder_for_Double(el);
}
exports._decode_Double = _decode_Double;
function _encode_Double(value, elGetter) {
    if (!_cached_encoder_for_Double) {
        _cached_encoder_for_Double = __utils._encodeReal;
    }
    return _cached_encoder_for_Double(value, elGetter);
}
exports._encode_Double = _encode_Double;
let _cached_decoder_for_Duration = null;
let _cached_encoder_for_Duration = null;
function _decode_Duration(el) {
    if (!_cached_decoder_for_Duration) {
        _cached_decoder_for_Duration = _get_decoder_for_GenericTimeTypeChoice(__utils._decodeDuration, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_Duration(el);
}
exports._decode_Duration = _decode_Duration;
function _encode_Duration(value, elGetter) {
    if (!_cached_encoder_for_Duration) {
        _cached_encoder_for_Duration = _get_encoder_for_GenericTimeTypeChoice(__utils._encodeDuration, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_Duration(value, elGetter);
}
exports._encode_Duration = _encode_Duration;
let _cached_decoder_for_NormalizedString = null;
let _cached_encoder_for_NormalizedString = null;
function _decode_NormalizedString(el) {
    if (!_cached_decoder_for_NormalizedString) {
        _cached_decoder_for_NormalizedString = _decode_String;
    }
    return _cached_decoder_for_NormalizedString(el);
}
exports._decode_NormalizedString = _decode_NormalizedString;
function _encode_NormalizedString(value, elGetter) {
    if (!_cached_encoder_for_NormalizedString) {
        _cached_encoder_for_NormalizedString = _encode_String;
    }
    return _cached_encoder_for_NormalizedString(value, elGetter);
}
exports._encode_NormalizedString = _encode_NormalizedString;
let _cached_decoder_for_Token = null;
let _cached_encoder_for_Token = null;
function _decode_Token(el) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = _decode_NormalizedString;
    }
    return _cached_decoder_for_Token(el);
}
exports._decode_Token = _decode_Token;
function _encode_Token(value, elGetter) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = _encode_NormalizedString;
    }
    return _cached_encoder_for_Token(value, elGetter);
}
exports._encode_Token = _encode_Token;
let _cached_decoder_for_Name = null;
let _cached_encoder_for_Name = null;
function _decode_Name(el) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = _decode_Token;
    }
    return _cached_decoder_for_Name(el);
}
exports._decode_Name = _decode_Name;
function _encode_Name(value, elGetter) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = _encode_Token;
    }
    return _cached_encoder_for_Name(value, elGetter);
}
exports._encode_Name = _encode_Name;
let _cached_decoder_for_NCName = null;
let _cached_encoder_for_NCName = null;
function _decode_NCName(el) {
    if (!_cached_decoder_for_NCName) {
        _cached_decoder_for_NCName = _decode_Name;
    }
    return _cached_decoder_for_NCName(el);
}
exports._decode_NCName = _decode_NCName;
function _encode_NCName(value, elGetter) {
    if (!_cached_encoder_for_NCName) {
        _cached_encoder_for_NCName = _encode_Name;
    }
    return _cached_encoder_for_NCName(value, elGetter);
}
exports._encode_NCName = _encode_NCName;
let _cached_decoder_for_ENTITY = null;
let _cached_encoder_for_ENTITY = null;
function _decode_ENTITY(el) {
    if (!_cached_decoder_for_ENTITY) {
        _cached_decoder_for_ENTITY = _decode_NCName;
    }
    return _cached_decoder_for_ENTITY(el);
}
exports._decode_ENTITY = _decode_ENTITY;
function _encode_ENTITY(value, elGetter) {
    if (!_cached_encoder_for_ENTITY) {
        _cached_encoder_for_ENTITY = _encode_NCName;
    }
    return _cached_encoder_for_ENTITY(value, elGetter);
}
exports._encode_ENTITY = _encode_ENTITY;
let _cached_decoder_for_ENTITIES = null;
let _cached_encoder_for_ENTITIES = null;
function _decode_ENTITIES(el) {
    if (!_cached_decoder_for_ENTITIES) {
        _cached_decoder_for_ENTITIES = __utils._decodeSequenceOf(() => _decode_ENTITY);
    }
    return _cached_decoder_for_ENTITIES(el);
}
exports._decode_ENTITIES = _decode_ENTITIES;
function _encode_ENTITIES(value, elGetter) {
    if (!_cached_encoder_for_ENTITIES) {
        _cached_encoder_for_ENTITIES = __utils._encodeSequenceOf(() => _encode_ENTITY, __utils.BER);
    }
    return _cached_encoder_for_ENTITIES(value, elGetter);
}
exports._encode_ENTITIES = _encode_ENTITIES;
let _cached_decoder_for_Float = null;
let _cached_encoder_for_Float = null;
function _decode_Float(el) {
    if (!_cached_decoder_for_Float) {
        _cached_decoder_for_Float = __utils._decodeReal;
    }
    return _cached_decoder_for_Float(el);
}
exports._decode_Float = _decode_Float;
function _encode_Float(value, elGetter) {
    if (!_cached_encoder_for_Float) {
        _cached_encoder_for_Float = __utils._encodeReal;
    }
    return _cached_encoder_for_Float(value, elGetter);
}
exports._encode_Float = _encode_Float;
let _cached_decoder_for_DateTimeType = null;
let _cached_encoder_for_DateTimeType = null;
function _decode_DateTimeType(el) {
    if (!_cached_decoder_for_DateTimeType) {
        _cached_decoder_for_DateTimeType = __utils._decodeVisibleString;
    }
    return _cached_decoder_for_DateTimeType(el);
}
exports._decode_DateTimeType = _decode_DateTimeType;
function _encode_DateTimeType(value, elGetter) {
    if (!_cached_encoder_for_DateTimeType) {
        _cached_encoder_for_DateTimeType = __utils._encodeVisibleString;
    }
    return _cached_encoder_for_DateTimeType(value, elGetter);
}
exports._encode_DateTimeType = _encode_DateTimeType;
let _cached_decoder_for_GDay = null;
let _cached_encoder_for_GDay = null;
function _decode_GDay(el) {
    if (!_cached_decoder_for_GDay) {
        _cached_decoder_for_GDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_GDay(el);
}
exports._decode_GDay = _decode_GDay;
function _encode_GDay(value, elGetter) {
    if (!_cached_encoder_for_GDay) {
        _cached_encoder_for_GDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_GDay(value, elGetter);
}
exports._encode_GDay = _encode_GDay;
let _cached_decoder_for_GMonth = null;
let _cached_encoder_for_GMonth = null;
function _decode_GMonth(el) {
    if (!_cached_decoder_for_GMonth) {
        _cached_decoder_for_GMonth = _decode_DateTimeType;
    }
    return _cached_decoder_for_GMonth(el);
}
exports._decode_GMonth = _decode_GMonth;
function _encode_GMonth(value, elGetter) {
    if (!_cached_encoder_for_GMonth) {
        _cached_encoder_for_GMonth = _encode_DateTimeType;
    }
    return _cached_encoder_for_GMonth(value, elGetter);
}
exports._encode_GMonth = _encode_GMonth;
let _cached_decoder_for_GMonthDay = null;
let _cached_encoder_for_GMonthDay = null;
function _decode_GMonthDay(el) {
    if (!_cached_decoder_for_GMonthDay) {
        _cached_decoder_for_GMonthDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_GMonthDay(el);
}
exports._decode_GMonthDay = _decode_GMonthDay;
function _encode_GMonthDay(value, elGetter) {
    if (!_cached_encoder_for_GMonthDay) {
        _cached_encoder_for_GMonthDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_GMonthDay(value, elGetter);
}
exports._encode_GMonthDay = _encode_GMonthDay;
let _cached_decoder_for_GYear = null;
let _cached_encoder_for_GYear = null;
function _decode_GYear(el) {
    if (!_cached_decoder_for_GYear) {
        _cached_decoder_for_GYear = _get_decoder_for_GenericTimeTypeChoice(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_GYear(el);
}
exports._decode_GYear = _decode_GYear;
function _encode_GYear(value, elGetter) {
    if (!_cached_encoder_for_GYear) {
        _cached_encoder_for_GYear = _get_encoder_for_GenericTimeTypeChoice(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_GYear(value, elGetter);
}
exports._encode_GYear = _encode_GYear;
let _cached_decoder_for_GYearMonth = null;
let _cached_encoder_for_GYearMonth = null;
function _decode_GYearMonth(el) {
    if (!_cached_decoder_for_GYearMonth) {
        _cached_decoder_for_GYearMonth = _get_decoder_for_GenericTimeTypeChoice(__utils._decodeTime, __utils._decodeVisibleString);
    }
    return _cached_decoder_for_GYearMonth(el);
}
exports._decode_GYearMonth = _decode_GYearMonth;
function _encode_GYearMonth(value, elGetter) {
    if (!_cached_encoder_for_GYearMonth) {
        _cached_encoder_for_GYearMonth = _get_encoder_for_GenericTimeTypeChoice(__utils._encodeTime, __utils._encodeVisibleString);
    }
    return _cached_encoder_for_GYearMonth(value, elGetter);
}
exports._encode_GYearMonth = _encode_GYearMonth;
let _cached_decoder_for_ID = null;
let _cached_encoder_for_ID = null;
function _decode_ID(el) {
    if (!_cached_decoder_for_ID) {
        _cached_decoder_for_ID = _decode_NCName;
    }
    return _cached_decoder_for_ID(el);
}
exports._decode_ID = _decode_ID;
function _encode_ID(value, elGetter) {
    if (!_cached_encoder_for_ID) {
        _cached_encoder_for_ID = _encode_NCName;
    }
    return _cached_encoder_for_ID(value, elGetter);
}
exports._encode_ID = _encode_ID;
let _cached_decoder_for_IDREF = null;
let _cached_encoder_for_IDREF = null;
function _decode_IDREF(el) {
    if (!_cached_decoder_for_IDREF) {
        _cached_decoder_for_IDREF = _decode_NCName;
    }
    return _cached_decoder_for_IDREF(el);
}
exports._decode_IDREF = _decode_IDREF;
function _encode_IDREF(value, elGetter) {
    if (!_cached_encoder_for_IDREF) {
        _cached_encoder_for_IDREF = _encode_NCName;
    }
    return _cached_encoder_for_IDREF(value, elGetter);
}
exports._encode_IDREF = _encode_IDREF;
let _cached_decoder_for_IDREFS = null;
let _cached_encoder_for_IDREFS = null;
function _decode_IDREFS(el) {
    if (!_cached_decoder_for_IDREFS) {
        _cached_decoder_for_IDREFS = __utils._decodeSequenceOf(() => _decode_IDREF);
    }
    return _cached_decoder_for_IDREFS(el);
}
exports._decode_IDREFS = _decode_IDREFS;
function _encode_IDREFS(value, elGetter) {
    if (!_cached_encoder_for_IDREFS) {
        _cached_encoder_for_IDREFS = __utils._encodeSequenceOf(() => _encode_IDREF, __utils.BER);
    }
    return _cached_encoder_for_IDREFS(value, elGetter);
}
exports._encode_IDREFS = _encode_IDREFS;
let _cached_decoder_for_Int = null;
let _cached_encoder_for_Int = null;
function _decode_Int(el) {
    if (!_cached_decoder_for_Int) {
        _cached_decoder_for_Int = __utils._decodeInteger;
    }
    return _cached_decoder_for_Int(el);
}
exports._decode_Int = _decode_Int;
function _encode_Int(value, elGetter) {
    if (!_cached_encoder_for_Int) {
        _cached_encoder_for_Int = __utils._encodeInteger;
    }
    return _cached_encoder_for_Int(value, elGetter);
}
exports._encode_Int = _encode_Int;
let _cached_decoder_for_Language = null;
let _cached_encoder_for_Language = null;
function _decode_Language(el) {
    if (!_cached_decoder_for_Language) {
        _cached_decoder_for_Language = __utils._decodeVisibleString;
    }
    return _cached_decoder_for_Language(el);
}
exports._decode_Language = _decode_Language;
function _encode_Language(value, elGetter) {
    if (!_cached_encoder_for_Language) {
        _cached_encoder_for_Language = __utils._encodeVisibleString;
    }
    return _cached_encoder_for_Language(value, elGetter);
}
exports._encode_Language = _encode_Language;
let _cached_decoder_for_Long = null;
let _cached_encoder_for_Long = null;
function _decode_Long(el) {
    if (!_cached_decoder_for_Long) {
        _cached_decoder_for_Long = __utils._decodeInteger;
    }
    return _cached_decoder_for_Long(el);
}
exports._decode_Long = _decode_Long;
function _encode_Long(value, elGetter) {
    if (!_cached_encoder_for_Long) {
        _cached_encoder_for_Long = __utils._encodeInteger;
    }
    return _cached_encoder_for_Long(value, elGetter);
}
exports._encode_Long = _encode_Long;
let _cached_decoder_for_NMTOKEN = null;
let _cached_encoder_for_NMTOKEN = null;
function _decode_NMTOKEN(el) {
    if (!_cached_decoder_for_NMTOKEN) {
        _cached_decoder_for_NMTOKEN = _decode_Token;
    }
    return _cached_decoder_for_NMTOKEN(el);
}
exports._decode_NMTOKEN = _decode_NMTOKEN;
function _encode_NMTOKEN(value, elGetter) {
    if (!_cached_encoder_for_NMTOKEN) {
        _cached_encoder_for_NMTOKEN = _encode_Token;
    }
    return _cached_encoder_for_NMTOKEN(value, elGetter);
}
exports._encode_NMTOKEN = _encode_NMTOKEN;
let _cached_decoder_for_NMTOKENS = null;
let _cached_encoder_for_NMTOKENS = null;
function _decode_NMTOKENS(el) {
    if (!_cached_decoder_for_NMTOKENS) {
        _cached_decoder_for_NMTOKENS = __utils._decodeSequenceOf(() => _decode_NMTOKEN);
    }
    return _cached_decoder_for_NMTOKENS(el);
}
exports._decode_NMTOKENS = _decode_NMTOKENS;
function _encode_NMTOKENS(value, elGetter) {
    if (!_cached_encoder_for_NMTOKENS) {
        _cached_encoder_for_NMTOKENS = __utils._encodeSequenceOf(() => _encode_NMTOKEN, __utils.BER);
    }
    return _cached_encoder_for_NMTOKENS(value, elGetter);
}
exports._encode_NMTOKENS = _encode_NMTOKENS;
let _cached_decoder_for_XMLStringWithNoCRLFHT = null;
let _cached_encoder_for_XMLStringWithNoCRLFHT = null;
function _decode_XMLStringWithNoCRLFHT(el) {
    if (!_cached_decoder_for_XMLStringWithNoCRLFHT) {
        _cached_decoder_for_XMLStringWithNoCRLFHT = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLStringWithNoCRLFHT(el);
}
exports._decode_XMLStringWithNoCRLFHT = _decode_XMLStringWithNoCRLFHT;
function _encode_XMLStringWithNoCRLFHT(value, elGetter) {
    if (!_cached_encoder_for_XMLStringWithNoCRLFHT) {
        _cached_encoder_for_XMLStringWithNoCRLFHT = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLStringWithNoCRLFHT(value, elGetter);
}
exports._encode_XMLStringWithNoCRLFHT = _encode_XMLStringWithNoCRLFHT;
let _cached_decoder_for_AnyURI = null;
let _cached_encoder_for_AnyURI = null;
function _decode_AnyURI(el) {
    if (!_cached_decoder_for_AnyURI) {
        _cached_decoder_for_AnyURI = _decode_XMLStringWithNoCRLFHT;
    }
    return _cached_decoder_for_AnyURI(el);
}
exports._decode_AnyURI = _decode_AnyURI;
function _encode_AnyURI(value, elGetter) {
    if (!_cached_encoder_for_AnyURI) {
        _cached_encoder_for_AnyURI = _encode_XMLStringWithNoCRLFHT;
    }
    return _cached_encoder_for_AnyURI(value, elGetter);
}
exports._encode_AnyURI = _encode_AnyURI;
class QName {
    constructor(uri, name) {
        this.uri = uri;
        this.name = name;
    }
}
exports.QName = QName;
exports._root_component_type_list_1_spec_for_QName = [
    new __utils.ComponentSpec("uri", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("name", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
];
exports._root_component_type_list_2_spec_for_QName = [];
exports._extension_additions_list_spec_for_QName = [];
let _cached_decoder_for_QName = null;
let _cached_encoder_for_QName = null;
function _decode_QName(el) {
    if (!_cached_decoder_for_QName) {
        _cached_decoder_for_QName = function (el) {
            let uri;
            let name;
            const callbacks = {
                uri: (_el) => {
                    uri = _decode_AnyURI(_el);
                },
                name: (_el) => {
                    name = _decode_NCName(_el);
                },
            };
            __utils._parse_sequence(el, callbacks, exports._root_component_type_list_1_spec_for_QName, exports._extension_additions_list_spec_for_QName, exports._root_component_type_list_2_spec_for_QName, undefined);
            return new QName(uri, name);
        };
    }
    return _cached_decoder_for_QName(el);
}
exports._decode_QName = _decode_QName;
function _encode_QName(value, elGetter) {
    if (!_cached_encoder_for_QName) {
        _cached_encoder_for_QName = function (value, elGetter) {
            return __utils._encodeSequence([]
                .concat([
                value.uri === undefined
                    ? undefined
                    : _encode_AnyURI(value.uri, __utils.BER),
                _encode_NCName(value.name, __utils.BER),
            ])
                .filter((c) => !!c), __utils.BER);
        };
    }
    return _cached_encoder_for_QName(value, elGetter);
}
exports._encode_QName = _encode_QName;
let _cached_decoder_for_NOTATION = null;
let _cached_encoder_for_NOTATION = null;
function _decode_NOTATION(el) {
    if (!_cached_decoder_for_NOTATION) {
        _cached_decoder_for_NOTATION = _decode_QName;
    }
    return _cached_decoder_for_NOTATION(el);
}
exports._decode_NOTATION = _decode_NOTATION;
function _encode_NOTATION(value, elGetter) {
    if (!_cached_encoder_for_NOTATION) {
        _cached_encoder_for_NOTATION = _encode_QName;
    }
    return _cached_encoder_for_NOTATION(value, elGetter);
}
exports._encode_NOTATION = _encode_NOTATION;
let _cached_decoder_for_Short = null;
let _cached_encoder_for_Short = null;
function _decode_Short(el) {
    if (!_cached_decoder_for_Short) {
        _cached_decoder_for_Short = __utils._decodeInteger;
    }
    return _cached_decoder_for_Short(el);
}
exports._decode_Short = _decode_Short;
function _encode_Short(value, elGetter) {
    if (!_cached_encoder_for_Short) {
        _cached_encoder_for_Short = __utils._encodeInteger;
    }
    return _cached_encoder_for_Short(value, elGetter);
}
exports._encode_Short = _encode_Short;
let _cached_decoder_for_Time = null;
let _cached_encoder_for_Time = null;
function _decode_Time(el) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decodeTime;
    }
    return _cached_decoder_for_Time(el);
}
exports._decode_Time = _decode_Time;
function _encode_Time(value, elGetter) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encodeTime;
    }
    return _cached_encoder_for_Time(value, elGetter);
}
exports._encode_Time = _encode_Time;
let _cached_decoder_for_UnsignedInt = null;
let _cached_encoder_for_UnsignedInt = null;
function _decode_UnsignedInt(el) {
    if (!_cached_decoder_for_UnsignedInt) {
        _cached_decoder_for_UnsignedInt = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedInt(el);
}
exports._decode_UnsignedInt = _decode_UnsignedInt;
function _encode_UnsignedInt(value, elGetter) {
    if (!_cached_encoder_for_UnsignedInt) {
        _cached_encoder_for_UnsignedInt = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedInt(value, elGetter);
}
exports._encode_UnsignedInt = _encode_UnsignedInt;
let _cached_decoder_for_UnsignedLong = null;
let _cached_encoder_for_UnsignedLong = null;
function _decode_UnsignedLong(el) {
    if (!_cached_decoder_for_UnsignedLong) {
        _cached_decoder_for_UnsignedLong = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedLong(el);
}
exports._decode_UnsignedLong = _decode_UnsignedLong;
function _encode_UnsignedLong(value, elGetter) {
    if (!_cached_encoder_for_UnsignedLong) {
        _cached_encoder_for_UnsignedLong = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedLong(value, elGetter);
}
exports._encode_UnsignedLong = _encode_UnsignedLong;
let _cached_decoder_for_UnsignedShort = null;
let _cached_encoder_for_UnsignedShort = null;
function _decode_UnsignedShort(el) {
    if (!_cached_decoder_for_UnsignedShort) {
        _cached_decoder_for_UnsignedShort = __utils._decodeInteger;
    }
    return _cached_decoder_for_UnsignedShort(el);
}
exports._decode_UnsignedShort = _decode_UnsignedShort;
function _encode_UnsignedShort(value, elGetter) {
    if (!_cached_encoder_for_UnsignedShort) {
        _cached_encoder_for_UnsignedShort = __utils._encodeInteger;
    }
    return _cached_encoder_for_UnsignedShort(value, elGetter);
}
exports._encode_UnsignedShort = _encode_UnsignedShort;
let _cached_decoder_for_XMLStringWithNoWhitespace = null;
let _cached_encoder_for_XMLStringWithNoWhitespace = null;
function _decode_XMLStringWithNoWhitespace(el) {
    if (!_cached_decoder_for_XMLStringWithNoWhitespace) {
        _cached_decoder_for_XMLStringWithNoWhitespace =
            __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XMLStringWithNoWhitespace(el);
}
exports._decode_XMLStringWithNoWhitespace = _decode_XMLStringWithNoWhitespace;
function _encode_XMLStringWithNoWhitespace(value, elGetter) {
    if (!_cached_encoder_for_XMLStringWithNoWhitespace) {
        _cached_encoder_for_XMLStringWithNoWhitespace =
            __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XMLStringWithNoWhitespace(value, elGetter);
}
exports._encode_XMLStringWithNoWhitespace = _encode_XMLStringWithNoWhitespace;
let _cached_decoder_for_Day = null;
let _cached_encoder_for_Day = null;
function _decode_Day(el) {
    if (!_cached_decoder_for_Day) {
        _cached_decoder_for_Day = _decode_DateTimeType;
    }
    return _cached_decoder_for_Day(el);
}
exports._decode_Day = _decode_Day;
function _encode_Day(value, elGetter) {
    if (!_cached_encoder_for_Day) {
        _cached_encoder_for_Day = _encode_DateTimeType;
    }
    return _cached_encoder_for_Day(value, elGetter);
}
exports._encode_Day = _encode_Day;
let _cached_decoder_for_Month = null;
let _cached_encoder_for_Month = null;
function _decode_Month(el) {
    if (!_cached_decoder_for_Month) {
        _cached_decoder_for_Month = _decode_DateTimeType;
    }
    return _cached_decoder_for_Month(el);
}
exports._decode_Month = _decode_Month;
function _encode_Month(value, elGetter) {
    if (!_cached_encoder_for_Month) {
        _cached_encoder_for_Month = _encode_DateTimeType;
    }
    return _cached_encoder_for_Month(value, elGetter);
}
exports._encode_Month = _encode_Month;
let _cached_decoder_for_MonthDay = null;
let _cached_encoder_for_MonthDay = null;
function _decode_MonthDay(el) {
    if (!_cached_decoder_for_MonthDay) {
        _cached_decoder_for_MonthDay = _decode_DateTimeType;
    }
    return _cached_decoder_for_MonthDay(el);
}
exports._decode_MonthDay = _decode_MonthDay;
function _encode_MonthDay(value, elGetter) {
    if (!_cached_encoder_for_MonthDay) {
        _cached_encoder_for_MonthDay = _encode_DateTimeType;
    }
    return _cached_encoder_for_MonthDay(value, elGetter);
}
exports._encode_MonthDay = _encode_MonthDay;
//# sourceMappingURL=XSD.js.map