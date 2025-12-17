import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-medium">
              Entre em contato
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Encontre o Carro dos Seus{" "}
              <span className="text-gradient-gold">Sonhos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa equipe de especialistas está pronta para ajudá-lo a encontrar 
              o veículo perfeito. Entre em contato e agende sua visita.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5531981180034" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold">(31) 98118-0034</p>
                </div>
              </a>
              
              <a 
                href="mailto:contato@kingsgarage.com.br"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold">contato@kingsgarage.com.br</p>
                </div>
              </a>
              
              <a 
                href="https://maps.google.com/?q=Rua+Wanderley+Teixeira+Matos+49+Trevo+Belo+Horizonte+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-semibold">R. Wanderley Teixeira Matos, 49 - Trevo, BH</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Solicite uma Proposta</h3>
            <form className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block text-muted-foreground">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-muted-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-muted-foreground">
                  Veículo de interesse
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  placeholder="Qual modelo você procura?"
                />
              </div>
              <Button variant="gold" size="lg" className="w-full mt-2" asChild>
                <a href="https://wa.me/5531981180034?text=Olá! Gostaria de solicitar uma proposta." target="_blank" rel="noopener noreferrer">
                  Enviar via WhatsApp
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
