type TempExclude<T, K> = T extends K ? never : T

type MyOmit<T, K extends keyof T> = {
  [P in TempExclude<keyof T, K>]: T[P]
}
