type Format<T extends string> = T extends `${any}%${infer S}${infer R}` 
  ? S extends 's'
    ? (s1: string) => string
    : S extends 'd'
      ? (d1: number) => R extends string ? Format<R> : string
      : string
  : string
