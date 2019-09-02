import { LightningElement, api, track } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class OfferPlans extends LightningElement {

    @api pricebookEntry=[];
    @api products=[];
    @api selpe;
    @api peList;

    
    handleClick(event) {
        window.console.log("event.target.dataset=" + JSON.stringify(event.target.dataset));

        this.selpe = event.target.dataset.id;

        const nextNavigationEvent = new FlowNavigationNextEvent('GoNext');
        this.dispatchEvent(nextNavigationEvent);

        window.console.log("Plan handle click done, this.selpe=" + this.selpe);

    }
}