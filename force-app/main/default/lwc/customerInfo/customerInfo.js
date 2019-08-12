import { LightningElement, track, api } from 'lwc';

export default class CustomerInfo extends LightningElement {

    @api addressRequired;

    @track firstName;
    @track lastName;
    @track email;
    @track addressLine1;
    @track addressLine2;
    @track city;
    @track state;
    @track country;
    @track postalCode;

}