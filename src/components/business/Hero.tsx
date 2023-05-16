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
          <span style={{ color: "#D07A0F" }}>Zadbaj o rozwój</span> swojego
          biznesu
          <br /> z zaufanym partnerem technologicznym.
        </h1>
        <p
          style={{
            zIndex: 1,
            fontFamily: "Red Hat Display",
          }}
        >
          Twoje projekty IT w naszych rękach. <br /> Zaopiekujemy się Twoim
          pomysłem, usprawniając technologiczny postęp Twojej firmy.
        </p>
      </div>
      <img style={{ zIndex: -2 }} src="hero.png"></img>
    </div>
  );
};

export default Hero;
