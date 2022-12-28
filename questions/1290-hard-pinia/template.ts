type R<T> = T extends (...args: any[]) => infer R ? R: never

type Getter<T> = {
  readonly [K in keyof T]: R<T[K]>
}

declare function defineStore<S, G, A>(store: {
  id: string
  state: (this: void) => S
  getters?: G & ThisType<S & Getter<G>>
  actions?: A & ThisType<S & Getter<G> & A>
}): S & Getter<G> & A
