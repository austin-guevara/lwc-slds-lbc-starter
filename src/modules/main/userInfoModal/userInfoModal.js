import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';

export default class UserInfoModal extends LightningModal {
    userName = '';
    userDate = '';
    selectedRegion = '';

    // Region options for the picklist
    get regionOptions() {
        return [
            { label: 'Select a region...', value: '' },
            { label: 'North America', value: 'north_america' },
            { label: 'South America', value: 'south_america' },
            { label: 'Europe', value: 'europe' },
            { label: 'Asia Pacific', value: 'asia_pacific' },
            { label: 'Middle East & Africa', value: 'middle_east_africa' },
            { label: 'Australia & Oceania', value: 'australia_oceania' }
        ];
    }

    handleNameChange(event) {
        this.userName = event.target.value;
    }

    handleDateChange(event) {
        this.userDate = event.target.value;
    }

    handleRegionChange(event) {
        this.selectedRegion = event.target.value;
    }

    handleSave() {
        // Validate inputs
        if (!this.userName || !this.userDate || !this.selectedRegion) {
            // Show error - could use toast notification in real app
            return;
        }

        // Return the collected data to the parent component
        this.close({
            userName: this.userName,
            userDate: this.userDate,
            selectedRegion: this.selectedRegion
        });
    }

    handleCancel() {
        this.close();
    }
}