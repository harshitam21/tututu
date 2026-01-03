
export interface Capability {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  link: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
}
