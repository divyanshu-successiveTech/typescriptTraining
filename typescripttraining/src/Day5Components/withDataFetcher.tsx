"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function withDataFetcher(InnerComp: React.ComponentType<{ [key: string]: unknown }>){
  const WithDataFetcher = (props: { [key: string]: unknown }) => {
    const [data, setData] = useState<unknown[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let mounted = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (mounted) {
            setData(res.data);
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
        });

      return () => {
        mounted = false;
      };
    }, []);

    if (loading) return <p>Loading...</p>;

    return <InnerComp {...props} data={data} />;
  };

  return WithDataFetcher;
}

export default withDataFetcher;
