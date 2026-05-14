import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Building2,
  MapPin,
  UserCircle,
  Lock,
  ShieldCheck,
} from "lucide-react";

import PageHeader from "../../components/superAdmin/client/PageHeader";

/* FIELD */
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {children}
    </div>
  );
}

/* INPUT CLASS */
const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all";

/* MAIN PAGE */
export default function EditClientPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    clientId: "LCIA-85471325",
    joinedDate: "Jan 12, 2024",

    companyName: "DQNex Consultant",
    website: "www.dqnex.com",
    cin: "U74999KA2026PTC123456",
    gst: "U74999KA2026PTC123456",

    address1: "#214, 5th Cross, 2nd Main Road",
    address2: "HSR Layout Sector 6",
    city: "Bangalore",
    statePin: "Karnataka, 560103",

    fullName: "Manav Joshi",
    email: "manav.joshi@example.com",
    phone: "+91 848 521 4690",
  });

  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Client Profile Updated Successfully ✅");

    navigate("/super-admin/clients");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-8 py-6">

      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">

        <PageHeader
          title="Edit Client Profile"
          subtitle=""
          breadcrumb1="Client"
          breadcrumb2="Edit Client"
          backPath="/super-admin/clients"
        />

        {/* STATUS */}
        <div className="bg-indigo-50 text-indigo-600 px-5 py-3 rounded-xl flex items-center gap-2 font-medium mt-10">
          <ShieldCheck size={18} />
          Account Status: Active
        </div>

      </div>

      {/* MAIN CARD */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6">

        <div className="space-y-6">

          {/* SYSTEM IDENTIFIERS */}
          <SectionCard
            icon={Lock}
            title="System Identifiers"
            rightTag="Read only"
          >
            <div className="grid grid-cols-2 gap-5">

              <Field label="Client ID">
                <input
                  value={form.clientId}
                  disabled
                  className={`${inputCls} bg-gray-50 text-gray-500`}
                />
              </Field>

              <Field label="Joined Date">
                <input
                  value={form.joinedDate}
                  disabled
                  className={`${inputCls} bg-gray-50 text-gray-500`}
                />
              </Field>

            </div>
          </SectionCard>

          {/* COMPANY INFORMATION */}
          <SectionCard
            icon={Building2}
            title="Company Information"
          >
            <div className="grid grid-cols-2 gap-5">

              <Field label="Company Name">
                <input
                  value={form.companyName}
                  onChange={handleChange("companyName")}
                  className={inputCls}
                />
              </Field>

              <Field label="Company Website">
                <input
                  value={form.website}
                  onChange={handleChange("website")}
                  className={inputCls}
                />
              </Field>

              <Field label="CIN (Corporate Identification Number)">
                <input
                  value={form.cin}
                  onChange={handleChange("cin")}
                  className={inputCls}
                />
              </Field>

              <Field label="GST Number">
                <input
                  value={form.gst}
                  onChange={handleChange("gst")}
                  className={inputCls}
                />
              </Field>

            </div>
          </SectionCard>

          {/* REGISTERED ADDRESS */}
          <SectionCard
            icon={MapPin}
            title="Registered Address"
          >
            <div className="grid grid-cols-2 gap-5">

              <Field label="Address Line 1">
                <input
                  value={form.address1}
                  onChange={handleChange("address1")}
                  className={inputCls}
                />
              </Field>

              <Field label="Address Line 2">
                <input
                  value={form.address2}
                  onChange={handleChange("address2")}
                  className={inputCls}
                />
              </Field>

              <Field label="City">
                <input
                  value={form.city}
                  onChange={handleChange("city")}
                  className={inputCls}
                />
              </Field>

              <Field label="State & Pin Code">
                <input
                  value={form.statePin}
                  onChange={handleChange("statePin")}
                  className={inputCls}
                />
              </Field>

            </div>
          </SectionCard>

          {/* PRIMARY CONTACT PERSON */}
          <SectionCard
            icon={UserCircle}
            title="Primary Contact Person"
          >
            <div className="grid grid-cols-2 gap-5">

              <Field label="Full Name">
                <input
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  className={inputCls}
                />
              </Field>

              <Field label="Contact Email">
                <input
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputCls}
                />
              </Field>

              <Field label="Phone Number">
                <input
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={inputCls}
                />
              </Field>

            </div>
          </SectionCard>

        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex items-center justify-end gap-5 mt-8">

          {/* Cancel */}
          <button
            onClick={() => navigate(-1)}
            className="border border-indigo-700 text-indigo-700 px-12 py-3 rounded-xl font-medium hover:bg-indigo-50 transition"
          >
            Cancel
          </button>

          {/* Save */}
          <button
            onClick={handleSave}
            className="bg-indigo-900 text-white px-12 py-3 rounded-xl font-medium hover:bg-indigo-800 transition"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

/* SECTION CARD */
function SectionCard({
  icon: Icon,
  title,
  children,
  rightTag,
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-2">

          <Icon
            size={18}
            className="text-indigo-700"
          />

          <h2 className="text-xl font-semibold text-gray-900">
            {title}
          </h2>

        </div>

        {rightTag && (
          <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
            {rightTag}
          </span>
        )}

      </div>

      {children}
    </div>
  );
}