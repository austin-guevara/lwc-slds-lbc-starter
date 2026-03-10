import { LightningElement } from 'lwc';

export default class AccordionExamplePage extends LightningElement {
    handleNavigateHome(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }
}
