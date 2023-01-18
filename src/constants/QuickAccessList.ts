import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

export const QuickAccessList = [
  {
    title: 'Administrar Usuários',
    path: '/usuarios',
    icon: GroupRoundedIcon,
  },
  {
    title: 'Contratar um serviço',
    path: '/servicos',
    icon: AccessibilityNewRoundedIcon,
  },
  {
    title: 'Contratar uma das nossas assistências',
    path: '/',
    icon: ContactSupportRoundedIcon,
  },
  {
    title: 'Acessar os serviços disponíveis para o seu negócio',
    path: '/servicos',
    icon: CurrencyExchangeRoundedIcon,
  },
  {
    title: 'Receba os principais alertas da plataforma sobre a sua área',
    path: '/',
    icon: CampaignRoundedIcon,
  },
  {
    title: 'Acompanhar as principais notícias do agro & ambiental',
    path: '/',
    icon: RssFeedRoundedIcon,
  },
];
