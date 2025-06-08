
import React from 'react';

export const Testimonials = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              quote: "SKCHEC provided me with excellent education and shaped my career path. The teachers are dedicated and the environment is very conducive for learning.",
              author: "Priya Sharma",
              designation: "Alumni, Class of 2020"
            },
            {
              quote: "The school has excellent facilities and caring teachers. My child has shown remarkable improvement in academics and personality development.",
              author: "Mr. Rajesh Kumar",
              designation: "Parent"
            },
            {
              quote: "I am grateful for the strong foundation SKCHEC provided. The emphasis on both academics and character building prepared me well for college.",
              author: "Arjun Patel",
              designation: "Alumni, Class of 2019"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                <p className="text-muted-foreground">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ContactUs = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>SKCHEC MLS Campus<br/>Education District, Bangalore<br/>Karnataka - 560001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+91 80 12345 67890<br/>+91 80 09876 54321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>info@skchecmls.edu<br/>admissions@skchecmls.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Enquiry Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
              <select className="w-full p-3 border rounded-lg">
                <option value="">Enquiry Type</option>
                <option value="admission">Admission</option>
                <option value="general">General Information</option>
                <option value="academic">Academic</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg" required></textarea>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FAQ = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {[
            {
              question: "What is the admission criteria for Class 11?",
              answer: "Students must have passed Class 10 with minimum 60% aggregate marks and should be between 15-17 years of age."
            },
            {
              question: "What streams are available?",
              answer: "We offer Science, Commerce, and Arts streams with various subject combinations."
            },
            {
              question: "Is transportation facility available?",
              answer: "Yes, we provide safe and reliable bus transportation covering major routes in the city."
            },
            {
              question: "What are the school timings?",
              answer: "School hours are from 8:00 AM to 3:30 PM on weekdays and 8:00 AM to 12:30 PM on Saturdays."
            },
            {
              question: "Are scholarships available?",
              answer: "Yes, we offer merit-based scholarships for top performers and need-based financial assistance."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
