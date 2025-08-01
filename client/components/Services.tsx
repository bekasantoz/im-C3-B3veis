import { Home, Search, FileText, Key, Heart, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Consultoria Personalizada",
    description: "Análise completa das suas necessidades para encontrar o imóvel perfeito.",
    features: ["Perfil personalizado", "Busca especializada", "Acompanhamento dedicado"],
  },
  {
    icon: Home,
    title: "Avaliação de Imóveis",
    description: "Avaliação precisa do valor de mercado do seu imóvel com tecnologia avançada.",
    features: ["Análise de mercado", "Relatório detalhado", "Preço justo garantido"],
  },
  {
    icon: FileText,
    title: "Documentação Completa",
    description: "Cuidamos de toda a documentação legal para uma transação segura.",
    features: ["Análise jurídica", "Regularização", "Suporte legal"],
  },
  {
    icon: Key,
    title: "Financiamento",
    description: "Parcerias com os melhores bancos para facilitar seu financiamento.",
    features: ["Melhores taxas", "Aprovação rápida", "Suporte completo"],
  },
  {
    icon: Heart,
    title: "Pós-Venda",
    description: "Acompanhamento completo mesmo após a conclusão da transação.",
    features: ["Suporte contínuo", "Manutenção", "Relacionamento duradouro"],
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description: "Orientação especializada para investimentos imobiliários rentáveis.",
    features: ["Análise de ROI", "Oportunidades exclusivas", "Estratégia personalizada"],
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600 ml-3">
              Serviços
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um serviço completo e personalizado para todas as suas necessidades imobiliárias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-gold-200 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold-600 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para Encontrar Seu Imóvel dos Sonhos?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudá-lo em cada etapa do processo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gold-600 px-8 py-3 rounded-xl font-semibold hover:bg-gold-50 transition-colors duration-200">
              Agendar Consultoria
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
