type Head<T extends any[]> = T extends [infer F, ...any[]] ? F : never
type Rest<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never
// 需要一堆工具函数
type Slice<Arr, Start extends number, End, Index = 0, R = []> = Start < 0 ? never : any
