/**
 * factorTrust.js
 */
const testData = {
  ApplicationID: "1 Rf Test",
  MobileNumber: "6784803240",
  FirstName: "JULIANNE",
  LastName: "EETR",
  EmailAddress: "test@factortrust.com",
  IPAddress: "74.95.29.134",
  DLNumber: "",
  DLNumberIssueState: "",
  DateOfBirth: "03/01/1996",
  Address1: "franklin street",
  Address2: "",
  City: "Newark",
  State: "NJ",
  Zip: "07102",
  Country: "US",
  MonthsAtAddress: "",
  AlternateZip: "",
  HomePhone: "",
  SSN: "666664907",
  SSNIssueState: "",
  AccountABA: "",
  AccountDDA: "",
  AccountType: "C", // C=Checking, D=Debit, S=Savings
  EmployerName: "Race Cars 4 life",
  LengthOfEmployment: "",
  MonthlyIncome: "3333.00",
  PayrollType: "D", // D=Direct Deposit; P=Paper Check
  PayrollFrequency: "W", // W=Weekly, B=Bi-Weekly, S=Semi-Monthly, M=Monthly
  PayrollGarnishment: "",
  RequestedLoanAmount: "0",
  RequestedEffectiveDate: "",
  RequestedDueDate: "",
  HasBankruptcy: "",
  ProductType: "PER",
  LeadType: "", // (Not Used At This Time)
  LeadSource: "", // (Not Used At This Time)
  BlackBox: "", // (Provided via the iOvation installation software)
  ECOACode: "I",
  PortfolioType: "I",
  PointOfOrigination: "V", // R=Retail, V=Virtual
  SecuritizationType: "U",
  OtherIncome: "",
  LoanPaymentAmount: "",
  OtherPayments: "",
  LoanFees: "",
  TermsDuration: "",
  TermsFrequency: "",
  HousingExpenses: "",
  IsHomeOwner: "",
  LivingExpenses: "",
  CreditCardNumber: "",
};
module.exports.factorTrust = {
  lendProtect: getFactorTrustLendProtectConfig(),
  truValidate: getFactorTrustTruValidateConfig,
};
/**
 * Factor Trust - Lend Protect Credit Report
 * @returns {{password: string, testData: {Zip: string, TermsFrequency: string, LengthOfEmployment: string, ECOACode: string, HousingExpenses: string, RequestedDueDate: string, LeadType: string, PortfolioType: string, DLNumberIssueState: string, DLNumber: string, TermsDuration: string, RequestedEffectiveDate: string, PointOfOrigination: string, ApplicationID: string, MonthlyIncome: string, DateOfBirth: string, LoanPaymentAmount: string, ProductType: string, City: string, EmailAddress: string, OtherPayments: string, SSNIssueState: string, LeadSource: string, BlackBox: string, State: string, SecuritizationType: string, Country: string, LastName: string, LoanFees: string, RequestedLoanAmount: string, AlternateZip: string, PayrollGarnishment: string, CreditCardNumber: string, LivingExpenses: string, IsHomeOwner: string, FirstName: string, Address2: string, OtherIncome: string, Address1: string, AccountType: string, SSN: string, MobileNumber: string, HomePhone: string, MonthsAtAddress: string, AccountDDA: string, IPAddress: string, AccountABA: string, PayrollType: string, EmployerName: string, PayrollFrequency: string, HasBankruptcy: string}, apiUrl: string, merchantId: string, storeId: string, channelId: string, enabled: boolean, username: string}}
 */
