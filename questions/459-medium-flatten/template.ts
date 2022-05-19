type Flatten<A extends any[], T extends any[] = []> = A extends [infer F, ...infer R]
  ? F extends any[]
    ? Flatten<R, Flatten<F, T>>
    : [...T, F, ...Flatten<R>]
  : T

  type y = Flatten<[1, 2, [3, 4], [[[5]]]]>
