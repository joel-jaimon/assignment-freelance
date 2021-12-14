import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./App.module.scss";
import { getImages } from "./redux/reducers/general";

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(pageIndex));
  }, []);

  return <div className={s.App} />;
};

export default App;
