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
        About me
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
      <p>
          I'm currently pursuing my Master's in Computer Science at <a target="_blank" href="https://www.cics.umass.edu">UMass Amherst</a>. A lot of what I read, watch and in general consume helps me make sense of the world and my place in it.
        </p>
        <p>
          This past summer, I was an intern at a stealth startup where I was working on an automation tool powered by LLMs, among other things.
        </p>
        <p>
          I've spent quite a bit of my time on the internet; lately I've been reading more on <a target="_blank" href="http://lesswrong.com">lesswrong</a>. I haven't seen such a dedicated
          community to human reasoning. It's crazy!
        </p>
        <p>
          I love reading Fredrik Backman's books, I think I derive a lot of my writing style from his books. I'm drawn towards bittersweet
          and heartwarming stories. I'm also a huge fan of Ricky Gervais, I've watched After Life more times than a human should be allowed to.
        </p>
        <p>
          I'm a huge football fan, my love for the sport began with watching Ronaldo at United; then he moved to Madrid and my support for
          the club has never wavered since. If you're a fellow Madridista and want to chat about football, hit me up!
        </p>
        <p>
          When it comes to music, I listen to a whole lot of everything. I started with EDMs when I was a kid; first listening to Avicii's
          Levels and I've been a fan ever since. RIP 🕊️. If I ever get a tattoo, it's going to be avicii. 
        </p>
        <p>
          Now I'm a Weeknd fan, excited about his new album that's about to come out 31st Jan!! I also listen to a lot of Tame Impala, Daft Punk, 
          Harry Styles, Frank Ocean, frankly it's all over the place. You can check out my playlists <a target="_blank" href="https://open.spotify.com/user/4j9js6iek1qu53ypbhf1ddbvm?si=a4356fa730694cfe"> here</a>.
        </p>
        <p>
          I sometimes post the things I write about <a target="_blank" href="https://www.instagram.com/ameyaranadee/"> here</a>.
        </p>
      </div>
    </section>
  );
}
