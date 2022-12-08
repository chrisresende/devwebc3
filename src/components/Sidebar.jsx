import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar}  id="chris" alt="Christiano" />
    <p className="title">Analista e Desenvolvedor de Sistemas</p>
    <SocialNetworks />
    <InformationContainer />
  </aside> 
}

export default Sidebar