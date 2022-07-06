import fs from "fs";
import path from "path";
import * as CAP_1_2 from "../../dist/node/CAP-1-2";
import { alertInfoFromXML, validateDateTime } from "../../dist/node/fromXML";
import { alertInfoOne, alertInfoObj } from "./mock_data/mockData";

const testXMLPath = path.resolve(__dirname, "./mock_data/mockXML.test.xml");

const readXML = () => fs.readFileSync(testXMLPath, { encoding: "utf-8" });

describe("fromXML", () => {
    it("creates an Alert instance from an XML", () => {
        const xml = readXML();
        let alert;
        let err;
        try {
            alert = CAP_1_2.Alert.fromXML(xml);
        } catch (e) {
            err = e;
        }
        expect(err).toBeUndefined();
        expect(alert).not.toBeUndefined();
        expect(alert.identifier).toBe("PAAQ-1-rcz9ap");
        expect(alert.sender).toBe("ntwc@noaa.gov");
        expect(alert.sent).toBe("2022-06-05T00:05:50-00:00");
        expect(alert.status).toBe(CAP_1_2.Alert_status_actual);
        expect(alert.msgType).toBe(CAP_1_2.Alert_msgType_alert);
        expect(alert.source).toBe("NTWC");
        expect(alert.scope).toBe(CAP_1_2.Alert_scope_public_);
        expect(alert.restriction).toBe("");
        expect(alert.addresses).toBe("");
        expect(alert.code_list?.[0]).toBe("IPAWSv1.0");
        expect(alert.note).toBe("");
        expect(alert.references).toBe("");
        expect(alert.incidents).toBe("rcz9ap");
        expect(alert.elem_list).toEqual([]);
        expect(alert.info_list?.length).toBe(1);
        const info = alert.info_list?.[0] ?? CAP_1_2.Alert_info_list_info;
        expect(info?.language).toBe("en-US");
        expect(info?.category_list?.length).toBe(1);
        expect(info?.category_list?.[0]).toBe(
            CAP_1_2.Alert_info_list_info_category_list_category_geo
        );
        expect(info?.event).toBe("Tsunami Information");
        expect(info?.responseType_list?.length).toBe(1);
        expect(info?.responseType_list?.[0]).toBe(
            CAP_1_2.Alert_info_list_info_responseType_list_responseType_none
        );
        expect(info?.urgency).toBe(
            CAP_1_2.Alert_info_list_info_urgency_unknown
        );
        expect(info?.severity).toBe(
            CAP_1_2.Alert_info_list_info_severity_minor
        );
        expect(info?.certainty).toBe(
            CAP_1_2.Alert_info_list_info_certainty_unlikely
        );
        expect(info?.audience).toBe("");
        expect(info?.eventCode_list?.length).toBe(1);
        expect(info?.eventCode_list?.[0]).toEqual({
            valueName: "TsunamiSystemCategory",
            value: "Information",
        });
        expect(info?.effective).toBe("2022-06-05T00:05:50-00:00");
        expect(info?.onset).toBe("");
        expect(info?.expires).toBe("2022-06-05T01:05:50-00:00");
        expect(info?.senderName).toBe(
            "NWS National Tsunami Warning Center Palmer AK"
        );
        expect(info?.headline).toBe("This is a Tsunami Information Statement.");
        expect(info?.description).toBe(
            "This is a Tsunami Information Statement.  - Event details: Preliminary magnitude 5.6 (mb) earthquake / Lat: 51.885, Lon: -131.076 at 2022-06-04T23:59:13 UTC An information statement indicates that an earthquake has occurred, but does not pose a tsunami threat, or that a tsunami warning, advisory, or watch has been issued for another section of the ocean."
        );
        expect(info?.instruction).toBe(
            "An earthquake has occurred; a tsunami is not expected.  This will be the only U.S. National Tsunami Warning Center    message issued for this event unless additional information    becomes available.   The location and magnitude are based on preliminary information.   Further information will be issued by the United States    Geological Survey (earthquake.usgs.gov) or the appropriate    regional seismic network."
        );
        expect(info?.web).toBe(
            "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/WEAK53.txt"
        );
        expect(info?.contact).toBe("");
        const expectedParameterList = [
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventLocationName",
                "100 miles SE of Sandspit, Haida Gwaii"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventPreliminaryMagnitude",
                5.6
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventPreliminaryMagnitudeType",
                "mb"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventOriginTime",
                "2022-06-04T23:59:13-00:00"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventDepth",
                "13 kilometers"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventLatLon",
                "51.885,-131.076 0.000"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "WEAK53",
                "Public Tsunami Information Statements for AK, BC, and US West Coast"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EAS-ORG",
                "WXR"
            ),
        ].sort();
        expect(info?.parameter_list?.sort()).toEqual(expectedParameterList);
    });
});

