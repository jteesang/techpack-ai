import { CoverPageType, testInputSchema, TestInputType } from "./schema";
import { getImage } from "./template";

// export const prepareInputs = (

// ) => {
//   const inputs: TestInputType = {
//     a: "testA",
//     b: "testB",
//     c: "testC",
//     style: JSON.stringify({ style: "StyleD" })
//   }
//   const inputsParsed = testInputSchema.safeParse(inputs);

//   if (inputsParsed.error) {
//     console.error(inputsParsed.error.errors);
//     return [null, "Invalid data"]
//   }
//   return [inputsParsed.data, null];
// }

export const inputs: TestInputType = {
  titleA: "testA",
  titleB: "testB",
  titleC: "testC",
  style: JSON.stringify({ style: "TestD" }),
  image: getImage
}

export const coverPageTestInputs: CoverPageType = {
  companyName: "companyA",
  website: "https://website.dev",
  coverLabel: "coverABC",
  styleInfo: "styleA",
  styleNumber: "style101",
  name: "Heidi Leggings",
  season: "S/S 2024",
  vendor: "ABC",
  createdBy: "John Smith",
  dateSent: "11-23-2023",
  calendar: JSON.stringify({ dates:"2024", status:"in progress"}),
  designImage1: getImage,
  designImage2: getImage,
  revisionsTitle: "revision table",
  revisionTable: JSON.stringify({ revisions: "fix leg seams" }),
  pageNumber: "1",
}
