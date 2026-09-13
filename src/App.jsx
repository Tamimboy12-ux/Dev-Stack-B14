import { useState } from "react";
import { toast } from "react-toastify";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";

const App = () => {
  const [selectedStack, setSelectedStack] = useState([]);

  // Add technology
  const handleAddToStack = (technology) => {
    const alreadyExists = selectedStack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`,
      );
      return;
    }

    setSelectedStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove single technology
  const handleRemoveFromStack = (technologyId) => {
    const technology = selectedStack.find(
      (item) => item.id === technologyId,
    );

    setSelectedStack((currentStack) =>
      currentStack.filter((item) => item.id !== technologyId),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedStack([]);

    toast.success("Your stack has been cleared!");
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <TechnologiesSection
        stack={selectedStack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />

      <section
        id="projects"
        className="min-h-[400px] px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Projects
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Your selected technology stack can power your next
          project.
        </p>
      </section>

      <section
        id="about"
        className="min-h-[300px] bg-gray-50 px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          About DevStack
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          DevStack helps developers explore technologies and
          organize the tools they want to use for their projects.
        </p>
      </section>

      <section
        id="contact"
        className="min-h-[300px] px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Contact
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Have feedback about DevStack? We would love to hear from
          you.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default App;