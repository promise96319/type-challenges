type FilterOut<T extends any[], F, A extends any[] = []> = T extends [infer L, ...infer R]
  ? [L] extends [F]
    ? FilterOut<R, F, A>
    : FilterOut<R, F, [...A, L]>
  : A

  type x = FilterOut<[1, never, 'a'], never>
