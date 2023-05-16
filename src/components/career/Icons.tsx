import React from "react";

interface Props {
  imageUrl: string;
  text: string;
}

const IconTitle: React.FC<Props> = ({ imageUrl, text }) => {
  return (
    <div
      style={{
        borderRadius: "48px",
        background: "#FFFFFF",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <img src={imageUrl} alt={text} style={{ margin: "auto" }} />
      <p
        style={{
          fontFamily: "Red Hat Display",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "56px",
        }}
      >
        {text}
      </p>
    </div>
  );
};
export default IconTitle;
