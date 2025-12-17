import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Vehicle } from "@/types/vehicle";

export function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVehicles() {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Erro ao buscar veículos:", error.message);
      } else {
        setVehicles(data || []);
      }
      setLoading(false);
    }

    fetchVehicles();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">Carregando veículos...</p>
        </div>
      </section>
    );
  }

  if (vehicles.length === 0) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">Nenhum veículo encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="estoque" className="py-16 md:py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-medium">
              Nosso Estoque
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Veículos em Destaque
            </h2>
          </div>
          <Button variant="goldOutline" onClick={() => window.open("https://wa.me/553198118034", "_blank")}>Ver Todo o Estoque</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image_url}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-primary-foreground text-xs font-bold">
                  {vehicle.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {vehicle.brand}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {vehicle.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{vehicle.name}</h3>

                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm text-muted-foreground">
                    {vehicle.km}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <p className="text-2xl font-bold text-gold">{vehicle.price}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://wa.me/553198118034?text=Olá, tenho interesse no veículo: ${vehicle.name}`, "_blank")}
                  >
                    Tenho Interesse
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
