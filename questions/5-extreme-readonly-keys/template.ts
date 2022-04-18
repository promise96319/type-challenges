// 判断类型相等 https://github.com/microsoft/TypeScript/issues/27024
type MyEquals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// 通过 MyEquals 判断是否是 readonly
// https://github.com/type-challenges/type-challenges/issues/6256
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as MyEquals<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: any
}
