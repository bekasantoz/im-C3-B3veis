import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Casa Áurea</span>
                <span className="text-gold-300 text-sm">Luxury Real Estate</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em imóveis de luxo há mais de 20 anos. 
              Conectamos pessoas aos seus sonhos através dos melhores imóveis.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Navegação</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Início</Link></li>
              <li><Link to="/propriedades" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Propriedades</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Serviços</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Compra</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Venda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Locação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Avaliação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Consultoria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-300 transition-colors duration-200">Financiamento</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-300 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Av. Faria Lima, 1234</p>
                  <p>Itaim Bibi, São Paulo - SP</p>
                  <p>CEP: 04538-132</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-300" />
                <div className="text-gray-300">
                  <p>+55 11 9999-9999</p>
                  <p>+55 11 3333-3333</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-300" />
                <div className="text-gray-300">
                  <p>contato@casaaurea.com</p>
                  <p>vendas@casaaurea.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Casa Áurea. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Política de Privacidade</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">Termos de Uso</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-200">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
