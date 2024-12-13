
// Deconstructed from supabase session user
export interface UserDetails {
    id: string;
    name?: string;
    email: string;
    avatar_url: string;
}

export interface ProfileProps {
    id: string;
    email: string;
    name?: string;
    subscription_plan?: string;
}

export interface SidebarProps {
    userId: string;
}

export interface FormValues {
    description: string;
    brand_name: string;
    style_id: string;
    style_name: string;
    fabric: string;
    sizing_preference: string;
    color_style: string;
    colorways?: string;
    additional_details?: string;
}

export interface UploadResponse {
    description: string;
    silhouette: string;
    neckline: string;
    color: string;
    fabric: string;
    trim: string;
    decoration: string;
    fit: string;
    imageUrl: string;
}

export interface Techpack {
    id: string;
    // name: string;
    user_id: string;
}

// export interface TechpackVersion {
//     name: string;
//     user_id: string;
//     techpack_id: string;
//     status?: string;
//     version: number;
//     content?: JSON;
//   }

// IMPORTED FROM BACKEND
  import { z } from "zod";

  // ---------------------------------------- Zod schemas ----------------------------------------
  // Image Description Schema
  export const ImageDescription = z.object({
    description: z.string(),
    silhouette: z.string(),
    neckline: z.string(),
    color: z.string(),
    fabric: z.string(),
    trim: z.string(),
    decoration: z.string(),
    fit: z.string(),
  });
  
  // Techpack Pages Components Schema
  const CoverPageSchema = z.object({
    styleName: z.string(),
    styleNumber: z.string(),
    season: z.string(),
    designer: z.string() 
  });
  
  const InspirationPageSchema = z.object({
    inspirationImages: z.array(z.string()),
    designElements: z.array(z.string())
  })
  
  const CalloutsPageSchema = z.object({
    designDetails: z.array(z.string()),
    constructionTypes: z.array(z.string())
  });
  
  const PrintFabricsPageSchema = z.object({
    fabricsDetails: z.array(z.string()),
    fabricPlacement: z.array(z.string()),
  });
  
  const Colors = z.object({
    colorName: z.string(),
    colorPantone: z.string(),
    colorSwatch: z.string()
  });
  
  const ColorwayPageSchema = z.object({
    colors: z.array(Colors),
  });
  
  const Materials = z.object({
    materialName: z.string(),
    materialDescription: z.string(),
    materialSupplier: z.string(),
    materialColor: z.string(),
    materialWidth: z.string()
  });
  
  const BillOfMaterialsPageSchema = z.object({
    materials: z.array(Materials)
  });
  
  const FoldPageSchema = z.object({
    foldMethods: z.array(z.string())
  });
  
  const LabelPlacementPageSchema = z.object({
    labels: z.array(z.string())
  });
  
  const Measurement = z.object({
    measurePoint: z.string(),
    initialMeasure: z.string(),
    actualMeasure: z.string(),
    notes: z.string()
  })
  
  const ProtoSpecsPageSchema = z.object({
    Measurement: z.array(Measurement)
  });
  
  const FitSpecsPageSchema = z.object({
    firstFit: z.array(z.string()),
    secondFit: z.array(z.string())
  });
  
  const FitCommentPageSchema = z.object({
    comments: z.array(z.string())
  });
  
  const specObj = z.object({
    measurementSize: z.string(),
    measurement: z.string()
  })
  
  const SpecName = z.object({
    specName: z.string(),
    specObj: z.array(specObj)
  });
  
  const GradedSpecPageSchema = z.object({
    gradedSpecs: z.array(SpecName)
  });
  
  const FoldingInstructionsPageSchema = z.object({
    instructions: z.array(z.string())
  });
  
  const Checkpoint = z.object({
    checkpoint: z.string(),
    description: z.string(),
    status: z.string()
  })
  
  const QualityControlPageSchema = z.object({
    checkpoints: z.array(Checkpoint)
  })
  
  // Techpack Pages Schema
  export const Techpack = z.object({
    coverPage: CoverPageSchema,
    inspirationPage: InspirationPageSchema,
    calloutsPage: CalloutsPageSchema,
    printFabricsPage: PrintFabricsPageSchema,
    colorwayPage: ColorwayPageSchema,
    billOfMaterialsPage: BillOfMaterialsPageSchema,
    foldPage: FoldPageSchema,
    labelPlacementPage: LabelPlacementPageSchema,
    protoSpecsPage: ProtoSpecsPageSchema,
    fitSpecsPage: FitSpecsPageSchema,
    fitCommentPage: FitCommentPageSchema,
    gradedSpecPage: GradedSpecPageSchema,
    foldingInstructionsPage: FoldingInstructionsPageSchema,
    qualityControlPage: QualityControlPageSchema
  });
  
  // Derive TypeScript types from Zod schemas
  type CoverPage = z.infer<typeof CoverPageSchema>;
  type InspirationPage = z.infer<typeof InspirationPageSchema>;
  type CalloutsPage = z.infer<typeof CalloutsPageSchema>;
  type PrintFabricsPage = z.infer<typeof PrintFabricsPageSchema>;
  type ColorwayPage = z.infer<typeof ColorwayPageSchema>;
  type BillOfMaterialsPage = z.infer<typeof BillOfMaterialsPageSchema>;
  type FoldPage = z.infer<typeof FoldPageSchema>;
  type LabelPlacementPage = z.infer<typeof LabelPlacementPageSchema>;
  type protoSpecsPage = z.infer<typeof ProtoSpecsPageSchema>;
  type fitSpecsPage = z.infer<typeof FitSpecsPageSchema>;
  type fitCommentPage = z.infer<typeof FitCommentPageSchema>;
  type gradedSpecPage = z.infer<typeof GradedSpecPageSchema>;
  type foldingInstructionsPage = z.infer<typeof FoldingInstructionsPageSchema>;
  type qualityControlPage = z.infer<typeof QualityControlPageSchema>;
  
  // ---------------------------------------- Database schemas ----------------------------------------
  export interface TechpackPages {
    coverPage: CoverPage
    inspirationPage: InspirationPage
    calloutsPage: CalloutsPage
    printFabricsPage: PrintFabricsPage
    colorwayPage: ColorwayPage
    billOfMaterialsPage: BillOfMaterialsPage
    foldPage: FoldPage
    labelPlacementPage: LabelPlacementPage
    protoSpecsPage: protoSpecsPage
    fitSpecsPage: fitSpecsPage
    fitCommentPage: fitCommentPage
    gradedSpecPage: gradedSpecPage
    foldingInstructionsPage: foldingInstructionsPage
    qualityControlPage: qualityControlPage
  }
  
  export interface UploadInfo {
    description: string;
    silhouette: string;
    neckline: string;
    color: string;
    fabric: string;
    trim: string;
    decoration: string;
    fit: string;
    image_path: string;
  }
  
  export interface TechpackForm {
    id: string;
    description: string;
    brand_name: string;
    style_id: string;
    style_name: string;
    fabric: string;
    sizing_preference: string;
    color_style: string;
    additional_details?: string;
  }
  
  export interface UserDetails {
    id: string;
    email: string;
    name?: string;
    subscription_plan?: string;
  }
  
  export interface TechpackVersion {
    name: string;
    user_id: string;
    techpack_id: string;
    status?: string;
    version: number;
    content?: JSON;
  }

export interface coverTemplateValues {
    "cover-garment-link": { link: string },
    "cover-value-style": { style: string },
    "cover-value-name": { name: string },
    "cover-value-season": { season: string },
    "cover-value-vendor": { vendor: string },
    "cover-value-coo": { coo: string },
    "cover-value-createdby": { createdBy: string },
    "cover-value-date-2": { date2: string },
    "cover-value-labdips": { labdips: string },
    "cover-value-fabrics": { fabrics: string },
    "cover-value-prototypes": { prototypes: string },
    "cover-value-trims": { trims: string },
    "cover-value-salessamples": { salessamples: string },
    "cover-value-bulkdelivery": { bulkdelivery: string },
    "cover-value-date": { date: string },
    "cover-image": { image: string }
}

