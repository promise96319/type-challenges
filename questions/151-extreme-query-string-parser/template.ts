type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type ToObject<S extends string> =
  S extends `${infer Key}=${infer Value}`
    ? { [F in Key]: Value }
    : { [F in S]: true }

type MergeObject<O extends Record<string, any>, P extends Record<string, any>> = {
  [K in keyof O | keyof P]:
  K extends keyof O
    ? K extends keyof P
      ? P[K] extends [...infer I]
        ? [...I, O[K]]
        : MyEqual<P[K], O[K]> extends true
          ? P[K]
          : [P[K], O[K]]
      : O[K]
    : K extends keyof P
      ? P[K]
      : never
}

type ParseQueryString<S extends string, Res extends Record<string, any> = {}> =
  S extends `${infer F}&${infer R}`
    ? ParseQueryString<R, MergeObject<ToObject<F>, Res>>
    : S extends ''
      ? Res
      : MergeObject<ToObject<S>, Res>
