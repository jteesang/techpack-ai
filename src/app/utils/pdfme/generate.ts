import { text, image, line, multiVariableText, barcodes, rectangle } from '@pdfme/schemas';
import { generate } from "@pdfme/generator";
import { coverPageTemplate, testTemplate } from "./template";
import { coverPageTestInputs, inputs } from "./prepare";
import { Viewer } from '@pdfme/ui';

export const generateTestPDF = async (): Promise<Blob> => {
  // const [inputs, inputsError] = prepareInputs();

  const pdf = await generate({
    template: coverPageTemplate,
    inputs: [coverPageTestInputs],
    plugins: {
      text, image, line, rectangle, multiVariableText,
      qrcode: barcodes.qrcode
    },
  });
  
  const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
  const buffer = await blob.arrayBuffer();
  const name = 'techpack.pdf'
  const file = new File([buffer], name, { type: 'application/pdf'});

  return file;
};

export const generateViewPDF = async (domContainer: HTMLElement) => {
  return new Viewer({
    domContainer: domContainer,
    template: coverPageTemplate,
    inputs: [coverPageTestInputs],
    plugins: {
      text,
      image,
      multiVariableText,
    }
  });
}


