// https://github.com/type-challenges/type-challenges/issues/8808
// is object but not function
type Enumerable<T> = T extends object
  ? T extends Function
    ? false
    : true
  : false

type DeepReadonly<T> = {
  readonly [P in keyof T]: Enumerable<T[P]> extends true ? DeepReadonly<T[P]> : T[P]
}
