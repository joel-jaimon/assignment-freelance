import s from "./controller.module.scss";

export const Controller = ({ setSearchedQuery }: any) => {
  const handleSearch = (e: any) => {
    setSearchedQuery(e.target.value.toLowerCase());
  };

  return (
    <div className={s.searchController}>
      <input onChange={handleSearch} placeholder="Search for authors..." />
    </div>
  );
};
