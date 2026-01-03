
import { Capability, Step, Insight, Client } from './types';

export const CAPABILITIES: Capability[] = [
  {
    id: '1',
    title: 'Natural Language Processing',
    description: 'Advanced custom LLMs tailored for specific enterprise workflows.',
    videoUrl: 'https://cdn.pixabay.com/video/2019/11/15/29168-374187285_large.mp4'
  },
  {
    id: '2',
    title: 'Computer Vision',
    description: 'Object detection and real-time spatial intelligence systems.',
    videoUrl: 'https://cdn.pixabay.com/video/2018/01/29/13959-253813959_large.mp4'
  },
  {
    id: '3',
    title: 'Predictive Analytics',
    description: 'Data modeling that anticipates market shifts before they happen.',
    videoUrl: 'https://cdn.pixabay.com/video/2020/09/24/50849-463283256_large.mp4'
  },
  {
    id: '4',
    title: 'Generative Media',
    description: 'Cinematic AI production for marketing and digital storytelling.',
    videoUrl: 'https://cdn.pixabay.com/video/2021/04/16/71359-539091873_large.mp4'
  },
  {
    id: '5',
    title: 'AI Strategy',
    description: 'Consulting on AI implementation roadmaps for global scale.',
    videoUrl: 'https://cdn.pixabay.com/video/2022/01/18/104646-666330960_large.mp4'
  },
  {
    id: '6',
    title: 'Edge AI Intelligence',
    description: 'Low-latency AI models optimized for local hardware devices.',
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/24/186357-877712399_large.mp4'
  }
];

export const PROCESS_STEPS: Step[] = [
  { number: '01', title: 'Discovery', description: 'Deep dive into your infrastructure and data landscape.' },
  { number: '02', title: 'Strategy', description: 'Defining the optimal AI architecture for your goals.' },
  { number: '03', title: 'Implementation', description: 'Developing and deploying custom-engineered solutions.' },
  { number: '04', title: 'Optimization', description: 'Iterative refinement and scaling for maximum ROI.' }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'i1',
    title: 'The Future of Generative Content in SaaS',
    category: '#MachineLearning',
    thumbnail: 'https://picsum.photos/seed/ai1/800/600',
    link: '#'
  },
  {
    id: 'i2',
    title: 'Optimizing Latency in Real-time Vision',
    category: '#ComputerVision',
    thumbnail: 'https://picsum.photos/seed/ai2/800/600',
    link: '#'
  },
  {
    id: 'i3',
    title: 'Ethical AI: Governance in Enterprise',
    category: '#Ethics',
    thumbnail: 'https://picsum.photos/seed/ai3/800/600',
    link: '#'
  }
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Nebula Corp', industry: 'AeroSpace', logo: 'NC' },
  { id: 'c2', name: 'Synapse Tech', industry: 'BioTech', logo: 'ST' },
  { id: 'c3', name: 'Velocity Dynamics', industry: 'Logistics', logo: 'VD' },
  { id: 'c4', name: 'Aetheris', industry: 'FinTech', logo: 'AE' },
  { id: 'c5', name: 'Horizon Cloud', industry: 'SaaS', logo: 'HC' },
  { id: 'c6', name: 'Omni Retail', industry: 'E-commerce', logo: 'OR' }
];
