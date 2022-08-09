import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import S from './Footer.module.css'


function Footer() {
  return(
          <footer className={S.footer}>
    <div className={S.containerPrincipal}>
      <div>
      <h4>Siga-nos</h4><br/>
      <ul className={S.socialList}>
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaInstagram />
      </li>
      <li>
        <FaLinkedin />
      </li>
    </ul>
  
      </div>
    <div className={S.container}>
      <h4>Sobre Nós</h4>
      <small className={S.socialListText}>Lojas físicas</small><br/>
      <small className={S.socialListText}>Quem somos?</small><br/>
      <small className={S.socialListText}>Trabalhe conosco</small><br/>
      <small className={S.socialListText}>Termos de uso e privacidade</small>
      <p className={S.copyRight}>
      <span>Resilia</span> &copy;2022
    </p>
    </div>
    <div>
    <h4>Quer ajuda?</h4>
      <small className={S.socialListText}>Central de ajuda</small><br/>
      <small className={S.socialListText}>Trocas e devoluções</small><br/>
    </div>
    </div>
    </footer>
    
  )
  }
  
export default Footer