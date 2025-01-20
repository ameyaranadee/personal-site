import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        👋 Hi, I'm Ameya!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I was part of an exciting project recently where we were building an automation tool to reduce the time it takes for material engineers to process specification documents when designing pipes for oil refineries.
        </p>
        <p>
          Beyond tech, I’m deeply interested in how data is transforming the world of football. I believe we’re witnessing a shift in how the game is seen and played, driven by the growing influence of machine learning.
          </p>
          <p>
            If anyone is interested in collaborating on a project in sports analytics, reach out!
        </p>
        <p>
          i sometimes post the things i write about <a target="_blank" href="https://www.instagram.com/ameyaranadee/"> here</a>.
        </p>
      </div>
    </section>
  );
}
