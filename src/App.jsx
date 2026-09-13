import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";

const App = () => {
  const handleAddToStack = (technology) => {
    console.log("Add to stack:", technology);
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <TechnologiesSection onAdd={handleAddToStack} />

      <section
        id="projects"
        className="min-h-[400px] px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-gray-600">
          Your selected technology stack can power your next project.
        </p>
      </section>

      <section
        id="about"
        className="min-h-[300px] bg-gray-50 px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">About DevStack</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          DevStack helps developers explore technologies and organize
          the tools they want to use for their projects.
        </p>
      </section>

      <section
        id="contact"
        className="min-h-[300px] px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3 text-gray-600">
          Have feedback about DevStack? We would love to hear from you.
        </p>
      </section>
    </div>
  );
};

export default App;