const symbol = Symbol()
type DeepObjectToUniq<O extends object, Path extends any[] = [O]> = {
  [K in keyof O]: O[K] extends object ? DeepObjectToUniq<O[K], [...Path, K]> : O[K]
} & { [symbol]?: Path }
