import { Outlet } from "react-router-dom";
import 
    {Navbar,Footer,ColorContainer} from"../components"

function MainLayout() {
  return (
    <div>
          <Navbar />
          <ColorContainer/>
      <main className="align-elements w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
