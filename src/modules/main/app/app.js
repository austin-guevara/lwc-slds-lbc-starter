import { LightningElement, track } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    @track selectedPanel = 'agentforce_panel';
    @track isPanelOpen = false;
    @track currentPage = 'home';

    connectedCallback() {
        // Set initial page based on URL
        this.updatePageFromURL();

        // Listen for browser back/forward navigation
        window.addEventListener('popstate', this.handlePopState);
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', this.handlePopState);
    }

    handlePopState = () => {
        this.updatePageFromURL();
    }

    updatePageFromURL() {
        const path = window.location.pathname;
        const pageMap = {
            '/': 'home',
            '/customers': 'customers',
            '/contact': 'contact',
            '/accordion': 'accordion',
            '/usersettings': 'usersettings',
            '/gallery': 'gallery'
        };

        this.currentPage = pageMap[path] || 'home';
    }

    handlePanelSelect(event) {
        this.selectedPanel = event.detail.name;
        this.isPanelOpen = true;
    }

    handlePanelClose() {
        this.isPanelOpen = false;
    }

    handleNavigate(event) {
        const page = event.detail.page;
        const pathMap = {
            'home': '/',
            'customers': '/customers',
            'contact': '/contact',
            'accordion': '/accordion',
            'usersettings': '/usersettings',
            'gallery': '/gallery'
        };

        const newPath = pathMap[page] || '/';

        // Update URL without page reload
        window.history.pushState({}, '', newPath);

        // Update current page
        this.currentPage = page;
    }

    get panelClasses() {
        return `slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right ${this.isPanelOpen ? 'slds-is-open' : ''}`;
    }
}
