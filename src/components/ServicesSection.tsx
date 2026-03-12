import { motion } from "framer-motion";
import { Target, Palette, TrendingUp, Megaphone } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Маркетинговая стратегия",
    description:
      "Анализ рынка, конкурентов и целевой аудитории. Разработка пошагового плана продвижения вашего бизнеса.",
  },
  {
    icon: Palette,
    title: "Брендинг и айдентика",
    description:
      "Создание уникального визуального образа — от логотипа до полного фирменного стиля, который запоминается.",
  },
  {
    icon: TrendingUp,
    title: "Воронки продаж",
    description:
      "Построение автоматизированных воронок, которые превращают холодный трафик в лояльных клиентов.",
  },
  {
    icon: Megaphone,
    title: "SMM и контент",
    description:
      "Ведение социальных сетей, создание контент-планов и визуалов, которые вовлекают и продают.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center"
        >
          Услуги
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-medium text-center mb-16"
        >
          Чем я могу помочь
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
