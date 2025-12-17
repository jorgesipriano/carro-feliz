import logo from "@/assets/logo-kings-garage.jpeg";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="King's Garage" className="w-12 h-12 rounded-xl object-contain" />
            <div>
              <span className="text-xl font-bold block">King's Garage</span>
              <span className="text-xs text-muted-foreground">Venda • Troca • Financia</span>
            </div>
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

          <p className="text-sm text-muted-foreground text-center md:text-right">
            R. Wanderley Teixeira Matos, 49 - Trevo, BH<br />
            © 2024 King's Garage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
