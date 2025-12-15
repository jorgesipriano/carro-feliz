import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">King's Garage</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Início
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Estoque
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Financiamento
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Contato
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 King's Garage - Belo Horizonte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
