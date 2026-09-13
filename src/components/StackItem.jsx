const StackItem = ({ technology, onRemove }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate font-semibold text-gray-900">
          {technology.name}
        </h4>

        <p className="text-xs text-gray-500">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default StackItem;