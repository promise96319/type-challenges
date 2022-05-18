type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string, Result extends any[] = []> =
  S extends `${any}%${infer Symbol}${infer R}`
    ? Symbol extends keyof ControlsMap
      ? ParsePrintFormat<R, [...Result, ControlsMap[Symbol]]>
      : ParsePrintFormat<R, Result>
    : Result
