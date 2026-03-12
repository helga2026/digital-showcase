import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "лет опыта" },
  { value: "120+", label: "проектов" },
  { value: "98%", label: "довольных клиентов" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Обо мне
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium mb-8"
          >
            Маркетинг — это искусство
            <br />
            <span className="text-gradient">превращать идеи в прибыль</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-muted-foreground leading-relaxed mb-16"
          >
            Я специализируюсь на комплексном маркетинге для малого и среднего
            бизнеса. Разрабатываю стратегии продвижения, создаю визуальные
            концепции брендов и строю воронки продаж, которые работают на
            результат. Каждый проект — это индивидуальный подход и глубокое
            погружение в бизнес клиента.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
