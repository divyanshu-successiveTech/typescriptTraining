import React from "react";
import withAuth from "./withAuth";

interface Props {
  name: string;
  password: string;
}

const InnerComponent: React.FC<Props> = (props) => {
  return <>Welcome {props.name}</>;
};

export default withAuth(InnerComponent);
