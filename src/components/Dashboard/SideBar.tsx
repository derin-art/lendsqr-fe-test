import Style from "./Dashboard.module.scss";
import SideBarOptionsComp from "./SideBarOptionsComp";

export default function SideBar() {
  /* For easier importing of SideBar svg assets */

  const sideBarSvgRootLocation = "/Icons/SideBar/";

  const customersMenuSection = [
    { iconPath: `${sideBarSvgRootLocation}/Users.svg`, name: "Users" },
    {
      iconPath: `${sideBarSvgRootLocation}/Guarantors.svg`,
      name: "Guarantors",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Loans.svg`,
      name: "Loans",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/DecisionModel.svg`,
      name: "Decision Models",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Savings.svg`,
      name: "Savings",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/LoanRequest.svg`,
      name: "Loan Requests",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/WhiteList.svg`,
      name: "WhiteList",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Karma.svg`,
      name: "Karma",
    },
  ];

  const businessMenuSection = [
    {
      iconPath: `${sideBarSvgRootLocation}/Organization.svg`,
      name: "Organization",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/LoanProducts.svg`,
      name: "Loan Products",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/SavingsProducts.svg`,
      name: "Savings Products",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/FeesAndCharges.svg`,
      name: "Fees and Charges",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Transactions.svg`,
      name: "Transactions",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Services.svg`,
      name: "Services",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/ServiceAccount.svg`,
      name: "Service Account",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Settlement.svg`,
      name: "Settlements",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Reports.svg`,
      name: "Reports",
    },
  ];

  const settingsMenuSection = [
    {
      iconPath: `${sideBarSvgRootLocation}/Preferences.svg`,
      name: "Preferences",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/FeesAndPricing.svg`,
      name: "Fees and Pricing",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/AuditLogs.svg`,
      name: "Audit Logs",
    },
  ];

  return (
    <div className={`${Style.SideBar}`}>
      <div className={`${Style.MenuCont}`}>
        <span>CUSTOMERS</span>
        {customersMenuSection.map((item, index) => {
          return (
            <SideBarOptionsComp
              icon={item.iconPath}
              name={item.name}
              key={index}
            ></SideBarOptionsComp>
          );
        })}
      </div>
      <div className={`${Style.MenuCont}`}>
        <span>BUSINESSES</span>
        {businessMenuSection.map((item, index) => {
          return (
            <SideBarOptionsComp
              icon={item.iconPath}
              name={item.name}
              key={index}
            ></SideBarOptionsComp>
          );
        })}
      </div>
      <div className={`${Style.MenuCont}`}>
        <span>SETTINGS</span>
        {settingsMenuSection.map((item, index) => {
          return (
            <SideBarOptionsComp
              icon={item.iconPath}
              name={item.name}
              key={index}
            ></SideBarOptionsComp>
          );
        })}
      </div>
    </div>
  );
}
