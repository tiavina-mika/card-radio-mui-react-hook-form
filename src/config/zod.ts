import { Primitive, z, ZodLiteral } from "zod";

type MappedZodLiterals<T extends readonly Primitive[]> = {
  -readonly [K in keyof T]: ZodLiteral<T[K]>;
};

export const createManyUnion = <
  A extends Readonly<[Primitive, Primitive, ...Primitive[]]>
>(
  literals: A
) => {
  return z.union(
    literals.map((value) => z.literal(value)) as MappedZodLiterals<A>
  );
};
