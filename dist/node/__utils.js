"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._encodeIA5String = exports._encodeGraphicString = exports._encodeGeneralString = exports._encodeBMPString = exports._encodeTimeOfDay = exports._encodeTime = exports._encodeSet = exports._encodeSequence = exports._encodeRelativeOID = exports._encodeRelativeIRI = exports._encodeReal = exports._encodeOctetString = exports._encodeObjectIdentifier = exports._encodeNull = exports._encodeIRI = exports._encodeInteger = exports._encodeInstanceOf = exports._encodeExternal = exports._encodeEnumerated = exports._encodeEmbeddedPDV = exports._encodeDuration = exports._encodeDateTime = exports._encodeDate = exports._encodeUnrestrictedCharacterString = exports._encodeBoolean = exports._encodeBitString = exports.DER = exports.CER = exports.BER = exports._tagNumber = exports._construction = exports._tagClass = exports._decode_implicit = exports._encode_implicit = exports._decode_explicit = exports._encode_explicit = exports.present = exports.isDefault = exports.deepEq = exports.tagClassName = exports.hasTagNumberIn = exports.hasTagClass = exports.hasAnyTag = exports.hasTag = exports.joint_iso_ccitt = exports.joint_iso_itu_t = exports.iso = exports.ccitt = exports.itu_r = exports.itu_t = void 0;
exports._decodeUTCTime = exports._decodeGeneralizedTime = exports._decodeVisibleString = exports._decodeVideotexString = exports._decodeUTF8String = exports._decodeUniversalString = exports._decodeT61String = exports._decodeTeletexString = exports._decodePrintableString = exports._decodeNumericString = exports._decodeISO646String = exports._decodeIA5String = exports._decodeGraphicString = exports._decodeGeneralString = exports._decodeBMPString = exports._decodeTimeOfDay = exports._decodeTime = exports._decodeSet = exports._decodeSequence = exports._decodeRelativeOID = exports._decodeRelativeIRI = exports._decodeReal = exports._decodeOctetString = exports._decodeObjectIdentifier = exports._decodeNull = exports._decodeIRI = exports._decodeInteger = exports._decodeInstanceOf = exports._decodeExternal = exports._decodeEnumerated = exports._decodeEmbeddedPDV = exports._decodeDuration = exports._decodeDateTime = exports._decodeDate = exports._decodeUnrestrictedCharacterString = exports._decodeBoolean = exports._decodeBitString = exports._encodeAny = exports._encodeObjectDescriptor = exports._encodeUTCTime = exports._encodeGeneralizedTime = exports._encodeVisibleString = exports._encodeVideotexString = exports._encodeUTF8String = exports._encodeUniversalString = exports._encodeT61String = exports._encodeTeletexString = exports._encodePrintableString = exports._encodeNumericString = exports._encodeISO646String = void 0;
exports._decodeBigInt = exports._encodeBigInt = exports._encodeSetOf = exports._decodeSetOf = exports._encodeSequenceOf = exports._decodeSequenceOf = exports._decode_extensible_choice = exports._decode_inextensible_choice = exports._encode_choice = exports._parse_sequence = exports._parse_sequence_without_trailing_rctl = exports._parse_sequence_with_trailing_rctl = exports._get_possible_initial_components = exports._parse_component_type_list = exports._parse_set = exports.ComponentSpec = exports._decodeAny = exports._decodeObjectDescriptor = void 0;
const asn1_ts_1 = require("asn1-ts");
exports.itu_t = 0;
exports.itu_r = 0;
exports.ccitt = 0;
exports.iso = 1;
exports.joint_iso_itu_t = 2;
exports.joint_iso_ccitt = 2;
function hasTag(tagClass, tagNumber) {
    return function (index, elements) {
        const el = elements[index];
        return el.tagClass === tagClass && el.tagNumber === tagNumber;
    };
}
exports.hasTag = hasTag;
function hasAnyTag(index, elements) {
    return true;
}
exports.hasAnyTag = hasAnyTag;
function hasTagClass(tagClass) {
    return function (index, elements) {
        return elements[index].tagClass === tagClass;
    };
}
exports.hasTagClass = hasTagClass;
function hasTagNumberIn(tagNumbers) {
    return function (index, elements) {
        return tagNumbers.some((tn) => tn === elements[index].tagNumber);
    };
}
exports.hasTagNumberIn = hasTagNumberIn;
function tagClassName(tagClass) {
    switch (tagClass) {
        case asn1_ts_1.ASN1TagClass.universal:
            return "UNIVERSAL";
        case asn1_ts_1.ASN1TagClass.context:
            return "CONTEXT";
        case asn1_ts_1.ASN1TagClass.application:
            return "APPLICATION";
        case asn1_ts_1.ASN1TagClass.private:
            return "PRIVATE";
        default: {
            throw new Error(`Unrecognized ASN.1 Tag Class ${tagClass}.`);
        }
    }
}
exports.tagClassName = tagClassName;
function deepEq(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    return JSON.stringify(value1) === JSON.stringify(value2);
}
exports.deepEq = deepEq;
function isDefault(defaultValue) {
    return function (actualValue) {
        return deepEq(defaultValue, actualValue);
    };
}
exports.isDefault = isDefault;
function present(value) {
    return value !== undefined;
}
exports.present = present;
function _encode_explicit(class_, tag, encoderGetter, outer) {
    return function (value, elGetter) {
        const ret = outer(value, outer);
        ret.sequence = [encoderGetter()(value, elGetter)];
        ret.construction = asn1_ts_1.ASN1Construction.constructed;
        if (class_) {
            ret.tagClass = class_;
        }
        if (typeof tag !== "undefined") {
            ret.tagNumber = tag;
        }
        return ret;
    };
}
exports._encode_explicit = _encode_explicit;
function _decode_explicit(decoderGetter) {
    return (el) => decoderGetter()(el.inner);
}
exports._decode_explicit = _decode_explicit;
function _encode_implicit(class_, tag, encoderGetter, outer) {
    return function (value, elGetter) {
        const ret = encoderGetter()(value, elGetter);
        if (class_) {
            ret.tagClass = class_;
        }
        if (typeof tag !== "undefined") {
            ret.tagNumber = tag;
        }
        return ret;
    };
}
exports._encode_implicit = _encode_implicit;
function _decode_implicit(decoderGetter) {
    return (el) => decoderGetter()(el);
}
exports._decode_implicit = _decode_implicit;
function _tagClass(class_, encoderGetter) {
    const el = encoderGetter()();
    el.tagClass = class_;
    return el;
}
exports._tagClass = _tagClass;
function _construction(con, encoderGetter) {
    const el = encoderGetter()();
    el.construction = con;
    return el;
}
exports._construction = _construction;
function _tagNumber(tag, encoderGetter) {
    const el = encoderGetter()();
    el.tagNumber = tag;
    return el;
}
exports._tagNumber = _tagNumber;
const BER = (value, elGetter) => new asn1_ts_1.BERElement();
exports.BER = BER;
const CER = (value, elGetter) => new asn1_ts_1.CERElement();
exports.CER = CER;
const DER = (value, elGetter) => new asn1_ts_1.DERElement();
exports.DER = DER;
const _encodeBitString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.bitString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.bitString;
    return el;
};
exports._encodeBitString = _encodeBitString;
const _encodeBoolean = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.boolean = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.boolean;
    return el;
};
exports._encodeBoolean = _encodeBoolean;
const _encodeUnrestrictedCharacterString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.characterString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.characterString;
    return el;
};
exports._encodeUnrestrictedCharacterString = _encodeUnrestrictedCharacterString;
const _encodeDate = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.date = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.date;
    return el;
};
exports._encodeDate = _encodeDate;
const _encodeDateTime = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.dateTime = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.dateTime;
    return el;
};
exports._encodeDateTime = _encodeDateTime;
const _encodeDuration = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.duration = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.duration;
    return el;
};
exports._encodeDuration = _encodeDuration;
const _encodeEmbeddedPDV = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.embeddedPDV = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.embeddedPDV;
    return el;
};
exports._encodeEmbeddedPDV = _encodeEmbeddedPDV;
const _encodeEnumerated = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.enumerated = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.enumerated;
    return el;
};
exports._encodeEnumerated = _encodeEnumerated;
const _encodeExternal = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.external = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.external;
    return el;
};
exports._encodeExternal = _encodeExternal;
const _encodeInstanceOf = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.external = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.external;
    return el;
};
exports._encodeInstanceOf = _encodeInstanceOf;
const _encodeInteger = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.integer = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.integer;
    return el;
};
exports._encodeInteger = _encodeInteger;
const _encodeIRI = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.oidIRI = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.oidIRI;
    return el;
};
exports._encodeIRI = _encodeIRI;
const _encodeNull = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.value = new Uint8Array(0);
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.nill;
    return el;
};
exports._encodeNull = _encodeNull;
const _encodeObjectIdentifier = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.objectIdentifier = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.objectIdentifier;
    return el;
};
exports._encodeObjectIdentifier = _encodeObjectIdentifier;
const _encodeOctetString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.octetString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.octetString;
    return el;
};
exports._encodeOctetString = _encodeOctetString;
const _encodeReal = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.real = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.realNumber;
    return el;
};
exports._encodeReal = _encodeReal;
const _encodeRelativeIRI = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.relativeOIDIRI = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.roidIRI;
    return el;
};
exports._encodeRelativeIRI = _encodeRelativeIRI;
const _encodeRelativeOID = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.relativeObjectIdentifier = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.relativeOID;
    return el;
};
exports._encodeRelativeOID = _encodeRelativeOID;
const _encodeSequence = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.sequence = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
    return el;
};
exports._encodeSequence = _encodeSequence;
const _encodeSet = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.set = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.set;
    return el;
};
exports._encodeSet = _encodeSet;
const _encodeTime = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.time = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.time;
    return el;
};
exports._encodeTime = _encodeTime;
const _encodeTimeOfDay = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.timeOfDay = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.timeOfDay;
    return el;
};
exports._encodeTimeOfDay = _encodeTimeOfDay;
const _encodeBMPString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.bmpString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.bmpString;
    return el;
};
exports._encodeBMPString = _encodeBMPString;
const _encodeGeneralString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.generalString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.generalString;
    return el;
};
exports._encodeGeneralString = _encodeGeneralString;
const _encodeGraphicString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.graphicString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.graphicString;
    return el;
};
exports._encodeGraphicString = _encodeGraphicString;
const _encodeIA5String = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.ia5String = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.ia5String;
    return el;
};
exports._encodeIA5String = _encodeIA5String;
const _encodeISO646String = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.ia5String = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.ia5String;
    return el;
};
exports._encodeISO646String = _encodeISO646String;
const _encodeNumericString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.numericString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.numericString;
    return el;
};
exports._encodeNumericString = _encodeNumericString;
const _encodePrintableString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.printableString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.printableString;
    return el;
};
exports._encodePrintableString = _encodePrintableString;
const _encodeTeletexString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.teletexString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.teletexString;
    return el;
};
exports._encodeTeletexString = _encodeTeletexString;
const _encodeT61String = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.teletexString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.teletexString;
    return el;
};
exports._encodeT61String = _encodeT61String;
const _encodeUniversalString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.universalString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.universalString;
    return el;
};
exports._encodeUniversalString = _encodeUniversalString;
const _encodeUTF8String = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.utf8String = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.utf8String;
    return el;
};
exports._encodeUTF8String = _encodeUTF8String;
const _encodeVideotexString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.videotexString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.videotexString;
    return el;
};
exports._encodeVideotexString = _encodeVideotexString;
const _encodeVisibleString = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.visibleString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.visibleString;
    return el;
};
exports._encodeVisibleString = _encodeVisibleString;
const _encodeGeneralizedTime = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.generalizedTime = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
    return el;
};
exports._encodeGeneralizedTime = _encodeGeneralizedTime;
const _encodeUTCTime = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.utcTime = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
    return el;
};
exports._encodeUTCTime = _encodeUTCTime;
const _encodeObjectDescriptor = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.objectDescriptor = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.objectDescriptor;
    return el;
};
exports._encodeObjectDescriptor = _encodeObjectDescriptor;
const _encodeAny = (value, elGetter) => {
    return value;
};
exports._encodeAny = _encodeAny;
const _decodeBitString = (el) => {
    return el.bitString;
};
exports._decodeBitString = _decodeBitString;
const _decodeBoolean = (el) => {
    return el.boolean;
};
exports._decodeBoolean = _decodeBoolean;
const _decodeUnrestrictedCharacterString = (el) => {
    return el.characterString;
};
exports._decodeUnrestrictedCharacterString = _decodeUnrestrictedCharacterString;
const _decodeDate = (el) => {
    return el.date;
};
exports._decodeDate = _decodeDate;
const _decodeDateTime = (el) => {
    return el.dateTime;
};
exports._decodeDateTime = _decodeDateTime;
const _decodeDuration = (el) => {
    return el.duration;
};
exports._decodeDuration = _decodeDuration;
const _decodeEmbeddedPDV = (el) => {
    return el.embeddedPDV;
};
exports._decodeEmbeddedPDV = _decodeEmbeddedPDV;
const _decodeEnumerated = (el) => {
    return el.enumerated;
};
exports._decodeEnumerated = _decodeEnumerated;
const _decodeExternal = (el) => {
    return el.external;
};
exports._decodeExternal = _decodeExternal;
const _decodeInstanceOf = (el) => {
    return el.external;
};
exports._decodeInstanceOf = _decodeInstanceOf;
const _decodeInteger = (el) => {
    return el.integer;
};
exports._decodeInteger = _decodeInteger;
const _decodeIRI = (el) => {
    return el.oidIRI;
};
exports._decodeIRI = _decodeIRI;
const _decodeNull = (el) => {
    return null;
};
exports._decodeNull = _decodeNull;
const _decodeObjectIdentifier = (el) => {
    return el.objectIdentifier;
};
exports._decodeObjectIdentifier = _decodeObjectIdentifier;
const _decodeOctetString = (el) => {
    return el.octetString;
};
exports._decodeOctetString = _decodeOctetString;
const _decodeReal = (el) => {
    return el.real;
};
exports._decodeReal = _decodeReal;
const _decodeRelativeIRI = (el) => {
    return el.relativeOIDIRI;
};
exports._decodeRelativeIRI = _decodeRelativeIRI;
const _decodeRelativeOID = (el) => {
    return el.relativeObjectIdentifier;
};
exports._decodeRelativeOID = _decodeRelativeOID;
const _decodeSequence = (el) => {
    return el.sequence;
};
exports._decodeSequence = _decodeSequence;
const _decodeSet = (el) => {
    return el.set;
};
exports._decodeSet = _decodeSet;
const _decodeTime = (el) => {
    return el.time;
};
exports._decodeTime = _decodeTime;
const _decodeTimeOfDay = (el) => {
    return el.timeOfDay;
};
exports._decodeTimeOfDay = _decodeTimeOfDay;
const _decodeBMPString = (el) => {
    return el.bmpString;
};
exports._decodeBMPString = _decodeBMPString;
const _decodeGeneralString = (el) => {
    return el.generalString;
};
exports._decodeGeneralString = _decodeGeneralString;
const _decodeGraphicString = (el) => {
    return el.graphicString;
};
exports._decodeGraphicString = _decodeGraphicString;
const _decodeIA5String = (el) => {
    return el.ia5String;
};
exports._decodeIA5String = _decodeIA5String;
const _decodeISO646String = (el) => {
    return el.ia5String;
};
exports._decodeISO646String = _decodeISO646String;
const _decodeNumericString = (el) => {
    return el.numericString;
};
exports._decodeNumericString = _decodeNumericString;
const _decodePrintableString = (el) => {
    return el.printableString;
};
exports._decodePrintableString = _decodePrintableString;
const _decodeTeletexString = (el) => {
    return el.teletexString;
};
exports._decodeTeletexString = _decodeTeletexString;
const _decodeT61String = (el) => {
    return el.teletexString;
};
exports._decodeT61String = _decodeT61String;
const _decodeUniversalString = (el) => {
    return el.universalString;
};
exports._decodeUniversalString = _decodeUniversalString;
const _decodeUTF8String = (el) => {
    return el.utf8String;
};
exports._decodeUTF8String = _decodeUTF8String;
const _decodeVideotexString = (el) => {
    return el.videotexString;
};
exports._decodeVideotexString = _decodeVideotexString;
const _decodeVisibleString = (el) => {
    return el.visibleString;
};
exports._decodeVisibleString = _decodeVisibleString;
const _decodeGeneralizedTime = (el) => {
    return el.generalizedTime;
};
exports._decodeGeneralizedTime = _decodeGeneralizedTime;
const _decodeUTCTime = (el) => {
    return el.utcTime;
};
exports._decodeUTCTime = _decodeUTCTime;
const _decodeObjectDescriptor = (el) => {
    return el.objectDescriptor;
};
exports._decodeObjectDescriptor = _decodeObjectDescriptor;
const _decodeAny = (el) => {
    return el;
};
exports._decodeAny = _decodeAny;
class ComponentSpec {
    constructor(name, optional, selector, groupIndex, versionNumber) {
        this.name = name;
        this.optional = optional;
        this.selector = selector;
        this.groupIndex = groupIndex;
        this.versionNumber = versionNumber;
    }
}
exports.ComponentSpec = ComponentSpec;
function _parse_set(set, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, rootComponentTypeList2, unrecognizedExtensionHandler = () => { }, maximumElements) {
    const rootComponents = rootComponentTypeList1.concat(rootComponentTypeList2);
    const components = rootComponents.concat(rootComponentTypeList2);
    const elements = set.set;
    {
        const calculatedMaximumElements = maximumElements === undefined
            ? components.length + 100
            : maximumElements;
        if (elements.length > calculatedMaximumElements) {
            throw new Error(`SET '${set.name}' contained ${elements.length} elements, which exceeds the ` +
                `limit of ${calculatedMaximumElements} permitted elements. This may be a result ` +
                "of a Denial-of-Service (DoS) attack.");
        }
    }
    {
        const encounteredTags = new Set([]);
        elements.forEach((e) => {
            const tag = `${e.tagClass} ${e.tagNumber}`;
            if (encounteredTags.has(tag)) {
                throw new Error(`Duplicate tag '${tagClassName(e.tagClass)} ${e.tagNumber}' in SET '${set.name}'.`);
            }
            encounteredTags.add(tag);
        });
    }
    const encounteredComponents = new Set([]);
    const encounteredExtensionGroups = new Set([]);
    elements.forEach((e, i) => {
        const spec = components.find((cs) => cs.selector(i, elements));
        if (!spec) {
            unrecognizedExtensionHandler(e);
            return;
        }
        if (encounteredComponents.has(spec.name)) {
            throw new Error(`SET '${set.name}' contained more than one '${spec.name}' component.`);
        }
        encounteredComponents.add(spec.name);
        if (spec.groupIndex !== undefined) {
            encounteredExtensionGroups.add(spec.groupIndex);
        }
        e.name = spec.name;
        if (spec.name in decodingCallbacks) {
            decodingCallbacks[spec.name](e, spec.name);
        }
        else {
            unrecognizedExtensionHandler(e);
        }
    });
    const missingRequiredComponents = [];
    rootComponents
        .filter((c) => !c.optional)
        .forEach((c) => {
        if (!encounteredComponents.has(c.name)) {
            missingRequiredComponents.push(c.name);
        }
    });
    Array.from(encounteredExtensionGroups).forEach((exg) => {
        extensionAdditionsList
            .filter((c) => c.groupIndex === exg && !c.optional)
            .forEach((c) => {
            if (!encounteredComponents.has(c.name)) {
                missingRequiredComponents.push(c.name);
            }
        });
    });
    if (missingRequiredComponents.length > 0) {
        throw new Error(`SET '${set.name}' missing these required components: ${missingRequiredComponents.join(", ")}.`);
    }
}
exports._parse_set = _parse_set;
function _parse_component_type_list(componentTypeList, decodingCallbacks, elements, isExtensionAdditionsList) {
    let e = 0;
    let s = 0;
    let currentGroup = undefined;
    while (s < componentTypeList.length) {
        const element = elements[e];
        const spec = componentTypeList[s];
        if (!element) {
            if (spec.optional) {
                s++;
                continue;
            }
            else if (isExtensionAdditionsList) {
                if (spec.groupIndex !== undefined &&
                    spec.groupIndex <= (currentGroup || Infinity)) {
                    throw new asn1_ts_1.ASN1ConstructionError(`Missing required extension '${spec.name}' in SEQUENCE.`);
                }
                else {
                    s++;
                    continue;
                }
            }
            else {
                throw new asn1_ts_1.ASN1ConstructionError(`Missing required component '${spec.name}' in SEQUENCE.`);
            }
        }
        if (spec.selector(e, elements)) {
            element.name = spec.name;
            if (spec.name in decodingCallbacks) {
                decodingCallbacks[spec.name](element, spec.name);
            }
            if (spec.groupIndex !== undefined) {
                currentGroup = spec.groupIndex;
            }
            e++;
        }
        else if (!spec.optional) {
            throw new Error(`Component '${spec.name}' missing from SEQUENCE.`);
        }
        s++;
    }
    return e;
}
exports._parse_component_type_list = _parse_component_type_list;
function _get_possible_initial_components(componentTypeList) {
    let i = 0;
    while (i < componentTypeList.length) {
        if (!componentTypeList[i++].optional) {
            break;
        }
    }
    return componentTypeList.slice(0, i);
}
exports._get_possible_initial_components = _get_possible_initial_components;
function _parse_sequence_with_trailing_rctl(seq, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, rootComponentTypeList2, unrecognizedExtensionHandler = () => { }) {
    const elements = seq.sequence;
    const startOfExtensions = _parse_component_type_list(rootComponentTypeList1, decodingCallbacks, elements, false);
    const possibleInitialRCTL2Components = _get_possible_initial_components(rootComponentTypeList2);
    const rctl2EntirelyOptional = rootComponentTypeList2.every((ct) => ct.optional);
    const extensionsOnwards = elements.slice(startOfExtensions);
    let numberOfExtensionElements = extensionsOnwards.findIndex((e, i) => possibleInitialRCTL2Components.some((pirctl2c) => pirctl2c.selector(i, extensionsOnwards)));
    if (startOfExtensions === -1) {
        if (rctl2EntirelyOptional) {
            numberOfExtensionElements = elements.length - startOfExtensions;
        }
        else {
            throw new Error(`Trailing root component type list for SEQUENCE '${seq.name}' not found.`);
        }
    }
    const startOfRCTL2 = startOfExtensions + numberOfExtensionElements;
    const numberOfExtensionsRead = _parse_component_type_list(extensionAdditionsList, decodingCallbacks, elements.slice(startOfExtensions, startOfRCTL2), true);
    const endOfRecognizedExtensions = startOfExtensions + numberOfExtensionsRead;
    elements
        .slice(endOfRecognizedExtensions, startOfRCTL2)
        .forEach((x) => unrecognizedExtensionHandler(x));
    const numberOfRCTL2ElementsRead = _parse_component_type_list(rootComponentTypeList2, decodingCallbacks, elements.slice(startOfRCTL2), false);
    if (startOfRCTL2 + numberOfRCTL2ElementsRead !== elements.length) {
        throw new Error(`SEQUENCE '${seq.name}' had excess elements at the end.`);
    }
}
exports._parse_sequence_with_trailing_rctl = _parse_sequence_with_trailing_rctl;
function _parse_sequence_without_trailing_rctl(seq, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, unrecognizedExtensionHandler = () => { }) {
    const elements = seq.sequence;
    const startOfExtensions = _parse_component_type_list(rootComponentTypeList1, decodingCallbacks, elements, false);
    const numberOfExtensionsRead = _parse_component_type_list(extensionAdditionsList, decodingCallbacks, elements.slice(startOfExtensions), true);
    const endOfRecognizedExtensions = startOfExtensions + numberOfExtensionsRead;
    elements
        .slice(endOfRecognizedExtensions)
        .forEach((x) => unrecognizedExtensionHandler(x));
}
exports._parse_sequence_without_trailing_rctl = _parse_sequence_without_trailing_rctl;
function _parse_sequence(seq, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, rootComponentTypeList2, unrecognizedExtensionHandler = () => { }) {
    if (rootComponentTypeList2.length > 0) {
        _parse_sequence_with_trailing_rctl(seq, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, rootComponentTypeList2, unrecognizedExtensionHandler);
    }
    else {
        _parse_sequence_without_trailing_rctl(seq, decodingCallbacks, rootComponentTypeList1, extensionAdditionsList, unrecognizedExtensionHandler);
    }
}
exports._parse_sequence = _parse_sequence;
function _encode_choice(choices, elGetter) {
    return function (value) {
        if (value instanceof asn1_ts_1.ASN1Element) {
            return value;
        }
        const key = Object.keys(value)[0];
        if (!key) {
            throw new Error("Empty choice value object.");
        }
        const encoder = choices[key];
        if (!encoder) {
            const keyStr = String(key);
            throw new Error(`Unrecognized alternative '${keyStr}'.`);
        }
        return encoder(value[key], elGetter);
    };
}
exports._encode_choice = _encode_choice;
function _decode_inextensible_choice(choices, anythingElseHandler) {
    return function (el) {
        const result = choices[`${tagClassName(el.tagClass)} ${el.tagNumber}`];
        if (!result) {
            if (anythingElseHandler) {
                const ret = {};
                ret[anythingElseHandler[0]] = anythingElseHandler[1](el);
                return ret;
            }
            else {
                throw new Error(`Unrecognized CHOICE tag '${tagClassName(el.tagClass)} ${el.tagNumber}'.`);
            }
        }
        const [name, decoder] = result;
        const ret = {};
        ret[name] = decoder(el);
        return ret;
    };
}
exports._decode_inextensible_choice = _decode_inextensible_choice;
function _decode_extensible_choice(choices) {
    return function (el) {
        const result = choices[`${tagClassName(el.tagClass)} ${el.tagNumber}`];
        if (!result) {
            return el;
        }
        const [name, decoder] = result;
        const ret = {};
        ret[name] = decoder(el);
        return ret;
    };
}
exports._decode_extensible_choice = _decode_extensible_choice;
function _decodeSequenceOf(decoderGetter) {
    return function (el) {
        return el.sequence.map(decoderGetter());
    };
}
exports._decodeSequenceOf = _decodeSequenceOf;
function _encodeSequenceOf(encoderGetter, outerElGetter) {
    return function (value) {
        const el = outerElGetter(value, outerElGetter);
        el.sequence = value.map((v) => encoderGetter()(v, encoderGetter()));
        el.tagClass = asn1_ts_1.ASN1TagClass.universal;
        el.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
        return el;
    };
}
exports._encodeSequenceOf = _encodeSequenceOf;
function _decodeSetOf(decoderGetter) {
    return function (el) {
        return el.set.map(decoderGetter());
    };
}
exports._decodeSetOf = _decodeSetOf;
function _encodeSetOf(encoderGetter, outerElGetter) {
    return function (value) {
        const el = outerElGetter(value, outerElGetter);
        el.set = value.map((v) => encoderGetter()(v, encoderGetter()));
        el.tagClass = asn1_ts_1.ASN1TagClass.universal;
        el.tagNumber = asn1_ts_1.ASN1UniversalType.set;
        return el;
    };
}
exports._encodeSetOf = _encodeSetOf;
const _encodeBigInt = (value, elGetter) => {
    const el = elGetter(value, elGetter);
    el.octetString = value;
    el.tagClass = asn1_ts_1.ASN1TagClass.universal;
    el.tagNumber = asn1_ts_1.ASN1UniversalType.integer;
    return el;
};
exports._encodeBigInt = _encodeBigInt;
const _decodeBigInt = (el) => {
    return el.octetString;
};
exports._decodeBigInt = _decodeBigInt;
//# sourceMappingURL=__utils.js.map