import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { Controller } from "../../components/Controller/Controller";
import { getImages } from "../../redux/reducers/general";
import s from "./home.module.scss";

export const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchedQuery, setSearchedQuery] = useState("");
  const dispatch = useDispatch();
  const images = useSelector((state: any) => state.generalState.images);

  useEffect(() => {
    if (!images.length) dispatch(getImages(pageIndex));
  }, []);

  return (
    <div className={s.home}>
      {images
        .filter((e: any) => {
          return searchedQuery
            ? e.author.toLowerCase().includes(searchedQuery)
            : true;
        })
        .map((e: any) => {
          return <Card data={e} key={e.id} />;
        })}
      <Controller setSearchedQuery={setSearchedQuery} />
    </div>
  );
};
