import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="min-h-screen bg-gray-50 px-4 py-20"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold text-orange-500">
            Explore Technologies
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose your development tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse popular technologies and add the tools you need to
            create your personalized development stack.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;