
import { Project, BlogPost, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '차세대 핀테크 자산관리 플랫폼',
    description: 'UI/UX 고도화 및 실시간 데이터 처리 파이프라인 구축',
    category: 'FINTECH',
    imageUrl: 'https://picsum.photos/seed/fintech/800/450',
    tags: ['Next.js', 'Spring Boot', 'AWS']
  },
  {
    id: '2',
    title: '글로벌 커머스 통합 관리 솔루션',
    description: 'B2B 멀티 스토어 동기화 및 자동 정산 시스템',
    category: 'E-COMMERCE',
    imageUrl: 'https://picsum.photos/seed/commerce/800/450',
    tags: ['Flutter', 'Node.js', 'Firebase']
  },
  {
    id: '3',
    title: '실시간 기업용 협업 메신저',
    description: '보안 중심의 워크플로우 자동화 기능 탑재',
    category: 'COLLABORATION',
    imageUrl: 'https://picsum.photos/seed/collab/800/450',
    tags: ['React Native', 'GraphQL']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Next.js App Router로의 대규모 마이그레이션 후기',
    excerpt: '대규모 서비스의 아키텍처를 변경하며 마주친 성능 문제와 서버 컴포넌트 최적화 경험을 공유합니다.',
    category: 'ENGINEERING',
    date: '2024.03.15',
    author: {
      name: 'David Kim',
      role: 'Senior Engineer',
      avatar: 'https://picsum.photos/seed/david/100/100'
    },
    image: 'https://picsum.photos/seed/nextjs/800/450'
  },
  {
    id: 'blog-2',
    title: 'SaaS 사용성을 높이는 디자인 시스템 구축 전략',
    excerpt: '사용자가 피로를 느끼지 않는 다크 모드 설계와 효율적인 컴포넌트 구조화 방법을 알아봅니다.',
    category: 'DESIGN',
    date: '2024.03.10',
    author: {
      name: 'Sarah Lee',
      role: 'UI/UX Designer',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    image: 'https://picsum.photos/seed/design/800/450'
  },
  {
    id: 'blog-3',
    title: 'Scaling Microservices with Kubernetes',
    excerpt: 'Lessons learned from managing a cluster processing 10M+ daily events.',
    category: 'INFRASTRUCTURE',
    date: '2023.10.24',
    author: {
      name: 'Alex Rivers',
      role: 'Senior DevOps',
      avatar: 'https://picsum.photos/seed/alex/100/100'
    },
    image: 'https://picsum.photos/seed/k8s/800/450'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'app',
    title: 'App Development',
    description: 'iOS와 Android 모두를 만족시키는 고성능 네이티브 및 크로스 플랫폼 앱을 제작합니다.',
    icon: 'smartphone',
    color: 'bg-primary/10 text-primary',
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin']
  },
  {
    id: 'web',
    title: 'Web Platforms',
    description: '최신 React/Next.js 기반의 빠른 반응형 웹과 고도화된 백엔드 시스템을 구축합니다.',
    icon: 'language',
    color: 'bg-blue-500/10 text-blue-500',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'saas',
    title: 'SaaS Solution',
    description: '확장성과 보안이 보장되는 클라우드 기반의 엔터프라이즈 B2B 솔루션을 개발합니다.',
    icon: 'cloud_done',
    color: 'bg-indigo-500/10 text-indigo-500',
    tech: ['AWS', 'Kubernetes', 'PostgreSQL', 'Docker']
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: '개발 후에도 안정적인 운영과 지속적인 고도화를 위한 유지보수 파트너십을 제공합니다.',
    icon: 'engineering',
    color: 'bg-cyan-500/10 text-cyan-500',
    tech: ['Monitoring', 'SLA', 'CI/CD']
  }
];
