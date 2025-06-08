
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BriefHistory, MissionVision, PrincipalWelcome, FacultyStaff } from '../components/AboutPages';
import { CurriculumOverview, SubjectStreams, ExamBoards, ResultsHighlights, SyllabusPDFs } from '../components/AcademicPages';
import { AdmissionProcess, EligibilityCriteria, ImportantDates, FeeStructure, ApplyNow } from '../components/AdmissionPages';
import { Facilities, CoCurricularSports, EventsNews, Gallery } from '../components/CampusLifePages';
import { Testimonials, ContactUs, FAQ } from '../components/ConnectPages';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 'hero',
      title: 'Welcome To Sri Kumaran Children\'s Home',
      subtitle: 'Lead Kindly Light',
      background: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3'
    },
    {
      id: 'growth',
      title: 'Our Growth Story',
      content: 'timeline'
    },
    {
      id: 'values',
      title: 'Our Core Values',
      content: 'values'
    },
    {
      id: 'highlights',
      title: 'Campus Highlights',
      content: 'highlights'
    },
    {
      id: 'gallery',
      title: 'Campus Gallery',
      content: 'gallery'
    },
    {
      id: 'stats',
      title: 'Our Achievements',
      content: 'stats'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero/Slideshow Section */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {slide.id === 'hero' && (
              <div className="relative h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.background})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-2xl md:text-3xl mb-8">{slide.subtitle}</p>
                    <button 
                      onClick={nextSlide}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )}

            {slide.id === 'growth' && (
              <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">{slide.title}</h2>
                  <div className="grid md:grid-cols-5 gap-8">
                    {[
                      { year: '1985', milestone: 'Foundation of SKCHEC' },
                      { year: '2000', milestone: 'Introduction of Science Stream' },
                      { year: '2009', milestone: 'State Board Affiliation' },
                      { year: '2015', milestone: 'Modern Campus Expansion' },
                      { year: '2024', milestone: 'Excellence in Education' }
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                          {item.year}
                        </div>
                        <p className="font-medium">{item.milestone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === 'values' && (
              <div className="h-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">{slide.title}</h2>
                  <div className="grid md:grid-cols-4 gap-8">
                    {[
                      { icon: '🤝', title: 'Sincerity', description: 'Honest and genuine approach in all endeavors' },
                      { icon: '❤️', title: 'Kinship', description: 'Building strong bonds within our community' },
                      { icon: '⚡', title: 'Commitment', description: 'Dedicated to excellence in education' },
                      { icon: '🕊️', title: 'Harmony', description: 'Creating a peaceful learning environment' }
                    ].map((value, i) => (
                      <div key={i} className="text-center bg-card p-6 rounded-lg shadow-lg">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === 'highlights' && (
              <div className="h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center p-8">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { title: 'Annual Sports Day', date: 'March 15, 2024', description: 'Students showcased their athletic prowess', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3' },
                      { title: 'Science Exhibition', date: 'February 28, 2024', description: 'Innovative projects and experiments', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3' },
                      { title: 'Cultural Festival', date: 'January 20, 2024', description: 'Celebrating diversity through arts', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3' }
                    ].map((event, i) => (
                      <div key={i} className="bg-card rounded-lg shadow-lg overflow-hidden">
                        <div 
                          className="h-48 bg-cover bg-center"
                          style={{ backgroundImage: `url(${event.image})` }}
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-primary font-medium mb-2">{event.date}</p>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === 'gallery' && (
              <div className="h-full bg-gradient-to-br from-muted/20 to-secondary/20 flex items-center justify-center p-8">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
                      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3',
                      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3',
                      'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3',
                      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
                      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3'
                    ].map((image, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-md">
                        <div 
                          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === 'stats' && (
              <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">{slide.title}</h2>
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                      { number: '50+', label: 'Dedicated Educators' },
                      { number: '1200+', label: 'Active Students' },
                      { number: '300+', label: 'New Admissions' },
                      { number: '98%', label: 'Success Rate' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-card p-8 rounded-lg shadow-lg">
                        <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="text-lg font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-20"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-20"
        >
          ❯
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-12 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            SKCHEC MLS
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary transition-colors">About Us</span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link to="/brief-history" className="block py-2 hover:text-primary">Brief History</Link>
                <Link to="/mission-vision" className="block py-2 hover:text-primary">Mission & Vision</Link>
                <Link to="/principal-welcome" className="block py-2 hover:text-primary">Principal's Welcome</Link>
                <Link to="/faculty-staff" className="block py-2 hover:text-primary">Faculty & Staff</Link>
              </div>
            </div>
            
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary transition-colors">Academics</span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link to="/curriculum" className="block py-2 hover:text-primary">Curriculum Overview</Link>
                <Link to="/subject-streams" className="block py-2 hover:text-primary">Subject Streams</Link>
                <Link to="/exam-boards" className="block py-2 hover:text-primary">Exam Boards</Link>
                <Link to="/results" className="block py-2 hover:text-primary">Results Highlights</Link>
                <Link to="/syllabus" className="block py-2 hover:text-primary">Syllabus PDFs</Link>
              </div>
            </div>
            
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary transition-colors">Admissions</span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link to="/admission-process" className="block py-2 hover:text-primary">Admission Process</Link>
                <Link to="/eligibility" className="block py-2 hover:text-primary">Eligibility Criteria</Link>
                <Link to="/important-dates" className="block py-2 hover:text-primary">Important Dates</Link>
                <Link to="/fee-structure" className="block py-2 hover:text-primary">Fee Structure</Link>
                <Link to="/apply-now" className="block py-2 hover:text-primary bg-primary/10 rounded px-2">Apply Now</Link>
              </div>
            </div>
            
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary transition-colors">Campus Life</span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link to="/facilities" className="block py-2 hover:text-primary">Facilities</Link>
                <Link to="/co-curricular" className="block py-2 hover:text-primary">Co-curricular & Sports</Link>
                <Link to="/events" className="block py-2 hover:text-primary">Events & News</Link>
                <Link to="/gallery" className="block py-2 hover:text-primary">Gallery</Link>
              </div>
            </div>
            
            <div className="relative group">
              <span className="cursor-pointer hover:text-primary transition-colors">Connect</span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link to="/testimonials" className="block py-2 hover:text-primary">Testimonials</Link>
                <Link to="/contact" className="block py-2 hover:text-primary">Contact Us</Link>
                <Link to="/faq" className="block py-2 hover:text-primary">FAQ</Link>
              </div>
            </div>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-muted/30 border-t">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">SKCHEC MLS</h3>
          <p className="text-muted-foreground mb-4">Lead Kindly Light</p>
          <p className="text-sm text-muted-foreground">
            Committed to providing quality education and nurturing young minds for over three decades.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link to="/brief-history" className="block hover:text-primary">About Us</Link>
            <Link to="/curriculum" className="block hover:text-primary">Academics</Link>
            <Link to="/admission-process" className="block hover:text-primary">Admissions</Link>
            <Link to="/facilities" className="block hover:text-primary">Campus Life</Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📍 Education District, Bangalore</p>
            <p>📞 +91 80 12345 67890</p>
            <p>✉️ info@skchecmls.edu</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <span className="text-2xl cursor-pointer hover:text-primary">📘</span>
            <span className="text-2xl cursor-pointer hover:text-primary">🐦</span>
            <span className="text-2xl cursor-pointer hover:text-primary">📷</span>
            <span className="text-2xl cursor-pointer hover:text-primary">📺</span>
          </div>
        </div>
      </div>
      
      <div className="border-t mt-8 pt-8 text-center">
        <div className="mb-4">
          <p className="font-semibold">AI Summer Camp Project</p>
          <p className="text-sm text-muted-foreground">This website was built as part of the TOI Summer Camp for Students</p>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 SKCHEC MLS. All rights reserved. | Designed with ❤️ for education
        </p>
      </div>
    </div>
  </footer>
);

const StickyBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-3 text-sm">
    This Website was created by Sandesh Manoj from Class 12 at an AI Summer Camp by Times of India. This website is not the official website of the school.
  </div>
);

const Index = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <StickyBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brief-history" element={<BriefHistory />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal-welcome" element={<PrincipalWelcome />} />
          <Route path="/faculty-staff" element={<FacultyStaff />} />
          <Route path="/curriculum" element={<CurriculumOverview />} />
          <Route path="/subject-streams" element={<SubjectStreams />} />
          <Route path="/exam-boards" element={<ExamBoards />} />
          <Route path="/results" element={<ResultsHighlights />} />
          <Route path="/syllabus" element={<SyllabusPDFs />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/eligibility" element={<EligibilityCriteria />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/co-curricular" element={<CoCurricularSports />} />
          <Route path="/events" element={<EventsNews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Index;
