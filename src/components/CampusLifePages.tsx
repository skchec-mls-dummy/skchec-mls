
import React from 'react';

export const Facilities = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Facilities</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🔬", title: "Science Laboratories", description: "Well-equipped physics, chemistry, and biology labs with modern instruments and safety equipment" },
            { icon: "📚", title: "Library", description: "Extensive collection of books, digital resources, and quiet study areas for students" },
            { icon: "🏃", title: "Sports Complex", description: "Multi-purpose sports ground, basketball court, and indoor games facilities" },
            { icon: "💻", title: "Computer Lab", description: "Modern computer lab with high-speed internet and latest software" },
            { icon: "🍽️", title: "Cafeteria", description: "Hygienic cafeteria serving nutritious meals and snacks" },
            { icon: "🚌", title: "Transportation", description: "Safe and reliable bus service covering major routes in the city" }
          ].map((facility, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const CoCurricularSports = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Co-curricular & Sports</h1>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Sports Activities</h2>
          <ul className="space-y-3">
            {["Cricket", "Basketball", "Volleyball", "Badminton", "Table Tennis", "Athletics"].map((sport, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-2">🏆</span>
                {sport}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Cultural Activities</h2>
          <ul className="space-y-3">
            {["Music & Dance", "Drama & Theatre", "Art & Craft", "Literature Club", "Debate & Elocution", "Photography"].map((activity, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-2">🎭</span>
                {activity}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Academic Clubs</h2>
          <ul className="space-y-3">
            {["Science Club", "Mathematics Club", "Environment Club", "Computer Club", "Quiz Club", "Social Service"].map((club, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-2">📖</span>
                {club}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const EventsNews = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Events & News</h1>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {[
            { date: "March 2024", title: "Annual Sports Day", description: "Students participated in various athletic events showcasing their sporting talents" },
            { date: "February 2024", title: "Science Exhibition", description: "Students presented innovative science projects and experiments" },
            { date: "January 2024", title: "Cultural Festival", description: "Three-day cultural extravaganza featuring music, dance, and drama performances" },
            { date: "December 2023", title: "Annual Day Celebration", description: "Grand celebration showcasing student achievements and talents" }
          ].map((event, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold min-w-fit">
                  {event.date}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-lg text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Gallery = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Campus View", "Classroom", "Laboratory", "Sports", "Events", "Library",
            "Students", "Faculty", "Auditorium", "Garden", "Computer Lab", "Cafeteria"
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                <span className="text-lg">{item}</span>
              </div>
              <div className="p-4">
                <p className="text-center font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
