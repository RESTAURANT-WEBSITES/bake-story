import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import dubaiCake from "@/assets/dubai-pistachio-cake.jpg";
import creamCake from "@/assets/fresh-cream-cake.jpg";
import hamper from "@/assets/premium-hamper.jpg";
import pastries from "@/assets/pastries.jpg";
import cookies from "@/assets/cookies.jpg";
import bread from "@/assets/artisan-bread.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";

const products = [
  {
    name: "Dubai Pistachio Cake",
    description: "Luxurious layered pistachio cake with rich cream filling — our signature special.",
    price: "₹1,200",
    image: dubaiCake,
    badge: "⭐ Special",
  },
  {
    name: "Fresh Cream Cake",
    description: "Light sponge layered with fresh whipped cream and seasonal strawberries.",
    price: "₹650",
    image: creamCake,
    badge: "Bestseller",
  },
  {
    name: "Premium Hamper",
    description: "A curated gift box of assorted cookies, brownies, and pastries — perfect for any occasion.",
    price: "₹1,500",
    image: hamper,
    badge: "Gift",
  },
  {
    name: "Chocolate Birthday Cake",
    description: "Rich dark chocolate ganache cake, perfect for celebrations and special moments.",
    price: "₹800",
    image: chocolateCake,
  },
  {
    name: "French Pastries",
    description: "Flaky, buttery croissants and Danish pastries baked fresh every morning.",
    price: "₹120",
    image: pastries,
  },
  {
    name: "Artisan Cookies",
    description: "Chunky chocolate chip cookies made with premium Belgian chocolate.",
    price: "₹80",
    image: cookies,
  },
  {
    name: "Artisan Sourdough Bread",
    description: "Traditional slow-fermented sourdough with a golden crust and soft interior.",
    price: "₹250",
    image: bread,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-24 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Menu</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mt-3 mb-4">
            Baked with <span className="text-gradient-warm">Passion</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From signature cakes to artisan breads — every item is handcrafted with the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
