import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyCamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<MyCamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<MyCamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<MyCamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<MyCamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<MyCamelCase<''>, ''>>,
]
