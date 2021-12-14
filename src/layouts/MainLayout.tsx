import { Header } from "../components/Header/Header";
import s from "./mainLayout.module.scss";

export const MainLayout = ({ children }: any) => {
  return (
    <main className={s.main}>
      <Header />
      {children}
    </main>
  );
};
