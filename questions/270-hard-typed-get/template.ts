type Get<T, K> =
  K extends `${infer L}.${infer R}`
    ? L extends keyof T
      ? Get<T[L], R>
      : never
    : K extends keyof T
      ? T[K]
      : never
