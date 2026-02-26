import { LightningElement, api } from 'lwc';

export default class Canvas extends LightningElement {
    @api currentPage = 'home';

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isAccordionPage() {
        return this.currentPage === 'accordion';
    }

    handleNavigate(event) {
        const page = event.detail.page;
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }
}
