import React from "react";
import { Skeleton } from "antd";

export default function EmptyCard() {
  return (
    <div>
      <div
        style={{
          width: 350,
          height: 550,
          padding: 20,
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
          <Skeleton.Avatar active={true} size={80} shape="circle" />
          <br />
          <br />
          <Skeleton.Input style={{ width: 200 }} active={true} size={50} />
          <hr style={{ color: "white", zIndex: 1 }} />
          <Skeleton />
          <hr style={{ color: "white", zIndex: 1 }} />
          <Skeleton.Input style={{ width: 200 }} active={true} size={50} />
        </div>
      </div>
    </div>
  );
}
