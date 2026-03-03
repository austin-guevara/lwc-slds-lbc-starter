import { LightningElement } from 'lwc';

export default class HomePage extends LightningElement {
    handleCustomersClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'customers' },
            bubbles: true,
            composed: true
        }));
    }

    handleContactClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'contact' },
            bubbles: true,
            composed: true
        }));
    }

    handleAccordionClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }

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

    handleUserSettingsClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'usersettings' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToUserSettings(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'usersettings' },
            bubbles: true,
            composed: true
        }));
    }
}
