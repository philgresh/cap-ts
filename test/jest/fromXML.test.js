import fs from "fs";
import path from "path";
import * as CAP_1_2 from "../../source/CAP-1-2";
import { alertInfoFromXML, validateDateTime } from "../../source/fromXML";
import { alertInfoOne } from "./mock_data/mockData";

const testXMLPath = path.resolve(__dirname, "./mock_data/mockXML.test.xml");

const readXML = () => fs.readFileSync(testXMLPath, { encoding: "utf-8" });

describe("fromXML", () => {
    it("creates an Alert instance from an XML", async (done) => {
        const xml = readXML();
        let alert;
        let err;
        try {
            alert = await CAP_1_2.Alert.fromXML(xml);
        } catch (e) {
            err = e;
        }
        expect(err).toBeUndefined();
        expect(alert).not.toBeUndefined();
        expect(alert.identifier).toBe("PAAQ-1-mbvnpe");
        expect(alert.sender).toBe("ntwc@noaa.gov");
        expect(alert.sent).toBe("2012-10-14T10:01:22-00:00");
        expect(alert.status).toBe(CAP_1_2.Alert_status_actual);
        expect(alert.msgType).toBe(CAP_1_2.Alert_msgType_alert);
        expect(alert.source).toBe("WCATWC");
        expect(alert.scope).toBe(CAP_1_2.Alert_scope_public_);
        expect(alert.restriction).toBe("");
        expect(alert.addresses).toBe("");
        expect(alert.code_list?.[0]).toBe("profile:CAP-TSU:1.1");
        expect(alert.note).toBe("");
        expect(alert.references).toBe("");
        expect(alert.incidents).toBe("mbvnpe");
        expect(alert.elem_list).toEqual([]);
        expect(alert.info_list?.length).toBe(1);

        const info = alert.info_list?.[0] ?? CAP_1_2.Alert_info_list_info;
        expect(info?.language).toBe("en-US");
        expect(info?.category_list?.length).toBe(1);
        expect(info?.category_list?.[0]).toBe(
            CAP_1_2.Alert_info_list_info_category_list_category_geo
        );
        expect(info?.event).toBe("Tsunami");
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
        expect(info?.effective).toBe("2012-10-14T10:01:22-00:00");
        expect(info?.onset).toBe("");
        expect(info?.expires).toBe("");
        expect(info?.senderName).toBe(
            "NWS West Coast/Alaska Tsunami Warning Center Palmer AK"
        );
        expect(info?.headline).toBe("This is a tsunami information statement.");
        expect(info?.description).toBe(
            "This is a tsunami information statement.  - Event details: Preliminary magnitude 4.3 (Ml) earthquake / Lat: 60.084, Lon: -152.489 at 2012-10-14T09:58:26Z An information statement indicates that an earthquake has occurred, but does not pose a tsunami threat, or that a tsunami warning, advisory, or watch has been issued for another section of the ocean."
        );
        expect(info?.instruction).toBe(
            "Evaluation:   There is NO tsunami danger from this earthquake.This will be the only WCATWC message issued for this event. The location and magnitude are based on preliminary information. Further information will be issued by the United States Geological Survey - earthquake.usgs.gov - or the appropriate regional seismic network."
        );
        expect(info?.web).toBe(
            "http://ntwc.arh.noaa.gov/events/PAAQ/2012/10/14/mbvnpe/1/SEAK71/SEAK71.txt"
        );
        expect(info?.contact).toBe("");

        const expectedParameterList = [
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventLocationName",
                "50 miles NW of Homer, Alaska"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventPreliminaryMagnitude",
                4.3
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventPreliminaryMagnitudeType",
                "Ml"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventOriginTime",
                "2012-10-14T09:58:26-00:00"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventDepth",
                "79 kilometers"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "EventLatLon",
                "60.084,-152.489 0.000"
            ),
            new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "SEAK71",
                "Tsunami Seismic Information Statements for Alaska"
            ),
        ].sort();

        expect(info?.parameter_list?.sort()).toEqual(expectedParameterList);

        done();
    });
});

