import { COVER_GARMENT_LINK, COVER_IMAGE, COVER_VALUE_NAME, COVER_VALUE_SEASON, COVER_VALUE_STYLE } from "@/constants/cover";

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

export interface coverTemplateValues {
    COVER_GARMENT_LINK: { link: string },
    COVER_VALUE_STYLE: { style: string },
    COVER_VALUE_NAME: { name: string },
    COVER_VALUE_SEASON: { season: string },
    COVER_VALUE_VENDOR: { vendor: string },
    COVER_VALUE_COO: { coo: string },
    COVER_VALUE_CREATEDBY: { createdBy: string },
    COVER_VALUE_DATE_2: { date2: string },
    COVER_VALUE_LABDIPS: { labdips: string },
    COVER_VALUE_FABRICS: { fabrics: string },
    COVER_VALUE_PROTOTYPES: { prototypes: string },
    COVER_VALUE_TRIMS: { trims: string },
    COVER_VALUE_SALESSAMPLES: { salessamples: string },
    COVER_VALUE_BULKDELIVERY: { bulkdelivery: string },
    COVER_VALUE_DATE: { date: string },
    COVER_IMAGE: { image: string }
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