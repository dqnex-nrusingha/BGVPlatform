// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // ✅ Dummy credentials
//     const dummyEmail = "ramesh@gmail.com";
//     const dummyPassword = "123456";

//     if (email === dummyEmail && password === dummyPassword) {
//       // store login flag
//       localStorage.setItem("isLoggedIn", "true");

//       // redirect
//       navigate("/verification");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="relative z-10 w-full max-w-sm px-8">

//       {/* Heading */}
//       <h1 className="text-4xl font-black text-center tracking-widest uppercase text-gray-900 mb-1">
//         Welcome
//       </h1>
//       <p className="text-center text-sm text-gray-500 mb-8">
//         Candidate login Portal
//       </p>

//       {/* Email */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-3">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Password
//         </label>
//         <input
//           type="password"
//           placeholder="••••••••••"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
//         />
//       </div>

//       {/* Remember me + Forgot password */}
//       <div className="flex items-center justify-between mb-6">
//         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
//           <input
//             type="checkbox"
//             className="w-3.5 h-3.5 rounded border-gray-300 accent-indigo-500"
//           />
//           Remember me
//         </label>

//         <button
//           type="button"
//           onClick={() => navigate("/forgot-password")}
//           className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
//         >
//           Forgot password
//         </button>
//       </div>

//       {/* Login button */}
//       <button
//         onClick={handleLogin}
//         className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white text-sm font-medium py-3 rounded-lg transition-all"
//       >
//         Log in
//       </button>

//       {/* Sign up link */}
//       <p className="text-center text-sm text-gray-500 mt-10">
//         Don't have an account?{" "}
//         <span className="text-indigo-500 hover:underline cursor-pointer">
//           Sign up to free!
//         </span>
//       </p>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const dummyEmail = "ramesh@gmail.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      // ✅ Store role
      localStorage.setItem("role", "candidate");

      // ✅ Store user
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Ramesh Kumar",
          email: "ramesh@gmail.com",
        })
      );

      // ✅ Correct route
      navigate("/verification");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-sm px-8">

      <h1 className="text-4xl font-black text-center tracking-widest uppercase text-gray-900 mb-1">
        Welcome
      </h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        Candidate login Portal
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
          className="w-full border rounded-md px-4 py-2.5"
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
          className="w-full border rounded-md px-4 py-2.5"
        />
      </div>

      {/* Remember + Forgot */}
      <div className="flex justify-between mb-6">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          onClick={() => navigate("/candidate/forgot-password")}
          className="text-sm text-gray-500 hover:text-indigo-600"
        >
          Forgot password
        </button>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-500 text-white py-3 rounded-lg"
      >
        Log in
      </button>

      <p className="text-center text-sm text-gray-500 mt-10">
        Don't have an account?{" "}
        <span className="text-indigo-500 cursor-pointer">Sign up</span>
      </p>
    </div>
  );
}