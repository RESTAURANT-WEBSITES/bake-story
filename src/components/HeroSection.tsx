import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D tilted hero image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
        <img
          src={heroImg}
          alt="BakeStory artisan bakery display with fresh croissants and cakes"
          className="w-full h-full object-cover"
          style={{ transform: "perspective(1200px) rotateX(1deg) scale(1.05)" }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              🍰 Handcrafted with Love
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            Freshly Baked{" "}
            <span className="text-gradient-warm">Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-serif-body text-muted-foreground mb-4 max-w-2xl"
          >
            Every Bite Tells a Story, Crafted with Love, Baked to Perfection!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-muted-foreground/80 mb-8 max-w-xl"
          >
            Craving something sweet? Treat yourself today—you deserve it. Deliciously made with love and the finest ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/919961155166?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20from%20BakeStory."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-2xl shadow-bakery-lg hover:shadow-bakery transition-all duration-300 hover:scale-105"
            >
              🛒 Order Now
            </a>
            <button
              onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-primary/20 text-foreground rounded-2xl hover:bg-primary/5 transition-all duration-300"
            >
              View Menu
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
