const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Build Your Perfect Developer Stack
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Choose the right
            <span className="block brand-gradient">
              technologies
            </span>
            for your next project.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Explore modern development technologies, compare your options,
            and create a personalized tech stack that matches your project
            and development goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="btn gradient-bg rounded-full border-none px-7 text-base font-semibold text-white shadow-lg shadow-pink-200 hover:scale-[1.02] hover:opacity-90"
            >
              Build Your Stack
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
              href="#technologies"
              className="btn rounded-full border-gray-300 bg-white px-7 text-base font-semibold text-gray-800 hover:border-gray-400 hover:bg-gray-50"
            >
              Explore Technologies
            </a>
          </div>

          {/* Small Stats */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-gray-900">12+</p>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold text-gray-900">6+</p>
              <p className="text-sm text-gray-500">Categories</p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Customizable</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-200 via-pink-200 to-violet-200 opacity-50 blur-3xl"></div>

          {/* Main Card */}
          <div className="relative rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl shadow-gray-200 backdrop-blur sm:p-7">
            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Your Stack
                </p>
                <h2 className="text-xl font-bold text-gray-900">
                  Modern Web App
                </h2>
              </div>

              <div className="gradient-bg flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M9.75 3.75h4.5m-7.5 3h10.5m-13.5 3h16.5m-13.5 3h10.5m-7.5 3h4.5"
                  />
                </svg>
              </div>
            </div>

            {/* Technology Items */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src="https://icon.icepanel.io/Technology/svg/React.svg"
                    alt="React"
                    className="h-8 w-8"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900">React</p>
                  <p className="text-sm text-gray-500">Frontend</p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Selected
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                    alt="Node.js"
                    className="h-8 w-8"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900">Node.js</p>
                  <p className="text-sm text-gray-500">Backend</p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Selected
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src="https://icon.icepanel.io/Technology/svg/MongoDB.svg"
                    alt="MongoDB"
                    className="h-8 w-8"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900">MongoDB</p>
                  <p className="text-sm text-gray-500">Database</p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Selected
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-gray-900 p-4 text-white">
              <div>
                <p className="text-xs text-gray-400">
                  Stack compatibility
                </p>
                <p className="mt-1 font-bold">Excellent</p>
              </div>

              <div className="radial-progress text-pink-400" style={{ "--value": 92 }}>
                <span className="text-sm font-bold text-white">92%</span>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -right-2 -top-5 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-full text-white">
                ✓
              </div>

              <div>
                <p className="text-xs text-gray-500">Ready to build</p>
                <p className="text-sm font-bold text-gray-900">
                  Stack created
                </p>
              </div>
            </div>
          </div>

          {/* Floating Category */}
          <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-gray-500">Project type</p>
            <p className="text-sm font-bold text-gray-900">
              Full-Stack Web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;