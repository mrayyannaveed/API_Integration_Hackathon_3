import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url
    category,
    description,
    inventory,
    tags,
    }
    `)