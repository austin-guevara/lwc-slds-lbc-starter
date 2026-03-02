import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
  selectedCountry = '';

  countryOptions = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Spain', value: 'ES' },
    { label: 'Italy', value: 'IT' },
    { label: 'Australia', value: 'AU' },
    { label: 'Japan', value: 'JP' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Brazil', value: 'BR' },
    { label: 'India', value: 'IN' },
    { label: 'China', value: 'CN' },
  ];

  handleCountryChange(event) {
    this.selectedCountry = event.detail.value;
  }
}
