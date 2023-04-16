import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/navigation';
import { Container, Header } from './layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default Layout;
