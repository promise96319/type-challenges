type IsCapitalize<W extends string> = W extends Capitalize<W> ?
  W extends '-' | '_' | '😎'
    ? false
    : true
  : false

type KebabCase<S, B extends Boolean = true> = S extends `${infer L}${infer R}`
  ? L extends Uncapitalize<L>
    ? `${L}${KebabCase<R, false>}`
    : B extends true
      ? `${Uncapitalize<L>}${KebabCase<R, false>}`
      : `-${Uncapitalize<L>}${KebabCase<R, false>}`
  : S

  type y22 = KebabCase<'foo-bar'>
