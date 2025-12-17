import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";
import logo from "@/assets/logo-kings-garage.jpeg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="King's Garage" className="w-12 h-12 rounded-xl object-contain" />
          <span className="text-xl font-bold">King's Garage</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
            Início
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
            Estoque
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
            Financiamento
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
            Contato
          </a>
        </nav>

        <Button variant="gold" size="sm" asChild>
          <a href="https://wa.me/5531981180034" target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </a>
        </Button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Carro de luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
              Venda • Troca • Financia | Seminovos e Car Hunter
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Seu Próximo Carro
            <br />
            <span className="text-gradient-gold">Está Aqui</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Uma loja com propósito. Encontre o veículo dos seus sonhos com as melhores condições de venda, troca e financiamento.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="gold" size="lg" asChild>
              <a href="#estoque">Ver Estoque</a>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <a href="https://wa.me/5531981180034?text=Olá! Gostaria de agendar uma visita na King's Garage." target="_blank" rel="noopener noreferrer">
                Agendar Visita
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-10 mt-14 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Veículos vendidos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
