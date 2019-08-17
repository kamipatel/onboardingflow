import { LightningElement, api, track } from 'lwc';



export default class OfferPlans extends LightningElement {

    @api pricebookEntry=[];
    @api products=[];
    @api selpe;
    @api peList;

    @track plans = [
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
        window.console.log("event.target.dataset=" + JSON.stringify(event.target.dataset));

        this.selpe = event.target.dataset.id;
        window.console.log("Plan handle click done, this.selpe=" + this.selpe);

    }
}