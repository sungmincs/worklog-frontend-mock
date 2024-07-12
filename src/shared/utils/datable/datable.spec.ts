import { describe, expect, it } from "vitest";
import { Datable } from "./datable";

const MOCK = [
  {
    created_date: "2024-05-15T14:27:25.039000"
  },
  {
    created_date: "2024-05-15T14:27:27.604000"
  },
  {
    created_date: "2024-05-18T09:44:12.706000"
  },
  {
    created_date: "2024-05-18T09:44:17.102000"
  }
];

describe("TodoGroupBy", () => {
  const dateController = new Datable(MOCK);

  it("groupByCreatedAt: 생성 날짜에 따라 객체가 구성되어야한다", () => {
    expect(dateController.groupByCreatedAt()).toEqual([
      {
        "2024-05-15": [
          {
            created_date: "2024-05-15T14:27:25.039000"
          },
          {
            created_date: "2024-05-15T14:27:27.604000"
          }
        ]
      },
      {
        "2024-05-18": [
          {
            created_date: "2024-05-18T09:44:12.706000"
          },
          {
            created_date: "2024-05-18T09:44:17.102000"
          }
        ]
      }
    ]);
  });

  it("sortDataByDate: 내림차순대로 정력되어야한다", () => {
    const sortedData = dateController.sortDataByDate("내림차순");
    expect(sortedData).toEqual([
      {
        created_date: "2024-05-18T09:44:17.102000"
      },
      {
        created_date: "2024-05-18T09:44:12.706000"
      },
      {
        created_date: "2024-05-15T14:27:27.604000"
      },
      {
        created_date: "2024-05-15T14:27:25.039000"
      }
    ]);
  });

  it("sortDataByDate: 내림 차순으로 정렬한 데이터가 생성 날짜에 따라 객체가 구성되어야한다", () => {
    const sortedData = dateController.sortDataByDate("내림차순");
    expect(dateController.groupByCreatedAt(sortedData)).toEqual([
      {
        "2024-05-18": [
          {
            created_date: "2024-05-18T09:44:17.102000"
          },
          {
            created_date: "2024-05-18T09:44:12.706000"
          }
        ]
      },
      {
        "2024-05-15": [
          {
            created_date: "2024-05-15T14:27:27.604000"
          },
          {
            created_date: "2024-05-15T14:27:25.039000"
          }
        ]
      }
    ]);
  });

  it("sortDataByDate: 오름차순대로 정력되어야한다", () => {
    const sortedData = dateController.sortDataByDate("오름차순");
    expect(sortedData).toEqual(MOCK);
  });

  it("sortDataByDate: 오름차순으로 정렬한 데이터가 생성 날짜에 따라 객체가 구성되어야한다", () => {
    const sortedData = dateController.sortDataByDate("오름차순");
    expect(dateController.groupByCreatedAt(sortedData)).toEqual([
      {
        "2024-05-15": [
          {
            created_date: "2024-05-15T14:27:25.039000"
          },
          {
            created_date: "2024-05-15T14:27:27.604000"
          }
        ]
      },
      {
        "2024-05-18": [
          {
            created_date: "2024-05-18T09:44:12.706000"
          },
          {
            created_date: "2024-05-18T09:44:17.102000"
          }
        ]
      }
    ]);
  });

  it("sortDataByDate, groupByCreatedAt: 정렬외에 데이터의 변화는 없어야한다", () => {
    const dateController = new Datable([
      ...MOCK,
      {
        created_date: "2024-05-18T09:44:18.102000",
        test: "test"
      }
    ]);

    const sortedData = dateController.sortDataByDate("오름차순");
    expect(dateController.groupByCreatedAt(sortedData)).toEqual([
      {
        "2024-05-15": [
          {
            created_date: "2024-05-15T14:27:25.039000"
          },
          {
            created_date: "2024-05-15T14:27:27.604000"
          }
        ]
      },
      {
        "2024-05-18": [
          {
            created_date: "2024-05-18T09:44:12.706000"
          },
          {
            created_date: "2024-05-18T09:44:17.102000"
          },
          {
            created_date: "2024-05-18T09:44:18.102000",
            test: "test"
          }
        ]
      }
    ]);
  });
});
