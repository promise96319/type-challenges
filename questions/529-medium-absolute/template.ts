type AbsoluteString<T extends string> = T extends `-${infer N}` ? N : T
type BigintToString<T extends string> = T extends `${infer L}${'_' | 'n'}${infer R}` ? BigintToString<`${L}${R}`> : T

type Absolute<T extends number | string | bigint> =
  T extends number ? AbsoluteString<`${T}`>
    : T extends string ? AbsoluteString<T>
      : BigintToString<AbsoluteString<`${T}`>>
