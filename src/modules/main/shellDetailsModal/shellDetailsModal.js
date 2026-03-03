import { LightningElement, api } from 'lwc';

export default class ShellDetailsModal extends LightningElement {
    @api isOpen = false;
    @api shellData = {};

    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
