"use client"

import React from "react";
import withDataFetcher from "./withDataFetcher";

function InnerComp(props: { [key: string]: unknown }) {
  const arr = props.data as unknown[] | undefined;
  if (!arr) return null;

  return (
    <>
      {arr.map((item, i) => (
        <div key={i}>{JSON.stringify(item)}</div>
      ))}
    </>
  );
}

export default withDataFetcher(InnerComp);
