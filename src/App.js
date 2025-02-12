import Feed from "./components/Feed";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Social Feed
                </h1>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Adds space below fixed navbar */}
        <main className="max-w-5xl mx-auto px-4 py-6">
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default App;
