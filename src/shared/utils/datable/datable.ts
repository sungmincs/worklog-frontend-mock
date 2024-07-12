import dayjs from "dayjs";

interface GroupedByDate<T> {
  [key: string]: T[];
}

export interface DatableItem {
  created_date: string;
}

export class Datable<T extends DatableItem> {
  item: T[];
  constructor(item: T[]) {
    this.item = item;
  }

  public groupByCreatedAt(data?: T[]): GroupedByDate<T>[] {
    const item = data ?? this.item;
    const grouped = item.reduce<GroupedByDate<T>>((acc, currTodo) => {
      const date = dayjs(currTodo.created_date).format("YYYY-MM-DD");

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(currTodo);
      return acc;
    }, {});

    return Object.keys(grouped).map((date) => ({ [date]: grouped[date] }));
  }

  public sortDataByDate(sorting: "내림차순" | "오름차순"): T[] {
    const sortedData = this.item.sort((a, b) => {
      if (sorting === "내림차순") {
        return dayjs(a.created_date).isBefore(dayjs(b.created_date)) ? 1 : -1;
      }

      return dayjs(a.created_date).isAfter(dayjs(b.created_date)) ? 1 : -1;
    });

    return sortedData;
  }
}
