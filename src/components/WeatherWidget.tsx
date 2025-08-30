import { Card } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind, Leaf } from "lucide-react";

const WeatherWidget = () => {
  // Mock weather data - in real app this would come from API
  const currentWeather = {
    temperature: 28,
    condition: "sunny",
    humidity: 65,
    windSpeed: 12,
    location: "दिल्ली, भारत"
  };

  const forecast = [
    { day: "आज", icon: Sun, temp: "28°", desc: "धूप" },
    { day: "कल", icon: CloudRain, temp: "24°", desc: "हल्की बारिश" },
    { day: "परसों", icon: Cloud, temp: "26°", desc: "बादल" },
    { day: "रविवार", icon: Sun, temp: "30°", desc: "साफ" }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return Sun;
      case "cloudy":
        return Cloud;
      case "rainy":
        return CloudRain;
      default:
        return Sun;
    }
  };

  const CurrentIcon = getWeatherIcon(currentWeather.condition);

  return (
    <section className="py-16 px-4 gradient-sky">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-sky-foreground">
            आज का मौसम
          </h2>

          {/* Current Weather */}
          <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-elevated mb-8">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium text-muted-foreground mb-1">
                    {currentWeather.location}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <CurrentIcon className="w-12 h-12 text-accent" />
                    <span className="text-5xl font-bold text-foreground">
                      {currentWeather.temperature}°C
                    </span>
                  </div>
                </div>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Thermometer className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="text-sm text-muted-foreground">तापमान</div>
                  <div className="font-semibold text-foreground">{currentWeather.temperature}°C</div>
                </div>
                
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-sky" />
                  <div className="text-sm text-muted-foreground">नमी</div>
                  <div className="font-semibold text-foreground">{currentWeather.humidity}%</div>
                </div>
                
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Wind className="w-6 h-6 mx-auto mb-2 text-success" />
                  <div className="text-sm text-muted-foreground">हवा</div>
                  <div className="font-semibold text-foreground">{currentWeather.windSpeed} km/h</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 4-Day Forecast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forecast.map((day, index) => {
              const DayIcon = day.icon;
              return (
                <Card key={index} className="bg-card/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elevated transition-smooth">
                  <div className="p-4 text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {day.day}
                    </div>
                    <DayIcon className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="font-semibold text-lg text-foreground mb-1">
                      {day.temp}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {day.desc}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Farming Advice */}
          <Card className="bg-success/10 border-success/20 mt-8">
            <div className="p-6">
              <h4 className="font-semibold text-success mb-2 flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                आज की खेती सलाह
              </h4>
              <p className="text-foreground">
                मौसम साफ है। आज सिंचाई का अच्छा समय है। कपास की फसल में छिड़काव कर सकते हैं।
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;