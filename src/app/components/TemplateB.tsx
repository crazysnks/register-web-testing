import { TemplateProps } from './templates/TemplateProps';

export default function TemplateB({ name, setName, attending, setAttending, handleSubmit }: any) {
    return (
      <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-xl text-center">
          <h1 className="text-3xl font-semibold mb-6">Template B</h1>
          <input
            type="text"
            className="w-full mb-4 p-3 border border-yellow-400 rounded"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mb-4">
            <button
              className={`mr-4 px-4 py-2 rounded ${attending ? 'bg-yellow-500 text-white' : 'border'}`}
              onClick={() => setAttending(true)}
            >
              Attending
            </button>
            <button
              className={`px-4 py-2 rounded ${!attending ? 'bg-yellow-500 text-white' : 'border'}`}
              onClick={() => setAttending(false)}
            >
              Not Attending
            </button>
          </div>
          <button onClick={handleSubmit} className="bg-yellow-500 text-white px-6 py-2 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    );
  }
  