import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: "#F19E38",
    "primary.light": "#FFD097",
    "primary.hover": "gba(255, 208, 151, 0.2)",
    background: "#f5f7fe",
    transparent: "rgba(255,255,255,0)",
  },
  components: {
    Button: {
      variants: {
        pageTitleNormal: {
          as: "span",
          position: "relative",
          color: "#000",
          _after: {
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            zIndex: -1,
          },
        },
        pageTitleGradient: {
          as: "span",
          bgGradient: "linear(to-l,#F19E38, #000000)",
          bgClip: "text",
        },
        headerTextNormal: {
          as: "span",
          position: "relative",
          color: "#000",
          _after: {
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            zIndex: -1,
          },
        },
        headerTextGradient: {
          as: "span",
          bgGradient: "linear(to-l,#F19E38, #000000)",
          bgClip: "text",
        },
        menuButton: {
          rounded: "full",
          as: "a",
          display: "flex",
          size: "lg",
          bg: "transparent",
          fontWeight: "normal",
          _hover: {
            borderWidth: 0,
            borderColor: "primary",
            bg: "primary.hover",
            color: "black",
          },
        },
        outlineButton: {
          rounded: "full",
          size: "lg",
          fontWeight: "normal",
          px: 6,
          border: "2px",
          borderColor: "#F19E38",
          bg: "rgba(255, 255, 255, 0)",
          marginTop: "44px",
          _hover: {
            borderColor: "#F19E38",
            bg: "rgba(255, 208, 151, 0.2)",
            color: "#000",
          },
          _active: {
            borderColor: "#F19E38",
            bg: "rgba(255, 208, 151, 0.2)",
          },
        },
        languageMenuItem: {
          bg: "rgba(255,255,255,0)",
          borderWidth: "0px",
          _hover: {
            bg: "rgba(255,255,255,0)",
            borderWidth: "0px",
            border: "none",
            borderColor: "rgba(255,255,255,0)",
            boxShadow: "none",
          },
        },
        expertButton: {
          // maxW: "235px",
          rounded: "full",
          fontSize: "16px",
          fontWeight: "normal",
          px: 6,
          py: 4,
          border: "2px",
          borderColor: "#F19E38",
          bg: "rgba(255, 255, 255, 0)",
          _hover: {
            borderColor: "#F19E38",
            bg: "rgba(255, 208, 151, 0.2)",
            color: "#000",
          },
          _active: {
            borderColor: "#F19E38",
            bg: "rgba(255, 208, 151, 0.2)",
          },
        },
        arrowButton: {
          color: "#fff",
          fontWeight: 600,
          fontSize: "16px",
          p: 8,
          borderRadius: "40px",
          bg: "#000",
          _hover: { bg: "#343434", color: "#fff" },
        },
        contactButtonDekstop: {
          px: "30px",
          py: "10px",
          color: "#fff",
          fontSize: "sm",
          fontWeight: 500,
          bg: "primary",
          mx: "10px",
          borderRadius: "40px",
          _hover: {
            bg: "#D07A0F",
            color: "#fff",
          },
        },
        contactButton: {
          rounded: "full",
          display: "flex",
          size: "lg",
          bg: "transparent",
          fontWeight: "normal",
          _hover: {
            borderWidth: 0,
            borderColor: "primary",
            bg: "primary.hover",
          },
        },
        primaryOutlineButton: {
          size: "lg",
          bg: "transparent",
          borderWidth: "2px",
          borderColor: "primary",
          color: "primary",
          _hover: {
            bg: "primary",
            color: "white",
          },
        },
      },
    },
  },
});
