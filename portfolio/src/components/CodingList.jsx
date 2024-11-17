import Code from "./Code";
import status from "./status";
import { useState } from "react";

const CodingList = () => {
  const [codes, setCodes] = useState(status);
  return (
    <>
      {codes.map((code) => (
        <Code
          title={code.title}
          image={code.image}
          status={code.status}
        />
      ))}
    </>
  );
};

export default CodingList;
