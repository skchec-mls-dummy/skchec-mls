
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FacultyStaff = () => {
  const departments = [
    {
      name: "Mathematics",
      head: "Dr. Rajesh Kumar",
      faculty: ["Prof. Anita Desai", "Mr. Suresh Menon", "Ms. Priya Singh"]
    },
    {
      name: "Science",
      head: "Dr. Meera Patel",
      faculty: ["Dr. Vikram Reddy", "Ms. Kavya Nair", "Mr. Arjun Gupta"]
    },
    {
      name: "English",
      head: "Prof. Sarah Williams",
      faculty: ["Ms. Deepika Sharma", "Mr. Rohit Joshi", "Ms. Neha Kapoor"]
    },
    {
      name: "Social Studies",
      head: "Dr. Ramesh Iyer",
      faculty: ["Ms. Sunita Rao", "Mr. Anil Kumar", "Ms. Pooja Agarwal"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Faculty & Staff</h1>
        
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our Dedicated Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg">
                Our faculty comprises highly qualified and experienced educators who are passionate 
                about teaching and committed to student success. With advanced degrees and years of 
                experience, they bring both expertise and enthusiasm to the classroom.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <Card key={dept.name}>
              <CardHeader>
                <CardTitle className="text-primary">{dept.name} Department</CardTitle>
                <p className="text-muted-foreground">Head: {dept.head}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Faculty Members:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {dept.faculty.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Administrative Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">Administration</h4>
                  <ul className="text-sm space-y-1">
                    <li>Mr. Sunil Agarwal - Vice Principal</li>
                    <li>Ms. Rekha Jain - Academic Coordinator</li>
                    <li>Mr. Ashok Kumar - Admin Officer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Support Staff</h4>
                  <ul className="text-sm space-y-1">
                    <li>Ms. Lakshmi - Librarian</li>
                    <li>Mr. Ravi - IT Coordinator</li>
                    <li>Ms. Usha - Counselor</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Facilities</h4>
                  <ul className="text-sm space-y-1">
                    <li>Mr. Ganesh - Maintenance Head</li>
                    <li>Ms. Kamala - Cafeteria Manager</li>
                    <li>Mr. Vijay - Transport Coordinator</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FacultyStaff;
