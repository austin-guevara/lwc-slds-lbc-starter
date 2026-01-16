import { LightningElement } from 'lwc';
import ContactDetailsModal from 'main/contactDetailsModal';

export default class ContactPreviewCard extends LightningElement {
  // Sample contact data
  contactName = 'Sarah Johnson';
  contactTitle = 'Senior Product Manager';
  contactEmail = 'sarah.johnson@example.com';
  contactPhone = '+1 (555) 123-4567';
  contactAddress = '123 Market Street, San Francisco, CA 94103';
  contactCompany = 'Salesforce';
  
  async handleOpenModal() {
    const result = await ContactDetailsModal.open({
      size: 'small',
      description: 'View detailed contact information',
      contact: {
        name: this.contactName,
        email: this.contactEmail,
        phone: this.contactPhone,
        address: this.contactAddress,
        company: this.contactCompany
      }
    });
    
    // Handle the result if needed
    console.log('Modal closed with result:', result);
  }
}
