import { LightningElement, api } from 'lwc';

export default class Panel extends LightningElement {
    @api selectedPanel = 'agentforce_panel';

    get showAgentforcePanel() {
        return this.selectedPanel === 'agentforce_panel';
    }

    get showTrailheadPanel() {
        return this.selectedPanel === 'trailhead_panel';
    }

    get showNotificationPanel() {
        return this.selectedPanel === 'notification_panel';
    }

    get showSettingsPanel() {
        return this.selectedPanel === 'settings_panel';
    }

    get panelTitle() {
        const titles = {
            'agentforce_panel': 'Agentforce',
            'trailhead_panel': 'Guidance Center',
            'notification_panel': 'Notifications',
            'settings_panel': 'Setup'
        };
        return titles[this.selectedPanel] || 'Panel Header';
    }

    get panelContent() {
        const content = {
            'agentforce_panel': 'Agentforce panel content',
            'trailhead_panel': 'Trailhead guidance content',
            'notification_panel': 'Notifications panel content',
            'settings_panel': 'Settings panel content'
        };
        return content[this.selectedPanel] || 'A panel body accepts any layout or component';
    }

    handleClosePanel() {
        this.dispatchEvent(new CustomEvent('panelclose', {
            bubbles: true,
            composed: true
        }));
    }
}