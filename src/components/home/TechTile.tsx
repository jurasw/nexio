interface Props {
  imageUrl: string;
  title: string;
}

const TechTile: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <div
      style={{
        border: "1px solid #CACACA",
        borderRadius: "20px",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <img src={imageUrl} style={{ margin: "auto" }} />
      <p
        style={{
          fontFamily: "Red Hat Display",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "22px",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default TechTile;
