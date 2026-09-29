/**
 * Zoho CRM Web-to-Lead form settings (from the form code exported in Zoho CRM →
 * Setup → Channels → Webforms). These values are public by design: they appear
 * in the HTML of any page that shows a Zoho form. If the form is recreated in
 * Zoho, copy the new values from its embed code into this file.
 */
export const zohoForm = {
  action: "https://crm.zoho.in/crm/WebToLeadForm",
  formId: "1356355000000473560",
  hidden: {
    xnQsjsdp: "047097e5a592b91e1dc9c2f43d2f66ae4304ae8c48dbd476039cc5a6147b709e",
    xmIwtLD: "d0646a0eb6b27034478876c52b36507db64f5d2bdba57625b495cd765f76492073f6299f02e8fd269d710b72d7b5f5ae",
    actionType: "TGVhZHM=",
    // Where Zoho sends visitors after a successful submission
    returnURL: "https://skyyhan.com/thank-you",
  },
  // Zoho's spam trap field: must stay empty
  honeypotName: "aG9uZXlwb3Q",
  analyticsSrc:
    "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f53c1edf2dc5e4a87be84f149e91c8189d17316e14c804810b9ce3fd6f470d9d899de97eac3ced4673ed7eff83f2324fgidafc6f0d4a281a910509380e99e2a582869d665ffcc02063801c0981d7a5832cbgid9f2d8ed29b748f7f23223fa9a45ca7b267f42873411e1873166a4360c5afe629gid2e7b2e315434559020d3b8f88cba42de116abcad01401eab21206b21bbe89449&tw=4b02fda8ff17dc2e1cba6746c061a01d3770975823fbb4325ddbcdc9add767aa&version=v2",
} as const;
