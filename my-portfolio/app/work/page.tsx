import Link from "next/link";
import type { Metadata } from "next";
import { work } from "./work-data";

export const metadata: Metadata = {
  title: "Work",
  description: "My experiences",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Work 💼</h1>
      <div>
        {work.map((work, index) => (
          <Link
            key={index}
            href={work.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{work.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {work.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}