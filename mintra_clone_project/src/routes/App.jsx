import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Fetch from "../components/Fetch";
import Loading from "../components/loading";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Header />
      <Fetch />
      {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
