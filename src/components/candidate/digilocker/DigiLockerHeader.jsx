import { ShieldCheck } from "lucide-react";

export default function DigiLockerHeader() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">

      {/* Green shield icon with glow */}
      <div className="relative mb-5">
        <div className="absolute inset-0 rounded-full bg-green-300 opacity-30 blur-xl scale-150" />
        <div className="relative w-16 h-16 bg-linear-to-b from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
          <ShieldCheck size={34} className="text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-black uppercase tracking-widest text-gray-900 mb-2">
        Complete Your Verification Quickly
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-500">
        Choose how you'd like to provide your details
      </p>
    </div>
  );
}