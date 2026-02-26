import { LightningElement, api } from 'lwc';

export default class GlobalNavigation extends LightningElement {
    @api currentPage = 'home';

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isAccordionPage() {
        return this.currentPage === 'accordion';
    }

    get homeTabClass() {
        return `slds-context-bar__item ${this.isHomePage ? 'slds-is-active' : ''}`;
    }

    get accordionTabClass() {
        return `slds-context-bar__item ${this.isAccordionPage ? 'slds-is-active' : ''}`;
    }

    handleHomeClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }

    handleAccordionClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }

    handleMenuNavigate(event) {
        const page = event.detail.value;
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }
}
