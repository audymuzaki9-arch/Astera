import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar transparentAtTop={isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
