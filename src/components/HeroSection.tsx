import { motion } from "framer-motion";
import heroPhoto from "@/assets/hero-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Маркетинг · Дизайн · Стратегия
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
              Создаю бренды,
              <br />
              <span className="text-gradient">которые продают</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
              Помогаю бизнесу в России и Беларуси выделяться на рынке через
              стратегический маркетинг, сильный визуал и продающие воронки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body font-medium text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Смотреть портфолио
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 font-body font-medium text-sm tracking-wide rounded-full hover:bg-foreground/5 transition-colors"
              >
                Связаться со мной
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-3xl overflow-hidden">
                <img
                  src={heroPhoto}
                  alt="Фрилансер-маркетолог"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
