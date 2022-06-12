import fs from "fs";
import path from "path";
import { CAP_1_2 } from "../../dist/node/index";
import { Alert } from "../../dist/node/CAP-1-2";

const testXMLPath = path.resolve(__dirname, "./mock_data/mockXML.test.xml");

const readXML = () => fs.readFileSync(testXMLPath, { encoding: "utf-8" });

const alert = new CAP_1_2.Alert(
    "hey bigboi",
    "bigboi",
    "bigboi",
    CAP_1_2.Alert_status_actual,
    CAP_1_2.Alert_msgType_alert,
    "my brain",
    CAP_1_2.Alert_scope_public_,
    "shhh big secret",
    "123 redwood rd.",
    [],
    "hey",
    "hey",
    "hey",
    [
        new CAP_1_2.Alert_info_list_info(
            "en_US",
            [CAP_1_2.Alert_info_list_info_category_list_category.fire],
            "the big event",
            [
                CAP_1_2.Alert_info_list_info_responseType_list_responseType
                    .evacuate,
            ],
            CAP_1_2.Alert_info_list_info_urgency.immediate,
            CAP_1_2.Alert_info_list_info_severity.extreme,
            CAP_1_2.Alert_info_list_info_certainty.observed,
            "gamers",
            [],
            "right meow",
            "yesterday",
            "okay",
            "big J",
            "BREAKING NEWS",
            "desc",
            "get out",
            "https://github.com",
            "Jonathan Wilbur",
            [],
            [],
            []
        ),
    ],
    []
);

test("encodes correctly", () => {
    console.log(alert);
    expect(() => alert.toXML()).not.toThrow();
});

test("encodes and decodes correctly", async () => {
    const exampleXML1 = readXML();
    const a = Alert.fromXML(exampleXML1);
    expect(() => a.toXML()).not.toThrow();
    expect(Alert.fromXML(a.toXML())).toEqual(a);
});
