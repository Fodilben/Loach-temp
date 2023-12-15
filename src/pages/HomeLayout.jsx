import { Outlet, useNavigation } from "react-router-dom";
import { GlobalLooading, Header, NavBar } from "../component";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <NavBar />
      {isLoading ? (
        <GlobalLooading />
      ) : (
        <section className=" align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
