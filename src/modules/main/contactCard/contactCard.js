import { LightningElement, api } from 'lwc';

export default class ContactCard extends LightningElement {
    @api contactName = 'Sarah Johnson';
    @api contactEmail = 'sarah.johnson@example.com';
    @api contactPhone = '(555) 123-4567';

    handleEditClick() {
        this.dispatchEvent(new CustomEvent('editcontact', {
            detail: {
                name: this.contactName,
                email: this.contactEmail,
                phone: this.contactPhone
            },
            bubbles: true,
            composed: true
        }));
    }
}
