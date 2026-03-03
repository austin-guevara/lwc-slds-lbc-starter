import { LightningElement, track } from 'lwc';

export default class UserSettingsFormPage extends LightningElement {
    @track currentStep = 1;
    @track showSuccess = false;
    @track profilePicturePreview = null;

    @track formData = {
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        birthday: '',
        country: '',
        profilePicture: null,
        notifications: []
    };

    // Country options for the picklist
    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Germany', value: 'DE' },
        { label: 'France', value: 'FR' },
        { label: 'Japan', value: 'JP' },
        { label: 'Australia', value: 'AU' },
        { label: 'Brazil', value: 'BR' },
        { label: 'India', value: 'IN' },
        { label: 'China', value: 'CN' }
    ];

    // Checkbox options for notification preferences
    checkboxOptions = [
        { label: 'Email Notifications', value: 'email' },
        { label: 'SMS Notifications', value: 'sms' },
        { label: 'Push Notifications', value: 'push' },
        { label: 'Newsletter', value: 'newsletter' }
    ];

    // Get today's date for max date validation
    get maxDate() {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }

    // Progress indicator current step
    get currentStepValue() {
        return `step${this.currentStep}`;
    }

    // Check if current step is step 1, 2, or 3
    get isStep1() {
        return this.currentStep === 1;
    }

    get isStep2() {
        return this.currentStep === 2;
    }

    get isStep3() {
        return this.currentStep === 3;
    }

    // Check if on first or last step
    get isFirstStep() {
        return this.currentStep === 1;
    }

    get isLastStep() {
        return this.currentStep === 3;
    }

    // Next button label changes on last step
    get nextButtonLabel() {
        return this.isLastStep ? 'Submit' : 'Next';
    }

    // Handle input changes
    handleInputChange(event) {
        const field = event.target.name;
        let value = event.target.value;

        // Format phone number automatically
        if (field === 'phoneNumber') {
            value = this.formatPhoneNumber(value);
        }

        this.formData[field] = value;
    }

    // Format phone number to XXX-XXX-XXXX
    formatPhoneNumber(value) {
        // Remove all non-numeric characters
        const cleaned = value.replace(/\D/g, '');

        // Don't format if less than 4 digits
        if (cleaned.length < 4) {
            return cleaned;
        }

        // Format as XXX-XXX-XXXX
        if (cleaned.length <= 6) {
            return cleaned.replace(/(\d{3})(\d{0,3})/, '$1-$2');
        }

        return cleaned.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3').slice(0, 12);
    }

    // Validate phone number
    isValidPhoneNumber(phoneNumber) {
        const cleaned = phoneNumber.replace(/\D/g, '');
        return cleaned.length === 10;
    }

    // Handle checkbox group changes
    handleCheckboxChange(event) {
        this.formData.notifications = event.detail.value;
    }

    // Handle file upload
    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            this.formData.profilePicture = file;
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                this.profilePicturePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // Validate current step
    validateCurrentStep() {
        const inputs = this.template.querySelectorAll('lightning-input, lightning-combobox, lightning-checkbox-group');
        let allValid = true;

        inputs.forEach(input => {
            // Only validate if the input is currently visible (in current step)
            if (input.offsetParent !== null) {
                // Custom validation for phone number
                if (input.name === 'phoneNumber' && input.value) {
                    if (!this.isValidPhoneNumber(input.value)) {
                        input.setCustomValidity('Please enter a valid 10-digit phone number');
                        allValid = false;
                    } else {
                        input.setCustomValidity('');
                    }
                }

                const isValid = input.reportValidity();
                if (!isValid) {
                    allValid = false;
                }
            }
        });

        return allValid;
    }

    // Handle Next button click
    handleNext() {
        // Validate current step
        if (!this.validateCurrentStep()) {
            return;
        }

        if (this.isLastStep) {
            // Submit the form
            this.handleSubmit();
        } else {
            // Move to next step
            this.currentStep += 1;
            this.scrollToTop();
        }
    }

    // Handle Previous button click
    handlePrevious() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
            this.scrollToTop();
        }
    }

    // Handle form submission
    handleSubmit() {
        console.log('Form Data:', this.formData);
        
        // Show success message
        this.showSuccess = true;

        // In a real application, you would send this data to a server
        // For now, we'll just log it and show a success message
        
        // Reset form after 3 seconds (optional)
        setTimeout(() => {
            this.resetForm();
        }, 3000);
    }

    // Reset form to initial state
    resetForm() {
        this.currentStep = 1;
        this.showSuccess = false;
        this.profilePicturePreview = null;
        this.formData = {
            fullName: '',
            email: '',
            phoneNumber: '',
            age: '',
            birthday: '',
            country: '',
            profilePicture: null,
            notifications: []
        };
    }

    // Scroll to top of the form
    scrollToTop() {
        const formSection = this.template.querySelector('.form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
