import { ASN1Construction, ASN1Element, ASN1TagClass, BIT_STRING, BMPString, BOOLEAN, CharacterString, DATE, DATE_TIME, DURATION, EMBEDDED_PDV, ENUMERATED, EXTERNAL, GeneralizedTime, GeneralString, GraphicString, IA5String, INSTANCE_OF, INTEGER, ISO646String, NULL, NumericString, ObjectDescriptor, OBJECT_IDENTIFIER, OCTET_STRING, OID_IRI, PrintableString, REAL, RELATIVE_OID, RELATIVE_OID_IRI, SEQUENCE, SEQUENCE_OF, SET, SET_OF, T61String, TeletexString, TIME, TIME_OF_DAY, UniversalString, UTCTime, UTF8String, VideotexString, VisibleString } from "asn1-ts";
export declare const itu_t: number;
export declare const itu_r: number;
export declare const ccitt: number;
export declare const iso: number;
export declare const joint_iso_itu_t: number;
export declare const joint_iso_ccitt: number;
export interface ASN1ElementGetter<T> {
    (value?: T): ASN1Element;
}
export interface ASN1Encoder<T> {
    (value: T, elGetter: ASN1Encoder<T>): ASN1Element;
}
export interface ASN1Decoder<T> {
    (el: ASN1Element): T;
}
export interface TagValidator {
    (index: number, elements: ASN1Element[]): boolean;
}
export declare type Selection<T, K extends string> = T extends Record<K, any> ? T[K] : never;
export declare type AllUnionMemberKeys<T> = T extends any ? keyof T : never;
export declare type InextensibleChoice<T> = T;
export declare type ExtensibleChoice<T> = T | ASN1Element;
export declare type DecodingCallback = (el: ASN1Element, name?: string) => void;
export declare type DecodingMap = Record<string, DecodingCallback>;
export declare function hasTag(tagClass: ASN1TagClass, tagNumber: number): TagValidator;
export declare function hasAnyTag(index: number, elements: ASN1Element[]): boolean;
export declare function hasTagClass(tagClass: ASN1TagClass): TagValidator;
export declare function hasTagNumberIn(tagNumbers: number[]): TagValidator;
export declare function tagClassName(tagClass: ASN1TagClass): string;
export declare function deepEq(value1: any, value2: any): boolean;
export declare function isDefault(defaultValue: any): (actualValue: any) => boolean;
export declare function present(value: any): boolean;
export declare function _encode_explicit(class_: ASN1TagClass | undefined, tag: number | undefined, encoderGetter: () => ASN1Encoder<any>, outer: ASN1Encoder<any>): ASN1Encoder<any>;
export declare function _decode_explicit<T>(decoderGetter: () => (el: ASN1Element) => T): ASN1Decoder<T>;
export declare function _encode_implicit(class_: ASN1TagClass | undefined, tag: number | undefined, encoderGetter: () => ASN1Encoder<any>, outer: ASN1Encoder<any>): ASN1Encoder<any>;
export declare function _decode_implicit<T>(decoderGetter: () => (el: ASN1Element) => T): ASN1Decoder<T>;
export declare function _tagClass(class_: ASN1TagClass, encoderGetter: () => () => ASN1Element): ASN1Element;
export declare function _construction(con: ASN1Construction, encoderGetter: () => () => ASN1Element): ASN1Element;
export declare function _tagNumber(tag: number, encoderGetter: () => () => ASN1Element): ASN1Element;
export declare const BER: ASN1Encoder<any>;
export declare const CER: ASN1Encoder<any>;
export declare const DER: ASN1Encoder<any>;
export declare const _encodeBitString: ASN1Encoder<BIT_STRING>;
export declare const _encodeBoolean: ASN1Encoder<BOOLEAN>;
export declare const _encodeUnrestrictedCharacterString: ASN1Encoder<CharacterString>;
export declare const _encodeDate: ASN1Encoder<DATE>;
export declare const _encodeDateTime: ASN1Encoder<DATE_TIME>;
export declare const _encodeDuration: ASN1Encoder<DURATION>;
export declare const _encodeEmbeddedPDV: ASN1Encoder<EMBEDDED_PDV>;
export declare const _encodeEnumerated: ASN1Encoder<ENUMERATED>;
export declare const _encodeExternal: ASN1Encoder<EXTERNAL>;
export declare const _encodeInstanceOf: ASN1Encoder<INSTANCE_OF>;
export declare const _encodeInteger: ASN1Encoder<INTEGER>;
export declare const _encodeIRI: ASN1Encoder<OID_IRI>;
export declare const _encodeNull: ASN1Encoder<NULL>;
export declare const _encodeObjectIdentifier: ASN1Encoder<OBJECT_IDENTIFIER>;
export declare const _encodeOctetString: ASN1Encoder<OCTET_STRING>;
export declare const _encodeReal: ASN1Encoder<REAL>;
export declare const _encodeRelativeIRI: ASN1Encoder<RELATIVE_OID_IRI>;
export declare const _encodeRelativeOID: ASN1Encoder<RELATIVE_OID>;
export declare const _encodeSequence: ASN1Encoder<SEQUENCE<ASN1Element>>;
export declare const _encodeSet: ASN1Encoder<SET<ASN1Element>>;
export declare const _encodeTime: ASN1Encoder<TIME>;
export declare const _encodeTimeOfDay: ASN1Encoder<TIME_OF_DAY>;
export declare const _encodeBMPString: ASN1Encoder<BMPString>;
export declare const _encodeGeneralString: ASN1Encoder<GeneralString>;
export declare const _encodeGraphicString: ASN1Encoder<GraphicString>;
export declare const _encodeIA5String: ASN1Encoder<IA5String>;
export declare const _encodeISO646String: ASN1Encoder<ISO646String>;
export declare const _encodeNumericString: ASN1Encoder<NumericString>;
export declare const _encodePrintableString: ASN1Encoder<PrintableString>;
export declare const _encodeTeletexString: ASN1Encoder<TeletexString>;
export declare const _encodeT61String: ASN1Encoder<T61String>;
export declare const _encodeUniversalString: ASN1Encoder<UniversalString>;
export declare const _encodeUTF8String: ASN1Encoder<UTF8String>;
export declare const _encodeVideotexString: ASN1Encoder<VideotexString>;
export declare const _encodeVisibleString: ASN1Encoder<VisibleString>;
export declare const _encodeGeneralizedTime: ASN1Encoder<GeneralizedTime>;
export declare const _encodeUTCTime: ASN1Encoder<UTCTime>;
export declare const _encodeObjectDescriptor: ASN1Encoder<ObjectDescriptor>;
export declare const _encodeAny: ASN1Encoder<ASN1Element>;
export declare const _decodeBitString: ASN1Decoder<BIT_STRING>;
export declare const _decodeBoolean: ASN1Decoder<BOOLEAN>;
export declare const _decodeUnrestrictedCharacterString: ASN1Decoder<CharacterString>;
export declare const _decodeDate: ASN1Decoder<DATE>;
export declare const _decodeDateTime: ASN1Decoder<DATE_TIME>;
export declare const _decodeDuration: ASN1Decoder<DURATION>;
export declare const _decodeEmbeddedPDV: ASN1Decoder<EMBEDDED_PDV>;
export declare const _decodeEnumerated: ASN1Decoder<ENUMERATED>;
export declare const _decodeExternal: ASN1Decoder<EXTERNAL>;
export declare const _decodeInstanceOf: ASN1Decoder<INSTANCE_OF>;
export declare const _decodeInteger: ASN1Decoder<INTEGER>;
export declare const _decodeIRI: ASN1Decoder<OID_IRI>;
export declare const _decodeNull: ASN1Decoder<NULL>;
export declare const _decodeObjectIdentifier: ASN1Decoder<OBJECT_IDENTIFIER>;
export declare const _decodeOctetString: ASN1Decoder<OCTET_STRING>;
export declare const _decodeReal: ASN1Decoder<REAL>;
export declare const _decodeRelativeIRI: ASN1Decoder<RELATIVE_OID_IRI>;
export declare const _decodeRelativeOID: ASN1Decoder<RELATIVE_OID>;
export declare const _decodeSequence: ASN1Decoder<SEQUENCE<ASN1Element>>;
export declare const _decodeSet: ASN1Decoder<SET<ASN1Element>>;
export declare const _decodeTime: ASN1Decoder<TIME>;
export declare const _decodeTimeOfDay: ASN1Decoder<TIME_OF_DAY>;
export declare const _decodeBMPString: ASN1Decoder<BMPString>;
export declare const _decodeGeneralString: ASN1Decoder<GeneralString>;
export declare const _decodeGraphicString: ASN1Decoder<GraphicString>;
export declare const _decodeIA5String: ASN1Decoder<IA5String>;
export declare const _decodeISO646String: ASN1Decoder<IA5String>;
export declare const _decodeNumericString: ASN1Decoder<NumericString>;
export declare const _decodePrintableString: ASN1Decoder<PrintableString>;
export declare const _decodeTeletexString: ASN1Decoder<TeletexString>;
export declare const _decodeT61String: ASN1Decoder<T61String>;
export declare const _decodeUniversalString: ASN1Decoder<UniversalString>;
export declare const _decodeUTF8String: ASN1Decoder<UTF8String>;
export declare const _decodeVideotexString: ASN1Decoder<VideotexString>;
export declare const _decodeVisibleString: ASN1Decoder<VisibleString>;
export declare const _decodeGeneralizedTime: ASN1Decoder<GeneralizedTime>;
export declare const _decodeUTCTime: ASN1Decoder<UTCTime>;
export declare const _decodeObjectDescriptor: ASN1Decoder<ObjectDescriptor>;
export declare const _decodeAny: ASN1Decoder<ASN1Element>;
export declare class ComponentSpec {
    readonly name: string;
    readonly optional: boolean;
    readonly selector: TagValidator;
    readonly groupIndex?: number | undefined;
    readonly versionNumber?: number | undefined;
    constructor(name: string, optional: boolean, selector: TagValidator, groupIndex?: number | undefined, versionNumber?: number | undefined);
}
export declare function _parse_set(set: ASN1Element, decodingCallbacks: DecodingMap, rootComponentTypeList1: ComponentSpec[], extensionAdditionsList: ComponentSpec[], rootComponentTypeList2: ComponentSpec[], unrecognizedExtensionHandler?: DecodingCallback, maximumElements?: number): void;
export declare function _parse_component_type_list(componentTypeList: ComponentSpec[], decodingCallbacks: DecodingMap, elements: ASN1Element[], isExtensionAdditionsList: boolean): number;
export declare function _get_possible_initial_components(componentTypeList: ComponentSpec[]): ComponentSpec[];
export declare function _parse_sequence_with_trailing_rctl(seq: ASN1Element, decodingCallbacks: DecodingMap, rootComponentTypeList1: ComponentSpec[], extensionAdditionsList: ComponentSpec[], rootComponentTypeList2: ComponentSpec[], unrecognizedExtensionHandler?: DecodingCallback): void;
export declare function _parse_sequence_without_trailing_rctl(seq: ASN1Element, decodingCallbacks: DecodingMap, rootComponentTypeList1: ComponentSpec[], extensionAdditionsList: ComponentSpec[], unrecognizedExtensionHandler?: DecodingCallback): void;
export declare function _parse_sequence(seq: ASN1Element, decodingCallbacks: DecodingMap, rootComponentTypeList1: ComponentSpec[], extensionAdditionsList: ComponentSpec[], rootComponentTypeList2: ComponentSpec[], unrecognizedExtensionHandler?: DecodingCallback): void;
export declare function _encode_choice<T>(choices: Record<keyof T, ASN1Encoder<T[AllUnionMemberKeys<T>]>>, elGetter: ASN1Encoder<T>): ASN1Encoder<T>;
export declare function _decode_inextensible_choice<T>(choices: Record<string, [
    AllUnionMemberKeys<T>,
    ASN1Decoder<T[AllUnionMemberKeys<T>]>
]>, anythingElseHandler?: [
    AllUnionMemberKeys<T>,
    ASN1Decoder<T[AllUnionMemberKeys<T>]>
]): ASN1Decoder<InextensibleChoice<T>>;
export declare function _decode_extensible_choice<T>(choices: Record<string, [
    AllUnionMemberKeys<T>,
    ASN1Decoder<T[AllUnionMemberKeys<T>]>
]>): ASN1Decoder<ExtensibleChoice<T>>;
export declare type SequenceOfDecoder<T> = ASN1Decoder<SEQUENCE_OF<T>>;
export declare type SetOfDecoder<T> = ASN1Decoder<SET_OF<T>>;
export declare type SequenceOfEncoder<T> = ASN1Encoder<SEQUENCE_OF<T>>;
export declare type SetOfEncoder<T> = ASN1Encoder<SET_OF<T>>;
export declare function _decodeSequenceOf<T>(decoderGetter: () => ASN1Decoder<T>): SequenceOfDecoder<T>;
export declare function _encodeSequenceOf<T>(encoderGetter: () => (value: T, innerElGetter: ASN1Encoder<T>) => ASN1Element, outerElGetter: ASN1Encoder<any>): SequenceOfEncoder<T>;
export declare function _decodeSetOf<T>(decoderGetter: () => (el: ASN1Element) => T): SetOfDecoder<T>;
export declare function _encodeSetOf<T>(encoderGetter: () => (value: T, innerElGetter: ASN1Encoder<T>) => ASN1Element, outerElGetter: ASN1Encoder<any>): SetOfEncoder<T>;
export declare const _encodeBigInt: ASN1Encoder<OCTET_STRING>;
export declare const _decodeBigInt: ASN1Decoder<OCTET_STRING>;
//# sourceMappingURL=__utils.d.ts.map