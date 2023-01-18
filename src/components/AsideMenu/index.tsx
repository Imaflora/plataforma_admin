import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import NavItem from 'components/NavItem';
import Avatar from '../../assets/img/useravatar.jpg';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import DeviceHubRoundedIcon from '@mui/icons-material/DeviceHubRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import {
  UserAvatarContainer,
  UserAvatar,
  UserInfoContainer,
  UserName,
  UserRole,
  LogoutButton,
  ButtonText,
} from './styles';

function AsideMenu() {
  const pathname = window.location.pathname;
  return (
    <>
      <UserAvatarContainer>
        <UserAvatar src={Avatar} />
      </UserAvatarContainer>

      <UserInfoContainer>
        <UserName>Nome de Usuário</UserName>
        <UserRole>Cargo</UserRole>
      </UserInfoContainer>

      <Grid container>
        <Grid item xs={12}>
          <NavItem
            path="/dashboard"
            title="Dashboard"
            icon={<HomeRoundedIcon />}
            isActive={pathname === '/dashboard' || pathname === '/'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/usuarios"
            title="Usuários"
            icon={<GroupRoundedIcon />}
            isActive={pathname === '/usuarios'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/clientes"
            title="Clientes"
            icon={<GroupsRoundedIcon />}
            isActive={pathname === '/clientes'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/projetos"
            title="Projetos"
            icon={<FileCopyRoundedIcon />}
            isActive={pathname === '/projetos'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/setores"
            title="Setores"
            icon={<DeviceHubRoundedIcon />}
            isActive={pathname === '/setores'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/servicos"
            title="Serviços"
            icon={<AppsRoundedIcon />}
            isActive={pathname === '/servicos'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/arquivos"
            title="Arquivos"
            icon={<DownloadForOfflineRoundedIcon />}
            isActive={pathname === '/arquivos'}
          />
        </Grid>
      </Grid>
      <Divider color="#78B637" style={{ margin: '20px 30px' }} />
      <Grid container>
        <Grid item xs={12}>
          <NavItem
            path="/termos-de-uso"
            title="Termos de uso"
            icon={<LockPersonRoundedIcon />}
            isActive={pathname === '/termos-de-uso'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/privacidade"
            title="Privacidade"
            icon={<PrivacyTipRoundedIcon />}
            isActive={pathname === '/privacidade'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/central-de-ajuda"
            title="Central de ajuda"
            icon={<SupportRoundedIcon />}
            isActive={pathname === '/central-de-ajuda'}
          />
        </Grid>
        <Grid item xs={12}>
          <NavItem
            path="/suporte"
            title="Suporte"
            icon={<SupportAgentRoundedIcon />}
            isActive={pathname === '/suporte'}
          />
        </Grid>
        <Grid item xs={12}>
          <LogoutButton onClick={() => console.log('logout')}>
            <ButtonText>Logout</ButtonText>
            <LogoutIcon />
          </LogoutButton>
        </Grid>
      </Grid>
    </>
  );
}
export default AsideMenu;
