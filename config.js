/**
 * Divine Adventure Holidays Tour & Travels
 * =========================================
 * Site Configuration
 *
 * Edit the values below to update contact info, bank details, and defaults.
 * All phone numbers, emails, addresses, and WhatsApp links on the site
 * are read from this object — change them here and they update everywhere.
 *
 * HOW TO USE
 * ----------
 * 1. Replace "91XXXXXXXXXX" with your WhatsApp number (country code + number, no + or spaces).
 *    Example: "919876543210" for India mobile 98765-43210.
 * 2. Replace "info@example.com" with your real email.
 * 3. Replace "[Office address, city, state, PIN]" with your full office address.
 * 4. Fill in bank details for the Terms page (shown as placeholder text).
 */

const SITE = {
  businessName: "Divine Adventure Holidays Tour & Travels",
  shortName:    "Divine Adventure",

  // WhatsApp number: country code + number, NO + sign, NO spaces.
  // Example India: "919876543210"
  whatsapp: "91XXXXXXXXXX",

  // Public contact email
  email: "info@example.com",

  // Full office postal address
  address: "[Office address, city, state, PIN]",

  // Office hours shown on the contact section
  hours: "Mon to Sat, 10:00 AM to 7:00 PM IST",

  // Bank transfer details (shown only in Terms & Cancellation section)
  bank: {
    accountName: "",
    bankName:    "",
    accountNo:   "",
    ifsc:        "",
    swift:       "",
    upi:         ""
  },

  // Social / external links (set to "" to hide the link)
  social: {
    instagram: "",
    facebook:  "",
    youtube:   ""
  },

  // Legal placeholders — fill before publishing
  legal: {
    advancePercent:      "30",   // % advance required at booking
    balanceDaysBeforeArrival: "30",  // days before arrival that balance is due
    cancellation: {
      moreThan60:    "10% of total cost",
      day30to59:     "25% of total cost",
      day15to29:     "50% of total cost",
      lessThan15:    "100% of total cost (no refund)"
    },
    governingLawCity:  "[City, State]",
    enquiryRetentionMonths: "12",
    privacyLastUpdated: "[Date]"
  }
};

// Freeze to prevent accidental mutation
Object.freeze(SITE);
Object.freeze(SITE.bank);
Object.freeze(SITE.social);
Object.freeze(SITE.legal);
Object.freeze(SITE.legal.cancellation);
