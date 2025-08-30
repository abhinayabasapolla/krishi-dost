import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farmers using technology in agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
            किसान दोस्त
            <span className="block text-2xl md:text-4xl mt-2 text-accent">
              आपका डिजिटल खेती साथी
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            मौसम, फसल की जानकारी, सरकारी योजनाएं और खेती की हर समस्या का समाधान 
            आपके मोबाइल में। सरल भाषा में, आसान तरीके से।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-warm text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-elevated transition-bounce"
            >
              शुरू करें
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg rounded-xl transition-smooth"
            >
              और जानें
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;