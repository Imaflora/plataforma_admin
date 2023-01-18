import React from 'react';
import Wrapper from '../components/Wrapper';

interface RouterWrapperProps {
  dashboard?: boolean;
  children: React.ReactNode;
}

function RouterWrapper({
  children,
  dashboard = false,
}: RouterWrapperProps): JSX.Element {
  return <Wrapper dashboard={dashboard}>{children}</Wrapper>;
}

export default RouterWrapper;
