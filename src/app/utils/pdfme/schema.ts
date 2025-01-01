import { z } from "zod";
import { coverPageTemplate } from "./template";


export const testInputSchema = z.object({
  titleA: z.string(),
  titleB: z.string(),
  titleC: z.string(),
  style: z.string(),
  image: z.string()
})



export const coverPageSchema = z.object({
  companyName: z.string(),
  website: z.string(),
  coverLabel: z.string(),
  styleInfo: z.string(),
  styleNumber: z.string(),
  name: z.string(),
  season: z.string(),
  vendor: z.string(),
  createdBy: z.string(),
  dateSent: z.string(),
  calendar: z.string(),
  designImage1: z.string(),
  designImage2: z.string(),
  revisionsTitle: z.string(),
  revisionTable: z.string(),
  pageNumber: z.string()
})

// Export Types
export type TestInputType = z.infer<
  typeof testInputSchema
>;

export type CoverPageType = z.infer<
  typeof coverPageSchema
>