import type { NextApiRequest, NextApiResponse } from 'next'

interface MarketData {
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

// export default handler=(req: NextApiRequest, res: NextApiResponse<MarketData>) => {
//   if (req.method === 'POST') {
//   } else {
//   }
// }