"use client";
import "../../app/globals.css";

export default function Errorpage() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-gray-800">
        <div className="max-w-2xl">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="#1F2937"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </p>
          <h1 className="mb-4 text-6xl font-bold text-red-500">
            Hosting Issues Detected
          </h1>
          <p className="mb-6 text-xl text-gray-800">
            It looks like there might be an issue with your hosting setup.
          </p>
          <p className="mb-6 text-lg text-gray-600">
            If you’re experiencing downtime, configuration problems, or other
            hosting-related issues, please reach out to your hosting service
            provider for assistance.
          </p>
        </div>
      </div>
    </>
  );
}