function getFactorTrustLendProtectConfig() {
  const lendProtect = {
    apiUrl:
      "https://stage.factortrust.com/WebServices/LendProtectRequest.aspx?version=3.3",
    username: "ALCHEMYTECHST3",
    password: "Zb7tR5@@DQdt",
    channelId: "",
    merchantId: "54545",
    storeId: "0003",
    testData: testData,
    productType: "PER", // ??
    ecoaCode: "I", // ??
    portfolioType: "I", // ??
    securitizationType: "U", // ??
    scorecards: {
      // ??
      M1100_STL_FT: "Conversion",
      M1101_INS_FT: "FcraFraud",
      M1150_STL_FT_TU: "Risk",
      M1151_INS_FT_TU: "Profitability",
    },
    atap01_dti: 45, // ??
    enabled: false,
  };

  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "prod"
  ) {
    lendProtect.apiUrl =
      "https://www.factortrust.com/WebServices/LendProtectRequest.aspx?version=3.3";
    lendProtect.username = 'ISTANTEST1';
    lendProtect.password = 'B34@jJiu8@KL';
    lendProtect.storeId = '0001';
    lendProtect.merchantId = '40523';
    lendProtect.enabled = true;
  }

  return lendProtect;
}

function getFactorTrustTruValidateConfig(strategy) {
  const getCredentialsTestCase = (strategy) => {
    const stagingConfig = {
      device: {
        username: "Istante_Lending1_TestSite",
        password: "a6cf39fd78724b259c61f8e7193b8e30",
        secretKey: "504b7bbcba154b70a90b5b3d1f93b5e3",
        publicKey: "46d4fa4126104733bdbd556fa4228a89",
        url: "https://app.trustev.com/api/v2.0",
      },
      identity: {
        username: "Istante_Lending2_TestSite",
        password: "0e7e9e821d1e477093402af6d0f38bb7",
        secretKey: "7d2da907d8d74167aff06a5ff50431d4",
        publicKey: "d104d1b8088946a199eb098a8f851efb",
        url: "https://app.trustev.com/api/v2.0",
      },
      kba_otp: {
        username: "Istante_Lending3_TestSite",
        password: "864d4753fd154c1d8d303493777082e5",
        secretKey: "23a35be78c6a4d38bb3eb59a83ed4b8a",
        publicKey: "f5bed6bc904648ec80d5a5ebbb32e8aa",
        url: "https://app.trustev.com/api/v2.0",
      },
    };

    const prodConfig = {
      device: {
        username: "Istante_Lending1_ProdSite",
        password: "8be48132a80f49a3b2516d7bfb59e7fe",
        secretKey: "3300d9201f064143b6bec90fa1da9f94",
        publicKey: "24b0a154975f4ec6b5f04757c5b3e3a3",
        url: "https://app.trustev.com/api/v2.0",
      },
      identity: {
        username: "Istante_Lending2_ProdSite",
        password: "04a186e550fd40308bc23a661ea4d2a6",
        secretKey: "c02be11ece8a41ea86f5e2a08c153f7c",
        publicKey: "4995f75fe54948e9b114794d0e02ecc6",
        url: "https://app.trustev.com/api/v2.0",
      },
      kba_otp: {
        username: "Istante_Lending3_ProdSite",
        password: "9245dbf5ccd7460394e836feffeca338",
        secretKey: "ad6fc518659743afb957564ff0f48ffc",
        publicKey: "dd23ba063d774982b38381eda531098e",
        url: "https://app.trustev.com/api/v2.0",
      },
    };

    const isProd =
      process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

    const credentials = isProd ? prodConfig[strategy] : stagingConfig[strategy];

    if (credentials) {
      return credentials;
    }

    throw new Error(`Invalid test case: ${strategy}`);
  };

  // const trueValidate = {
  // 	username: "Patria_Lending_Test",
  // 	password: "79f8ea522b2043c099fb5d68b28863e6",
  // 	secretKey: "a65487d01cbd4bf1a07e6ace775c2c32",
  // 	publicKey: "1f2dc512f2004000a64416531c4661ff",
  // 	url: "https://app.trustev.com/api/v2.0",
  // };

  // if( process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
  // 	trueValidate.url = "https://app-eu.trustev.com/api/v2.0";
  // }

  return getCredentialsTestCase(strategy); // change parameter for different test cases
}

/*
Patria _ STAGE
Username: PATRIASTAGE1
Password: CHangeme123!!
Merchant ID: 54545
Store ID: 1212
Authentication token - c2nN0MBn
 */
