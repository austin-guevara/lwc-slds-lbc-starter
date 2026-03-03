import { LightningElement, track } from 'lwc';

const CUSTOMER_DATA = [
    { id: '1', name: 'Acme Corporation', industry: 'Technology', email: 'contact@acme.com', phone: '(555) 123-4567', status: 'Active', revenue: 2500000, employees: 150 },
    { id: '2', name: 'Global Industries', industry: 'Manufacturing', email: 'info@globalind.com', phone: '(555) 234-5678', status: 'Active', revenue: 5000000, employees: 450 },
    { id: '3', name: 'Tech Solutions Inc', industry: 'Technology', email: 'hello@techsol.com', phone: '(555) 345-6789', status: 'Inactive', revenue: 1200000, employees: 75 },
    { id: '4', name: 'Retail Group LLC', industry: 'Retail', email: 'support@retailgroup.com', phone: '(555) 456-7890', status: 'Active', revenue: 3500000, employees: 280 },
    { id: '5', name: 'Finance Partners', industry: 'Finance', email: 'contact@financep.com', phone: '(555) 567-8901', status: 'Prospect', revenue: 850000, employees: 45 },
    { id: '6', name: 'Healthcare Systems', industry: 'Healthcare', email: 'info@healthsys.com', phone: '(555) 678-9012', status: 'Active', revenue: 4200000, employees: 320 },
    { id: '7', name: 'Education Partners', industry: 'Education', email: 'admin@edpartners.com', phone: '(555) 789-0123', status: 'Active', revenue: 950000, employees: 110 },
    { id: '8', name: 'Energy Solutions', industry: 'Energy', email: 'contact@energysol.com', phone: '(555) 890-1234', status: 'Inactive', revenue: 6700000, employees: 580 },
];

export default class CustomersTablePage extends LightningElement {
    @track selectedCustomer = null;
    @track searchTerm = '';
    @track allCustomers = CUSTOMER_DATA;

    connectedCallback() {
        // Select first customer by default
        if (this.allCustomers.length > 0) {
            this.selectedCustomer = this.allCustomers[0];
        }
    }

    get customers() {
        let filteredCustomers = this.allCustomers;
        
        if (this.searchTerm) {
            filteredCustomers = this.allCustomers.filter(customer => {
                return (
                    customer.name.toLowerCase().includes(this.searchTerm) ||
                    customer.industry.toLowerCase().includes(this.searchTerm) ||
                    customer.email.toLowerCase().includes(this.searchTerm) ||
                    customer.status.toLowerCase().includes(this.searchTerm)
                );
            });
        }

        // Add computed properties for UI
        return filteredCustomers.map(customer => ({
            ...customer,
            itemClass: this.selectedCustomer?.id === customer.id 
                ? 'slds-is-selected customer-item' 
                : 'customer-item',
            badgeClass: this.getBadgeClass(customer.status)
        }));
    }

    get hasCustomers() {
        return this.customers.length > 0;
    }

    get selectedCustomerRevenue() {
        return this.selectedCustomer?.revenue 
            ? `$${this.selectedCustomer.revenue.toLocaleString()}` 
            : '';
    }

    getBadgeClass(status) {
        switch (status) {
            case 'Active':
                return 'slds-theme_success';
            case 'Inactive':
                return 'slds-theme_warning';
            case 'Prospect':
                return 'slds-theme_default';
            default:
                return 'slds-theme_default';
        }
    }

    handleNavigateHome(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'home' },
            bubbles: true,
            composed: true
        }));
    }

    handleCustomerClick(event) {
        const customerId = event.currentTarget.dataset.id;
        this.selectedCustomer = this.allCustomers.find(customer => customer.id === customerId);
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase();
    }
}
