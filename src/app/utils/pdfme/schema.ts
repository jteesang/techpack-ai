//
import { z } from "zod";
import { coverPageTemplate } from "./template";

// Schemas
// TODO delete later
export const testInputSchema = z.object({
  titleA: z.string(),
  titleB: z.string(),
  titleC: z.string(),
  style: z.string(),
  image: z.string()
})

// TODO delete later
export const coverPageSchema1 = z.object({
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

export const coverPageSchema = z.object({
  // Company Header and Value
  companyName: z.string(),
  companyValue: z.string(),
  companyLine: z.string(),

  // Document Type Header and Value
  coverHeader: z.string(),
  coverValue: z.string(),

  // Style Header and Value
  styleHeader: z.string(),
  styleValue: z.string(),

  // Name Header and Value
  nameHeader: z.string(),
  nameValue: z.string(),

  // Season Header and Value
  seasonHeader: z.string(),
  seasonValue: z.string(),

  // Vendor Header and Value
  vendorHeader: z.string(),
  vendorValue: z.string(),

  // Created By Header and Value
  createdByHeader: z.string(),
  createdByValue: z.string(),

  // Date Sent Header and Value
  dateSentHeader: z.string(),
  dateSentValue: z.string(),

  // Calendar Section
  calendarHeader: z.string(),
  calendarValue: z.string(),

  // Design Images
  designImage1: z.string(),
  designImage2: z.string(),

  // Revisions Section
  revisionsHeader: z.string(),
  revisionsValue: z.string(),

  // Footer
  pageNumber: z.string()
})

// Export Types
export type TestInputType = z.infer<
  typeof testInputSchema
>;

export type CoverPageType = z.infer<
  typeof coverPageSchema
>

export type CoverPageType1 = z.infer<
  typeof coverPageSchema1
>