import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 1,
    color: "#FFB72B",
    backgroundColor: "#000000",
    fontFamily: "Roboto",
    padding: 5,
  },

  mainText: {
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFB72B",
    margin: 30,
    padding: 5,
  },

  mainContainer: {
    padding: 5,
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  scoreItem: {
    width: "50%",
    height: 50,
    padding: 10,
    backgroundColor: "#FFB72B",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    padding: 5,
  },

  cardTitle: {
    fontSize: 21,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    backgroundColor: "#FFB534",
    padding: 5,
  },

  cardText: {
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    backgroundColor: "#FBF6EE",
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    padding: 5,
  },
  cardImage: {
    width: 100,
    height: 150,
    backgroundColor: "gray",
    margin: 10,
  },
});
