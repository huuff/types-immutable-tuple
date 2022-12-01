import tuple, { Tuple2 } from "immutable-tuple";

test("structural equality", () => {
  const t1: Tuple2<number, number> = tuple(1, 2);
  const t2: Tuple2<number, number> = tuple(1, 2);

  expect(t1 === t2).toBe(true);
});

test("structural inequality", () => {
  const t1: Tuple2<number, string> = tuple(1, "test");
  const t2: Tuple2<number, number> = tuple(1, 2);

  expect(t1 === t2).toBe(false);
});
