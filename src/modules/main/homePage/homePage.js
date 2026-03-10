import { LightningElement, track } from 'lwc';

export default class HomePage extends LightningElement {
    @track showMoreShells = false;
    @track isModalOpen = false;
    @track selectedShellData = {};

    shellDetails = {
        standard: {
            title: 'Standard Page Layout',
            iconType: 'page',
            description: 'A traditional single-column layout with header and content area. This is the most common layout pattern and provides a clean, focused experience for users. It works well for pages where you want users to focus on a single task or piece of content without distractions.',
            useCases: [
                'Detail pages for records',
                'Form-based data entry',
                'Settings and configuration pages',
                'Documentation and help content',
                'Single-focus workflows'
            ],
            bestPractices: [
                'Use clear headings to establish hierarchy',
                'Group related content in cards',
                'Maintain consistent spacing between sections',
                'Avoid excessive scrolling - break into tabs if needed',
                'Use breadcrumbs for navigation context'
            ]
        },
        split: {
            title: 'Split View Layout',
            iconType: 'layout',
            description: 'A two-column layout for displaying related content side-by-side. This pattern is ideal for comparing data, showing before-and-after states, or displaying complementary information that benefits from being viewed simultaneously.',
            useCases: [
                'Comparison views (e.g., comparing two records)',
                'Side-by-side editing',
                'Source and preview displays',
                'Before and after views',
                'Multi-language content editing'
            ],
            bestPractices: [
                'Keep content synchronized when appropriate',
                'Use equal column widths for balanced comparison',
                'Consider mobile responsiveness - stack on small screens',
                'Add visual indicators for which side is active',
                'Provide clear labels for each column'
            ]
        },
        masterDetail: {
            title: 'Master-Detail Layout',
            iconType: 'rows',
            description: 'A list-based navigation pattern with a master list on the left and detail view on the right. When users select an item from the master list, its details appear in the detail panel. This is one of the most effective patterns for browsing large collections of items.',
            useCases: [
                'Email clients',
                'File browsers and document managers',
                'Contact and account lists',
                'Message threads',
                'Product catalogs with quick preview'
            ],
            bestPractices: [
                'Highlight selected item in master list',
                'Show loading state when switching details',
                'Preserve scroll position in master list',
                'Support keyboard navigation',
                'Consider responsive behavior for mobile'
            ]
        },
        cardGrid: {
            title: 'Card Grid Layout',
            iconType: 'apps',
            description: 'A responsive grid of cards displaying multiple items. Cards adapt from 1 to 4 columns based on screen size, making this pattern excellent for showcasing collections of content where each item has equal importance.',
            useCases: [
                'Dashboards and home pages',
                'Product catalogs',
                'App launchers',
                'Media galleries',
                'Feature showcases'
            ],
            bestPractices: [
                'Keep cards consistent in height when possible',
                'Use meaningful imagery and icons',
                'Limit information density per card',
                'Provide clear calls-to-action',
                'Ensure cards are keyboard accessible'
            ]
        },
        listView: {
            title: 'List View Layout',
            iconType: 'list',
            description: 'A vertical list of items with optional filters, search, and actions. This pattern is perfect for displaying searchable, sortable collections where users need to find specific items or take bulk actions.',
            useCases: [
                'Data tables with filters',
                'Search results',
                'Task and to-do lists',
                'Activity feeds',
                'Inventory management'
            ],
            bestPractices: [
                'Provide robust search and filtering',
                'Support sorting on key columns',
                'Show item count and pagination',
                'Enable bulk actions when appropriate',
                'Use consistent row heights for scanning'
            ]
        },
        docked: {
            title: 'Docked Panel Layout',
            iconType: 'side_list',
            description: 'Main content area with a collapsible side panel. The panel can be opened or closed without affecting the main content, making it ideal for contextual information that users may want to reference occasionally.',
            useCases: [
                'Contextual help and documentation',
                'Related records and information',
                'Utility panels (chat, notifications)',
                'Inspection panels for selected items',
                'Reference information'
            ],
            bestPractices: [
                'Make panel width adjustable when needed',
                'Remember user\'s panel state preference',
                'Provide clear open/close affordances',
                'Don\'t put critical content only in panel',
                'Consider mobile - panel may overlay on small screens'
            ]
        },
        modal: {
            title: 'Modal Dialog Layout',
            iconType: 'new_window',
            description: 'An overlay dialog that focuses user attention and blocks interaction with the underlying content until dismissed. Modals are powerful for capturing user input or displaying critical information that requires immediate attention.',
            useCases: [
                'Confirmation dialogs',
                'Quick edits and forms',
                'Critical alerts and warnings',
                'Multi-step wizards',
                'Focused tasks requiring completion'
            ],
            bestPractices: [
                'Use sparingly - modals disrupt workflow',
                'Always provide clear way to close',
                'Trap focus within the modal',
                'Show backdrop to indicate modal state',
                'Keep content focused and concise'
            ]
        },
        tabs: {
            title: 'Tabs Layout',
            iconType: 'multi_select_checkbox',
            description: 'Organize related content into separate tabs that users can switch between. Tabs are excellent for grouping related information without overwhelming users with everything at once.',
            useCases: [
                'Multi-section forms',
                'Settings and preferences',
                'Profile pages with multiple aspects',
                'Reporting with multiple views',
                'Product details with specs, reviews, etc.'
            ],
            bestPractices: [
                'Limit to 5-7 tabs for usability',
                'Show which tab is currently active',
                'Persist tab state during session',
                'Use clear, concise tab labels',
                'Consider mobile - may need dropdown'
            ]
        },
        accordion: {
            title: 'Accordion Layout',
            iconType: 'record',
            description: 'Vertically stacked sections that can expand and collapse. Accordions are space-efficient and great for organizing related content into logical groups that users can explore at their own pace.',
            useCases: [
                'FAQ sections',
                'Activity timelines',
                'Grouped data or settings',
                'Progressive disclosure of details',
                'Mobile-friendly content organization'
            ],
            bestPractices: [
                'Allow multiple sections open simultaneously',
                'Use clear expand/collapse icons',
                'Maintain semantic heading hierarchy',
                'Ensure keyboard accessibility',
                'Consider default expanded sections for important content'
            ]
        }
    };

    get showMoreLabel() {
        return this.showMoreShells ? 'Show Less' : 'Show More';
    }

    get showMoreIcon() {
        return this.showMoreShells ? 'utility:chevronup' : 'utility:chevrondown';
    }

    handleToggleShells() {
        this.showMoreShells = !this.showMoreShells;
    }

    handleViewShellDetails(event) {
        const shellKey = event.target.dataset.shell;
        this.selectedShellData = this.shellDetails[shellKey];
        this.isModalOpen = true;
    }

    handleCloseModal() {
        this.isModalOpen = false;
    }

    handleCustomersClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'customers' },
            bubbles: true,
            composed: true
        }));
    }

    handleContactClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'contact' },
            bubbles: true,
            composed: true
        }));
    }

    handleAccordionClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToCustomers(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'customers' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToContact(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'contact' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToAccordion(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'accordion' },
            bubbles: true,
            composed: true
        }));
    }

    handleUserSettingsClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'usersettings' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToUserSettings(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'usersettings' },
            bubbles: true,
            composed: true
        }));
    }

    handleGalleryClick() {
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'gallery' },
            bubbles: true,
            composed: true
        }));
    }

    handleNavigateToGallery(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { page: 'gallery' },
            bubbles: true,
            composed: true
        }));
    }
}
