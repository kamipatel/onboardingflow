import { LightningElement, track, api } from 'lwc';

export default class CreditCardInfo extends LightningElement {

    @api validateCard;

    @track cardHolderName;
    @track cardType;
    @track cardNumber;
    @track cvv;
    @track expiryMonth;
    @track expiryYear;
    @track saveForFuture = false;
    

    get expiryYears() {
        const expiryYears = [], noOfYears = 20;
        let year, i;
        for (year = new Date().getFullYear(), i = 0; i < noOfYears; year++, i++) {
            expiryYears.push({label: year, value: year.toString()});
        }
        return expiryYears;
    }
    get expiryMonths() {
        const expiryMonths = [], noOfMonths = 12;
        let month, i;
        for (month = 1, i = 0; i < noOfMonths; month++, i++) {
            expiryMonths.push({label: month, value: month.toString()});
        }
        return expiryMonths;
    }
    get cardTypes() {
        const cardTypesObj =  ['Visa', 'MasterCard', 'AmericanExpress', 'DinersClub', 'JCB'];
        let cardType;
        const cardTypes = [];
        for (cardType in cardTypesObj) {
            if (cardTypesObj[cardType] != null) {
                cardTypes.push({label: cardTypesObj[cardType], value: cardType});
            }
        }
        return cardTypes;
    }
}