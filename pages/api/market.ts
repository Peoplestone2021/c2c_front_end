import axios from "axios";

interface MarketItemResponse {
  item: number;
  hostName: string;
  crcHave: string;
  cntHave: number;
  crcWant: string;
  cntWant: number;
  content: string;
  status: boolean;
  dday: string;
}

interface MarketPagingResponse {
  content: MarketItemResponse[];
  last: boolean;
}

const marketApi = {
  fetch: () =>
    axios.get<MarketItemResponse[]>(
      `${process.env.NEXT_PUBLIC_FILE_MARKET_BASE}/marketItems`
    ),
  fetchPaging: (page: number, size: number) =>
    axios.get<MarketPagingResponse>(
      `${process.env.NEXT_PUBLIC_FILE_MARKET_BASE}/marketItem/paging?page=${page}&size=${size}`
    ),
};

export default marketApi;
