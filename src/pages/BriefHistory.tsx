
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BriefHistory = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Brief History</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Foundation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Sri Kumaran Children's Home was founded in 1980 with a noble vision to provide quality education 
              to children from all walks of life. Our institution began as a small school with just 50 students 
              and has grown into one of the most respected educational institutions in the region.
            </p>
            <p>
              The school was established by a group of dedicated educators who believed that every child deserves 
              access to excellent education regardless of their background. This founding principle continues to 
              guide our mission today.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Growth and Expansion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Over the decades, SKCHEC MLS has undergone significant expansion. In 1995, we introduced advanced 
              science laboratories and computer facilities. The year 2005 marked a major milestone with the 
              construction of new academic blocks and a state-of-the-art library.
            </p>
            <p>
              Our commitment to excellence was recognized in 2015 when we achieved a 100% pass rate in board 
              examinations for the first time. This achievement has been consistently maintained, making us 
              one of the top-performing schools in the state.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modern Era</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The 2020s brought new challenges and opportunities. We successfully adapted to digital learning 
              during the pandemic and have since integrated technology seamlessly into our curriculum. Today, 
              we serve over 2000 students with a faculty of 150+ dedicated educators.
            </p>
            <p>
              As we celebrate 44 years of educational excellence, we remain committed to our founding principles 
              while embracing innovation and modern teaching methodologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BriefHistory;
