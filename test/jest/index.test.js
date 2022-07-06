import fs from "fs";
import path from "path";
import { CAP_1_2 } from "../../source/index";
import { Alert } from "../../source/CAP-1-2";
import { mockAlert } from "./mock_data/mockData";

const testXMLPath = path.resolve(__dirname, "./mock_data/mockXML.test.xml");

const readXML = () => fs.readFileSync(testXMLPath, { encoding: "utf-8" });

test("encodes correctly", () => {
    expect(() => mockAlert.toXML()).not.toThrow();
});

test("encodes and decodes correctly", async () => {
    const exampleXML1 = readXML();
    const a = Alert.fromXML(exampleXML1);
    expect(a).toEqual(mockAlert);

    expect(() => a.toXML()).not.toThrow();
    expect(Alert.fromXML(a.toXML())).toEqual(a);
});
