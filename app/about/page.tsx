export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
        <p className="text-gray-600">
          This is a simple task management to do list build using next-js to use csr and ssr.
        </p>
      </div>
    </div>
  );
}