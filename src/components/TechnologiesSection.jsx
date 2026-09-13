import TechnologyGrid from "./TechnologyGrid";
import StackSidebar from "./StackSidebar";

const TechnologiesSection = ({
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <section
      id="technologies"
      className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Technology Library
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Explore the tools behind
            <span className="block brand-gradient">
              modern development
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Discover popular technologies across frontend, backend,
            database, styling, DevOps, and more. Choose the tools that
            fit your project and add them to your stack.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "Frontend",
            "Backend",
            "Database",
            "Language",
            "Styling",
            "DevOps",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            >
              {category}
            </span>
          ))}
        </div>


        <div className="my-8">
          <h2 className="text-3xl font-bold">Explore the <span className="brand-gradient">Technologies</span></h2>
          <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          
          <div>
            <TechnologyGrid onAdd={onAdd} />
          </div>

          <StackSidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;