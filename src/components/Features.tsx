import { Car, Shield, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os veículos passam por rigorosa inspeção de 150 pontos",
  },
  {
    icon: Clock,
    title: "Financiamento Rápido",
    description: "Aprovação de crédito em até 24 horas com as melhores taxas",
  },
  {
    icon: Car,
    title: "Test Drive Grátis",
    description: "Agende seu test drive sem compromisso em qualquer modelo",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Seleção exclusiva dos melhores veículos do mercado",
  },
];

export function Features() {
  return (
    <section id="financiamento" className="py-16 md:py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Há mais de 15 anos conectando clientes aos melhores veículos do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
