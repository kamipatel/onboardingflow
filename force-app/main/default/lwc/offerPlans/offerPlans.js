import { LightningElement, api, track } from 'lwc';

export default class OfferPlans extends LightningElement {
    @api planType;
    @api plans;

    @track differentplans = [
        {
            PriceBookId: '01tB0000000PBTtIAO',
            Name: 'FinancialResearchDigitalMonthly',
            Description: 'Financial Research Digital',
            Price: '$50/Month',
        },
        {
            PriceBookId: '01tB0000000PBTyIAO',
            Name: 'FinancialResearchDigitalPrintMonthly',
            Description: 'Financial Research Digital + Print Monthly',
            Price: '$70/Month',
        },
        {
            PriceBookId: '01tB0000000PBU3IAO',
            Name: 'FinancialResearchStocksPickMonthly',
            Description: 'Financial Research Stocks Pick Monthly',
            Price: '$100/Month',
        },
    ];

    handleClick(event) {
        window.console.log("event.target=" + event.target);
        window.console.log("event.target.id=" + event.target.id);
        window.console.log("event.target.value=" + event.target.value);
        window.console.log("event.target json=" + JSON.stringify(event.target.id));
    }
}