describe("alertInfoFromXML", () => {
    const sent = "2022-06-08T12:55:00-07:00";

    const validAlertInfo = {
        language: "en-US",
        category: ["Fire"],
        event: "the big event",
        responseType: ["Evacuate"],
        urgency: "Immediate",
        severity: "Extreme",
        certainty: "Observed",
        audience: "gamers",
        eventCode: [
            {
                valueName: "TsunamiSystemCategory",
                value: "Information",
            },
        ],
        effective: "2002-05-24T16:49:00-07:00",
        onset: "2002-05-24T16:49:00-07:00",
        expires: "2002-05-25T16:49:00-07:00",
        senderName: "big J",
        headline: "BREAKING NEWS",
        description: "desc",
        instruction: "get out",
        web: "https://github.com",
        contact: "Jonathan Wilbur",
        parameter: [
            {
                valueName: "EventLocationName",
                value: "50 miles NW of Homer, Alaska",
            },
            {
                valueName: "EventPreliminaryMagnitude",
                value: 4.3,
            },
        ],
        resource: [
            {
                resourceDesc: "Event Data as a JSON document",
                mimeType: "application/json",
                uri:
                    "http://ntwc.arh.noaa.gov/events/PAAQ/2012/10/14/mbvnpe/1/SEAK71/PAAQ.json",
            },
        ],
    };

    it("cannot accept an empty object", async (done) => {
        let output;
        let err;
        try {
            output = await alertInfoFromXML({}, sent);
        } catch (e) {
            err = `${e}`;
        }
        expect(output).toBeUndefined();
        expect(err).toBe("Alert info argument cannot be empty.");
        done();
    });

    it("returns an `Alert_info_list_info` object when the given argument is valid", async (done) => {
        let output;
        let err;
        try {
            output = await alertInfoFromXML(validAlertInfo, sent);
        } catch (e) {
            err = `${e}`;
        }

        expect(output).toEqual(alertInfoOne);
        expect(err).toBeUndefined();
        done();
    });

    /**
     * `testAlertInfoFromXML` is a test-only helper. It returns an output value if the given `info` argument is valid,
     * otherwise it returns the error as a string.
     */
    const testAlertInfoFromXML = async (testAlertInfo) => {
        let output;
        let err;
        try {
            output = await alertInfoFromXML(
                { ...validAlertInfo, ...testAlertInfo },
                sent
            );
        } catch (e) {
            err = `${e}`;
        }

        return { output, error: err };
    };

    describe("category", () => {
        // Per CAP 1.2, category is a required attribute with enumerated values that may have multiple instances
        it("returns a rejected Promise if a category is missing", async (done) => {
            const info = {
                category: [],
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info category cannot be empty.");
            done();
        });

        it("returns a rejected Promise if a category is not an enumerated value", async (done) => {
            const invalidInfo = {
                category: ["not-a-valid-value"],
            };

            const { output, error } = await testAlertInfoFromXML(invalidInfo);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info category: 'not-a-valid-value'."
            );
            done();
        });
    });

    describe("event", () => {
        // Per CAP 1.2, event is a required attribute
        it("returns a rejected Promise if an event is missing", async (done) => {
            const info = {
                event: undefined,
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info event cannot be empty.");
            done();
        });

        it("returns a rejected Promise if an event is an empty string", async (done) => {
            const info = {
                event: "",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info event cannot be empty.");
            done();
        });
    });

    describe("responseType", () => {
        // Per CAP 1.2, responseType is an optional attribute with enumerated values that may have multiple instances
        it("returns a rejected Promise if a responseType is not an enumerated value", async (done) => {
            const info = {
                responseType: ["not-a-valid-value"],
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info responseType: 'not-a-valid-value'."
            );
            done();
        });
    });

    describe("urgency", () => {
        // Per CAP 1.2, urgency is an required attribute with enumerated values
        it("returns a rejected Promise if a urgency is missing", async (done) => {
            const info = {
                urgency: undefined,
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info urgency cannot be empty.");
            done();
        });

        it("returns a rejected Promise if a urgency is not an enumerated value", async (done) => {
            const info = {
                urgency: "not-a-valid-value",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info urgency 'not-a-valid-value'."
            );
            done();
        });
    });

    describe("severity", () => {
        // Per CAP 1.2, severity is an required attribute with enumerated values
        it("returns a rejected Promise if a severity is missing", async (done) => {
            const info = {
                severity: undefined,
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info severity cannot be empty.");
            done();
        });

        it("returns a rejected Promise if a severity is not an enumerated value", async (done) => {
            const info = {
                severity: "not-a-valid-value",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info severity 'not-a-valid-value'."
            );
            done();
        });
    });

    describe("certainty", () => {
        // Per CAP 1.2, certainty is an required attribute with enumerated values
        it("returns a rejected Promise if a certainty is missing", async (done) => {
            const info = {
                certainty: undefined,
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe("Alert info certainty cannot be empty.");
            done();
        });

        it("returns a rejected Promise if a certainty is not an enumerated value", async (done) => {
            const info = {
                certainty: "not-a-valid-value",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info certainty 'not-a-valid-value'."
            );
            done();
        });

        it("handles deprecated CAP1.0 value of 'very likely'", async (done) => {
            const info = {
                certainty: "Very Likely",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output.certainty).toBe(
                CAP_1_2.Alert_info_list_info_certainty.likely
            );
            expect(error).toBeUndefined();
            done();
        });
    });

    describe("eventCode", () => {
        // Per CAP 1.2, eventCode is an optional attribute with a shape of `{ valueName: string, value: string }`
        it("returns a rejected Promise if a eventCode is not the correct shape", async (done) => {
            const info = {
                eventCode: ["not-a-valid-shape"],
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info eventCode valueName: 'undefined'."
            );
            done();
        });
    });

    describe("`effective` datetime", () => {
        // Per CAP 1.2, if `effective` is not included, the effective time SHALL be assumed to be the same as in
        // alert.sent, which is validated within `alertFromXML`.
        it("returns a rejected Promise if the `effective` datetime is invalid", async (done) => {
            const info = {
                effective: "not-a-valid-datetime",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info effective datetime: 'not-a-valid-datetime'."
            );
            done();
        });

        it("falls back to the given `sent` datetime if `effective` datetime is undefined", async (done) => {
            const info = {
                effective: undefined,
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output.effective).toBe(sent);
            expect(error).toBeUndefined();
            done();
        });
    });

    describe("`onset` datetime", () => {
        it("returns a rejected Promise if the `onset` datetime is invalid", async (done) => {
            const info = {
                onset: "not-a-valid-datetime",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info onset datetime: 'not-a-valid-datetime'."
            );
            done();
        });
    });

    describe("`expires` datetime", () => {
        it("returns a rejected Promise if the `expires` datetime is invalid", async (done) => {
            const info = {
                expires: "not-a-valid-datetime",
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info expires datetime: 'not-a-valid-datetime'."
            );
            done();
        });
    });

    describe("parameters", () => {
        // Per CAP 1.2, parameters is an optional attribute with a shape of `{ valueName: string, value: string }`
        it("returns a rejected Promise if a parameters is not the correct shape", async (done) => {
            const info = {
                parameter: ["not-a-valid-shape"],
            };

            const { output, error } = await testAlertInfoFromXML(info);
            expect(output).toBeUndefined();
            expect(error).toBe(
                "Invalid alert info parameter valueName: 'undefined'."
            );
            done();
        });
    });
});

describe("validateDateTime", () => {
    it("returns a rejected Promise if a non-date argument is given", async (done) => {
        let err;
        let output;
        try {
            output = await validateDateTime("just a string");
        } catch (e) {
            err = e;
        }

        expect(output).toBeUndefined();
        expect(err).not.toBeUndefined();
        expect(err).toBe("Unable to parse datetime 'just a string'.");
        done();
    });

    it("returns a rejected Promise if a Zulu-time offset is given", async (done) => {
        let err;
        let output;
        try {
            output = await validateDateTime("2002-05-24T16:49:00Z");
        } catch (e) {
            err = e;
        }

        expect(output).toBeUndefined();
        expect(err).not.toBeUndefined();
        expect(err).toBe("Invalid datetime '2002-05-24T16:49:00Z'.");
        done();
    });

    it("returns a resolved Promise if the given datetime is valid", async (done) => {
        let err;
        let output;
        try {
            output = await validateDateTime("2002-05-24T16:49:00-00:00");
        } catch (e) {
            err = e;
        }

        expect(output).toEqual("2002-05-24T16:49:00-00:00");
        expect(err).toBeUndefined();
        done();
    });
});

