import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Alert,
} from "react-native";
import { styles } from "../Styles";
import greenBackground from "../assets/greenBackground.png";

export default function CardGame() {
  // Create and initiate useState of constants
  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [deck, setDeck] = useState([]);
  const [yourCard, setYourCard] = useState({});
  const [computerCard, setComputerCard] = useState({});
  const [round, setRound] = useState(1);

  // Base API URL
  const URL = "https://www.deckofcardsapi.com/api/deck/";

  // Define and return the value of cards
  const getCardValue = (cardValue) => {
    switch (cardValue) {
      case "JACK":
        return 11;
      case "QUEEN":
        return 12;
      case "KING":
        return 13;
      case "ACE":
        return 14;
      default:
        return parseInt(cardValue);
    }
  };

  // Set yourCard and computerCard useState and calculate the game score
  const handleScore = (card1, card2) => {
    setYourCard(card1);
    setComputerCard(card2);
    const yourCardValue = getCardValue(card1.value);
    const computerCardValue = getCardValue(card2.value);
    if (yourCardValue > computerCardValue) {
      setYourScore((prev) => prev + 1);
    } else if (yourCardValue < computerCardValue) {
      setComputerScore((prev) => prev + 1);
    }
  };

  // Define win, lose or tie and show result in an alert
  // Call the loadNewDeck fuction to start a new game
  const handleEndGame = () => {
    if (yourScore > computerScore) {
      Alert.alert("You won!", `Your score was ${yourScore}.`, [
        {
          text: "Play Again",
          onPress: loadNewDeck,
        },
      ]);
    } else if (yourScore < computerScore) {
      Alert.alert("You lost!", `The computer score was ${computerScore}.`, [
        {
          text: "Play Again",
          onPress: loadNewDeck,
        },
      ]);
    } else {
      Alert.alert("Tye!", `Your score was ${yourScore}`, [
        {
          text: "Play Again",
          onPress: loadNewDeck,
        },
      ]);
    }
  };

  // Update the useState values, start a new Game and fetch a new card deck
  const loadNewDeck = () => {
    setYourScore(0);
    setComputerScore(0);
    setRound(1);
    setYourCard({});
    setComputerCard({});

    const getCardDeck = async () => {
      try {
        const resp = await fetch(URL + "new/shuffle/?deck_count=1");
        const json = await resp.json();
        return setDeck(json);
      } catch (error) {
        console.log("Error fetching deck id", error);
      }
    };
    getCardDeck();
  };

  useEffect(() => {
    loadNewDeck();
  }, []);

  // Start each round of the game
  // Fetch two cards in the card deck
  // Call the function handleScore and pass the two cards information as a parameter
  // Count rounds
  // Call the handleEndGame to show game result
  const handlePlayRound = async () => {
    try {
      const response = await fetch(URL + deck.deck_id + "/draw/?count=2");
      const json = await response.json();
      setDeck(json);
      if (json?.cards?.length > 1) {
        handleScore(json.cards[0], json.cards[1]);
      }
      if (json.remaining > 0) {
        setRound((prev) => prev + 1);
      } else {
        handleEndGame();
      }
    } catch (error) {
      console.log("Error fetching deck card", error);
    }
  };

  // Check if the json has information and set the cards name
  const getCardInformation = (card) => {
    if (
      card !== undefined &&
      card.value !== undefined &&
      card.suit !== undefined
    ) {
      return `${card?.value} of ${card?.suit}`;
    } else {
      return "Card Name";
    }
  };

  return (
    <ImageBackground source={greenBackground} style={styles.container}>
      <View>
        <Text style={styles.headerText}>Top Card Game</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreItem}>
            <Text>Your Score: {yourScore}</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text>Computer Score: {computerScore} </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Card</Text>
            <Image
              style={styles.cardImage}
              source={{
                uri:
                  yourCard?.image ||
                  "https://www.deckofcardsapi.com/static/img/back.png",
              }}
            />
            <Text style={styles.cardText}>{getCardInformation(yourCard)}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Computer Card</Text>
            <Image
              style={styles.cardImage}
              source={{
                uri:
                  computerCard?.image ||
                  "https://www.deckofcardsapi.com/static/img/back.png",
              }}
            />
            <Text style={styles.cardText}>
              {getCardInformation(computerCard)}
            </Text>
          </View>
          <Button
            color="#000000"
            title={`Play Round ${round}`}
            onPress={handlePlayRound}
          ></Button>
        </View>
      </View>
    </ImageBackground>
  );
}
