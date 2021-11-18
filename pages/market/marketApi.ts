import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export interface marketItemListResponse {
  itemId: number;
  crcHave: String;
  // crcWant: String; // 한국원 케이스 알고리즘 필요
  cntHave: number;
  cntWant: number;
  dday: String;
  // content?: String;
  status: boolean;
}

export interface marketItem {
  itemId: number;
  hostName: String;
  crcHave: String;
  crcWant: String;
  cntHave: number;
  cntWant: number;
  dday: String;
  content?: String;
  status: boolean;
}

// const marketItems = [];

// export const getItemProps = async () => {
//   const res = await fetch("http://54.180.135.245:8080/saleItemList");
//   const marketItems: marketItem[] = await res.json();

//   return {
//     props: {
//       marketItems,
//     },
//   };
// };

// const Page({data}: InferGetServerSidePropsType<typeof GetServerSideProps>){

// }

// export default Page;
