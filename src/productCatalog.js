import j1 from "./assets/j1.webp";
import j1Alt1 from "./assets/j1-1.webp";
import j1Alt2 from "./assets/j1-2.webp";
import j1Alt3 from "./assets/j1-4.webp";
import j2 from "./assets/j2.webp";
import j2Alt1 from "./assets/j2-1.webp";
import j2Alt2 from "./assets/j2-2.webp";
import j2Alt3 from "./assets/j2-3.webp";
import j3 from "./assets/j3.webp";
import j3Alt1 from "./assets/j3-1.webp";
import j3Alt2 from "./assets/j3-2.webp";
import j3Alt3 from "./assets/j3-3.webp";
import j4 from "./assets/j4-1.webp";
import j4Alt1 from "./assets/j4-2.webp";
import j4Alt2 from "./assets/j4-3.webp";
import j4Alt3 from "./assets/j4-4.webp";
import j5 from "./assets/j5.webp";
import j5Alt1 from "./assets/j5-1.webp";
import j5Alt2 from "./assets/j5-2.webp";
import j5Alt3 from "./assets/j5-3.webp";

const DEFAULT_DESCRIPTION =
  "Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.";

const PRODUCT_GALLERIES = {
  j1: [j1, j1Alt1, j1Alt2, j1Alt3],
  j2: [j2, j2Alt1, j2Alt2, j2Alt3],
  j3: [j3, j3Alt1, j3Alt2, j3Alt3],
  j4: [j4, j4Alt1, j4Alt2, j4Alt3],
  j5: [j5, j5Alt1, j5Alt2, j5Alt3],
};

function normalizePrice(price) {
  return String(price).replace(/^From\s+/i, "").trim();
}

export function buildProductDetail(product) {
  const gallery = PRODUCT_GALLERIES[product.galleryKey] ?? PRODUCT_GALLERIES.j1;
  const options = product.options?.length ? product.options : ["Gold", "Silver", "Brown"];
  const variant = product.variant ?? options[0];

  return {
    id: product.id,
    title: product.title,
    category: product.category ?? "JEWELRY",
    discount: product.discount ?? "",
    price: normalizePrice(product.price),
    oldPrice: product.oldPrice ?? "",
    variant,
    options,
    image: gallery[0],
    gallery,
    stock: product.stock ?? 16,
    description: product.description ?? DEFAULT_DESCRIPTION,
  };
}

export const defaultProductDetail = buildProductDetail({
  id: "product-default",
  title: "Product details",
  price: "Rs. 28.00",
  oldPrice: "Rs. 35.00",
  variant: "2-12",
  options: ["2-12", "2-14", "2-16"],
  galleryKey: "j1",
});
