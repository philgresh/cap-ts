import * as CAP_1_2 from "../../../dist/node/CAP-1-2";

const identifier = "PAAQ-1-rcz9ap";
const language: CAP_1_2.Language = "en-US";
const sender = "ntwc@noaa.gov";
const sentDatetime = "2022-06-05T00:05:50-00:00";
const status = "Actual";
const msgType = "Alert";
const source = "NTWC";
const scope = "Public";
const codeList = ["IPAWSv1.0"];
const incidents = "rcz9ap";
const categoryList = [CAP_1_2.Alert_info_list_info_category_list_category.geo];
const event = "Tsunami Information";
const responseTypeList = [
    CAP_1_2.Alert_info_list_info_responseType_list_responseType.none,
];
const urgency = CAP_1_2.Alert_info_list_info_urgency.unknown;
const severity = CAP_1_2.Alert_info_list_info_severity.minor;
const certainty = CAP_1_2.Alert_info_list_info_certainty.unlikely;
const audience = "";
const eventCodeList: Array<CAP_1_2.Alert_info_list_info_eventCode_list_eventCode> = [
    new CAP_1_2.Alert_info_list_info_eventCode_list_eventCode(
        "TsunamiSystemCategory",
        "Information"
    ),
];

const effectiveDatetime = "";
const onsetDatetime = "";
const expiresDatetime = "2022-06-05T01:05:50-00:00";
const senderName = "NWS National Tsunami Warning Center Palmer AK";
const headline = "This is a Tsunami Information Statement.";
const description =
    "This is a Tsunami Information Statement.  - Event details: Preliminary magnitude 5.6 (mb) earthquake / Lat: 51.885, Lon: -131.076 at 2022-06-04T23:59:13 UTC An information statement indicates that an earthquake has occurred, but does not pose a tsunami threat, or that a tsunami warning, advisory, or watch has been issued for another section of the ocean.";
const instruction =
    "An earthquake has occurred; a tsunami is not expected.  This will be the only U.S. National Tsunami Warning Center    message issued for this event unless additional information    becomes available.   The location and magnitude are based on preliminary information.   Further information will be issued by the United States    Geological Survey (earthquake.usgs.gov) or the appropriate    regional seismic network.";
const web =
    "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/WEAK53.txt";
const contact = "";
const parameterList: Array<CAP_1_2.Alert_info_list_info_parameter_list_parameter> = [
    {
        valueName: "EventLocationName",
        value: "100 miles SE of Sandspit, Haida Gwaii",
    },
    {
        valueName: "EventPreliminaryMagnitude",
        // @ts-ignore; ts(2322) Type 'number' is not assignable to type 'string'.
        value: 5.6,
    },
    {
        value: "mb",
        valueName: "EventPreliminaryMagnitudeType",
    },
    {
        value: "2022-06-04T23:59:13-00:00",
        valueName: "EventOriginTime",
    },
    {
        value: "13 kilometers",
        valueName: "EventDepth",
    },
    {
        value: "51.885,-131.076 0.000",
        valueName: "EventLatLon",
    },
    {
        value:
            "Public Tsunami Information Statements for AK, BC, and US West Coast",
        valueName: "WEAK53",
    },
    {
        value: "WXR",
        valueName: "EAS-ORG",
    },
];
const resourceList: Array<CAP_1_2.Alert_info_list_info_resource_list_resource> = [
    new CAP_1_2.Alert_info_list_info_resource_list_resource(
        "Event Data as a JSON document",
        "application/json",
        undefined,
        "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/PAAQ.json",
        undefined,
        undefined
    ),
];
const areaList: Array<CAP_1_2.Alert_info_list_info_area_list_area> = [
    new CAP_1_2.Alert_info_list_info_area_list_area(
        "100 miles SE of Sandspit, Haida Gwaii",
        undefined,
        ["51.885,-131.076 0.0"],
        [],
        undefined,
        undefined
    ),
];

export const alertInfoObj = {
    language,
    category: ["Geo"],
    event,
    responseType: ["None"],
    urgency: "Unknown",
    severity: "Minor",
    certainty: "Unlikely",
    audience,
    eventCode: eventCodeList,
    effective: effectiveDatetime,
    onset: onsetDatetime,
    expires: expiresDatetime,
    sent: sentDatetime,
    status,
    headline,
    description,
    instruction,
    web,
    contact,
    parameter: parameterList,
    resource: [
        {
            resourceDesc: "Event Data as a JSON document",
            mimeType: "application/json",
            uri:
                "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/PAAQ.json",
        },
    ],
    area: [
        {
            areaDesc: "100 miles SE of Sandspit, Haida Gwaii",
            circle_list: ["51.885,-131.076 0.0"],
        },
    ],
};

export const alertInfoOne = new CAP_1_2.Alert_info_list_info(
    language,
    categoryList,
    event,
    responseTypeList,
    urgency,
    severity,
    certainty,
    audience,
    eventCodeList,
    sentDatetime,
    onsetDatetime,
    expiresDatetime,
    senderName,
    headline,
    description,
    instruction,
    web,
    contact,
    parameterList.map(
        (param) =>
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                param.valueName,
                param.value
            )
    ),
    resourceList.map(
        (resource) =>
            new CAP_1_2.Alert_info_list_info_resource_list_resource(
                resource.resourceDesc,
                resource.mimeType,
                resource.size,
                resource.uri,
                resource.derefUri,
                resource.digest
            )
    ),
    areaList
);

export const mockAlert = new CAP_1_2.Alert(
    identifier,
    sender,
    sentDatetime,
    CAP_1_2._from_string_Alert_status(status),
    CAP_1_2._from_string_Alert_msgType(msgType),
    source,
    CAP_1_2._from_string_Alert_scope(scope),
    "",
    "",
    codeList,
    "",
    "",
    incidents,
    [alertInfoOne],
    []
);

