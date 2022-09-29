const colors = {
  names: ["red", "green", "purple", "yellow", "blue", "brown", "teal"],
  lightrgb: [
    "#e5bfcb",
    "#84ba96",
    "#A884BA",
    "#baba84",
    "#8484ba",
    "#BA9684",
    "#84BABA",
  ],
  rgb: ["#F00", "#090", "#60C", "#FF0", "#009", "#630", "#0CC"],
};

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
      { name: "player1", color: colors.names[0], state: "waiting" },
      { name: "player2", color: colors.names[1], state: "waiting" },
      { name: "player3", color: colors.names[2], state: "waiting" },
      { name: "player4", color: colors.names[3], state: "waiting" },
      { name: "player5", color: colors.names[4], state: "waiting" },
      { name: "player6", color: colors.names[5], state: "waiting" },
      { name: "player7", color: colors.names[6], state: "waiting" },
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
