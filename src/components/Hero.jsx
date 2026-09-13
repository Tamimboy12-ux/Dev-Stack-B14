const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-[64px]">
            Build Your Ideal
            <span className="block brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mt-7">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="btn gradient-bg min-h-12 rounded-lg border-none px-6 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:px-7"
            >
              Explore Technologies

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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="#about"
              className="btn min-h-12 rounded-lg border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 transition duration-300 hover:border-gray-300 hover:bg-gray-50 sm:px-7"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-200 via-pink-200 to-violet-200 opacity-40 blur-3xl sm:h-80 sm:w-80"></div>

          <div className="relative w-full max-w-[420px]">
            <img
              src="/assets/banner-stack.png"
              alt="Modern development technology stack"
              className="mx-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;