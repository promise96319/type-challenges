type CamelCase<S extends string> =
  S extends `${infer L}-${infer C}${infer R}`
    ? C extends Capitalize<C>
      ? `${L}-${CamelCase<`${C}${R}`>}`
      : `${L}${Capitalize<C>}${CamelCase<R>}`
    : S
