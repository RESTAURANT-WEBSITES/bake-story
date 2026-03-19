import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/919961155166?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20from%20BakeStory."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Order on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </motion.a>
  );
};

export default WhatsAppFloat;
