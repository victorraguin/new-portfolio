export type Project = {
    name: string;
    description: string;
    image: string;
    urlLink: string;
    githubLink: string;
    youtubeLink?: string;
    logo: string;
    technologies: { icon: JSX.Element; name: string }[];
    inConstruction: boolean;
  };
  
export type ProjectTechnology = {
    icon: JSX.Element;
    name: string;
  };
