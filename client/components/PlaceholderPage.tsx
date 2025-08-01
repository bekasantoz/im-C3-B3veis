import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedContent?: string[];
}

export default function PlaceholderPage({ title, description, suggestedContent }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            {suggestedContent && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Esta página poderia incluir:
                </h3>
                <ul className="text-left max-w-md mx-auto space-y-2">
                  {suggestedContent.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="border-gold-200 hover:bg-gold-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Desenvolvimento
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
