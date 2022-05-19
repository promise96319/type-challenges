enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Compare<A extends number | string, B extends number | string, Tmp extends unknown[] = []> =
  `${A}` extends `${Tmp['length']}`
    ? `${B}` extends `${Tmp['length']}`
      ? Comparison.Equal
      : Comparison.Lower
    : `${B}` extends `${Tmp['length']}`
      ? Comparison.Greater
      : Compare<A, B, [...Tmp, unknown]>

type IsPositive<N extends number> = `${N}` extends `-${any}` ? false : true
type GetPositive<N extends number> = `${N}` extends `-${infer M}` ? M : N

type Comparator<A extends number, B extends number> =
  IsPositive<A> extends true
    ? IsPositive<B> extends true
      ? Compare<A, B>
      : Comparison.Greater
    : IsPositive<B> extends true
      ? Comparison.Lower
      : Compare<GetPositive<B>, GetPositive<A>>

type a = any[]
type b = a['length']
