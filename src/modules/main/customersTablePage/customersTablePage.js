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

const COLUMNS = [
    { label: 'Customer Name', fieldName: 'name', type: 'text', sortable: true },
    { label: 'Industry', fieldName: 'industry', type: 'text', sortable: true },
    { label: 'Email', fieldName: 'email', type: 'email', sortable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone', sortable: true },
    { label: 'Status', fieldName: 'status', type: 'text', sortable: true },
    { label: 'Revenue', fieldName: 'revenue', type: 'currency', sortable: true },
    {
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'View Details', name: 'view_details' },
                { label: 'Edit', name: 'edit' },
                { label: 'Delete', name: 'delete' }
            ]
        }
    }
];

export default class CustomersTablePage extends LightningElement {
    @track customers = CUSTOMER_DATA;
    @track selectedCustomer = null;
    @track searchTerm = '';
    @track sortedBy;
    @track sortedDirection = 'asc';

    columns = COLUMNS;
    allCustomers = CUSTOMER_DATA;

    get hasSelectedCustomer() {
        return this.selectedCustomer !== null;
    }

    get selectedCustomerName() {
        return this.selectedCustomer?.name || '';
    }

    get selectedCustomerIndustry() {
        return this.selectedCustomer?.industry || '';
    }

    get selectedCustomerEmail() {
        return this.selectedCustomer?.email || '';
    }

    get selectedCustomerPhone() {
        return this.selectedCustomer?.phone || '';
    }

    get selectedCustomerStatus() {
        return this.selectedCustomer?.status || '';
    }

    get selectedCustomerRevenue() {
        return this.selectedCustomer?.revenue ? `$${this.selectedCustomer.revenue.toLocaleString()}` : '';
    }

    get selectedCustomerEmployees() {
        return this.selectedCustomer?.employees || '';
    }

    get statusVariant() {
        if (!this.selectedCustomer) return 'base';
        switch (this.selectedCustomer.status) {
            case 'Active':
                return 'success';
            case 'Inactive':
                return 'warning';
            case 'Prospect':
                return 'base';
            default:
                return 'base';
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

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        if (selectedRows.length > 0) {
            this.selectedCustomer = selectedRows[0];
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        
        switch (actionName) {
            case 'view_details':
                this.selectedCustomer = row;
                break;
            case 'edit':
                // Edit functionality would go here
                console.log('Edit customer:', row.name);
                break;
            case 'delete':
                // Delete functionality would go here
                console.log('Delete customer:', row.name);
                break;
            default:
                break;
        }
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase();
        this.filterCustomers();
    }

    handleSort(event) {
        const { fieldName, sortDirection } = event.detail;
        this.sortedBy = fieldName;
        this.sortedDirection = sortDirection;
        this.sortCustomers();
    }

    filterCustomers() {
        if (!this.searchTerm) {
            this.customers = [...this.allCustomers];
        } else {
            this.customers = this.allCustomers.filter(customer => {
                return (
                    customer.name.toLowerCase().includes(this.searchTerm) ||
                    customer.industry.toLowerCase().includes(this.searchTerm) ||
                    customer.email.toLowerCase().includes(this.searchTerm) ||
                    customer.status.toLowerCase().includes(this.searchTerm)
                );
            });
        }
        this.sortCustomers();
    }

    sortCustomers() {
        if (!this.sortedBy) return;

        const data = [...this.customers];
        const reverse = this.sortedDirection === 'asc' ? 1 : -1;

        data.sort((a, b) => {
            let aVal = a[this.sortedBy];
            let bVal = b[this.sortedBy];

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            return aVal > bVal ? reverse : aVal < bVal ? -reverse : 0;
        });

        this.customers = data;
    }
}
