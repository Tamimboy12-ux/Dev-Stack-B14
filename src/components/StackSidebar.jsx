import StackItem from "./StackItem";

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">
              Your Stack
            </h2>

            <span className="badge gradient-bg border-none text-white">
              {stack.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Technologies selected for your project
          </p>
        </div>

        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="btn btn-xs btn-ghost text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-5 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <h3 className="mt-4 font-semibold text-gray-800">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add technologies from the library to start building your
            development stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-3">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-gray-900 p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Selected technologies
              </span>

              <span className="text-lg font-bold">
                {stack.length}
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-700">
              <div
                className="gradient-bg h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((stack.length / 8) * 100, 100)}%`,
                }}
              ></div>
            </div>

            <p className="mt-3 text-xs text-gray-400">
              {stack.length >= 8
                ? "Great! You have a complete development stack."
                : `Add ${8 - stack.length} more ${
                    8 - stack.length === 1 ? "technology" : "technologies"
                  } to build a complete stack.`}
            </p>
          </div>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;