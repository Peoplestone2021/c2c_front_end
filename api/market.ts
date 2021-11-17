import { createAxiosInstance } from "./_request";

export interface MarketItemResponse {
  id: number;
  hostName: string;
  crcHave: string;
  crcWant: string;
  cntHave: number;
  cntWant: number;
  dDate: number;
  content: string;
  status: boolean;
}

const marketApi = {
  get: (id: number) =>
    createAxiosInstance().get<MarketItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/market/${id}`
    ),
};

export default marketApi;
