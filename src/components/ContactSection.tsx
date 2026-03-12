import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-body font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Контакты
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-medium mb-6"
          >
            Давайте обсудим
            <br />
            <span className="text-gradient">ваш проект</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground leading-relaxed mb-10"
          >
            Напишите мне в Телеграм — отвечаю в течение нескольких часов.
            Обсудим задачу, предложу решение и составлю план работ.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-body font-medium text-base tracking-wide rounded-full hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
            Написать в Телеграм
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
