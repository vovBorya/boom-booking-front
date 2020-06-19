const compose = (...funcs: any) => (comp: any) => (
  funcs.reduceRight(
    (wrapped: any, f: any) => f(wrapped), comp
  )
)

export {compose};