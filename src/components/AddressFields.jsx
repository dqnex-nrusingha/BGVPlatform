export default function AddressFields() {
  return (
    <div className="mt-4 space-y-3 w-full">
      
      {/* House No */}
      <div className="w-full">
        <label className="block text-sm font-medium">
          House and apartment Number <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          value="FA-521"
          readOnly
          className="mt-1 w-full h-9 rounded border border-gray-300 px-3 text-sm"
        />
      </div>

      {/* Address */}
      <div className="w-full">
        <label className="block text-sm font-medium">
          Address <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          value="Zilla Panchayat, Bangalore Urban, S Kariappa Road, Banashankari"
          readOnly
          className="mt-1 w-full h-9 rounded border border-gray-300 px-3 text-sm"
        />
      </div>

      {/* Pin */}
      <div className="w-full">
        <label className="block text-sm font-medium">
          Pin Code <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          value="560050"
          readOnly
          className="mt-1 w-full h-9 rounded border border-gray-300 px-3 text-sm"
        />
      </div>

      {/* City + State */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">
            City <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value="Bangalore"
            readOnly
            className="mt-1 w-full h-9 rounded border border-gray-300 px-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            State <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value="Karnataka"
            readOnly
            className="mt-1 w-full h-9 rounded border border-gray-300 px-3 text-sm"
          />
        </div>
      </div>
    </div>
  );
}