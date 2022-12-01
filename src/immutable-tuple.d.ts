declare module "immutable-tuple" {
  type Opaque = import("type-fest").Opaque;

  type Tuple1<T> = Opaque<[T]>;
  type Tuple2<T1, T2> = Opaque<[T1, T2]>;
  type Tuple3<T1, T2, T3> = Opaque<[T1, T2, T3]>;

  function tuple<T1>(t1: T1): Tuple1<T1>;
  function tuple<T1, T2>(t1: T1, t2: T2): Tuple2<T1, T2, T3>;
  function tuple<T1, T2, T3>(t1: T1, t2: T2, t3: T3): Tuple3<T1, T2, T3>;

  export { Tuple1, Tuple2, Tuple3 };
  export default tuple;
}
