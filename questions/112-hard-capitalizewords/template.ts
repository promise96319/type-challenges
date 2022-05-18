type CapitalizeWord<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? First extends ' ' | ',' | '.'
      ? `${First}${CapitalizeWord<MyCapitalize<Rest>>}`
      : `${First}${CapitalizeWord<Rest>}`
    : S

type CapitalizeWords<S extends string> = MyCapitalize<CapitalizeWord<S>>
