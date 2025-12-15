import { Button } from "@/components/ui/button";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carCoupe from "@/assets/car-coupe.jpg";

const vehicles = [
  {
    id: 1,
    name: "SUV Premium",
    brand: "Elite X7",
    year: 2024,
    price: "R$ 289.900",
    km: "0 km",
    image: carSuv,
    tag: "Novo",
  },
  {
    id: 2,
    name: "Sedan Esportivo",
    brand: "Elite S8",
    year: 2024,
    price: "R$ 349.900",
    km: "0 km",
    image: carSedan,
    tag: "Destaque",
  },
  {
    id: 3,
    name: "Roadster",
    brand: "Elite Z4",
    year: 2023,
    price: "R$ 259.900",
    km: "12.500 km",
    image: carCoupe,
    tag: "Seminovo",
  },
];

export function Vehicles() {
  return (
    <section className="py-24 px-4">
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
          <Button variant="goldOutline">Ver Todo o Estoque</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-primary-foreground text-xs font-bold">
                  {vehicle.tag}
                </span>
              </div>

              {/* Content */}
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
                  <Button variant="outline" size="sm">
                    Detalhes
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
