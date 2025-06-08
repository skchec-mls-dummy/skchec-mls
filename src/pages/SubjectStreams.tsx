
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectStreams = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Subject Streams</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-center text-primary">Science Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">Core Subjects:</h4>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Biology (Optional)</li>
                <li>Computer Science (Optional)</li>
              </ul>
              <h4 className="font-semibold mb-2">Career Opportunities:</h4>
              <p className="text-sm text-muted-foreground">
                Engineering, Medicine, Research, Biotechnology, IT, Architecture
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-center text-primary">Commerce Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">Core Subjects:</h4>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics (Optional)</li>
                <li>Computer Science (Optional)</li>
              </ul>
              <h4 className="font-semibold mb-2">Career Opportunities:</h4>
              <p className="text-sm text-muted-foreground">
                CA, MBA, Banking, Finance, Business Management, Economics
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-center text-primary">Arts Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">Core Subjects:</h4>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>History</li>
                <li>Geography</li>
                <li>Political Science</li>
                <li>Psychology (Optional)</li>
                <li>Sociology (Optional)</li>
              </ul>
              <h4 className="font-semibold mb-2">Career Opportunities:</h4>
              <p className="text-sm text-muted-foreground">
                Civil Services, Law, Journalism, Social Work, Teaching, Psychology
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Stream Selection Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Choosing the right stream is crucial for your future career. Our guidance counselors work 
              closely with students and parents to help make informed decisions based on:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Student's interests and aptitude</li>
              <li>Career aspirations</li>
              <li>Academic performance in Class X</li>
              <li>Future educational goals</li>
              <li>Market trends and opportunities</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubjectStreams;
