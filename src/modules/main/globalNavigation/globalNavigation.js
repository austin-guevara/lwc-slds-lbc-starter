import { LightningElement, api } from 'lwc';

export default class GlobalNavigation extends LightningElement {
    @api currentPage = 'home';

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isGalleryPage() {
        return this.currentPage === 'gallery';
    }

    get homeTabClass() {
        return `slds-context-bar__item ${this.isHomePage ? 'slds-is-active' : ''}`;
    }

    get galleryTabClass() {
        return `slds-context-bar__item ${this.isGalleryPage ? 'slds-is-active' : ''}`;
    }

    handleHomeClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }

    handleGalleryClick(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'gallery' },
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
