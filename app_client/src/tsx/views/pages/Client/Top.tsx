import { Header } from "../../components/block/Header";
import { ListTabs } from "../../components/block/ListTabs";
import { SearchCard } from "../../components/block/SearchCard";

export const Top = () => {
  // 使用するコンポーネント Header picture card search
  return (
    <>
      <Header />
      <SearchCard />
      <ListTabs />
    </>
  );
};
