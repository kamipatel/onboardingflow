import { LightningElement, api } from 'lwc';

export default class CustomerInfo extends LightningElement {

    @api addressRequired;

    @api firstName;
    @api lastName;
    @api email;
    @api addressLine1;
    @api addressLine2;
    @api city;
    @api state;
    @api country;
    @api postalCode;

}