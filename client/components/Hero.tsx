import { Button } from "./ui/button";
import { Search, MapPin, Home, Award } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [searchType, setSearchType] = useState("comprar");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-luxury-dark/60 via-luxury-dark/40 to-transparent absolute z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Encontre Sua
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              Casa dos Sonhos
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas em imóveis de luxo há mais de 20 anos. Oferecemos as
            melhores propriedades com o mais alto padrão de qualidade.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-2xl max-w-4xl mx-auto">
            {/* Search Type Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {["comprar", "alugar", "vender"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    searchType === type
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-gold-100"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Localização
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Cidade, bairro..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Tipo
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <select className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent appearance-none bg-white">
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Cobertura</option>
                    <option>Mansão</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Preço
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent appearance-none bg-white">
                  <option>Qualquer valor</option>
                  <option>Até R$ 500.000</option>
                  <option>R$ 500.000 - R$ 1.000.000</option>
                  <option>R$ 1.000.000 - R$ 2.000.000</option>
                  <option>Acima de R$ 2.000.000</option>
                </select>
              </div>

              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-3 px-8">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Imóveis Vendidos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                20+
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                Clientes Satisfeitos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
        <div className="flex items-center space-x-3">
          <Award className="w-8 h-8 text-gold-600" />
          <div>
            <div className="font-semibold text-foreground">Premiada</div>
            <div className="text-sm text-muted-foreground">
              Melhor Imobiliária 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
