import { motion } from "framer-motion";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const projects = [
  {
    image: portfolio2,
    title: "Брендинг для отеля «Unkinda»",
    category: "Айдентика · Фирменный стиль",
  },
  {
    image: portfolio3,
    title: "Редизайн сайта Clever Studio",
    category: "Веб-дизайн · UX/UI",
  },
  {
    image: portfolio4,
    title: "SMM-кампания для косметического бренда — Desktop",
    category: "SMM · Контент-маркетинг",
  },
  {
    image: portfolio5,
    title: "SMM-кампания для косметического бренда — Mobile",
    category: "SMM · Контент-маркетинг",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center"
        >
          Портфолио
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-medium text-center mb-16"
        >
          Избранные проекты
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="font-display text-lg font-medium mb-1">
                {project.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
