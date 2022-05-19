import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyLengthOfString<''>, 0>>,
  Expect<Equal<MyLengthOfString<'kumiko'>, 6>>,
  Expect<Equal<MyLengthOfString<'reina'>, 5>>,
  Expect<Equal<MyLengthOfString<'Sound! Euphonium'>, 16>>,
]
