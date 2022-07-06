import _ from "lodash";
import * as CAP_1_2 from "../../source/CAP-1-2";
import { alertInfoToXML } from "../../source/toXML";
import { alertInfoOne } from "./mock_data/mockData";

describe("alertInfoToXML", () => {
    /**
     * `testAlertInfoToXML` is a test-only helper that returns the output from `alertInfoToXML`
     * given default values and any overrides.
     * @param infoOverride - Partial instance of `Alert_info_list_info`
     * @returns alertInfoToXML output (Record<string, any>)
     */
    const testAlertInfoToXML = (infoOverride) => {
        const infoClone = _.cloneDeep(alertInfoOne);
        _.merge(infoClone, infoOverride);
        return alertInfoToXML(infoClone);
    };

    describe("testAlertInfoToXML", () => {
        it("returns an object", () => {
            const output = testAlertInfoToXML();
            expect(_.isObject(output)).toBe(true);
        });

        it("returns the mock output if no overrides are given", () => {
            const output = testAlertInfoToXML();
            const mockOutput = alertInfoToXML(alertInfoOne);
            expect(output).toEqual(mockOutput);
        });
    });

    it("assigns an `urgency` to the info object", () => {
        const infoOverride = {
            urgency: CAP_1_2.Alert_info_list_info_urgency_immediate,
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.urgency).toBe("Immediate");
    });

    it("assigns a `severity` to the info object", () => {
        const infoOverride = {
            severity: CAP_1_2.Alert_info_list_info_severity_extreme,
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.severity).toBe("Extreme");
    });

    it("assigns a `certainty` to the info object", () => {
        const infoOverride = {
            certainty: CAP_1_2.Alert_info_list_info_certainty_likely,
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.certainty).toBe("Likely");
    });

    it("assigns a `language` to the info object", () => {
        const infoOverride = {
            language: "fr-CA",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.language).toBe("fr-CA");
    });

    it("assigns an `event` to the info object", () => {
        const infoOverride = {
            event: "Fire",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.event).toBe("Fire");
    });

    it("assigns an `audience` to the info object", () => {
        const infoOverride = {
            audience: "Public",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.audience).toBe("Public");
    });

    it("assigns an `effective` datetime to the info object", () => {
        const infoOverride = {
            effective: "2022-06-12T13:00:00-07:00",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.effective).toBe("2022-06-12T13:00:00-07:00");
    });

    it("assigns an `onset` datetime to the info object", () => {
        const infoOverride = {
            onset: "2022-06-12T13:00:00-07:00",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.onset).toBe("2022-06-12T13:00:00-07:00");
    });

    it("assigns an `expires` datetime to the info object", () => {
        const infoOverride = {
            expires: "2022-06-12T13:00:00-07:00",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.expires).toBe("2022-06-12T13:00:00-07:00");
    });

    it("assigns a `senderName` to the info object", () => {
        const infoOverride = {
            senderName: "sender",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.senderName).toBe("sender");
    });

    it("assigns a `headline` to the info object", () => {
        const infoOverride = {
            headline: "headline",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.headline).toBe("headline");
    });

    it("assigns a `description` to the info object", () => {
        const infoOverride = {
            description: "description",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.description).toBe("description");
    });

    it("assigns an `instruction` to the info object", () => {
        const infoOverride = {
            instruction: "instruction",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.instruction).toBe("instruction");
    });

    it("assigns a `web` to the info object", () => {
        const infoOverride = {
            web:
                "http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.pdf",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.web).toBe(
            "http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.pdf"
        );
    });

    it("assigns a `contact` to the info object", () => {
        const infoOverride = {
            contact: "contact@gmail.com",
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.contact).toBe("contact@gmail.com");
    });

    it("assigns a `category` to the info object", () => {
        const infoOverride = {
            category_list: [
                CAP_1_2.Alert_info_list_info_category_list_category_fire,
            ],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.category?.find((val) => val === "Fire")).toBe("Fire");
    });

    it("assigns a `responseType` to the info object", () => {
        const infoOverride = {
            responseType_list: [
                CAP_1_2.Alert_info_list_info_responseType_list_responseType_evacuate,
            ],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(infoObj?.responseType?.find((val) => val === "Evacuate")).toBe(
            "Evacuate"
        );
    });

    it("assigns an `eventCode` to the info object", () => {
        const eventCode = {
            valueName: "SAME",
            value: "SVR",
        };
        const infoOverride = {
            eventCode_list: [eventCode],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(
            infoObj?.eventCode?.find(({ valueName }) => valueName === "SAME")
        ).toEqual(eventCode);
    });

    it("assigns a `parameter` to the info object", () => {
        const parameter = {
            valueName: "EventID",
            value: "13970876",
        };
        const infoOverride = {
            parameter_list: [parameter],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(
            infoObj?.parameter?.find(({ valueName }) => valueName === "EventID")
        ).toEqual(parameter);
    });

    it("assigns a `resource` to the info object", () => {
        const resource = {
            resourceDesc: "Image file (GIF)",
            mimeType: "image/gif",
            uri: "http://www.dhs.gov/dhspublic/getAdvisoryImage",
        };
        const infoOverride = {
            resource_list: [resource],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(
            infoObj?.resource?.find(
                ({ resourceDesc }) => resourceDesc === "Image file (GIF)"
            )
        ).toEqual(resource);
    });

    it("assigns an `area` to the info object", () => {
        const area = new CAP_1_2.Alert_info_list_info_area_list_area(
            "U.S. nationwide and interests worldwide",
            undefined,
            ["51.885,-131.076 0.0"],
            undefined,
            undefined,
            undefined
        );

        const infoOverride = {
            area_list: [area],
        };
        const infoObj = testAlertInfoToXML(infoOverride);
        expect(
            infoObj?.area?.find(
                ({ areaDesc }) =>
                    areaDesc === "U.S. nationwide and interests worldwide"
            )
        ).toEqual({ ...area });
    });
});

