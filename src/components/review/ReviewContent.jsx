import React from "react";

function Field({ label, value, verified = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>

      <div className="w-full border rounded-lg px-4 py-2 bg-gray-50 flex justify-between items-center gap-3">
        <span className="truncate">{value}</span>

        {verified && (
          <span className="text-green-600 text-xs font-medium whitespace-nowrap">
            Verified
          </span>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-[#05058D] mb-5">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {children}
      </div>
    </div>
  );
}

function ReviewContent() {
  return (
    <div>
      {/* Permanent Address */}
      <Section title="Permanent Address">
        <Field label="Aadhar Number" value="2521 5879 5684" verified />
        <Field label="House Number" value="G-501" />
        <Field label="Address Line 1" value="Kula Layout, Sanjib Nagar 3rd Phase" />
        <Field label="Address Line 2" value="Jaynagar Layout, Bangalore" />
        <Field label="Pin Code" value="562214" />
        <Field label="City" value="Bangalore" />
        <Field label="State" value="Karnataka" />
      </Section>

      {/* Present Address */}
      <Section title="Present Address">
        <Field label="House Number" value="FA-521" />
        <Field label="Address" value="Zilla Panchayat, Bangalore Urban, Banashankari" />
        <Field label="Pin Code" value="560050" />
        <Field label="City" value="Bangalore" />
        <Field label="State" value="Karnataka" />
      </Section>

      {/* Passport */}
      <Section title="Passport Details">
        <Field label="Passport Number" value="LYA52014IE" verified />
        <Field label="Place Of Issue" value="Odisha" verified />
        <Field label="First Name" value="Ramesh Kumar" verified />
        <Field label="Last Name" value="Mishra" verified />
        <Field label="Date Of Birth" value="25/05/1997" verified />
        <Field label="Place Of Birth" value="Odisha" verified />
        <Field label="Date Of Issue" value="21/06/2020" verified />
        <Field label="Date Of Expiry" value="04/10/2030" verified />
        <Field label="Nationality" value="INDIAN" verified />
        <Field label="Gender" value="Male" verified />
      </Section>

      {/* PAN */}
      <Section title="PAN Card Details">
        <Field label="PAN Number" value="LYA52014IE" verified />
        <Field label="Date Of Birth" value="25/05/1997" verified />
        <Field label="First Name" value="Ramesh Kumar" verified />
        <Field label="Last Name" value="Mishra" verified />
        <Field label="Nationality" value="INDIAN" verified />
        <Field label="Gender" value="Male" verified />
      </Section>

      {/* Driving License */}
      <Section title="Driving License Details">
        <Field label="Driving Licence Number" value="LYA5201254895545" verified />
        <Field label="Full Name" value="Ramesh Kumar Mishra" verified />
        <Field label="Date Of Birth" value="25/05/1997" verified />
        <Field label="Address" value="Bhubaneswar" verified />
        <Field label="Issued Date" value="20/06/2017" verified />
        <Field label="Expire Date" value="04/12/2034" verified />
        <Field label="Vehicle Class" value="HUTF" verified />
        <Field label="Blood Group" value="O+VE" verified />
      </Section>

      {/* Voter ID */}
      <Section title="Voter ID Details">
        <Field label="Voter ID Number" value="LYA52014IE" verified />
        <Field label="Full Name" value="Ramesh Kumar Mishra" verified />
        <Field label="Date Of Birth" value="25/05/1997" verified />
        <Field label="Date Of Issue" value="20/04/2020" verified />
        <Field label="Nationality" value="INDIAN" verified />
        <Field label="Gender" value="Male" verified />
      </Section>

      {/* Employment */}
      <Section title="Employment Details">
        <Field label="Employee ID" value="DAQ52014IE" verified />
        <Field label="Company Name" value="DQNex Private Limited" verified />
        <Field label="First Name" value="Ramesh Kumar" />
        <Field label="Last Name" value="Mishra" />
        <Field label="From Date" value="25/05/2017" />
        <Field label="To Date" value="06/09/2024" />
        <Field label="Designation" value="UI/UX Designer" />
        <Field label="Drawn CTC" value="9 LPA" />
      </Section>

      {/* Education */}
      <Section title="Education Details">
        <Field label="10th Institute" value="Sakalsubha Vidya Pitha, Laxminagar" />
        <Field label="10th Degree" value="10th" />
        <Field label="10th Start Date" value="25/05/2002" />
        <Field label="10th End Date" value="06/04/2012" />
        <Field label="10th Course" value="Odia, English, Hindi" />
        <Field label="10th Percentage" value="83%" />

        <Field label="12th Institute" value="Mindgap Junior Science College" />
        <Field label="12th Degree" value="12th" />
        <Field label="12th Start Date" value="25/05/2012" />
        <Field label="12th End Date" value="06/04/2014" />
        <Field label="12th Course" value="Science" />
        <Field label="12th Percentage" value="76%" />

        <Field label="Graduation Institute" value="Nolend Group Of Institutions" />
        <Field label="Graduation Degree" value="B Tech" />
        <Field label="Graduation Start Date" value="25/05/2014" />
        <Field label="Graduation End Date" value="06/04/2018" />
        <Field label="Graduation Course" value="Computer Science Engineering" />
        <Field label="Graduation CGPA" value="9.2 CGPA" />

        <Field label="Post Graduation Institute" value="Nolend Group Of Institutions" />
        <Field label="Post Graduation Degree" value="M Tech" />
        <Field label="Post Graduation Start Date" value="25/05/2018" />
        <Field label="Post Graduation End Date" value="06/04/2022" />
        <Field label="Post Graduation Course" value="Computer Science Engineering" />
        <Field label="Post Graduation CGPA" value="8.9 CGPA" />
      </Section>

      {/* Criminal */}
      <Section title="Criminal Checkup">
        <Field label="Status" value="Yes, I Have A Criminal Record" />
        <Field
          label="Details"
          value="On [date], the accused allegedly committed offense at [location]."
        />
      </Section>

      {/* Reference */}
      <Section title="Reference Check">
        <Field label="Name" value="Varun Kummel" />
        <Field label="Phone No" value="+91 1234567890" />
        <Field label="Email" value="abcsdew67@mail.com" />
        <Field label="Gender" value="Male" />
        <Field label="Institute Name" value="Brindavan College of Engineering" />
        <Field label="Designation" value="Director" />

        <Field label="Name" value="Manisha Tewari" />
        <Field label="Phone No" value="+91 1234567890" />
        <Field label="Email" value="abcsdew67@mail.com" />
        <Field label="Gender" value="Male" />
        <Field label="Institute Name" value="Brindavan College of Engineering" />
        <Field label="Designation" value="Manager" />
      </Section>
    </div>
  );
}

export default ReviewContent;