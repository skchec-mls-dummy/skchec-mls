
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Curriculum = () => {
  const subjects = {
    primary: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Art & Craft", "Physical Education"],
    secondary: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Economics", "Hindi", "Computer Science"],
    senior: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Commerce", "Accountancy", "Business Studies", "Economics", "Computer Science", "Psychology"]
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Curriculum Overview</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Educational Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our curriculum is designed to meet the highest educational standards while fostering critical 
              thinking, creativity, and character development. We follow the CBSE curriculum with additional 
              focus on life skills and value education.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive academic program from Primary to Senior Secondary</li>
              <li>Integration of technology in learning</li>
              <li>Focus on practical and experiential learning</li>
              <li>Regular assessment and feedback</li>
              <li>Preparation for competitive examinations</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Primary (Classes I-V)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {subjects.primary.map((subject) => (
                  <li key={subject} className="text-sm">• {subject}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Secondary (Classes VI-X)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {subjects.secondary.map((subject) => (
                  <li key={subject} className="text-sm">• {subject}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Senior Secondary (Classes XI-XII)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {subjects.senior.map((subject) => (
                  <li key={subject} className="text-sm">• {subject}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
