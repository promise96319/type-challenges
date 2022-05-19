type ToNumber<S extends string, A extends unknown[] = []> = S extends `${A['length']}`
  ? A['length']
  : ToNumber<S, [...A, unknown]>

  type aaa = ToNumber<'23'>
