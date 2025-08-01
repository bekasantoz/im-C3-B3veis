import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Casa Moderna em Alphaville",
    location: "Alphaville, São Paulo",
    price: "R$ 2.800.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    type: "Casa",
    featured: true,
  },
  {
    id: 2,
    title: "Apartamento de Luxo na Faria Lima",
    location: "Faria Lima, São Paulo",
    price: "R$ 1.950.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "Apartamento",
    featured: false,
  },
  {
    id: 3,
    title: "Mansão com Vista para o Mar",
    location: "Riviera de São Lourenço",
    price: "R$ 4.200.000",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 5,
    bathrooms: 4,
    area: 520,
    type: "Mansão",
    featured: true,
  },
  {
    id: 4,
    title: "Cobertura Duplex Vila Madalena",
    location: "Vila Madalena, São Paulo",
    price: "R$ 3.100.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    type: "Cobertura",
    featured: false,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Propriedades em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600 ml-3">
              Destaque
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de imóveis de luxo, 
            cuidadosamente escolhidos para oferecer o melhor em conforto e elegância.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:border-gold-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-gradient-to-r from-gold-500 to-gold-600 text-white">
                      Destaque
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {property.type}
                  </Badge>
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500" />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-luxury-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-bold">
                    {property.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold-600 transition-colors duration-200">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-gold-200 hover:bg-gold-50 hover:border-gold-300 hover:text-gold-700"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-3"
          >
            Ver Todas as Propriedades
          </Button>
        </div>
      </div>
    </section>
  );
}
