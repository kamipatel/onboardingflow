import { LightningElement, track, api } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';
import chargecard from '@salesforce/apex/ChargeCard.chargecard';

export default class CreditCardInfo extends LightningElement {

    @api validateCard;
    @api amount;
    @api cctoken;
    @api cardtoken;

    @track cardHolderName;
    @track cardType;

    @track error;

    cardNumber = '4242424242424242';
    cvv = '123';
    expiryMonth = '12';
    expiryYear = '2020';

    @track saveForFuture = true;
    
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

    handleChange(event) {

        window.console.log("handleChange, event.target.name=" + event.target.name + ",  event.target.name" + event.target.value);

        const field = event.target.name;
        if (field === 'cvv') {
            this.cvv = event.target.value;
        } else if (field === 'cardNumber') {
            this.cardNumber = event.target.value;
        } else if (field === 'expmonth') {
            this.expmonth = event.target.value;
        } else if (field === 'expyear') {
            this.expyear = event.target.value;
        } else if (field === 'amount') {
            this.amount = event.target.value;
        }

    }

    handleClick(event) {

        window.console.log("Charge card submit, this.cardNumber=" + this.cardNumber);
        window.console.log("Charge card submit, this.cardNumber=" + this.cardNumber);

       chargecard({
            "ccnumber": this.cardNumber,
            "amount": this.amount,
            "expmonth": this.expiryMonth,  
            "expyear": this.expiryYear,  
            "cvv": this.cvv,
            "saveForLater": true,
            "hasExistingToken": false,
            "existingToken": ""
            
        }).then((result) => {
            window.console.log("Charge card got results");

            window.console.log("Charge card results=" + JSON.stringify(result));
            if (result.chargestatus) {
                window.console.log("Charge card results in success");

                this.cardtoken = result.cctoken;

                const nextNavigationEvent = new FlowNavigationNextEvent('GoNext');
                this.dispatchEvent(nextNavigationEvent);
                window.console.log("Go Next");

            }else{
                
                this.error = result.tokenerror + result.carderror ;
                
            }
        });


        window.console.log("Handle card submit done" );

    }

}