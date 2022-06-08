import * as CAP_1_2 from "../../../source/CAP-1-2";

export const alertInfoOne = new CAP_1_2.Alert_info_list_info(
    "en-US",
    [CAP_1_2.Alert_info_list_info_category_list_category.fire],
    "the big event",
    [CAP_1_2.Alert_info_list_info_responseType_list_responseType.evacuate],
    CAP_1_2.Alert_info_list_info_urgency.immediate,
    CAP_1_2.Alert_info_list_info_severity.extreme,
    CAP_1_2.Alert_info_list_info_certainty.observed,
    "gamers",
    [
        {
            value: "Information",
            valueName: "TsunamiSystemCategory",
        },
    ],
    "2002-05-24T16:49:00-07:00",
    "2002-05-24T16:49:00-07:00",
    "2002-05-25T16:49:00-07:00",
    "big J",
    "BREAKING NEWS",
    "desc",
    "get out",
    "https://github.com",
    "Jonathan Wilbur",
    [
        {
            value: "50 miles NW of Homer, Alaska",
            valueName: "EventLocationName",
        },
        {
            value: 4.3,
            valueName: "EventPreliminaryMagnitude",
        },
    ],
    [
        {
            mimeType: "application/json",
            resourceDesc: "Event Data as a JSON document",
            uri:
                "http://ntwc.arh.noaa.gov/events/PAAQ/2012/10/14/mbvnpe/1/SEAK71/PAAQ.json",
        },
    ],
    []
);

