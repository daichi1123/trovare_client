import Steak from "../src/img/steak.jpeg";
import Curry from "../src/img/curry.jpeg";
import Wagashi from "../src/img/wagashi.jpeg";
import Cafe from "../src/img/cafe.jpg";
import Italian from "../src/img/italian.jpg";
import Izakaya from "../src/img/izakaya.jpg";
import Ramen from "../src/img/ramen.jpg";
import Seafood from "../src/img/seafood.jpg";

// const imgs: string[] = [Steak, Curry];
type RstPromo = {
  id: number;
  img: string;
  rstName: string;
  content: string;
  rating: number;
}[];

// genre favarite_value
export const RstPromotions: RstPromo = [
  {
    id: 1,
    img: Steak,
    rstName: "ステーキハウス",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 1,
  },
  {
    id: 2,
    img: Curry,
    rstName: "カレー",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 3,
  },
  {
    id: 3,
    img: Izakaya,
    rstName: "居酒屋とよ",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 5,
  },
  {
    id: 4,
    img: Italian,
    rstName: "イタリアン",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 2,
  },
  {
    id: 5,
    img: Ramen,
    rstName: "ラーメン",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 1,
  },
  {
    id: 6,
    img: Cafe,
    rstName: "カフェ",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 3,
  },
  {
    id: 7,
    img: Wagashi,
    rstName: "和食",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 4,
  },
  {
    id: 8,
    img: Seafood,
    rstName: "海鮮料理",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    rating: 2,
  },
];

type RstGenreType = {
  id: number;
  link: string;
  genre: string;
}[];

export const RstGenres: RstGenreType = [
  { id: 1, link: "/rst/yakiniku", genre: "焼肉" },
  { id: 2, link: "/rst/sushi", genre: "寿司" },
  { id: 3, link: "/rst/izakaya", genre: "居酒屋" },
  { id: 4, link: "/rst/italian", genre: "イタリアン" },
  { id: 5, link: "/rst/ramen", genre: "ラーメン" },
  { id: 6, link: "/rst/cafe", genre: "カフェ" },
  { id: 7, link: "/rst/japanese-food", genre: "和食" },
  { id: 8, link: "/rst/sea-food", genre: "魚介・海鮮料理" },
  { id: 9, link: "/rst/soba", genre: "そば" },
  { id: 10, link: "/rst/udon", genre: "うどん" },
  { id: 11, link: "/rst/eel", genre: "うなぎ" },
  { id: 12, link: "/rst/yakitori", genre: "焼き鳥" },
  { id: 13, link: "/rst/pork-cutlet", genre: "とんかつ" },
];
