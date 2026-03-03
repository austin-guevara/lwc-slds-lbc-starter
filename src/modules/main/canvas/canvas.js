import { LightningElement, api } from 'lwc';

export default class Canvas extends LightningElement {
    @api currentPage = 'home';

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isAccordionPage() {
        return this.currentPage === 'accordion';
    }

    get isCustomersPage() {
        return this.currentPage === 'customers';
    }

    get isMyPagesPage() {
        return this.currentPage === 'mypages';
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
