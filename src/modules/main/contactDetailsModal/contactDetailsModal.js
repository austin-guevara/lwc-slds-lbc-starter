import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ContactDetailsModal extends LightningModal {
  @api contact;
  
  handleClose() {
    this.close('closed');
  }
}
