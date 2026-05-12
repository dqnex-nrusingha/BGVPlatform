import { useParams } from "react-router-dom";

import {
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const SectionCard = ({
  title,
  children,
}) => (

  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

    <h3 className="text-[#02027A] text-lg font-semibold mb-5 flex items-center gap-2">

      {title}

    </h3>

    {children}

  </div>
);

const Label = ({
  label,
  value,
}) => (

  <div>

    <p className="text-xs text-gray-400 mb-1">
      {label}
    </p>

    <p className="text-sm font-medium text-gray-700">
      {value}
    </p>

  </div>
);

function View() {

  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#F4F7FE] p-6">

      {/* TOP */}
      <div className="mb-6">

        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#02027A] transition">

          <ArrowLeft size={16} />

          Back

        </button>

      </div>

      {/* TITLE */}
      <div className="mb-6">

        <h1 className="text-3xl font-bold text-[#02027A]">

          Candidate Details

        </h1>

        <p className="text-gray-500 mt-1">

          View Complete Candidate Verification Information

        </p>

      </div>

      {/* CANDIDATE ID */}
      <div className="mb-6">

        <span className="bg-indigo-50 text-[#02027A] px-4 py-2 rounded-xl text-sm font-medium">

          Candidate ID: {id}

        </span>

      </div>

      {/* PERSONAL + ADDRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

        {/* PERSONAL */}
        <SectionCard title="👤 Personal Details">

          <div className="grid grid-cols-2 gap-5">

            <Label
              label="Full Name"
              value="Ramesh Kumar"
            />

            <Label
              label="Phone Number"
              value="+91 2584369401"
            />

            <Label
              label="Email ID"
              value="ramesh43@gmail.com"
            />

            <Label
              label="Date Of Birth"
              value="25/06/1998"
            />

            <Label
              label="Tag"
              value="May Batch"
            />

          </div>

        </SectionCard>

        {/* ADDRESS */}
        <SectionCard title="📍 Address Details">

          <div className="space-y-5">

            <div>

              <p className="text-xs text-gray-400 mb-1">
                Current Address
              </p>

              <p className="text-sm text-gray-700 leading-6">

                Suite 404, Magar Layout,
                Blankie Road,
                Bangalore, Karnataka

              </p>

            </div>

            <div>

              <p className="text-xs text-gray-400 mb-1">
                Permanent Address
              </p>

              <p className="text-sm text-gray-700 leading-6">

                14 Krishna Avenue,
                Model Town,
                New Delhi

              </p>

            </div>

          </div>

        </SectionCard>

      </div>

      {/* DOCUMENTS */}
      <SectionCard title="🪪 Identity Verification">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {[
            "Aadhaar Card",
            "PAN Card",
            "Driving License",
            "Voter ID",
          ].map((doc) => (

            <div
              key={doc}
              className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition"
            >

              <div>

                <p className="font-medium text-gray-800">
                  {doc}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  XXXX-XXXX-0000
                </p>

              </div>

              <CheckCircle
                className="text-green-500"
                size={20}
              />

            </div>
          ))}

        </div>

      </SectionCard>

      {/* EDUCATION */}
      <div className="mt-6">

        <SectionCard title="🎓 Education Details">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-gray-50 border-b border-gray-200">

                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                    Qualification
                  </th>

                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                    Institute
                  </th>

                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                    Year
                  </th>

                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                    Grade
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-100">

                  <td className="px-4 py-4 text-sm">
                    Post Graduate
                  </td>

                  <td className="px-4 py-4 text-sm">
                    University of Strategic Planning
                  </td>

                  <td className="px-4 py-4 text-sm text-center">
                    2021
                  </td>

                  <td className="px-4 py-4 text-sm text-center">
                    8.95
                  </td>

                </tr>

                <tr>

                  <td className="px-4 py-4 text-sm">
                    Graduate
                  </td>

                  <td className="px-4 py-4 text-sm">
                    National Technical Institute
                  </td>

                  <td className="px-4 py-4 text-sm text-center">
                    2015
                  </td>

                  <td className="px-4 py-4 text-sm text-center">
                    8.68
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </SectionCard>

      </div>

      {/* EMPLOYMENT */}
      <div className="mt-6">

        <SectionCard title="💼 Employment Details">

          <div className="space-y-5">

            {[
              {
                company: "Dnqex Consulted",
                role: "UI/UX Designer",
                desc: "Lead Specialist for Crisis Management",
                duration: "2025 - Present",
              },

              {
                company: "Global Logistics Ltd.",
                role: "UI/UX Designer",
                desc: "Product Design Specialist",
                duration: "2022 - 2025",
              },
            ].map((job, index) => (

              <div
                key={index}
                className="border-l-4 border-[#02027A] pl-4 flex justify-between"
              >

                <div>

                  <h4 className="font-semibold text-gray-800">
                    {job.company}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {job.role}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {job.desc}
                  </p>

                </div>

                <span className="text-xs bg-gray-100 h-fit px-3 py-1 rounded-full">

                  {job.duration}

                </span>

              </div>
            ))}

          </div>

        </SectionCard>

      </div>

      {/* DRUG + CRIMINAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        <SectionCard title="🧪 Drug Test">

          <p className="text-sm text-gray-500">
            Test Date
          </p>

          <p className="text-lg font-semibold mt-1">
            26-02-2026
          </p>

          <button className="mt-4 text-[#02027A] text-sm font-medium hover:underline">

            View Lab Report

          </button>

        </SectionCard>

        <SectionCard title="🚔 Criminal Record">

          <p className="text-green-600 font-semibold">
            No Record Found
          </p>

          <p className="text-sm text-gray-400 mt-2">

            No prior criminal records found.

          </p>

        </SectionCard>

      </div>

      {/* LOCATION */}
      <div className="mt-6">

        <SectionCard title="📍 Location Verification">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* PHOTO */}
            <div>

              <p className="text-sm font-medium text-gray-600 mb-3">

                On-Site Photo

              </p>

              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                alt=""
                className="rounded-xl w-full h-48 object-cover border"
              />

            </div>

            {/* SELFIE */}
            <div>

              <p className="text-sm font-medium text-gray-600 mb-3">

                Identity Selfie

              </p>

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="rounded-xl w-full h-48 object-cover border"
              />

            </div>

            {/* STATUS */}
            <div>

              <p className="text-sm font-medium text-gray-600 mb-3">

                Status

              </p>

              <div className="space-y-3">

                <p className="flex items-center gap-2 text-sm">

                  <CheckCircle
                    size={16}
                    className="text-green-500"
                  />

                  On-Site Photo Uploaded

                </p>

                <p className="flex items-center gap-2 text-sm">

                  <CheckCircle
                    size={16}
                    className="text-green-500"
                  />

                  Identity Selfie Uploaded

                </p>

                <p className="text-green-600 text-sm font-medium mt-4">

                  All Files Uploaded

                </p>

              </div>

            </div>

          </div>

        </SectionCard>

      </div>

    </div>
  );
}

export default View;