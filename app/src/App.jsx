import { useState } from 'react'
import { Monitor, Server, Layers, Smartphone, Cloud, Brain, X, ExternalLink } from 'lucide-react'
import './App.css'

const techData = {
  Frontend: {
    icon: Monitor,
    techs: ['React', 'Vue', 'Angular'],
    description: 'Build modern, responsive user interfaces with the latest frontend frameworks',
    details: {
      React: {
        description: 'A JavaScript library for building user interfaces with component-based architecture',
        useCases: ['Single Page Applications', 'Progressive Web Apps', 'Mobile Apps with React Native'],
        popularity: 'Most popular frontend framework with huge ecosystem',
        link: 'https://react.dev'
      },
      Vue: {
        description: 'Progressive JavaScript framework for building user interfaces with gentle learning curve',
        useCases: ['Web Applications', 'Interactive Dashboards', 'Progressive Enhancement'],
        popularity: 'Growing rapidly, loved for simplicity and flexibility',
        link: 'https://vuejs.org'
      },
      Angular: {
        description: 'Full-featured TypeScript framework by Google for enterprise-scale applications',
        useCases: ['Enterprise Applications', 'Large-scale SPAs', 'Complex Data Management'],
        popularity: 'Popular in enterprise environments',
        link: 'https://angular.io'
      }
    }
  },
  Backend: {
    icon: Server,
    techs: ['Node.js', 'Python', 'Java'],
    description: 'Robust server-side development with scalable architectures',
    details: {
      'Node.js': {
        description: 'JavaScript runtime built on Chrome V8 engine for fast, scalable network applications',
        useCases: ['REST APIs', 'Real-time Applications', 'Microservices'],
        popularity: 'Leading choice for JavaScript full-stack development',
        link: 'https://nodejs.org'
      },
      Python: {
        description: 'Versatile language known for readability and powerful frameworks like Django and Flask',
        useCases: ['Web APIs', 'Data Processing', 'Machine Learning Integration'],
        popularity: 'Most popular language for backend and data science',
        link: 'https://www.python.org'
      },
      Java: {
        description: 'Enterprise-grade language with robust frameworks like Spring Boot',
        useCases: ['Enterprise Systems', 'Financial Applications', 'High-performance APIs'],
        popularity: 'Dominant in enterprise and financial sectors',
        link: 'https://www.java.com'
      }
    }
  },
  'Full-Stack': {
    icon: Layers,
    techs: ['MERN', 'Django', 'Spring'],
    description: 'End-to-end application development with complete technology stacks',
    details: {
      MERN: {
        description: 'MongoDB, Express, React, Node.js - Complete JavaScript stack',
        useCases: ['Full-stack Web Apps', 'Real-time Applications', 'SaaS Products'],
        popularity: 'Most popular JavaScript full-stack solution',
        link: 'https://www.mongodb.com/mern-stack'
      },
      Django: {
        description: 'High-level Python web framework encouraging rapid development',
        useCases: ['Content Management', 'Social Networks', 'E-commerce Platforms'],
        popularity: 'Leading Python web framework',
        link: 'https://www.djangoproject.com'
      },
      Spring: {
        description: 'Comprehensive Java framework for enterprise applications',
        useCases: ['Enterprise Applications', 'Banking Systems', 'Cloud-native Apps'],
        popularity: 'Industry standard for Java enterprise development',
        link: 'https://spring.io'
      }
    }
  },
  Mobile: {
    icon: Smartphone,
    techs: ['React Native', 'Flutter'],
    description: 'Cross-platform mobile development for iOS and Android',
    details: {
      'React Native': {
        description: 'Build native mobile apps using React and JavaScript',
        useCases: ['iOS & Android Apps', 'Cross-platform Solutions', 'Rapid Prototyping'],
        popularity: 'Used by Facebook, Instagram, Airbnb',
        link: 'https://reactnative.dev'
      },
      Flutter: {
        description: 'Google UI toolkit for building natively compiled mobile, web, and desktop apps',
        useCases: ['Beautiful Mobile UIs', 'Cross-platform Apps', 'High-performance Apps'],
        popularity: 'Fastest growing mobile framework',
        link: 'https://flutter.dev'
      }
    }
  },
  'Cloud/DevOps': {
    icon: Cloud,
    techs: ['AWS', 'GCP', 'Docker', 'K8s'],
    description: 'Cloud infrastructure and deployment automation',
    details: {
      AWS: {
        description: 'Amazon Web Services - Most comprehensive cloud platform',
        useCases: ['Cloud Hosting', 'Serverless Functions', 'Data Storage & Analytics'],
        popularity: 'Market leader with 32% cloud market share',
        link: 'https://aws.amazon.com'
      },
      GCP: {
        description: 'Google Cloud Platform - Advanced cloud computing services',
        useCases: ['Machine Learning', 'Big Data Analytics', 'Kubernetes Management'],
        popularity: 'Strong in AI/ML and data analytics',
        link: 'https://cloud.google.com'
      },
      Docker: {
        description: 'Platform for developing, shipping, and running applications in containers',
        useCases: ['Application Containerization', 'Microservices', 'CI/CD Pipelines'],
        popularity: 'Industry standard for containerization',
        link: 'https://www.docker.com'
      },
      K8s: {
        description: 'Kubernetes - Open-source container orchestration platform',
        useCases: ['Container Orchestration', 'Auto-scaling', 'Load Balancing'],
        popularity: 'De facto standard for container orchestration',
        link: 'https://kubernetes.io'
      }
    }
  },
  'AI/Data': {
    icon: Brain,
    techs: ['Python', 'TensorFlow', 'ML'],
    description: 'Machine learning and data science solutions',
    details: {
      Python: {
        description: 'Primary language for data science with rich ecosystem of libraries',
        useCases: ['Data Analysis', 'Machine Learning', 'AI Development'],
        popularity: 'Most popular language for AI/ML',
        link: 'https://www.python.org'
      },
      TensorFlow: {
        description: 'Open-source machine learning framework by Google',
        useCases: ['Deep Learning', 'Neural Networks', 'Computer Vision'],
        popularity: 'Leading ML framework with enterprise adoption',
        link: 'https://www.tensorflow.org'
      },
      ML: {
        description: 'Machine Learning - Algorithms and statistical models for intelligent systems',
        useCases: ['Predictive Analytics', 'Natural Language Processing', 'Recommendation Systems'],
        popularity: 'Core technology driving modern AI applications',
        link: 'https://en.wikipedia.org/wiki/Machine_learning'
      }
    }
  }
}

