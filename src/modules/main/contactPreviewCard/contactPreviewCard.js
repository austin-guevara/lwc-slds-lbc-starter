import { LightningElement, track } from 'lwc';

export default class ContactPreviewCard extends LightningElement {
  @track isModalOpen = false;
  
  // Sample contact data
  contactName = 'Sarah Johnson';
  contactTitle = 'Senior Product Manager';
  contactEmail = 'sarah.johnson@example.com';
  contactPhone = '+1 (555) 123-4567';
  contactAddress = '123 Market Street, San Francisco, CA 94103';
  contactCompany = 'Salesforce';
  
  handleOpenModal() {
    this.isModalOpen = true;
  }
  
  handleCloseModal() {
    this.isModalOpen = false;
  }
}
