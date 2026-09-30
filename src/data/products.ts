export type Product = {
  brand: string;
  code: string;
  name: string;
  spec: string;
  price: number | null;
  priceLabel: string;
  was?: number;
  stock: boolean;
  featured: number;
  img: string;
};

export const products: Product[] = [
  {
    brand: "ADO",
    code: "UK-ADO-01",
    name: "Air Carbon",
    spec: "250W Bafang · 12.5kg carbon · 20″",
    price: 1799,
    priceLabel: "£1,799",
    was: 2999,
    stock: true,
    featured: 1,
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ADO",
    code: "UK-ADO-02",
    name: "Air 20 Pro",
    spec: "250W · Samsung 36V/9.6Ah · 20″",
    price: 1399,
    priceLabel: "£1,399",
    was: 1899,
    stock: true,
    featured: 2,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ADO",
    code: "UK-ADO-03",
    name: "Air 20 Ultra",
    spec: "250W · 36V/10Ah · 2025/26",
    price: 1559,
    priceLabel: "From £1,559",
    stock: true,
    featured: 5,
    img: "https://images.unsplash.com/photo-1571333252816-854421cead5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ADO",
    code: "UK-ADO-04",
    name: "Air 28 Pro",
    spec: "250W · 28″ · torque sensor",
    price: 1299,
    priceLabel: "From £1,299",
    stock: true,
    featured: 6,
    img: "https://images.unsplash.com/photo-1485965120185-cf2e4c4b4c8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ENGWE",
    code: "UK-ENG-01",
    name: "EP-2 Pro",
    spec: "250W · 48V/13Ah · 20″ fat",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 4,
    img: "https://images.unsplash.com/photo-1485965120185-cf2e4c4b4c8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ENGWE",
    code: "UK-ENG-02",
    name: "Engine X",
    spec: "250W · 48V/13Ah · 20″",
    price: 999,
    priceLabel: "£999",
    was: 1249,
    stock: true,
    featured: 3,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "ENGWE",
    code: "UK-ENG-03",
    name: "M20",
    spec: "750W · 48V 13/26Ah · 20″",
    price: 1049,
    priceLabel: "From £1,049",
    stock: true,
    featured: 7,
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "LANKELEISI",
    code: "UK-LAN-01",
    name: "MG740 Plus",
    spec: "2000W dual · 48V 20Ah · 26″",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 8,
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "COSWHEEL",
    code: "UK-COS-01",
    name: "GT20",
    spec: "1500W peak · 48V 25Ah · 20″",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 9,
    img: "https://images.unsplash.com/photo-1485965120185-cf2e4c4b4c8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "DUOTTS",
    code: "UK-DUO-01",
    name: "C29",
    spec: "750W · 48V/15Ah · 29″",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 10,
    img: "https://images.unsplash.com/photo-1571333252816-854421cead5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "DYU",
    code: "UK-DYU-01",
    name: "A1F",
    spec: "250W · 36V/7.5Ah · 16″",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 11,
    img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
  },
  {
    brand: "Eleglide",
    code: "UK-ELE-01",
    name: "M1 Plus",
    spec: "250W · 36V 12.5Ah · APP",
    price: null,
    priceLabel: "Enquire",
    stock: true,
    featured: 12,
    img: "https://images.unsplash.com/photo-1571333252816-854421cead5b?auto=format&fit=crop&w=900&q=80",
  },
];

export const featuredDeck = products
  .filter((p) => p.featured <= 4)
  .sort((a, b) => a.featured - b.featured)
  .slice(0, 4);

export const brandRoster = [
  { name: "ADO", blurb: "Carbon fold" },
  { name: "ENGWE", blurb: "Fat / utility" },
  { name: "LANKELEISI", blurb: "Dual motor" },
  { name: "COSWHEEL", blurb: "High power" },
  { name: "DUOTTS · DYU · Eleglide", blurb: "More lines" },
] as const;

export const productBrands = [
  "All",
  ...Array.from(new Set(products.map((p) => p.brand))),
];
