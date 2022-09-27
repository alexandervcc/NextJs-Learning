import { useEffect, useState } from "react";
import useSWR from "swr";

const lastSalesPage = () => {
  const [sales, setSales] = useState();
  //  const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-2c404-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    console.log("data: ", data);
    if ( data) {
      const transSales = [];
      for (const key in data) {
        sales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transSales);
    }
  }, [data]);

  /*   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://nextjs-2c404-default-rtdb.firebaseio.com/sales.json"
      );
      const dataRes = await res.json();
      const sales = [];
      for (const key in dataRes) {
        sales.push({
          id: key,
          username: dataRes[key].username,
          volume: dataRes[key].volume,
        });
      }
      setData(sales);
      setLoading(false);
    };
    fetchData();
  }, []); */

  if (error) {
    return <p>Failed to load!</p>;
  }

  if (!sales) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username}-{sale.volume}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default lastSalesPage;
