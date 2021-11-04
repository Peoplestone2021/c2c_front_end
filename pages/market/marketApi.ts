import { InferGetServerSidePropsType } from "next";

export interface marketItemListResponse {
  id: number;
  crcHave: String;
  // crcWant: String; // 한국원 케이스 알고리즘 필요
  cntHave: number;
  cntWant: number;
  dDate: String;
  // content?: String;
  status: boolean;
}

export interface marketItems {
  id: number;
  hostName: String;
  crcHave: String;
  crcWant: String;
  cntHave: number;
  cntWant: number;
  dDate: String;
  content?: String;
  status: boolean;
}

const marketItems = [
  {
    id: 11111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 22222222,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 33333333,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 44444444,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 55555555,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 66666666,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 77777777,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 88888888,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 99999999,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 100000000,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 111111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 122222222,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 133333333,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 144444444,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 155555555,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 211111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 222222222,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 233333333,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 244444444,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 255555555,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 311111111,
    hostName: "Zero",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1000,
    cntWant: 1174000,
    dDate: "1635747679",
    content: "울릉도 동남쪽",
    status: true,
  },
  {
    id: 322222222,
    hostName: "One",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1100,
    cntWant: 1291000,
    dDate: "1635745679",
    content: "뱃길따라 이백리",
    status: true,
  },
  {
    id: 333333333,
    hostName: "Two",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 890,
    cntWant: 1044000,
    dDate: "1635749679",
    content: "외로운 섬하나",
    status: true,
  },
  {
    id: 344444444,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 880,
    cntWant: 1033000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
  {
    id: 355555555,
    hostName: "Three",
    crcHave: "USD",
    crcWant: "KRW",
    cntHave: 1150,
    cntWant: 1350000,
    dDate: "1635748679",
    content: "새들의 고향",
    status: true,
  },
];

export const getServerSideProps = async () => {
  const res = await fetch("https://.../data");
  const data: marketItems = await res.json();

  return {
    props: {
      data,
    },
  };
};

// const Page({data}: InferGetServerSidePropsType<typeof GetServerSideProps>){

// }

// export default Page;