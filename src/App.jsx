import { useState } from "react";
import { toast } from "react-toastify";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";

const App = () => {
  const [selectedStack, setSelectedStack] = useState([]);

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

      <Footer />
    </div>
  );
};

export default App;