import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/navigation';

const Layout = () => {
  return (
    <section>
      <header>
        <Navigation />
      </header>

      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default Layout;
