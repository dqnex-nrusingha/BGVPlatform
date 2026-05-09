import {
  Send,
} from "lucide-react";

const messages = [
  "Hi Admin, I’ve completed the initial verification.",
  "Thanks for the update.",
  "Please prioritize pending applications.",
  "Candidate uploaded updated ID proof.",
];

function MessagePanel() {

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">

      <h2 className="text-2xl font-semibold mb-5">
        Message
      </h2>

      {/* MESSAGES */}
      <div className="space-y-5 flex-1 overflow-auto">

        {messages.map((msg, index) => (

          <div
            key={index}
            className="flex gap-3"
          >

            <img
              src={`https://i.pravatar.cc/150?img=${index + 30}`}
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <p className="text-sm text-gray-700 leading-6">
              {msg}
            </p>

          </div>
        ))}

      </div>

      {/* INPUT */}
      <div className="mt-5 border rounded-full px-4 py-2 flex items-center">

        <input
          type="text"
          placeholder="Keep me updated..."
          className="flex-1 outline-none text-sm"
        />

        <button>

          <Send
            size={18}
            className="text-indigo-700"
          />

        </button>

      </div>

    </div>
  );
}

export default MessagePanel;