import { LightningElement, api } from 'lwc';

export default class GlobalNavigation extends LightningElement {
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

    get isContactPage() {
        return this.currentPage === 'contact';
    }

    get isUserSettingsPage() {
        return this.currentPage === 'usersettings';
    }

    get homeTabClass() {
        return `slds-context-bar__item ${this.isHomePage ? 'slds-is-active' : ''}`;
    }

    get accordionTabClass() {
        return `slds-context-bar__item ${this.isAccordionPage ? 'slds-is-active' : ''}`;
    }

    get customersTabClass() {
        return `slds-context-bar__item ${this.isCustomersPage ? 'slds-is-active' : ''}`;
    }

    get myPagesTabClass() {
        return `slds-context-bar__item ${this.isMyPagesPage ? 'slds-is-active' : ''}`;
    }

    get contactTabClass() {
        return `slds-context-bar__item ${this.isContactPage ? 'slds-is-active' : ''}`;
    }

    get userSettingsTabClass() {
        return `slds-context-bar__item ${this.isUserSettingsPage ? 'slds-is-active' : ''}`;
    }

    handleHomeClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }

    handleCustomersClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'customers' },
            bubbles: true,
            composed: true
        }));
    }

    handleContactClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'contact' },
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

    handleMyPagesClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'mypages' },
            bubbles: true,
            composed: true
        }));
    }

    handleUserSettingsClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'usersettings' },
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
