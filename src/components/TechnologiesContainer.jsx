import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", sobre: "Essencial, uso muito nos meus projetos.", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", sobre: "Costumo usar bastante o Bootstrap também junto com o CSS.", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", sobre: "Posso considerar JS como minha linguagem de mais aprendizado.", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", sobre: "Estou começando a desenvolver projetos em React (inclusive este) para melhorar minhas skills.", name: "React", icon: <DiReact /> },
]
const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => 
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>{tech.sobre}</p>
          </div>
        </div>
      )}
    </div>
  </section>
}

export default TechnologiesContainer