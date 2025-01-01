import { text, image, line, multiVariableText, barcodes, rectangle } from '@pdfme/schemas';
import { generate } from "@pdfme/generator";
import { testTemplate } from "./template";
import { inputs } from "./prepare";
import { Viewer } from '@pdfme/ui';

export const generateTestPDF = async (): Promise<Blob> => {
  // const [inputs, inputsError] = prepareInputs();

  const pdf = await generate({
    template: testTemplate,
    inputs: [inputs],
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
    template: testTemplate,
    inputs: [inputs],
    plugins: {
      text,
      image,
      multiVariableText,
    }
  });
}


