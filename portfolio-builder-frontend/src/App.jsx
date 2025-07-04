import PortfolioPreview from "./preview/PortfolioPreview";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 text-center">
      <div className="space-y-6 p-8 rounded-xl shadow-xl bg-white">
        <h1 className="text-4xl font-bold text-purple-700">Welcome to Eclos.io</h1>
        <p className="text-gray-600 text-lg">
          This is your template builder repo. Use this space to preview layouts, fonts, and themes.
        </p>
        <PortfolioPreview className="w-full m-12 p-12" />
        <div className="mt-6">
          <span className="badge badge-secondary text-white text-sm p-3 rounded-full">Tailwind + DaisyUI Ready</span>
        </div>
      </div>
    </div>
  );
}

export default App;
