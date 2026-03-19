import { motion } from "framer-motion";
import { Heart, Award, Sparkles, Cake } from "lucide-react";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every creation begins with a passion for sharing joy through irresistible bakes." },
  { icon: Award, title: "Finest Ingredients", desc: "We source only premium, high-quality ingredients for every recipe." },
  { icon: Sparkles, title: "Hygiene First", desc: "Our kitchen maintains the highest standards of cleanliness and food safety." },
  { icon: Cake, title: "Custom Creations", desc: "Birthdays, weddings, baby showers, corporate events — we craft them all." },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold mt-3 mb-6 flex flex-wrap items-center gap-x-3">
              About 
              <span className="text-gradient-warm inline-flex items-center gap-3">
                BakeStory
                <img src="/logo.png" alt="BakeStory Logo" className="h-20 sm:h-24 w-auto drop-shadow-md" />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-serif-body">
              At BakeStory, every creation begins with a passion for sharing joy through irresistible bakes. 
              Every product is handcrafted with love, care, and only the finest ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We specialize in custom cakes for birthdays, weddings, anniversaries, baby showers, corporate events, 
              and elegant French-style cakes. Whether it's a grand celebration or a simple sweet craving, 
              BakeStory has something special for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-3d p-6 rounded-2xl bg-card border border-border/50 shadow-bakery"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <v.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
