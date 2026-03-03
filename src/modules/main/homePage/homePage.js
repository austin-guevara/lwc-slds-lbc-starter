import { LightningElement, track } from 'lwc';

export default class HomePage extends LightningElement {
    @track showMoreShells = false;

    get showMoreLabel() {
        return this.showMoreShells ? 'Show Less' : 'Show More';
    }

    get showMoreIcon() {
        return this.showMoreShells ? 'utility:chevronup' : 'utility:chevrondown';
    }

    handleToggleShells() {
        this.showMoreShells = !this.showMoreShells;
    }

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

    handleGalleryClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'gallery' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToGallery(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'gallery' },
            bubbles: true,
            composed: true
        }));
    }
}
