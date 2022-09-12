import { TextButtons, TableList } from "./components";

type GameState = "waiting" | "playing" | "finished";
type TurnState = "waiting" | "playing" | "finished";
type Player = {
  name: string;
  state: TurnState;
  color: string;
};

// set buttons
// create auto end turn button
// login selector
// active table list
// flag buttons
// update state

const okdice = {
  state: "waiting" as GameState,
  players: [] as Player[],
  table: {
    id: "",
    name: "",
    players: [] as Player[],
  },
  turn: {
    name: "",
  },
  buttons: {
    autoEndTurn: false,
    flag: false,
  },
};

export default okdice;
