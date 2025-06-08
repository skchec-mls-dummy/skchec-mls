
import React from 'react';

export const AdmissionProcess = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Admission Process</h1>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {[
            {
              step: 1,
              title: "Application Submission",
              description: "Submit the completed application form along with required documents",
              requirements: ["Class 10 mark sheet", "Transfer certificate", "Character certificate", "Passport size photographs"]
            },
            {
              step: 2,
              title: "Document Verification",
              description: "Verification of submitted documents and eligibility check"
            },
            {
              step: 3,
              title: "Entrance Test",
              description: "Written test covering basic subjects for stream selection"
            },
            {
              step: 4,
              title: "Interview",
              description: "Personal interview with student and parents"
            },
            {
              step: 5,
              title: "Final Selection",
              description: "Merit list publication and admission confirmation"
            }
          ].map((process) => (
            <div key={process.step} className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-lg mb-4">{process.description}</p>
                  {process.requirements && (
                    <ul className="space-y-2">
                      {process.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-primary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const EligibilityCriteria = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Eligibility Criteria</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Class 11 Admission</h2>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Passed Class 10 from recognized board</li>
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Minimum 60% aggregate marks</li>
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Age limit: 15-17 years</li>
              <li className="flex items-start"><span className="text-primary mr-2">✓</span>Medical fitness certificate</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Stream-wise Requirements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Science Stream</h3>
                <p>Minimum 70% in Mathematics and Science</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Commerce Stream</h3>
                <p>Minimum 65% in Mathematics (if opting for Math)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Arts Stream</h3>
                <p>Minimum 60% aggregate marks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ImportantDates = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Important Dates</h1>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {[
            { date: "March 1, 2024", event: "Application forms available" },
            { date: "April 15, 2024", event: "Last date for application submission" },
            { date: "April 25, 2024", event: "Entrance test" },
            { date: "May 5, 2024", event: "Interview dates" },
            { date: "May 15, 2024", event: "Merit list publication" },
            { date: "May 25, 2024", event: "Admission confirmation deadline" }
          ].map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md flex items-center justify-between">
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                {item.date}
              </div>
              <div className="flex-1 ml-8 text-lg">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const FeeStructure = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Fee Structure</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Annual Fee Structure (2024-25)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-4 text-left">Particulars</th>
                  <th className="border p-4 text-center">Class 11</th>
                  <th className="border p-4 text-center">Class 12</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4">Tuition Fee</td>
                  <td className="border p-4 text-center">₹45,000</td>
                  <td className="border p-4 text-center">₹45,000</td>
                </tr>
                <tr>
                  <td className="border p-4">Development Fee</td>
                  <td className="border p-4 text-center">₹8,000</td>
                  <td className="border p-4 text-center">₹8,000</td>
                </tr>
                <tr>
                  <td className="border p-4">Laboratory Fee</td>
                  <td className="border p-4 text-center">₹5,000</td>
                  <td className="border p-4 text-center">₹5,000</td>
                </tr>
                <tr>
                  <td className="border p-4">Library Fee</td>
                  <td className="border p-4 text-center">₹2,000</td>
                  <td className="border p-4 text-center">₹2,000</td>
                </tr>
                <tr className="bg-muted font-bold">
                  <td className="border p-4">Total</td>
                  <td className="border p-4 text-center">₹60,000</td>
                  <td className="border p-4 text-center">₹60,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Additional Information:</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Fee can be paid in quarterly installments</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Sibling discount: 10% on tuition fee</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Merit scholarship available for top performers</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Transportation charges separate</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const ApplyNow = () => (
  <div className="min-h-screen bg-background pt-32 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Apply Now</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Online Application Form</h2>
          <p className="text-center text-muted-foreground mb-8">Fill in the details below to begin your admission process</p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Student Name *</label>
                <input type="text" className="w-full p-3 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                <input type="date" className="w-full p-3 border rounded-lg" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Father's Name *</label>
                <input type="text" className="w-full p-3 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mother's Name *</label>
                <input type="text" className="w-full p-3 border rounded-lg" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Contact Number *</label>
                <input type="tel" className="w-full p-3 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input type="email" className="w-full p-3 border rounded-lg" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Stream *</label>
                <select className="w-full p-3 border rounded-lg" required>
                  <option value="">Select Stream</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Class 10 Percentage *</label>
                <input type="number" step="0.01" min="0" max="100" className="w-full p-3 border rounded-lg" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea rows={3} className="w-full p-3 border rounded-lg"></textarea>
            </div>
            
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
