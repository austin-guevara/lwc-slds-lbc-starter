import { LightningElement } from 'lwc';

export default class HomePage extends LightningElement {
    handleNavigateToAccordion(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }
}
