type PickStringFirst<S extends string> = S extends `${infer F}${infer R}` ? F : ''
type PickStringRest<S extends string> = S extends `${infer F}${infer R}` ? R : ''
type MyUncapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uncapitalize<F>}${R}` : S

type MyCamelCase<S extends string> =
  S extends `${infer F}_${infer R}`
    ? MyUncapitalize<`${MyCapitalize<Lowercase<F>>}${MyCapitalize<MyCamelCase<R>>}`>
    : Lowercase<S>
