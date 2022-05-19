type MyAwaited<P> = P extends Promise<infer V> ? MyAwaited<V> : P
