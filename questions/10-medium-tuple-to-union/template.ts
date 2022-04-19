type TupleToUnion<T> = T extends (infer P)[] ? P : never
