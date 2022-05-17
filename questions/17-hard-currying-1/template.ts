type ArrayFirst<T extends any[]> = T extends [infer F, ...any[]] ? F : never
type ArrayShift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never
type GetParams<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type GetReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type MakeConstructor<T extends any[], R> = ArrayFirst<T> extends never ? R : (first: ArrayFirst<T>) => MakeConstructor<ArrayShift<T>, R>
declare function Currying<T extends (...args: any[]) => true>(fn: T): MakeConstructor<GetParams<T>, GetReturn<T>>
