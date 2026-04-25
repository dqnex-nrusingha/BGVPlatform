import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">
      
      {/* Left Side Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
          🔔
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />

          <div className="leading-tight">
            <p className="text-sm font-semibold">Ramesh Kumar</p>
            <p className="text-xs text-gray-500">example@email.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}