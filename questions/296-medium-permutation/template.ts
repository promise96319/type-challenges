type Permutation<T, O = T> = [T] extends [never]
  ? []
  : T extends O
    ? [T, ...Permutation<Exclude<O, T>>]
    : never
