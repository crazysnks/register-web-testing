export default function TemplateA({ name, setName, attending, setAttending, handleSubmit }: any) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 border rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-center">Template A</h1>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mb-4">
            <label className="mr-4">
              <input type="radio" checked={attending} onChange={() => setAttending(true)} /> Attending
            </label>
            <label>
              <input type="radio" checked={!attending} onChange={() => setAttending(false)} /> Not Attending
            </label>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  