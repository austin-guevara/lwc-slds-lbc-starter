import { LightningElement } from 'lwc';
import UserInfoModal from 'main/userInfoModal';

export default class HelloWorldApp extends LightningElement {
    buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleNavigateToCustomPage1(event) {
        event.preventDefault();
        // Handle navigation logic here
    }

    handleNavigateToCustomPage2(event) {
        event.preventDefault();
        // Handle navigation logic here
    }

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }

    async handleOpenModal() {
        const result = await UserInfoModal.open({
            size: 'medium'
        });

        if (result) {
            // Handle the returned data from the modal
            console.log('User Info:', result);
            // You could display the data or process it further
        }
    }
}
