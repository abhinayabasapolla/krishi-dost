import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WeatherWidget />
      <ServicesGrid />
    </div>
  );
};

export default Index;