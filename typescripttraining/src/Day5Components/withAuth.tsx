import React from "react";

type Props = {
  name: string;
  password: string;
  
};

const withAuth = (InnerComponent: React.ComponentType<Props>) => {
  return (props: Props) => {
    if (props.name === "ABC" && props.password === "111") {
      return <InnerComponent {...props} />;
    }
    return <p>Wrong user</p>;
  };
};

export default withAuth;
