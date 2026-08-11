/** Personal details and contact info shown in the resume header. */
export type Profile = {
  first: string;
  last: string;
  title: string;
  location: string;
  phone: string;
  /** tel: URI — keeps the displayed number free to be human-formatted. */
  phoneHref: string;
  email: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
  bio: string;
};
