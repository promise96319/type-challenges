// list types of index type parameters
type IndexTypes = [string, number, symbol]
// check if a type is a possible index type
type IsIndexType<T, U=IndexTypes> = U extends [infer Start, ...infer End] ? Start extends T ? true : IsIndexType<T, End> : false

type RemoveIndexSignature<T> = { [key in keyof T as (IsIndexType<key> extends true ? never : key)]: T[key] }