function TechModal({ category, onClose }) {
  const data = techData[category]
  const IconComponent = data.icon

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <IconComponent size={40} />
          </div>
          <h2>{category}</h2>
          <p className="modal-subtitle">{data.description}</p>
        </div>

        <div className="tech-details">
          {data.techs.map((tech) => {
            const techInfo = data.details[tech]
            return (
              <div key={tech} className="tech-card">
                <div className="tech-card-header">
                  <h3>{tech}</h3>
                  <a
                    href={techInfo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="tech-description">{techInfo.description}</p>
                <div className="tech-info">
                  <strong>Use Cases:</strong>
                  <ul>
                    {techInfo.useCases.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <p className="tech-popularity">{techInfo.popularity}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Developer Skills</h1>
          <p className="subtitle">Our developers specialize in modern technologies and frameworks</p>
          <p className="instruction">Click on any skill to learn more</p>
        </div>
      </header>

      <main className="main-content">
        <div className="skills-grid">
          {Object.entries(techData).map(([category, data]) => {
            const IconComponent = data.icon
            return (
              <div
                key={category}
                className="skill-card"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="skill-icon">
                  <IconComponent size={40} />
                </div>
                <h3 className="skill-name">{category}</h3>
                <p className="skill-techs">{data.techs.join(', ')}</p>
                <div className="skill-overlay">
                  <span>Click to explore</span>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {selectedCategory && (
        <TechModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  )
}

export default App
