type Includes<T extends readonly any[], U> =
  T extends [infer F, ...infer R]
    ? U extends F
      ? F extends U
        ? true
        // : Includes<R, U>
        : false
      : Includes<R, U>
    : false

type flag = boolean extends false ? true: false
type ccc = Includes<[1], 1 | 2>
