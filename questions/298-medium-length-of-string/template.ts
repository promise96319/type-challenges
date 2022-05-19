// type Add<A extends number, B extends number> = `${A}` extends `${(infer R)['length']}` ?

type MyLengthOfString<S extends string, Arr extends unknown[] = []> = S extends `${any}${infer R}`
  ? MyLengthOfString<R, [...Arr, unknown]>
  : Arr['length']