describe("alertInfoFromXML", () => {
    const sent = "2022-06-08T12:55:00-07:00";

    it("cannot accept an empty object", () => {
        let output;
        let err;
        try {
            output = alertInfoFromXML({}, sent);
        } catch (e) {
            err = e.message;
        }
        expect(output).toBeUndefined();
        expect(err).toBe("Alert info argument cannot be empty.");
    });

    it("returns an `Alert_info_list_info` object when the given argument is valid", () => {
        let output;
        let err;
        try {
            output = alertInfoFromXML(alertInfoObj, sent);
        } catch (e) {
            err = e.message;
        }

        expect(err).toBeUndefined();
        expect(output).toEqual(alertInfoOne);
    });

    /**
     * `testAlertInfoFromXML` is a test-only helper. It returns an output value if the given `info` argument is valid,
     * otherwise it returns the error as a string.
     */
    const testAlertInfoFromXML = (testAlertInfo) => {
        let output;
        let err;
        try {
            output = alertInfoFromXML(
                { ...alertInfoObj, ...testAlertInfo },
                sent
            );
        } catch (e) {
            err = e.message;
        }
        return { output, error: err };
    };

    describe("category", () => {
        // Per CAP 1.2, category is a required attribute with enumerated values that may have multiple instances
        it("throws an error if a category is missing", () => {
            const info = {
                category: [],
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info category cannot be empty.");
        });

        it("throws an error if a category is not an enumerated value", () => {
            const invalidInfo = {
                category: ["not-a-valid-value"],
            };

            const { output, error } = testAlertInfoFromXML(invalidInfo);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info category: 'not-a-valid-value'."
            );
        });
    });

    describe("event", () => {
        // Per CAP 1.2, event is a required attribute
        it("throws an error if an event is missing", () => {
            const info = {
                event: undefined,
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info event cannot be empty.");
        });

        it("throws an error if an event is an empty string", () => {
            const info = {
                event: "",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info event cannot be empty.");
        });
    });

    describe("responseType", () => {
        // Per CAP 1.2, responseType is an optional attribute with enumerated values that may have multiple instances
        it("throws an error if a responseType is not an enumerated value", () => {
            const info = {
                responseType: ["not-a-valid-value"],
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info responseType: 'not-a-valid-value'."
            );
        });
    });

    describe("urgency", () => {
        // Per CAP 1.2, urgency is an required attribute with enumerated values
        it("throws an error if a urgency is missing", () => {
            const info = {
                urgency: undefined,
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info urgency cannot be empty.");
        });

        it("throws an error if a urgency is not an enumerated value", () => {
            const info = {
                urgency: "not-a-valid-value",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info urgency 'not-a-valid-value'."
            );
        });
    });

    describe("severity", () => {
        // Per CAP 1.2, severity is an required attribute with enumerated values
        it("throws an error if a severity is missing", () => {
            const info = {
                severity: undefined,
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info severity cannot be empty.");
        });

        it("throws an error if a severity is not an enumerated value", () => {
            const info = {
                severity: "not-a-valid-value",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info severity 'not-a-valid-value'."
            );
        });
    });

    describe("certainty", () => {
        // Per CAP 1.2, certainty is an required attribute with enumerated values
        it("throws an error if a certainty is missing", () => {
            const info = {
                certainty: undefined,
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info certainty cannot be empty.");
        });

        it("throws an error if a certainty is not an enumerated value", () => {
            const info = {
                certainty: "not-a-valid-value",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info certainty 'not-a-valid-value'."
            );
        });

        it("handles deprecated CAP1.0 value of 'very likely'", () => {
            const info = {
                certainty: "Very Likely",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output.certainty).toBe(
                CAP_1_2.Alert_info_list_info_certainty.likely
            );
            expect(error).toBeUndefined();
        });
    });

    describe("eventCode", () => {
        // Per CAP 1.2, eventCode is an optional attribute with a shape of `{ valueName: string, value: string }`
        it("throws an error if a eventCode is not the correct shape", () => {
            const info = {
                eventCode: ["not-a-valid-shape"],
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info eventCode valueName: 'undefined'."
            );
        });
    });

    describe("`effective` datetime", () => {
        // Per CAP 1.2, if `effective` is not included, the effective time SHALL be assumed to be the same as in
        // alert.sent, which is validated within `alertFromXML`.
        it("throws an error if the `effective` datetime is invalid", () => {
            const info = {
                effective: "not-a-valid-datetime",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info effective datetime: 'not-a-valid-datetime'."
            );
        });

        it("falls back to the given `sent` datetime if `effective` datetime is undefined", () => {
            const info = {
                effective: undefined,
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output.effective).toBe(sent);
            expect(error).toBeUndefined();
        });
    });

    describe("`onset` datetime", () => {
        it("throws an error if the `onset` datetime is invalid", () => {
            const info = {
                onset: "not-a-valid-datetime",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info onset datetime: 'not-a-valid-datetime'."
            );
        });
    });

    describe("`expires` datetime", () => {
        it("throws an error if the `expires` datetime is invalid", () => {
            const info = {
                expires: "not-a-valid-datetime",
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info expires datetime: 'not-a-valid-datetime'."
            );
        });
    });

    describe("parameters", () => {
        // Per CAP 1.2, parameters is an optional attribute with a shape of `{ valueName: string, value: string }`
        it("throws an error if a parameter is not the correct shape", () => {
            const info = {
                parameter: ["not-a-valid-shape"],
            };

            const { output, error } = testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info parameter valueName: 'undefined'."
            );
        });
    });
});

describe("validateDateTime", () => {
    it("throws an error if a non-date argument is given", () => {
        let err;
        let output;
        try {
            output = validateDateTime("just a string");
        } catch (e) {
            err = e;
        }

        expect(output).toBeUndefined();
        expect(err).not.toBeUndefined();
        expect(err.message).toBe("Unable to parse datetime 'just a string'.");
    });

    it("throws an error if a Zulu-time offset is given", () => {
        let err;
        let output;
        try {
            output = validateDateTime("2002-05-24T16:49:00Z");
        } catch (e) {
            err = e;
        }

        expect(output).toBeUndefined();
        expect(err).not.toBeUndefined();
        expect(err.message).toBe("Invalid datetime '2002-05-24T16:49:00Z'.");
    });

    it("returns a datetime string if the given datetime is valid", () => {
        let err;
        let output;
        try {
            output = validateDateTime("2002-05-24T16:49:00-00:00");
        } catch (e) {
            err = e;
        }

        expect(output.toString()).toEqual("2002-05-24T16:49:00-00:00");
        expect(err).toBeUndefined();
    });
});

