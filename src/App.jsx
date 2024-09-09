function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, Tailwind!
        </h1>
        <p className="text-gray-600 mb-4">
          This is a simple component styled with Tailwind CSS.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
