import Image from "next/image";
// Imported rather than referenced from public/ so the URL picks up basePath
// (a string src would be emitted verbatim under images.unoptimized).
import headshot from "@/app/assets/headshot.png";
import { profile } from "@/app/constants/resume";

export function ResumeHeader() {
  return (
    <section className="bg-navy px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-light text-white sm:text-5xl">
              {profile.first} <span className="font-bold">{profile.last}</span>
            </h1>
            <p className="mt-3 text-xl text-gray-300">{profile.title}</p>
          </div>
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white/20 sm:h-28 sm:w-28">
            <Image
              src={headshot}
              alt={`Portrait of ${profile.first} ${profile.last}`}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-3 text-sm sm:grid-cols-2">
          <div className="flex gap-2">
            <dt className="font-bold text-white">Phone</dt>
            <dd>
              <a
                href={profile.phoneHref}
                className="text-gray-300 hover:text-white"
              >
                {profile.phone}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">Location</dt>
            <dd className="text-gray-300">{profile.location}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">E-mail</dt>
            <dd>
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-white"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">LinkedIn</dt>
            <dd>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                {profile.linkedinLabel}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">GitHub</dt>
            <dd>
              <a
                href={profile.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                {profile.githubLabel}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
