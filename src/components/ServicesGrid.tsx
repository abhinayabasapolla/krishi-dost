import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Leaf, 
  Bug, 
  Coins, 
  Users, 
  Phone,
  Calendar,
  TrendingUp 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "मौसम की जानकारी",
    description: "आज और आने वाले दिनों का सटीक मौसम",
    color: "bg-sky text-sky-foreground"
  },
  {
    icon: Leaf,
    title: "फसल गाइड",
    description: "बुआई से कटाई तक हर चरण की जानकारी",
    color: "bg-success text-success-foreground"
  },
  {
    icon: Bug,
    title: "कीट-रोग समाधान",
    description: "कीट और रोग की पहचान व उपचार",
    color: "bg-warning text-warning-foreground"
  },
  {
    icon: Coins,
    title: "सरकारी योजनाएं",
    description: "खेती के लिए सभी योजनाओं की जानकारी",
    color: "bg-accent text-accent-foreground"
  },
  {
    icon: TrendingUp,
    title: "बाज़ार भाव",
    description: "आज के ताज़े बाज़ार रेट और मंडी भाव",
    color: "bg-primary text-primary-foreground"
  },
  {
    icon: Calendar,
    title: "खेती कैलेंडर",
    description: "कब, कौन सा काम करना है - सब याद रखें",
    color: "bg-secondary-rich text-secondary-foreground"
  },
  {
    icon: Users,
    title: "किसान समुदाय",
    description: "अन्य किसानों से जुड़ें और अनुभव साझा करें",
    color: "bg-primary-light text-primary-foreground"
  },
  {
    icon: Phone,
    title: "विशेषज्ञ सलाह",
    description: "कृषि विशेषज्ञों से सीधे बात करें",
    color: "bg-accent-warm text-accent-foreground"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            हमारी सेवाएं
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            खेती से जुड़ी हर जानकारी एक ही जगह। आसान भाषा में, सबके लिए।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={index}
                className="farmer-card group cursor-pointer p-6 hover:shadow-elevated border-0"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;