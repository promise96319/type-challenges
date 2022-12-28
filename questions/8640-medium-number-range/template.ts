type NumberToArray<T, A extends any[] = []> = A['length'] extends T ? A : NumberToArray<T, [...A, 1]>
type NumberAddtionOne<N> = [...NumberToArray<N>, 1]['length']
type NumberRange<L, H, Total extends any[] = []> = L extends H ? [...Total, L][number] : NumberRange<NumberAddtionOne<L>, H, [...Total, L]>
