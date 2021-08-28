import React, { useEffect, useRef } from "react";
import { Avatar } from "antd";
import { Badge } from "reactstrap";

import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

function CardGrid({
  Ref,
  key,
  Name,
  Owner,
  Website,
  Established,
  Description,
}) {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
    });
  }, []);
  return (
    <div ref={Ref} key={key}>
      <div
        ref={tilt}
        style={{
          width: 350,
          height: 550,
          padding: 20,
          marginBottom: 10,
          background: "rgba(255,255,255,0.1)",
          boxShadow: "20px 20px 20px rgba(0,0,0,0.5)",
          borderRadius: 15,
          border: "none",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.5)",
          borderLeft: "1px solid rgba(255,255,255,0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          style={{
            padding: 20,
            textAlign: "center",
            transition: "0.5s",
          }}
        >
          <Avatar
            size={80}
            icon={<FontAwesomeIcon icon={faBuilding} />}
            src={"https://logo.clearbit.com/" + Website}
          />
          <h4 style={{ color: "white", zIndex: 1, margin: 10 }}>{Name}</h4>
          <h5 style={{ color: "white", zIndex: 1 }}>{Website}</h5>
          <hr style={{ color: "white", zIndex: 1 }} />
          <p style={{ color: "white", fontWeight: 300, fontSize: "1em" }}>
            {Description}
          </p>
          <hr style={{ color: "white", zIndex: 1 }} />
          <h6 style={{ zIndex: 1 }}>
            <Badge color="warning" style={{ color: "black" }}>
              Owned by : {Owner}
            </Badge>
          </h6>
          <h6 style={{ color: "white", zIndex: 1 }}>
            <Badge color="success">
              Estd : {new Date(Established).toDateString()}
            </Badge>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
