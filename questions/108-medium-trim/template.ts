type EmptyString = ' ' | '\n' | '\t'
type TrimStringRight<S extends string> = S extends `${infer T}${EmptyString}` ? TrimStringRight<T> : S
type TrimStringLeft<S extends string> = S extends `${EmptyString}${infer T}` ? TrimStringLeft<T> : S
type Trim<S extends string> = TrimStringRight<TrimStringLeft<S>>
