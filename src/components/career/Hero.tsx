const Hero: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", top: "185px", paddingLeft: "20%" }}>
        <h1
          style={{
            zIndex: 1,
            color: "#161616",
            fontFamily: "Red Hat Display",
            fontWeight: "700",
          }}
        >
          <span style={{ color: "#D07A0F" }}>Kształtuj </span> swoją karierę
          <br /> z Nexio.
        </h1>
        <p
          style={{
            zIndex: 1,
            fontFamily: "Red Hat Display",
          }}
        >
          Dołącz do naszego zespołu <br />i zyskaj dostęp do ciekawych
          projektów!
        </p>
      </div>
      <img style={{ zIndex: -2 }} src="hero.png"></img>
    </div>
  );
};

export default Hero;
