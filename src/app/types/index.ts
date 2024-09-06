export interface FormValues {
    description: string;
    brandName: string;
    styleId: string;
    styleName: string;
    fabric: string;
    sizing: string;
    colorStyle: string;
    additionalDetails: string;
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