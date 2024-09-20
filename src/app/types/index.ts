
// Deconstructed from supabase session user
export interface UserDetails {
    id: string;
    name: string;
    email?: string;
    avatar_url?: string;
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

