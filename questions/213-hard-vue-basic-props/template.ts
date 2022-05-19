type ConvertInstanceType<T> = T extends new (args: any) => any
  ? T extends typeof String | typeof Boolean | typeof Number
    ? ReturnType<T>
    : InstanceType<T>
  : T

type ConvertArrayInstanceType<T, U = T> =
 T extends U
   ? ConvertInstanceType<T>
   : never

type PropsType<Props> = {
  [P in keyof Props]: {} extends Props[P]
    ? any
    : Props[P] extends { type: infer Type }
      ? Type extends (infer R)[]
        ? ConvertArrayInstanceType<R>
        : ConvertInstanceType<Type>
      : ConvertInstanceType<Props[P]>
}

type ComputedValueType<T> = {
  [K in keyof T]: T[K] extends (...args: any) => any ? ReturnType<T[K]> : never;
}

declare function VueBasicProps<Props, Data, Computed, Methods>(options: {
  props: Props
  data: (this: PropsType<Props>) => Data
  computed: Computed & ThisType<Data & PropsType<Props> & Computed>
  methods: Methods & ThisType<Data & PropsType<Props> & ComputedValueType<Computed> & Methods>
}): Props & Data & Computed & Methods
