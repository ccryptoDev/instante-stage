/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  isSandbox: true,
  isTwilioEnabled: false,
  sandGridApiKey:
    "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",
  // TWILIO CREDS COPIED FROM TGCU PROJECT
  // TWILIO_ACCOUNT_SID: "AC5ab03e4031bddc1519b294319e2bd109",
  // TWILIO_AUTH_TOKEN: "a04c59141fe74450e4895a994ce8b409",
  // TWILIO_PHONE_NUMBER: "+15014030756",
  // ISTANTE CREDENTIALS
  TWILIO_ACCOUNT_SID: "AC4fa0f5654ac053a5f109ebfef5f3b82d",
  TWILIO_AUTH_TOKEN: "92e3d8767c0c437548898530bef9f4ff",
  TWILIO_PHONE_NUMBER: "+19705358244",
  //MANDRILL
  MANDRILL_API_KEY: "jfdaldojdL469jJMtBUZNA",
  MANDRILL_FROM_EMAIL: "no-reply@istantelending.com",
  env: {
    TOKEN_SECRET:
      "6a2ofuhi6dqq09yjgcaid7q1zcde2a029zas0hmw5lnvsgv3rzm5o3910ikt2mopqz2wkw5bjc36b3br9xm0htai5j3qqdscs4jo9o16elsrqy464i922e4omslip2h2",
    REACT_APP_BASE_URL: "http://localhost:3000",
		REACT_APP_ADMIN_BASE_URL: "https://istante-lms.alchemylms.com"
  },
  tribe: {
    firstName: "Istante",
    firstNameCaps: "ISTANTE",
    name: "Istante Lending LLC",
    addressLine1: "Tonto Apache Reservation #30",
    addressLine2: "Payson, Arizona 85541",
    legalEmail: "legal@istantelending.com",
    mailTo: "mailto: legal@istantelending.com",
    email: "CustomerCare@IstanteLending.com",
  }
};
