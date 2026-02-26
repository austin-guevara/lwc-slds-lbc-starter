import { LightningElement, track } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    @track selectedPanel = 'agentforce_panel';
    @track isPanelOpen = false;
    @track currentPage = 'home';

    handlePanelSelect(event) {
        this.selectedPanel = event.detail.name;
        this.isPanelOpen = true;
    }

    handlePanelClose() {
        this.isPanelOpen = false;
    }

    handleNavigate(event) {
        this.currentPage = event.detail.page;
    }

    get panelClasses() {
        return `slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right ${this.isPanelOpen ? 'slds-is-open' : ''}`;
    }
}
