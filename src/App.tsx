import s from "./App.module.scss";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <MainLayout className={s.App}>
      <Home />
    </MainLayout>
  );
};

export default App;
