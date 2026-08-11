import { education, experience, profile, skills } from "./resume";

export const siteUrl = "https://alextolstikhin.github.io/resume-site/";

const fullName = `${profile.first} ${profile.last}`;

/**
 * schema.org ProfilePage → Person. Gives parsers typed fields (title, employer,
 * skills, profile links) that they would otherwise have to infer from prose.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: fullName,
    jobTitle: profile.title,
    description: profile.bio,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref.replace("tel:", ""),
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: skills.flatMap((group) => group.items),
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: profile.title,
      occupationLocation: { "@type": "City", name: "San Francisco" },
    },
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
    })),
  },
};
