"use client";
import Animate from "../animate";

export default function Steps() {
  const steps = [
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Registration",
      description:
        "Everything starts with registration. Only basic data is needed - name, country, email etc.",
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Select a plan",
      description:
        "Choose from the available plans, thats suits your financial goals.",
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="3" />
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
        </svg>
      ),
      title: "Deposit",
      description:
        "After selecting a plan, deposit according to the amount on the plan you selected.",
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
      title: "Monitor your returns",
      description: "Sit back, relax, and monitor your returns.",
    },
  ];
  return (
    <section className="body-font">
      <div className="px-5 py-12 lg:p-24" id="get">
        <div className="heading-home mb-10">Get started</div>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8">
          <div className="lg:col-span-2">
            <>
              {steps.map((step, index) => (
                <TimelineStep
                  key={index}
                  {...step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </>
          </div>

          {/*  */}
          <div className="col-span-3">
            <div
              className="h-[200px] w-full rounded-lg bg-secondary bg-cover text-center md:text-left lg:h-full"
              style={{ backgroundImage: `url("/getstarted.png")` }}
            ></div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

const TimelineStep = ({ icon, title, description, isLast }) => (
  <div className="relative flex pb-12">
    {!isLast && (
      <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
        <div className="pointer-events-none h-full w-1 bg-secondary" />
      </div>
    )}
    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
      {icon}
    </div>
    <div className="flex-grow pl-4">
      <h2 className="mb-1 text-lg font-semibold text-primary md:text-lg">
        {title}
      </h2>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  </div>
);
