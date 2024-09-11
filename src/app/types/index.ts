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