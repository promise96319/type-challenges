type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never
