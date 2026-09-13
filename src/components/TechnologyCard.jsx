const TechnologyCard = ({ technology, onAdd }) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-3 transition group-hover:bg-white">
          <img
            src={icon}
            alt={`${name} logo`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {badge}
        </span>
      </div>

      <div className="mt-5 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-gray-900">
            {name}
          </h3>

          <span className="text-sm font-medium text-gray-500">
            {category}
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Rating
          </p>

          <div className="mt-1 flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-bold text-gray-900">
              {rating}
            </span>
            <span className="text-xs text-gray-400">/ 5</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Difficulty
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-800">
            {difficulty}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        className="btn gradient-bg mt-5 w-full rounded-xl border-none text-white transition hover:scale-[1.01] hover:opacity-90"
      >
        Add to Stack

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </article>
  );
};

export default TechnologyCard;