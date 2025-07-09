"use client"

import React, { useEffect } from "react";

type Props = { [key: string]: unknown };

function withLogger(Comp: React.ComponentType<Props>) {
  const WithLogger: React.FC<Props> = (props) => {
    useEffect(() => {
      console.log("Mounted");
      return () => console.log("Unmounted");
    }, []);

    useEffect(() => {
      console.log("Updated");
    });

    return <Comp {...props} />;
  };

  return WithLogger;
}

export default withLogger;