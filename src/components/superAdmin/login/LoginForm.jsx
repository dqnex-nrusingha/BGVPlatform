import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminLoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const dummyEmail = "superadmin@gmail.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      localStorage.clear();

      localStorage.setItem("role", "super-admin");

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Dhiren mukharji",
          email: "superadmin@gmail.com",
          role: "Super Admin",
        })
      );

      // ✅ Redirect to Super Admin dashboard
      navigate("/super-admin/clients");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-sm px-8">

      {/* Heading */}
      <h1 className="text-4xl font-black text-center tracking-widest uppercase text-gray-900 mb-1">
        Welcome
      </h1>

      <p className="text-center text-sm text-gray-500 mb-8">
        Super Admin Login Portal
      </p>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Remember + Forgot */}
      <div className="flex justify-between items-center mb-6">

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          onClick={() => navigate("/super-admin/forgot-password")}
          className="text-sm text-gray-500 hover:text-indigo-600"
        >
          Forgot password
        </button>

      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white py-3 rounded-lg font-medium"
      >
        Log in
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-10">
        Need help?{" "}
        <span className="text-indigo-500 cursor-pointer hover:underline">
          Contact Support
        </span>
      </p>

    </div>
  );
}