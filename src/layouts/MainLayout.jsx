import { Outlet } from "react-router-dom";
import { Navbar, Footer, ColorContainer } from "../components";

function MainLayout() {
  return (
    <div>
      <Navbar className="flex min-h-screen flex-col" />
      <ColorContainer />
      <main className="align-elements w-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
