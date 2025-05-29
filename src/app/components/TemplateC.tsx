import { TemplateProps } from './templates/TemplateProps';

export default function TemplateC({ name, setName, attending, setAttending, handleSubmit }: any) {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-purple-700">Template C</h1>
          <input
            type="text"
            className="w-full mb-4 p-3 border border-purple-300 rounded"
            placeholder="Type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mb-4 space-x-4">
            <button
              className={`px-4 py-2 rounded ${attending ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setAttending(true)}
            >
              ✅ Yes
            </button>
            <button
              className={`px-4 py-2 rounded ${!attending ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setAttending(false)}
            >
              ❌ No
            </button>
          </div>
          <button onClick={handleSubmit} className="bg-purple-600 text-white px-6 py-2 rounded-lg">
            Register
          </button>
        </div>
      </div>
    );
  }
  