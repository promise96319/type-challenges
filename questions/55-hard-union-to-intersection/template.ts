// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
// type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
//   ? U
//   : never;
// type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
// type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
// 逆变与协变
type UnionToIntersection<U> = (U extends any ? (args: U) => any : never) extends (args: infer I) => any ? I : never
