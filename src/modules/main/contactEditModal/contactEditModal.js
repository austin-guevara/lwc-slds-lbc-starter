import { LightningElement, api, track } from 'lwc';

export default class ContactEditModal extends LightningElement {
    @api contactName;
    @api contactEmail;
    @api contactPhone;

    @track editName;
    @track editEmail;
    @track editPhone;

    connectedCallback() {
        this.editName = this.contactName;
        this.editEmail = this.contactEmail;
        this.editPhone = this.contactPhone;
    }

    handleNameChange(event) {
        this.editName = event.target.value;
    }

    handleEmailChange(event) {
        this.editEmail = event.target.value;
    }

    handlePhoneChange(event) {
        this.editPhone = event.target.value;
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true
        }));
    }

    handleSave() {
        this.dispatchEvent(new CustomEvent('save', {
            detail: {
                name: this.editName,
                email: this.editEmail,
                phone: this.editPhone
            },
            bubbles: true,
            composed: true
        }));
    }
}
