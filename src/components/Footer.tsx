import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient-warm mb-3">BakeStory</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every Bite Tells a Story. Handcrafted with love, baked to perfection.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Products", "About", "Delivery", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Makkah Tower, Mayyil, Kerala 670602</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>+91 9961155166 · +91 9746800449</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>bakestory228@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/919961155166" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">💬</a>
              <a href="https://www.instagram.com/bakestory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">📸</a>
              <a href="https://www.facebook.com/bakestory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BakeStory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
