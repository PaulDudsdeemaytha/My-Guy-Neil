import { renderRoutes } from "../../../startup/routes/index.js";

const style = {
  home: {
    // display: 'flex',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // // flexDirection: 'column',
    background:
      "center no-repeat url(https://source.unsplash.com/2560x1600/?galaxy)",
    height: "100vh",
    width: "100vw",
    padding: "0",
    border: "0",
    margin: "0"
  },

  header: {
    alignSelf: "center",
    color: "#C92C30",
    fontFamily: "Impact",
    fontSize: "5.5rem",
    fontStyle: "italic",
    fontWeight: "bold",
    textShadow: "2.5px 2.5px #ffffff",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    justifyContent: "space-between",
    top: "0",
    right: "0",
    padding: "0",
    border: "0",
    margin: "0",
    marginLeft: "0",
    textAlign: "center"
  },

  AccountsUIWrapper: {
    color: "#C92C30",
    fontFamily: "Impact",
    fontSize: "1.5rem",
    fontStyle: "italic",
    textShadow: "0.75px 0.75px #ffffff",
    fontWeight: "bold",
    padding: "1rem 0 0 0.75rem",
    border: "0",
    margin: "0",
    width: "100%",
    textAlign: "center",
    textDecoration: "none"
  },

  body: {
    alignSelf: "center",
    color: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: "7.5rem",
    fontWeight: "bold",
    // fontStyle: 'italic',
    textShadow: "3.75px 3.75px #C92C30",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px"
  },

  footer: {
    color: "#ffffff",
    textShadow: "0.75px 0.75px #C92C30",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: "1.5rem",
    fontWeight: "bold"
  }
};

export default style;
