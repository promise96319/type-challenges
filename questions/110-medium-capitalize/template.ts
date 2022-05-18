type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Capitalize<First>}${Rest}` : S
