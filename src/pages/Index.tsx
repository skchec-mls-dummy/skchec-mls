
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-6xl font-bold mb-6">
            Welcome To<br />
            <span className="text-primary">Sri Kumaran Children's Home</span>
          </h1>
          <p className="text-2xl mb-8 italic">"Lead Kindly Light"</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Our Campus
          </Button>
        </div>
      </section>

      {/* Growth Story Timeline */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Growth Story</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {[
                { year: "1980", milestone: "Founded with a vision to provide quality education" },
                { year: "1995", milestone: "Introduced advanced science laboratories" },
                { year: "2005", milestone: "Expanded campus with new academic blocks" },
                { year: "2015", milestone: "Achieved 100% pass rate in board examinations" },
                { year: "2020", milestone: "Launched digital learning initiatives" },
                { year: "2024", milestone: "Celebrating 44 years of educational excellence" }
              ].map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-primary">{item.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{item.milestone}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Values - S.K.C.H */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { letter: "S", value: "Sincerity", description: "We believe in honest and genuine approach to education" },
              { letter: "K", value: "Knowledge", description: "Empowering students with comprehensive learning" },
              { letter: "C", value: "Character", description: "Building strong moral foundation in every student" },
              { letter: "H", value: "Harmony", description: "Creating a peaceful and inclusive environment" }
            ].map((item) => (
              <Card key={item.letter} className="text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.letter}
                  </div>
                  <CardTitle className="text-primary">{item.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Campus Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Annual Sports Day", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Students showcase their athletic talents" },
              { title: "Science Exhibition", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Innovation and creativity on display" },
              { title: "Cultural Festival", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Celebrating diversity and tradition" }
            ].map((event) => (
              <Card key={event.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Campus Gallery</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              ].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${image})` }}></div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* School Stats */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Dedicated Educators" },
              { number: "2000+", label: "Happy Students" },
              { number: "500+", label: "New Admissions" },
              { number: "44+", label: "Years of Excellence" }
            ].map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
