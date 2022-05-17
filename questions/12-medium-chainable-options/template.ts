type Chainable<T extends {} = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<T & {
    [key in K]: V
  }>
  get(): T
}
