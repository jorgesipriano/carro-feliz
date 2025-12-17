import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import logo from "@/assets/logo-kings-garage.jpeg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Estoque", id: "estoque" },
    { label: "Financiamento", id: "financiamento" },
    { label: "Contato", id: "contato" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={logo} alt="King's Garage" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-contain" />
          <span className="text-lg md:text-xl font-bold">King's Garage</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button
          variant="gold"
          size="sm"
          className="hidden md:flex"
          onClick={() => window.open("https://wa.me/5531981180034", "_blank")}
        >
          Fale Conosco
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 text-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="gold"
              className="mt-2"
              onClick={() => window.open("https://wa.me/5531981180034", "_blank")}
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
      <div className="container mx-auto max-w-7xl px-4 relative z-10 py-8 md:py-0">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gold/10 text-gold text-xs md:text-sm font-medium mb-4 md:mb-6">
              Venda • Troca • Financia | Seminovos e Car Hunter
            </span>
          </div>
          
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Seu Próximo Carro
            <br />
            <span className="text-gradient-gold">Está Aqui</span>
          </h1>
          
          <p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Uma loja com propósito. Encontre o veículo dos seus sonhos com as melhores condições de venda, troca e financiamento.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="gold" 
              size="lg"
              className="text-sm md:text-base"
              onClick={() => scrollToSection("estoque")}
            >
              Ver Estoque
            </Button>
            <Button 
              variant="goldOutline" 
              size="lg"
              className="text-sm md:text-base"
              onClick={() => window.open("https://wa.me/5531981180034?text=Olá! Gostaria de agendar uma visita na King's Garage.", "_blank")}
            >
              Agendar Visita
            </Button>
          </div>

          {/* Stats - Mobile optimized */}
          <div 
            className="flex flex-wrap gap-6 md:gap-10 mt-8 md:mt-14 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold">500+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Veículos vendidos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold">15+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold">98%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
