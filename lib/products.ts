import { waLink } from "./wa"

export type Product = {
  sku: string
  name: string
  category: "crop" | "hoodie" | "pants" | "t-shirt"
  categoryLabel: string
  price: number
  image: string
  alt: string
}

export const products: Product[] = [
  { sku: "K2001-CROP-01", name: "Crop Dream Tunnel", category: "crop", categoryLabel: "Crops", price: 34, image: "/store/crop-1.png", alt: "Crop raglan blanco y negro con estampado Dream Tunnel" },
  { sku: "K2001-CROP-02", name: "Jersey Chicago 88", category: "crop", categoryLabel: "Crops", price: 38, image: "/store/crop-2.png", alt: "Crop jersey negro y rojo estilo Chicago 88" },
  { sku: "K2001-CROP-03", name: "Polo Zip Gryf", category: "crop", categoryLabel: "Crops", price: 36, image: "/store/crop-3.png", alt: "Polo corto negro con cremallera y detalles rojos" },
  { sku: "K2001-HOOD-01", name: "Hoodie Skull Flame", category: "hoodie", categoryLabel: "Hoodies", price: 62, image: "/store/hoodie-1.png", alt: "Hoodie marrón con calavera en llamas" },
  { sku: "K2001-HOOD-02", name: "Hoodie All We Need", category: "hoodie", categoryLabel: "Hoodies", price: 58, image: "/store/hoodie-2.png", alt: "Hoodie rosa con texto All We Need Is Love" },
  { sku: "K2001-HOOD-03", name: "Hoodie Vaguely", category: "hoodie", categoryLabel: "Hoodies", price: 60, image: "/store/hoodie-3.png", alt: "Hoodie rosa con dibujo lineal rojo" },
  { sku: "K2001-HOOD-04", name: "Hoodie Racer Cream", category: "hoodie", categoryLabel: "Hoodies", price: 64, image: "/store/hoodie-4.png", alt: "Hoodie crema con detalles rojos estilo racing" },
  { sku: "K2001-PANT-01", name: "Denim NY Puppets", category: "pants", categoryLabel: "Pants", price: 64, image: "/store/pants-1.png", alt: "Jeans baggy oscuro con print New York Master of Puppets" },
  { sku: "K2001-PANT-02", name: "Pants White Tie", category: "pants", categoryLabel: "Pants", price: 58, image: "/store/pants-2.png", alt: "Pantalón blanco ancho con corbata estampada" },
  { sku: "K2001-PANT-03", name: "Sweatpants NY", category: "pants", categoryLabel: "Pants", price: 48, image: "/store/pants-3.png", alt: "Joggers grises con texto New York en rojo" },
  { sku: "K2001-PANT-04", name: "Denim Shorts Liberty", category: "pants", categoryLabel: "Pants", price: 52, image: "/store/pants-4.png", alt: "Shorts de jean con print de la Estatua de la Libertad" },
  { sku: "K2001-TEE-01", name: "Tee Dream Speed", category: "t-shirt", categoryLabel: "T-shirts", price: 30, image: "/store/t-shirt-1.png", alt: "Camiseta blanca con estampado retro de autos" },
  { sku: "K2001-TEE-02", name: "Tee Web Red", category: "t-shirt", categoryLabel: "T-shirts", price: 32, image: "/store/t-shirt-2.png", alt: "Camiseta roja con telaraña negra" },
  { sku: "K2001-TEE-03", name: "Tee Blurred", category: "t-shirt", categoryLabel: "T-shirts", price: 34, image: "/store/t-shirt-3.png", alt: "Camiseta negra lavada con rostro difuminado" },
  { sku: "K2001-TEE-04", name: "Tee Ramen Ukiyo", category: "t-shirt", categoryLabel: "T-shirts", price: 30, image: "/store/t-shirt-4.png", alt: "Camiseta blanca con ilustración de ramen estilo ukiyo-e" },
  { sku: "K2001-TEE-05", name: "Tee Portrait Wash", category: "t-shirt", categoryLabel: "T-shirts", price: 34, image: "/store/t-shirt-5.png", alt: "Camiseta negra lavada con retrato" },
]

export function productMessage(p: Product): string {
  return `Hola Kiosko 2001, quiero el ${p.sku} — ${p.name} ($${p.price}). ¿Sigue disponible?`
}

export function productWaLink(p: Product): string {
  return waLink(productMessage(p))
}
