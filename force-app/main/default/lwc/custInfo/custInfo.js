import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class CustInfo extends LightningElement {

    @api firstName = '';
    @api lastName = '';
    @api email = '';

    @api
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    handleChange(event) {

        window.console.log("handleChange, event.target.name=" + event.target.name + ",  event.target.name" + event.target.value);

        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } 

    }    

    handleClick(event) {
        const nextNavigationEvent = new FlowNavigationNextEvent('GoNextScreen');
        this.dispatchEvent(nextNavigationEvent);
        window.console.log("Go Next");

    }

}