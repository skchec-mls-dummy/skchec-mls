
import React from 'react';

export const CurriculumOverview = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Curriculum Overview</h1>
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-center mb-12">
          Our comprehensive curriculum is designed to meet the highest educational standards while fostering critical thinking and creativity. We follow the state board curriculum with additional enrichment programs.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
            <p>Rigorous academic programs designed to challenge and inspire students</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-3">Practical Learning</h3>
            <p>Hands-on laboratory work and project-based learning</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
            <p>Modern teaching aids and digital learning platforms</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Assessment Methods</h3>
            <p>Continuous assessment and periodic evaluations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SubjectStreams = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Subject Streams</h1>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Science Stream</h2>
          <h3 className="text-lg font-medium mb-4">Core Subjects:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Physics</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Chemistry</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Mathematics</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Biology (Optional)</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Computer Science (Optional)</li>
          </ul>
          <p className="text-muted-foreground">Prepare for engineering, medical, and research careers</p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Commerce Stream</h2>
          <h3 className="text-lg font-medium mb-4">Core Subjects:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Accountancy</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Business Studies</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Economics</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Mathematics (Optional)</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Computer Science (Optional)</li>
          </ul>
          <p className="text-muted-foreground">Foundation for business, finance, and management careers</p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Arts Stream</h2>
          <h3 className="text-lg font-medium mb-4">Core Subjects:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center"><span className="text-primary mr-2">•</span>History</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Geography</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Political Science</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Psychology (Optional)</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span>Sociology (Optional)</li>
          </ul>
          <p className="text-muted-foreground">Develop critical thinking and social awareness</p>
        </div>
      </div>
    </div>
  </div>
);

export const ExamBoards = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Exam Boards</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">State Board</h2>
            <p className="text-lg mb-6">Karnataka State Board certification for Classes 11 and 12</p>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Recognized by all Indian universities</li>
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Comprehensive syllabus</li>
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Regular assessment pattern</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Why State Board?</h2>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Cost-effective quality education</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Local language support</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Strong foundation for competitive exams</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Wide acceptance in state universities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ResultsHighlights = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Results Highlights</h1>
      <div className="max-w-6xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">Academic Year 2023-24</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-primary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-medium">Pass Percentage</div>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-lg font-medium">First Class</div>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-lg font-medium">Distinction</div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-center">Top Performers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">Science Stream</h3>
              <p className="text-lg">Priya Sharma - 95.6%</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">Commerce Stream</h3>
              <p className="text-lg">Arjun Patel - 94.2%</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">Arts Stream</h3>
              <p className="text-lg">Meera Nair - 92.8%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SyllabusPDFs = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Syllabus Downloads</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Class 11 Syllabus</h2>
            <div className="space-y-4">
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Science Stream PDF
              </button>
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Commerce Stream PDF
              </button>
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Arts Stream PDF
              </button>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Class 12 Syllabus</h2>
            <div className="space-y-4">
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Science Stream PDF
              </button>
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Commerce Stream PDF
              </button>
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                📄 Arts Stream PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
