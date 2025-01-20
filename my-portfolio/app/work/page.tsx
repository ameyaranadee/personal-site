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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience <span role="img" aria-label="briefcase"> 💼</span></h1>
      <div className="space-y-6">
        {work.map((work, index) => (
          <div key={index} className="space-y-1">
            <Link
              href={work.url}
              className="text-xl font-medium text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.title}
            </Link>
            <div className="flex justify-between text-sm text-neutral-500 dark:text-neutral-400">
                <p>{work.period}</p>
                <p>{work.location}</p>
            </div>
            <li className="text-neutral-700 dark:text-neutral-300">{work.description}</li>
          </div>
        ))}
      </div>
    </section>
  );
}