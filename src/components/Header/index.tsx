import {
  HeaderWrapper,
  NavItems,
  NavTitle,
  ImafloraLogo,
  UserButton,
} from './styles';
import Logo from '../../assets/img/imafloralogo.svg';
import Avatar from '../../assets/img/useravatar.jpg';

function Header() {
  return (
    <HeaderWrapper>
      <ImafloraLogo src={Logo} />
      <NavItems>
        <NavTitle>Nossos Serviços</NavTitle>
        <NavTitle>Painel</NavTitle>
        <NavTitle>Contato</NavTitle>
        <UserButton src={Avatar} />
      </NavItems>
    </HeaderWrapper>
  );
}

export default Header;
