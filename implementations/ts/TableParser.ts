type TableParseCondition = {
  tableStart: boolean;
  headerStart: boolean;
  headerEnd: boolean;
  rowEnd: boolean;
  seqCount: number;
  tableWidth: number;
}

export const tableParser = (lines: Array<string>): Array<Array<string>> => {
  const table: Array<Array<string>> = [];
  let row: Array<string> = [];

  const pc: TableParseCondition = {
    tableStart: false,
    headerStart: false,
    headerEnd: false,
    rowEnd: false,
    seqCount: 0,
    tableWidth: 0
  };

  const tableStartPattern: string = "=";
  const itemPattern: string = ": .*";
  const headerEndPattern: string = "=";
  const rowEndPattern: string = "-";

  for (const line of lines) {
    if (line.match(tableStartPattern) && !pc.tableStart) {
      pc.tableStart = true;
      continue;
    } else if (line.match(itemPattern) && pc.tableStart) {
      row.push(line.slice(2))
      pc.seqCount += 1;
      pc.headerStart = true;
      continue;
    } else if (!pc.headerStart && pc.tableStart) {
      return []
    } 

    if (line.match(itemPattern) && pc.headerStart && !pc.headerEnd && pc.tableStart) {
      row.push(line.slice(2));
      pc.seqCount += 1;
      continue;
    } else if (line.match(headerEndPattern) && pc.headerStart && pc.tableStart) {
      pc.headerEnd = true;
      pc.tableWidth = pc.seqCount;
      pc.seqCount = 0;
      table.push(row);
      row = [];
      continue;
    } else if (!pc.headerEnd && pc.headerStart && pc.tableStart) {
      return []
    }

    if (line.match(itemPattern) && pc.headerStart && pc.headerEnd && pc.tableStart) {
      row.push(line.slice(2));
      pc.rowEnd = false;
      pc.seqCount += 1;
      continue;
    } else if (line.match(rowEndPattern) && pc.headerStart && pc.headerEnd && pc.tableStart && pc.seqCount == pc.tableWidth) {
      pc.rowEnd = true;
      pc.seqCount = 0;
      table.push(row);
      row = [];
    } else if (pc.rowEnd && pc.headerStart && pc.headerEnd && pc.tableStart) {
      return table;
    } else if (!pc.rowEnd && pc.headerStart && pc.headerEnd && pc.tableStart) {
      return [];
    }
  }
  return table;
}

