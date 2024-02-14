interface DataItem {
  id: number;
  code: string;
}

const data: DataItem[] = [
  { id: 1, code: "3153417555" },
  { id: 2, code: "3153417555" },
  { id: 3, code: "3153417555" },
  { id: 4, code: "3153417555" },
  { id: 5, code: "3153417555" },
  { id: 6, code: "3153417555" },
  { id: 7, code: "3153417555" },
  { id: 8, code: "3153417555" },
  { id: 9, code: "3153417555" },
  { id: 10, code: "3153417555" },
];

function getIdFromCode(code: string): number | null {
  for (const item of data) {
    if (item.code === code) {
      return item.id;
    }
  }
  return null; // If no matching code is found
}

export { getIdFromCode };
