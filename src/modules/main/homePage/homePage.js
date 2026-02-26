import { LightningElement } from 'lwc';

export default class HomePage extends LightningElement {
    handleNavigateToCustomers(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'customers' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToAccordion(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }
}
