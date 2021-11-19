import { GetServerSideProps } from "next";

function MarketList({}) {
  // console.log(this.props.data);
  // return(data)
  //res.json()이 찍힙니다
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://54.180.135.245:8080/saleItemList`);
  const data = await res.json();
  // res.data("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

  return {
    props: {
      data: data,
    },
  };
};

export default MarketList;
