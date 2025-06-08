
import React from 'react';

export const BriefHistory = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Brief History</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          Established in 1985, Sri Kumaran Children's Home Educational Centre (SKCHEC) has been a cornerstone of educational excellence for nearly four decades. Founded with the vision of providing holistic education, our institution has grown from a modest beginning to become one of the most respected educational centers in the region.
        </p>
        <p className="text-lg mb-8">
          Over the years, we have continuously evolved our teaching methodologies, infrastructure, and academic programs to meet the changing needs of society while maintaining our core values of sincerity, kinship, commitment, and harmony.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">1985 - Foundation</h3>
            <p>Establishment of SKCHEC with primary focus on quality education</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">1995 - Expansion</h3>
            <p>Introduction of higher secondary education</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">2005 - Modernization</h3>
            <p>Implementation of modern teaching aids and technology</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">2015 - Excellence</h3>
            <p>Recognition as a center of academic excellence</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MissionVision = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Mission & Vision</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Our Mission</h2>
          <p className="text-lg mb-6">
            To provide quality education that empowers students with knowledge, skills, and values necessary for personal growth and societal contribution. We strive to create an environment where every student can discover their potential and develop into responsible global citizens.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Foster academic excellence through innovative teaching methods
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Develop critical thinking and problem-solving skills
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Promote moral and ethical values
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Encourage creativity and innovation
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Our Vision</h2>
          <p className="text-lg mb-6">
            To be a leading educational institution that fosters academic excellence, innovation, and holistic development of students, preparing them to face future challenges with confidence and integrity.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Be recognized as a premier educational institution
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Create future leaders and innovators
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Maintain highest standards of academic excellence
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Contribute to societal development
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const PrincipalWelcome = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Principal's Welcome</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="bg-muted h-80 rounded-lg flex items-center justify-center text-muted-foreground">
              <span className="text-lg">Principal Photo</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Dear Students, Parents, and Visitors,</h2>
            <div className="space-y-4 text-lg">
              <p>
                Welcome to Sri Kumaran Children's Home Educational Centre, where we believe in nurturing not just academic excellence but also character development. Our commitment to providing quality education ensures that every student reaches their full potential.
              </p>
              <p>
                At SKCHEC, we understand that education is not merely about textbooks and examinations. It's about developing critical thinking, fostering creativity, and building strong moral foundations. Our dedicated faculty works tirelessly to create an environment where students can explore, learn, and grow.
              </p>
              <p>
                We take pride in our holistic approach to education, which combines academic rigor with co-curricular activities, ensuring that our students are well-prepared for the challenges of tomorrow.
              </p>
              <div className="mt-8 pt-6 border-t">
                <p className="text-base">
                  Warm regards,<br/>
                  <strong className="text-primary">Dr. Priya Sharma</strong><br/>
                  Principal, SKCHEC MLS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FacultyStaff = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Faculty & Staff</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Dr. Priya Sharma", role: "Principal & Educational Leader", qualification: "M.Ed, Ph.D in Education" },
            { name: "Mrs. Anjali Reddy", role: "Vice Principal", qualification: "M.A, B.Ed" },
            { name: "Dr. Rajesh Kumar", role: "Head of Science Department", qualification: "M.Sc, Ph.D in Physics" },
            { name: "Mr. Suresh Nair", role: "Head of Mathematics", qualification: "M.Sc Mathematics, B.Ed" },
            { name: "Mrs. Lakshmi Iyer", role: "Head of English Department", qualification: "M.A English Literature, B.Ed" },
            { name: "Mr. Venkat Rao", role: "Head of Commerce", qualification: "M.Com, MBA, B.Ed" }
          ].map((faculty, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="bg-muted h-32 w-32 rounded-full mx-auto mb-4 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Photo</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
              <p className="text-primary font-medium mb-2">{faculty.role}</p>
              <p className="text-sm text-muted-foreground">{faculty.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
