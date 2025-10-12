// Available booking locations
export const AVAILABLE_LOCATIONS = [
  { value: 'abuja', label: 'Abuja, Nigeria', country: 'Nigeria' },
  { value: 'lagos', label: 'Lagos, Nigeria', country: 'Nigeria' },
  { value: 'london', label: 'London, UK', country: 'UK' },
  { value: 'usa', label: 'USA', country: 'USA' },
  { value: 'ghana', label: 'Ghana', country: 'Ghana' },
  { value: 'kenya', label: 'Kenya', country: 'Kenya' },
];

// Pricing structure (prices per hour)
// Within Nigeria: $8,000/hour
export const PRICING = {
  withinNigeria: {
    priceUSD: 8000,
    priceNGN: 12800000, // 8000 * 1600
    description: 'Within Nigeria (1 hour)',
  },
  international: {
    description: 'International flights - Pricing varies by destination',
    note: 'Contact us for specific pricing based on your route',
  },
};

export const formatCurrency = (amount: number, currency: 'USD' | 'NGN') => {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  } else {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  }
};

// Check if both locations are within Nigeria
export const isWithinNigeria = (from: string, to: string) => {
  const nigerianCities = ['abuja', 'lagos'];
  return nigerianCities.includes(from) && nigerianCities.includes(to);
};
