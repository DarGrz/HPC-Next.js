import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Baner from "./Baner";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <Baner />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
