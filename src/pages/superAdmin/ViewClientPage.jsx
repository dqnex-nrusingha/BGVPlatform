import React from "react";
import {
  Building2,
  MapPin,
  UserCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import PageHeader from "../../components/superAdmin/client/PageHeader";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewClientPage() {
    const navigate = useNavigate();
    const { id } = useParams();

  return (
    <div className="min-h-screen px-8 py-6 ">

      {/* Header */}
      <div className="flex items-start justify-between">
        <PageHeader
          title="View Client Details"
          subtitle=""
          breadcrumb1="Client"
          breadcrumb2="View Client"
          backPath="/super-admin/clients"
        />

        <button
            onClick={() =>
                navigate(`/super-admin/clients/edit/${id}`)
            }
            className="bg-indigo-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-800 transition"
            >
            Edit Profile
        </button>
      </div>

      {/* Main Card */}
      <div className="border border-gray-200 rounded-3xl bg-white p-5">

        <div className="grid grid-cols-3 gap-5">

          {/* LEFT */}
          <div className="col-span-2 space-y-5">

            {/* Company Info */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-5">
                <Building2
                  size={18}
                  className="text-indigo-700"
                />

                <h2 className="text-xl font-semibold text-gray-900">
                  Company Information
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-y-6">
                <Info
                  label="Company Name"
                  value="DQNex Consultant"
                />

                <Info
                  label="Client ID"
                  value="LCIA-85471325"
                />

                <Info
                  label="CIN (Corporate Identification Number)"
                  value="U74999KA2026PTC123456"
                />

                <Info
                  label="GST Number"
                  value="U74999KA2026PTC123456"
                />
              </div>
            </div>

            {/* Address */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-5">
                <MapPin
                  size={18}
                  className="text-indigo-700"
                />

                <h2 className="text-xl font-semibold text-gray-900">
                  Registered Address
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-y-6">
                <Info
                  label="Address Line 1"
                  value="#214, 5th Cross, 2nd Main Road"
                />

                <Info
                  label="Address Line 2"
                  value="HSR Layout Sector 6"
                />

                <Info
                  label="City"
                  value="Bangalore"
                />

                <Info
                  label="State & Pin Code"
                  value="Karnataka, 560103"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-5">
                <UserCircle
                  size={18}
                  className="text-indigo-700"
                />

                <h2 className="text-xl font-semibold text-gray-900">
                  Primary Contact Person
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-y-6">
                <Info
                  label="Full Name"
                  value="Manav Joshi"
                />

                <Info
                  label="Contact Email"
                  value="manav.joshi@example.com"
                />

                <Info
                  label="Phone Number"
                  value="+91 848 521 4690"
                />
              </div>
            </div>

          </div>

          {/* RIGHT PACKAGE CARD */}
          <div className="bg-[#ECE9FF] rounded-2xl p-5 relative overflow-hidden">

            {/* Shield Icon */}
            <ShieldCheck
              size={90}
              className="absolute top-4 right-4 text-indigo-200"
            />

            <div className="relative z-10">

              <div className="flex items-center gap-2 mb-6">
                <Building2
                  size={18}
                  className="text-indigo-700"
                />

                <h2 className="text-xl font-semibold text-indigo-900">
                  Active Package
                </h2>
              </div>

              <h3 className="text-4xl font-bold text-indigo-900">
                Standard Employment
              </h3>

              {/* Progress */}
              <div className="mt-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    Package Quota
                  </span>

                  <span className="bg-indigo-700 text-white text-xs px-2 py-1 rounded">
                    50 Used
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-300 overflow-hidden">
                  <div className="w-[80%] h-full bg-indigo-800 rounded-full" />
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50 Used</span>
                  <span>500 Total</span>
                </div>
              </div>

              {/* Checks */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Included Checks
                </h4>

                <div className="space-y-3">
                  {[
                    "Criminal Background",
                    "Global Watchlist",
                    "Education Verification",
                    "Employment History",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500"
                      />

                      <span className="text-sm text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Renewal */}
              <div className="mt-8 border-t border-indigo-200 pt-4">
                <p className="text-xs text-gray-500">
                  Next Renewal
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-1">
                  Jan 12, 2027
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-5 mt-8">

  {/* Back */}
  <button
    onClick={() => navigate(-1)}
    className="border border-indigo-700 text-indigo-700 px-12 py-3 rounded-xl font-medium hover:bg-indigo-50 transition"
  >
    Back
  </button>

  {/* Done */}
  <button
    onClick={() => navigate("/super-admin/clients")}
    className="bg-indigo-900 text-white px-14 py-3 rounded-xl font-medium hover:bg-indigo-800 transition"
  >
    Done
  </button>

</div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-2">
        {label}
      </p>

      <p className="text-lg font-medium text-gray-900">
        {value}
      </p>
    </div>
  );
}