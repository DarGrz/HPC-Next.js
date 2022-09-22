import next from "next";
import React from "react";
import Image from "next/Image";

const ImagesRow = (props) => {
  return (
    <div className="row" style={{ margin: "auto" }}>
      <div
        className="col d-flex justify-content-center p-0"
        style={{
          width: "100%",
          minHeight: "200px",
          position: "relative",
        }}
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={props.pump}
          alt="pupmAImage"
        />
      </div>

      <div className="col-2 d-flex justify-content-center align-content-center m-auto p-0">
        <Image
          height={50}
          width={50}
          objectFit="contain"
          src="/vs.webp"
          alt="pupmAImage"
        />
      </div>

      <div
        className="col d-flex justify-content-center p-0"
        style={{
          width: "100%",
          minHeight: "200px",
          position: "relative",
        }}
      >
        {!props.pump ? (
          <Image
            layout="fill"
            objectFit="contain"
            src="https://img.freepik.com/free-vector/white-question-mark-background-minimal-style_1017-25235.jpg?w=1480&t=st=1663882412~exp=1663883012~hmac=ef98e41ddd4f2a2d4ef6f6f1ca0d6f575e1b0fc35e7ba9731578a59136c6f69a"
            alt="pupmBImage"
          />
        ) : (
          <Image
            layout="fill"
            src={props.pumpB}
            objectFit="contain"
            alt="pupmAImage"
          />
        )}
      </div>
    </div>
  );
};

export default ImagesRow;
