enum colors {
  red,
  green,
  purple,
  yellow,
  blue,
  brown,
  teal,
}

const okdice = {
  currentPlayer: "muddylemon",
  state: {
    isLoggedIn: false,
    isPlaying: false,
    isSitting: false,
    isMyTurn: false,
    isAutoEndTurn: false,
    isFlag: false,
  },
  table: {
    name: "integral",
    players: [
      { name: "player1", color: colors.red },
      { name: "player2", color: colors.green },
      { name: "player3", color: colors.yellow },
      { name: "player4", color: colors.blue },
    ],
  },
  turn: {
    name: "player1",
  },
  buttons: {
    autoEndTurn: false,
    flag: false,
  },
};

export default okdice;
