const TABLES_URL = "https://kdice.com/api/kdice/tables";

type Table = {
  round: number;
  mapName: string;
  mapSize: number;
  maxDice: number;
  startDistribution: string;
  maxRound: number;
  refillType: number;
  eliminationMode: number;
  id: number;
  category_id: number;
  name: string;
  playerCount: number;
  tableServerName: string;
  viewerCount: number;
  resumeSeconds: number;
  state: number;
  tournyId: number;
  ownerId: number;
};

const tableCategoryClasses = ["0", "100", "500", "2000", "5000"];

const getCategory = (category_id: number) => {
  return tableCategoryClasses[category_id - 2] || "?";
};

const getTables = async () => {
  const response = await fetch(TABLES_URL);
  const data = await response.json();
  return data.tables;
};

const TableList = async () => {
  const tables = await getTables();
  const tablesContainer = document.getElementById("tables") as HTMLDivElement;
  tablesContainer.innerHTML = tables
    .map((table: Table) => {
      return `
        <div class="table">
            <div class="table__name">${table.name}</div>
            <div class="table__category">${getCategory(table.category_id)}</div>
            <div class="table__playerCount">${table.playerCount}</div>
        </div>
        `;
    })
    .join("");
};
