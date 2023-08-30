import {
  EmailMajor,
  ExchangeMajor,
  LogOutMinor,
  QuestionMarkMajor,
  StoreMajor,
} from "@shopify/polaris-icons";

export const tableHeadings = [
  { title: "Tags", hidden: false },
  { title: "Status", hidden: false },
  { title: "Product Type", hidden: true },
  { title: "Vendor", hidden: false },
  { title: "Template", hidden: true },
  { title: "Online Store", hidden: true },
  { title: "Point of Sale", hidden: true },
  { title: "Pimary Market (India)", hidden: true },
  { title: "International", hidden: true },
  { title: "Base Price", hidden: false },
  { title: "Compare at Price", hidden: true },
  { title: "Cost Per Item", hidden: true },
  { title: "Charges Taxes", hidden: true },
  { title: "SKU", hidden: true },
  { title: "Barcode (ISBN, UPC, GTIN, etc.)", hidden: true },
  { title: "Inventory Quantity", hidden: false },
  { title: "Continue Selling when out of Stock", hidden: true },
  { title: "Track Quantity", hidden: true },
  { title: "Weight", hidden: true },
  { title: "Requires Shipping", hidden: true },
  { title: "Harmonized System Code", hidden: true },
  { title: "Country of Origin", hidden: true },
  { title: "Page Title (SEO)", hidden: true },
  { title: "Meta Discription (SEO)", hidden: true },
  { title: "URL Handle (SEO)", hidden: true },
];

export const sectionsArr = [
  {
    title: "General",
    options: [
      {
        value: "Product Title",
        label: "Product Title",
        disabled: true,
      },
      { value: "Tags", label: "Tags", hidden: true },
      { value: "Status", label: "Status", hidden: false },
      { value: "Product Type", label: "Product Type", hidden: true },
      { value: "Vendor", label: "Vendor", hidden: true },
      { value: "Template", label: "Template", hidden: true },
    ],
  },
  {
    title: "Sales Channel",
    options: [
      { value: "Online Store", label: "Online Store", hidden: true },
      { value: "Point of Sale", label: "Point of Sale", hidden: true },
    ],
  },
  {
    title: "Markets",
    options: [
      {
        value: "Primary Market (India)",
        hidden: false,
        label: "Primary Market (India)",
      },
      { value: "International", label: "International", hidden: true },
    ],
  },
  {
    title: "Pricing",
    options: [
      { value: "Base Price", label: "Base Price", hidden: false },
      { value: "Compare at Price", label: "Compare at Price", hidden: true },
      { value: "Cost Per Item", label: "Cost Per Item", hidden: false },
      { value: "Charges Taxes", label: "Charges Taxes", hidden: true },
    ],
  },
  {
    title: "Inventory",
    options: [
      { value: "SKU", label: "SKU", hidden: true },
      {
        value: "Barcode (ISBN, UPC, GTIN, etc.)",
        hidden: true,
        label: "Barcode (ISBN, UPC, GTIN, etc.)",
      },
      {
        value: "Inventory Quantity",
        label: "Inventory Quantity",
        hidden: true,
      },
      {
        value: "Continue Selling when out of Stock",
        label: "Continue Selling when out of Stock",
        hidden: true,
      },
      { value: "Track Quantity", label: "Track Quantity", hidden: true },
    ],
  },
  {
    title: "Shipping",
    options: [
      { value: "Weight", label: "Weight", hidden: false },
      {
        value: "Requires Shipping",
        label: "Requires Shipping",
        hidden: true,
      },
      {
        value: "Harmonized System Code",
        label: "Harmonized System Code",
        hidden: true,
      },
      {
        value: "Country of Origin",
        label: "Country of Origin",
        hidden: true,
      },
    ],
  },
  {
    title: "SEO",
    options: [
      { value: "Page Title (SEO)", label: "Page Title (SEO)", hidden: true },
      {
        value: "Meta Discription (SEO)",
        label: "Meta Discription (SEO)",
        hidden: true,
      },
      { value: "URL Handle (SEO)", label: "URL Handle (SEO)", hidden: true },
    ],
  },
];

export const userMenu = [
  {
    items: [{ content: "My Store", icon: StoreMajor }],
  },
  {
    items: [{ content: "Help center", icon: QuestionMarkMajor }],
  },
  {
    items: [{ content: "ChangeLog", icon: ExchangeMajor }],
  },
  {
    items: [{ content: "ashu782001@gmail.com", icon: EmailMajor }],
  },
  {
    items: [{ content: "Logout", icon: LogOutMinor }],
  },
];
