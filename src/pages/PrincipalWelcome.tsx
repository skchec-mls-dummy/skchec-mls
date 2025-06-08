
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrincipalWelcome = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Principal's Welcome Note</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-60 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground">
                Principal Photo
              </div>
              <div className="flex-1">
                <blockquote className="text-lg italic leading-relaxed mb-4">
                  "Welcome to Sri Kumaran Children's Home, where we believe in nurturing not just 
                  academic excellence but also character development. Our commitment to providing 
                  quality education ensures that every student reaches their full potential."
                </blockquote>
                <p className="text-right font-semibold">- Dr. Priya Sharma, Principal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>A Message from Our Principal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Dear Students, Parents, and Well-wishers,
            </p>
            <p>
              It gives me immense pleasure to welcome you to our institution, which has been a beacon 
              of learning and growth for over four decades. At SKCHEC MLS, we don't just educate; 
              we inspire, guide, and shape the leaders of tomorrow.
            </p>
            <p>
              Our dedicated faculty works tirelessly to create an environment where students can explore 
              their interests, develop their talents, and build strong moral foundations. We believe that 
              education is not just about acquiring knowledge but about developing the wisdom to use it 
              for the betterment of society.
            </p>
            <p>
              I invite you to be part of our journey as we continue to strive for excellence in education 
              and character building.
            </p>
            <p className="font-semibold">
              With warm regards,<br />
              Dr. Priya Sharma<br />
              Principal, SKCHEC MLS
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrincipalWelcome;
