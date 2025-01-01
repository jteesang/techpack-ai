import { testInputSchema, TestInputType } from "./schema";
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
