import { LightningElement, track } from 'lwc';

export default class DockedComposer extends LightningElement {
    value = 'cosmos';
    isDarkModeDisabled = false;
    @track isUtilityPanelOpen = false;
    @track isHidden = false;

    get options() {
        return [
            { label: 'Cosmos', value: 'cosmos' },
            { label: 'Lightning', value: 'lightning' }
        ];
    }

    get utilityPanelClasses() {
        let classes = 'slds-docked-composer slds-grid slds-grid_vertical';

        if (this.isHidden) {
            classes += ' slds-hide';
        } else {
            classes += this.isUtilityPanelOpen ? ' slds-is-open' : ' slds-is-closed';
        }

        return classes;
    }

    handleChange(event) {
        this.value = event.detail.value;
        const theme = event.detail.value;
        const cosmosLink = document.querySelector('link[title="cosmos"]');
        const lightningLink = document.querySelector('link[title="lightning"]');

        if (theme === 'cosmos') {
            cosmosLink?.removeAttribute('disabled');
            lightningLink?.setAttribute('disabled', 'disabled');
            this.isDarkModeDisabled = false;
        } else if (theme === 'lightning') {
            lightningLink?.removeAttribute('disabled');
            cosmosLink?.setAttribute('disabled', 'disabled');
            this.isDarkModeDisabled = true;
        }
    }

    handleDarkModeToggle(event) {
        const isChecked = event.detail.checked;
        const body = document.querySelector('body');
        if (isChecked) {
            body.classList.add('slds-color-scheme--dark');
        } else {
            body.classList.remove('slds-color-scheme--dark');
        }
    }

    handleHeaderClick() {
        // Only open the panel when it's closed
        if (!this.isUtilityPanelOpen) {
            this.isUtilityPanelOpen = true;
        }
    }

    handleMinimizePanel() {
        this.isUtilityPanelOpen = !this.isUtilityPanelOpen;
    }

    handleExpandPanel() {
        // Does nothing for now
    }

    handleClosePanel() {
        this.isHidden = true;
    }
}
