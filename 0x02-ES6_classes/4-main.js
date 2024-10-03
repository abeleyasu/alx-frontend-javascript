import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p); // Should display the Pricing object
console.log(p.displayFullPrice()); // Should display: "100 Euro (EUR)"

// Test the static method convertPrice
console.log(Pricing.convertPrice(100, 1.2)); // Should display: 120
