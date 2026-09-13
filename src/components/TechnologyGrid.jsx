import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({ onAdd }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (err) {
        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-[390px] animate-pulse rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="h-14 w-14 rounded-xl bg-gray-200"></div>

            <div className="mt-6 h-6 w-32 rounded bg-gray-200"></div>

            <div className="mt-4 space-y-2">
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>

            <div className="mt-8 h-16 rounded bg-gray-100"></div>

            <div className="mt-5 h-11 rounded-xl bg-gray-200"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="font-semibold text-red-600">{error}</p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn btn-sm mt-4 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;