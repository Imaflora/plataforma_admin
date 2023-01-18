import ROLES from '../utils/roles';

import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import Users from '../pages/Users';
import Customers from '../pages/Customers';
import ProjectsPage from '../pages/ProjectsPage';
import Sectors from '../pages/Sectors';
import ServicesPage from '../pages/ServicesPage';
import Files from '../pages/Files';
import TermsOfUse from '../pages/TermsOfUse';
import Privacy from '../pages/Privacy';
import HelpCenter from '../pages/HelpCenter';
import Support from '../pages/Support';

export const ROUTES = [
  {
    element: Dashboard,
    path: '/',
  },
];

export const ROUTES_INSIDE = [
  {
    element: Dashboard,
    path: '/dashboard',
    title: 'Dashboard',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Users,
    path: '/usuarios',
    title: 'Usuários',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Customers,
    path: '/clientes',
    title: 'Clientes',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: ProjectsPage,
    path: '/projetos',
    title: 'Projetos',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Sectors,
    path: '/setores',
    title: 'Setores',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: ServicesPage,
    path: '/servicos',
    title: 'Serviços',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Files,
    path: '/arquivos',
    title: 'Arquivos',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: TermsOfUse,
    path: '/termos-de-uso',
    title: 'Termos De Uso',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Privacy,
    path: '/privacidade',
    title: 'Privacidade',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: HelpCenter,
    path: '/central-de-ajuda',
    title: 'Central De Ajuda',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
  {
    element: Support,
    path: '/suporte',
    title: 'Suporte',
    profiles: [ROLES.ADMIN, ROLES.USER],
  },
];
