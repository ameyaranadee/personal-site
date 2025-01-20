import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects 🛠️</h1>
      <div className="space-y-6">
        {projects.map((projects, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
            <Link
              href={projects.url}
              className="text-xl font-semibold text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects.title}
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{projects.year}</p>
          </div>
            <i className="text-neutral-700 dark:text-neutral-300">{projects.description}</i>
          </div>
        ))}
      </div>
    </section>
  );
}
