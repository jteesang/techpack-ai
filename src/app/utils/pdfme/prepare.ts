import { CoverPageType, testInputSchema, TestInputType, coverPageSchema1 } from "./schema";
import { getImage } from "./template";
import { CoverPage } from "@/app/types/index";

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

export const parseCoverPageData = (data: CoverPage) => {
  return {
    companyName: "Company Name",
    companyValue: JSON.stringify({ company: "[not provided]", website: "[not provided]" }),
    companyLine: "",
    // Document Type Header and Value
    coverHeader: "Cover Page",
    coverValue: JSON.stringify({ type: "COVER", style: data.styleName || "[not provided]" }),

    // Style Header and Value
    styleHeader: "Style",
    styleValue: JSON.stringify({ style: data.styleNumber || "[not provided]" }),

    // Name Header and Value
    nameHeader: "Item Name",
    nameValue: JSON.stringify({ name: data.styleName || "[not provided]" }),

    // Season Header and Value
    seasonHeader: "Season",
    seasonValue: JSON.stringify({ season: data.season || "[not provided]" }),

    // Vendor Header and Value
    vendorHeader: "Vendor",
    vendorValue: JSON.stringify({ vendor: "[not provided]" }),

    // Created By Header and Value
    createdByHeader: "Created By",
    createdByValue: JSON.stringify({ creator: data.designer || "[not provided]" }),

    // Date Sent Header and Value
    dateSentHeader: "Date Sent",
    dateSentValue: JSON.stringify({ date: data.date ||"[not provided]" }),

    // Calendar Section
    calendarHeader: "Calendar",
    calendarValue: JSON.stringify({
      labDips: "Lab Dips:\t10-20-2016",
      fabrics: "Fabrics:\tpolyester",
      protos: "Protos:\t10-20-2016",
      trims: "Trims:\t10-20-2016",
      samples: "Sales Samples\t1-20-17",
      bulk: "Bulk Delivery Landed:\t5-15-2017",
    }),

    // Design Images
    designImage1: getImage, // Assuming `getImage` is defined elsewhere
    designImage2: getImage, // Assuming `getImage` is defined elsewhere

    // Revisions Section
    revisionsHeader: "Revisions",
    revisionsValue: JSON.stringify({
      date: "mm-dd-yyyy",
      name: "Name",
      tag: "BOM",
      description: "[not provided]",
    }),

    // Footer
    pageNumber: JSON.stringify({ page: "1" }),
  };
};

export const inputs: TestInputType = {
  titleA: "testA",
  titleB: "testB",
  titleC: "testC",
  style: JSON.stringify({ style: "TestD" }),
  image: getImage
}

// export const coverPageTestInputs1: CoverPageSchema1 = {
//   companyName: "companyA",
//   website: "https://website.dev",
//   coverLabel: "coverABC",
//   styleInfo: "styleA",
//   styleNumber: "style101",
//   name: "Heidi Leggings",
//   season: "S/S 2024",
//   vendor: "ABC",
//   createdBy: "John Smith",
//   dateSent: "11-23-2023",
//   calendar: JSON.stringify({ dates:"2024", status:"in progress"}),
//   designImage1: getImage,
//   designImage2: getImage,
//   revisionsTitle: "revision table",
//   revisionTable: JSON.stringify({ revisions: "fix leg seams" }),
//   pageNumber: "1",
// }

// 
export const coverPageTestInputs : CoverPageType = {
  companyName: "Company Name",
  companyValue: JSON.stringify({company: "[not provided]", website: "[not provided]"}),
  companyLine: "",
  // Document Type Header and Value
  coverHeader: "Cover Page",
  coverValue: JSON.stringify({ type: "COVER", style: "[not provided]"}),

  // Style Header and Value
  styleHeader: "Style",
  styleValue: JSON.stringify({style: "[not provided]"}),

  // Name Header and Value
  nameHeader: "Item Name",
  nameValue: JSON.stringify({name: "[not provided]"}),

  // Season Header and Value
  seasonHeader: "Season",
  seasonValue: JSON.stringify({season: "[not provided]"}),

  // Vendor Header and Value
  vendorHeader: "Vendor",
  vendorValue: JSON.stringify({vendor: "[not provided]"}),

  // Created By Header and Value
  createdByHeader: "Created By",
  createdByValue: JSON.stringify({creator: "[not provided]"}),

  // Date Sent Header and Value
  dateSentHeader: "Date Sent",
  dateSentValue: JSON.stringify({date: "[not provided]"}),

  // Calendar Section
  calendarHeader: "Calendar",
  calendarValue: JSON.stringify({ labDips: "Lab Dips:\t10-20-2016", fabrics: "Fabrics:\tpolyester", protos: "Protos:\t10-20-2016", trims: "Trims:\t10-20-2016", samples: "Sales Samples\t1-20-17", bulk: "Bulk Delivery Landed:\t5-15-2017"}),

  // Design Images
  designImage1: getImage,
  designImage2: getImage,

  // Revisions Section
  revisionsHeader: "Revisions",
  revisionsValue: JSON.stringify({date: "10-10-2016", name: "Heidi", tag: "BOM", description: "Legging style"}),

  // Footer
  pageNumber: JSON.stringify({page: "1"})
}