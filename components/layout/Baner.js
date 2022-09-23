import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const banerImage =
  "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?w=2000&t=st=1663874549~exp=1663875149~hmac=fdbaba2a3223218a6813fd0ea59debac4923aeab0c9a30c1cf8af48f0e6799d2";

const Baner = () => {
  return (
    <Container className="p-0 mb-3">
      <div
        style={{
          width: "100%",
          height: "30vh",
          position: "relative",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          className="w-100 mt-3"
          src={banerImage}
          alt="baner"
          placeholder="blur"
          blurDataURL={banerImage}
        />
      </div>
    </Container>
  );
};

export default Baner;
