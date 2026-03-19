import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, description, price, image, badge }: ProductCardProps) => {
  const whatsappMsg = encodeURIComponent(`Hi, I'd like to order ${name} from BakeStory.`);
  const whatsappUrl = `https://wa.me/919961155166?text=${whatsappMsg}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group card-3d bg-card rounded-2xl overflow-hidden shadow-bakery border border-border/50"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={`${name} from BakeStory bakery`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full shadow-bakery">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-transform duration-200 shadow-bakery"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
