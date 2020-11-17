import { LightningElement, wire } from 'lwc';
import getTestString from "@salesforce/apex/TestPermissionController.getTestString";

export default class TestPermission extends LightningElement {
    message

    @wire(getTestString)
    setTestMessage({ error, data }) {
        if (data) {
            this.message = data;
        }
        if (error) {
            this.message = error.body.message;
        }
    }
}