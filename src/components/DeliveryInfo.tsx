import { motion } from "framer-motion";
import { Truck, Clock, Package, MapPin } from "lucide-react";

const deliveryFeatures = [
  { icon: Truck, title: "Free Delivery", desc: "Free delivery up to 3 km on orders ₹400+" },
  { icon: Clock, title: "Delivery Slots", desc: "Monday–Sunday, 1 PM – 5 PM" },
  { icon: MapPin, title: "Extended Range", desc: "Charges apply for locations beyond 3 km" },
  { icon: Package, title: "Careful Packaging", desc: "Every order is packed with care for freshness" },
];

const DeliveryInfo = () => {
  return (
    <section id="delivery" className="relative py-24 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Delivery</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mt-3 mb-4">
            Fresh to Your <span className="text-gradient-warm">Doorstep</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Timely delivery with careful packaging so every bite reaches you perfectly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-3d text-center p-8 rounded-2xl bg-card border border-border/50 shadow-bakery"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center animate-gentle-float">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
