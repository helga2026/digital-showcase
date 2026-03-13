import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";
import portfolio7 from "@/assets/portfolio-7.png";
import portfolio8 from "@/assets/portfolio-8.png";
import portfolio9 from "@/assets/portfolio-9.png";
import portfolio10 from "@/assets/portfolio-10.png";
import portfolio11 from "@/assets/portfolio-11.png";
import portfolio12 from "@/assets/portfolio-12.png";
import portfolio13 from "@/assets/portfolio-13.jpg";

const projects = [
  {
    images: [portfolio2],
    title: "Брендинг для отеля «Unkinda»",
    category: "Айдентика · Фирменный стиль",
  },
  {
    images: [portfolio3],
    title: "Редизайн сайта Clever Studio",
    category: "Веб-дизайн · UX/UI",
  },
  {
    images: [portfolio4, portfolio5, portfolio6, portfolio7, portfolio8],
    title: "SMM-кампания Faberlic",
    category: "SMM · Контент-маркетинг",
  },
  {
    images: [portfolio9, portfolio10, portfolio11, portfolio12, portfolio13],
    title: "Коллекция зима 2024",
    category: "Презентация коллекции",
  },
];

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  if (images.length === 1) {
    return <img src={images[0]} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />;
  }
  return (
    <div className="relative w-full h-full">
      <img src={images[current]} alt={`${alt} ${current + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-4 w-4 text-foreground" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-4 w-4 text-foreground" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <span key={idx} className={`block w-1.5 h-1.5 rounded-full transition-colors ${idx === current ? "bg-foreground" : "bg-foreground/40"}`} />
        ))}
      </div>
    </div>
  );
};

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
                <ImageCarousel images={project.images} alt={project.title} />
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
