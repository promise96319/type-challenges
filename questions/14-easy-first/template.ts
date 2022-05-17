type First<T extends any[]> = T extends [infer First, ...any[]] ? First : never
