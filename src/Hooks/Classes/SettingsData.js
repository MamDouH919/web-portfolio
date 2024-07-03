export class SettingsData {
  constructor(settingsData) {
    this.clientMinimumVersion = settingsData.clientMinimumVersion;
    this.agentMinimumVersion = settingsData.agentMinimumVersion;
    this.mainCustomerGLAccount = settingsData.mainCustomerGLAccount;
    this.mainDeliveryAgentGLAccount = settingsData.mainDeliveryAgentGLAccount;
    this.mainCustodyGLAccount = settingsData.mainCustodyGLAccount;
    this.defaultShippingService = settingsData.defaultShippingService;
    this.warehousing = settingsData.warehousing;
    this.renewalDate = settingsData.renewalDate;
    this.support = settingsData.support;
    this.allowC2C = settingsData.allowC2C;
    this.defaultPrintTemplate = settingsData.defaultPrintTemplate;
  }

  static shared;
}
