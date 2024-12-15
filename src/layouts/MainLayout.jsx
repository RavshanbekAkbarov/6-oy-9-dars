import { Outlet } from "react-router-dom";
import { Navbar, Footer, ColorContainer } from "../components";

function MainLayout() {
  return (
    <div>
      <Navbar className="fixed top-0 z-10 w-full" />
      <ColorContainer />
      <main className="align-elements w-full flex-grow">
        <Outlet />
      </main>
      <Footer className="fixed bottom-0 z-10 w-full" />
    </div>
  );
}

export default MainLayout;
