import { z } from "zod";


export const testInputSchema = z.object({
  titleA: z.string(),
  titleB: z.string(),
  titleC: z.string(),
  style: z.string(),
  image: z.string()
})

export type TestInputType = z.infer<
  typeof testInputSchema
>;
