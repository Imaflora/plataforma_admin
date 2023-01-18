import { Fragment } from 'react';
import { Grid } from '@mui/material';

import BigNumbers from 'components/BigNumbers';
import QuickAccess from 'components/QuickAccess';

import { QuickAccessList } from 'constants/QuickAccessList';

import { BigNumbersContainer, QuickAccessContainer, Title } from './styles';

function Dashboard() {
  return (
    <Fragment>
      <BigNumbersContainer>
        <BigNumbers title="Projetos" subtitle="publicados">
          193
        </BigNumbers>
        <BigNumbers title="Usuários" subtitle="ativos">
          47
        </BigNumbers>
        <BigNumbers title="Clientes" subtitle="cadastrados">
          32
        </BigNumbers>
      </BigNumbersContainer>
      <QuickAccessContainer>
        <Title>Acessos Rápidos</Title>
        <Grid container spacing={2}>
          {QuickAccessList.map((item) => (
            <Grid item md={4} sm={6} xs={12}>
              <QuickAccess
                title={item.title}
                path={item.path}
                icon={<item.icon />}
              />
            </Grid>
          ))}
        </Grid>
      </QuickAccessContainer>
    </Fragment>
  );
}

export default Dashboard;
