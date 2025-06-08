
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Mission & Vision</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary for personal growth and societal contribution. We strive to create a nurturing 
                environment where every student can discover their potential and develop into responsible 
                global citizens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To be a leading educational institution that fosters academic excellence, innovation, 
                and holistic development of students. We envision graduates who are confident, 
                compassionate, and capable of making positive contributions to society.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Educational Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At SKCHEC MLS, we believe that education goes beyond textbooks and examinations. Our 
              philosophy is rooted in the understanding that each child is unique and has their own 
              learning style and pace.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Holistic development of mind, body, and spirit</li>
              <li>Character building through value-based education</li>
              <li>Encouraging critical thinking and creativity</li>
              <li>Fostering environmental consciousness</li>
              <li>Promoting cultural diversity and global awareness</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MissionVision;
