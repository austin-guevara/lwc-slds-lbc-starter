import { LightningElement, track } from 'lwc';

export default class ContactPage extends LightningElement {
    @track contactName = 'Sarah Johnson';
    @track contactEmail = 'sarah.johnson@example.com';
    @track contactPhone = '(555) 123-4567';
    @track showEditModal = false;

    handleEditContact() {
        this.showEditModal = true;
    }

    handleCloseModal() {
        this.showEditModal = false;
    }

    handleSaveContact(event) {
        this.contactName = event.detail.name;
        this.contactEmail = event.detail.email;
        this.contactPhone = event.detail.phone;
        this.showEditModal = false;
    }
}
