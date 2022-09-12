const chatInput = document.querySelector(
  ".iogc-ChatPanel-input .gwt-TextBox"
) as HTMLInputElement;

const chatOutput = document.querySelector(
  ".iogc-ChatPanel-messages"
) as HTMLDivElement;

const sidebar = document.querySelector("#menu-out") as HTMLDivElement;

const gameInfo = document.querySelector(
  "div.iogc-GameWindow-status"
) as HTMLDivElement;

const tableName = document.querySelector(".iogc-GameWindow-commands .title");

const sitInButton = document.querySelector(
  ".iogc-GameWindow-commands .sitIn"
) as HTMLButtonElement;
const sitOutButton = document.querySelector(
  ".iogc-GameWindow-commands .sitOut"
) as HTMLButtonElement;
const leaveButton = document.querySelector(
  ".iogc-GameWindow-commands .leave"
) as HTMLButtonElement;

export default {
  chatInput,
  chatOutput,
  sidebar,
  gameInfo,
  tableName,
  sitInButton,
  sitOutButton,
  leaveButton,
};
