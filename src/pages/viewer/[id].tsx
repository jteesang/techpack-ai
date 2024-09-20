import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ChevronDown, Download, Edit2 } from 'lucide-react'
import { line, text, image, multiVariableText } from '@pdfme/schemas';
import { Template, BLANK_PDF } from '@pdfme/common';
import { coverTemplateData } from '@/app/assets/cover-template-data';
import { generate } from '@pdfme/generator';
import { coverTemplateValues, FormValues } from '@/app/types';
import { COVER_GARMENT_LINK, COVER_IMAGE, COVER_VALUE_NAME, COVER_VALUE_SEASON, COVER_VALUE_STYLE } from "@/constants/cover";
import { Viewer } from '@pdfme/ui';


export default function TechpackViewer() {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [techpackId, setTechpackId] = useState<string>(router.query.id as string);
    const [pdf, setPdf] = useState<Blob | null>(null);
    const [inputs, setInputs] = useState<coverTemplateValues[]>([{
            "cover-garment-link": { link: "" },
            "cover-value-style": { style: "" },
            "cover-value-name": { name: "" },
            "cover-value-season": { season: "" },
            "cover-value-vendor": { vendor: "" },
            "cover-value-coo": { coo: "" },
            "cover-value-createdby": { createdBy: "" },
            "cover-value-date-2" : { date2: "" },
            "cover-value-labdips": { labdips: "" },
            "cover-value-fabrics": { fabrics: "" },
            "cover-value-prototypes": { prototypes: "" },
            "cover-value-trims": { trims: "" },
            "cover-value-salessamples": { salessamples: "" },
            "cover-value-bulkdelivery": { bulkdelivery: "" },
            "cover-value-date": { date: "" },
            "cover-image": { image: "" }
        }]
    );

    // fancy template
    const template: Template = {
        basePdf: { 
            "width": 210, "height": 297, "padding": [0, 0, 0, 0]
        },
        schemas: [
            {
                "cover-border": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 19.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-1": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 31.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-2": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 36.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-3": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 41.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-4": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 46.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-5": {
                    "type": "line",
                    "position": {
                        "x": 14.47,
                        "y": 51.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-6": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 57.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-7": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 63.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-8": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 69.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-table-9": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 75.53
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-vertical-1": {
                    "type": "line",
                    "position": {
                        "x": 19,
                        "y": 47.6
                    },
                    "width": 56,
                    "height": 0.2,
                    "rotate": 90,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-vertical-2": {
                    "type": "line",
                    "position": {
                        "x": 76.5,
                        "y": 47.6
                    },
                    "width": 56,
                    "height": 0.2,
                    "rotate": 90,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-vertical-3": {
                    "type": "line",
                    "position": {
                        "x": 118,
                        "y": 56
                    },
                    "width": 39,
                    "height": 0.2,
                    "rotate": 90,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-vertical-4": {
                    "type": "line",
                    "position": {
                        "x": 148,
                        "y": 56
                    },
                    "width": 39,
                    "height": 0.2,
                    "rotate": 90,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-header-sew": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 19.52
                    },
                    "required": false,
                    "content": "SEW",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-garment-link": {
                    "type": "multiVariableText",
                    "content": "{\"garment-link\":\"GARMENT-LINK\"}",
                    "position": {
                        "x": 14,
                        "y": 25.52
                    },
                    "width": 32.81,
                    "height": 5.72,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{link}",
                    "variables": [
                        "link"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-cover": {
                    "type": "text",
                    "position": {
                        "x": 168.5,
                        "y": 19.73
                    },
                    "required": false,
                    "content": "COVER",
                    "width": 25.42,
                    "height": 6.29,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "top",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "fontName": "NotoSansJP-Regular",
                    "readOnly": true
                },
                "cover-header-calendar": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 31.78
                    },
                    "required": false,
                    "content": "CALENDAR",
                    "width": 32,
                    "height": 4.93,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": true,
                    "readOnly": true,
                    "text": "CALENDAR",
              
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-revisions-table-1": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 250
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-2": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 262
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-3": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 268
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-4": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 274
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-5": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 280
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-6": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 286
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-revisions-table-7": {
                    "type": "line",
                    "position": {
                        "x": 14,
                        "y": 292
                    },
                    "width": 180,
                    "height": 0.2,
                    "rotate": 0,
                    "opacity": 1,
                    "readOnly": true,
                    "color": "#000000",
                    "required": false
                },
                "cover-header-revisions": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 250
                    },
                    "required": false,
                    "content": "REVISIONS",
                    "width": 33.59,
                    "height": 11.56,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 18,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-image": {
                    "type": "image",
                    "content": "data",
                    "position": {
                        "x": 14,
                        "y": 82.15
                    },
                    "width": 180,
                    "height": 160.12,
                    "rotate": 0,
                    "opacity": 1,
                    "required": false,
                    "readOnly": false
                },
                "cover-header-style": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 31.46
                    },
                    "required": false,
                    "content": "STYLE #",
                    "width": 32.56,
                    "height": 4.98,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-date": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 262.17
                    },
                    "required": false,
                    "content": "DATE",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "fontName": "NotoSansJP-Regular",
                    "readOnly": true
                },
                "cover-value-style": {
                    "type": "multiVariableText",
                    "content": "{\"style\":\"STYLE\"}",
                    "position": {
                        "x": 47.3,
                        "y": 31.82
                    },
                    "width": 56.89,
                    "height": 4.67,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{style}",
                    "variables": [
                        "style"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 47.3,
                        "y": 36.79
                    },
                    "width": 56.89,
                    "height": 4.94,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-season": {
                    "type": "multiVariableText",
                    "content": "{\"season\":\"SEASON\"}",
                    "position": {
                        "x": 47.3,
                        "y": 41.76
                    },
                    "width": 56.89,
                    "height": 4.94,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{season}",
                    "variables": [
                        "season"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-vendor": {
                    "type": "multiVariableText",
                    "content": "{\"vendor\":\"VENDOR\"}",
                    "position": {
                        "x": 47.3,
                        "y": 46.74
                    },
                    "width": 56.89,
                    "height": 4.94,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{vendor}",
                    "variables": [
                        "vendor"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-coo": {
                    "type": "multiVariableText",
                    "content": "{\"coo\":\"COO\"}",
                    "position": {
                        "x": 47.3,
                        "y": 51.98
                    },
                    "width": 56.89,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{coo}",
                    "variables": [
                        "coo"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-createdby": {
                    "type": "multiVariableText",
                    "content": "{\"createdby\":\"CREATEDBY\"}",
                    "position": {
                        "x": 47.3,
                        "y": 64.09
                    },
                    "width": 56.89,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{createdby}",
                    "variables": [
                        "createdby"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-date-2": {
                    "type": "multiVariableText",
                    "content": "{\"date\":\"DATE\"}",
                    "position": {
                        "x": 47.3,
                        "y": 70.13
                    },
                    "width": 56.89,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{date}",
                    "variables": [
                        "date"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-labdips": {
                    "type": "multiVariableText",
                    "content": "{\"labdips\":\"LABDIPS\"}",
                    "position": {
                        "x": 137.9,
                        "y": 41.72
                    },
                    "width": 29.35,
                    "height": 4.67,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{labdips}",
                    "variables": [
                        "labdips"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-fabrics": {
                    "type": "multiVariableText",
                    "content": "{\"fabrics\":\"FABRICS\"}",
                    "position": {
                        "x": 137.9,
                        "y": 46.69
                    },
                    "width": 29.35,
                    "height": 4.94,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{fabrics}",
                    "variables": [
                        "fabrics"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-prototypes": {
                    "type": "multiVariableText",
                    "content": "{\"prototypes\":\"PROTOTYPES\"}",
                    "position": {
                        "x": 137.9,
                        "y": 51.92
                    },
                    "width": 29.35,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{prototypes}",
                    "variables": [
                        "prototypes"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-trims": {
                    "type": "multiVariableText",
                    "content": "{\"trims\":\"TRIMS\"}",
                    "position": {
                        "x": 137.9,
                        "y": 57.95
                    },
                    "width": 29.35,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{trims}",
                    "variables": [
                        "trims"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-salessamples": {
                    "type": "multiVariableText",
                    "content": "{\"salessamples\":\"SALESSAMPLES\"}",
                    "position": {
                        "x": 137.9,
                        "y": 63.99
                    },
                    "width": 29.35,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{salessamples}",
                    "variables": [
                        "salessamples"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-bulkdelivery": {
                    "type": "multiVariableText",
                    "content": "{\"bulkdelivery\":\"BULKDELIVERY\"}",
                    "position": {
                        "x": 137.9,
                        "y": 69.75
                    },
                    "width": 29.35,
                    "height": 5.73,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{bulkdelivery}",
                    "variables": [
                        "bulkdelivery"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-2": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 41.86
                    },
                    "width": 26.45,
                    "height": 4.67,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-3": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 46.84
                    },
                    "width": 26.45,
                    "height": 4.94,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-4": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 51.82
                    },
                    "width": 26.45,
                    "height": 5.73,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-5": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 57.84
                    },
                    "width": 26.45,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-6": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 63.88
                    },
                    "width": 26.45,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-value-name-7": {
                    "type": "multiVariableText",
                    "content": "{\"name\":\"NAME\"}",
                    "position": {
                        "x": 167.71,
                        "y": 69.91
                    },
                    "width": 26.45,
                    "height": 5.47,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 8,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": false,
                    "text": "{name}",
                    "variables": [
                        "name"
                    ],
                    "required": false,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-name": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 36.72
                    },
                    "required": false,
                    "content": "NAME",
                    "width": 32.56,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-season": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 41.72
                    },
                    "required": false,
                    "content": "SEASON",
                    "width": 32.56,
                    "height": 4.98,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-vendor": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 46.72
                    },
                    "required": false,
                    "content": "VENDOR",
                    "width": 32.56,
                    "height": 4.98,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-coo": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 51.93
                    },
                    "required": false,
                    "content": "COO",
                    "width": 32.56,
                    "height": 5.5,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-createdby": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 63.78
                    },
                    "required": false,
                    "content": "CREATED BY",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-date-2": {
                    "type": "text",
                    "position": {
                        "x": 14,
                        "y": 69.82
                    },
                    "required": false,
                    "content": "DATE",
                    "width": 32.3,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-name-2": {
                    "type": "text",
                    "position": {
                        "x": 59,
                        "y": 262.17
                    },
                    "required": false,
                    "content": "NAME",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "fontName": "NotoSansJP-Regular",
                    "readOnly": true
                },
                "cover-header-tab": {
                    "type": "text",
                    "position": {
                        "x": 104,
                        "y": 262.17
                    },
                    "required": false,
                    "content": "TAB",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "fontName": "NotoSansJP-Regular",
                    "readOnly": true
                },
                "cover-header-description": {
                    "type": "text",
                    "position": {
                        "x": 149,
                        "y": 262.17
                    },
                    "required": false,
                    "content": "DESCRIPTION",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 13,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "fontName": "NotoSansJP-Regular",
                    "readOnly": true
                },
                "cover-header-item": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 36.93
                    },
                    "required": false,
                    "content": "ITEM",
                    "width": 32.56,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": true,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-labdips": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 41.9
                    },
                    "required": false,
                    "content": "Lab Dips",
                    "width": 32.56,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-fabrics": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 46.87
                    },
                    "required": false,
                    "content": "Fabrics",
                    "width": 32.56,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-prototypes": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 51.84
                    },
                    "required": false,
                    "content": "Prototypes",
                    "width": 32.56,
                    "height": 5.5,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-trims": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 57.61
                    },
                    "required": false,
                    "content": "Trims",
                    "width": 32.56,
                    "height": 5.76,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-salessamples": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 63.64
                    },
                    "required": false,
                    "content": "Sales Simples",
                    "width": 32.56,
                    "height": 5.77,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-bulkdelivery": {
                    "type": "text",
                    "position": {
                        "x": 104.91,
                        "y": 69.94
                    },
                    "required": false,
                    "content": "Bulk Delivery Lead",
                    "width": 32.56,
                    "height": 5.5,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 10,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": false,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-inhouse": {
                    "type": "text",
                    "position": {
                        "x": 137.9,
                        "y": 36.61
                    },
                    "required": false,
                    "content": "IN-HOUSE",
                    "width": 29.38,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": true,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                },
                "cover-header-attention": {
                    "type": "text",
                    "position": {
                        "x": 167.71,
                        "y": 36.82
                    },
                    "required": false,
                    "content": "Attention",
                    "width": 26.45,
                    "height": 4.71,
                    "rotate": 0,
                    "alignment": "left",
                    "verticalAlignment": "middle",
                    "fontSize": 11,
                    "lineHeight": 1,
                    "characterSpacing": 0,
                    "fontColor": "#000000",
                    "backgroundColor": "",
                    "opacity": 1,
                    "strikethrough": false,
                    "underline": true,
                    "readOnly": true,
                    "fontName": "NotoSansJP-Regular"
                }
            }
        ]
    };

    // test template
    const testTemplate: Template = {
        basePdf: BLANK_PDF,
        schemas: [
          {
            a: {
              type: 'text',
              position: { x: 0, y: 0 },
              width: 10,
              height: 10,
            },
            b: {
              type: 'text',
              position: { x: 10, y: 10 },
              width: 10,
              height: 10,
            },
            c: {
              type: 'text',
              position: { x: 20, y: 20 },
              width: 10,
              height: 10,
            },
          },
        ],
      };
    const testInputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

    const handleOpenPDF = async () => {

        // set pdf data
        // const inputs = [coverTemplateData]
        const getData = await populatePDF();
        const getImage = await getImageUrl();
        const inputs = [mapDataToPDF(getData, getImage)]
        // setInputs([mapDataToPDF(getData, getImage)])

        await generate({ 
            template, 
            inputs,
            plugins: { line, text, image, multiVariableText },
        }).then((pdf) => {
        
        const newBlob = new Blob([pdf.buffer], { type: 'application/pdf' });
          window.open(URL.createObjectURL(newBlob));
          setPdf(newBlob);
        
        });

        if (pdf) {
            const url = URL.createObjectURL(pdf);
            window.open(url, '_blank');
            // Clean up the URL object after opening
            URL.revokeObjectURL(url);
        }
    };

    const handleEditInputForm = () => {
        router.push(`/inputform/${techpackId}`)
    }

    const populatePDF = async () => {
        try {
            const response = await fetch(`/api/inputform/${String(techpackId)}`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            console.log(`${JSON.stringify(result)}`)
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getImageUrl = async () => {
        try {
            const response = await fetch(`/api/upload/${String(techpackId)}`, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            console.log(`${JSON.stringify(result)}`)
            return result.image_path;
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const getInputs = async () => {
        const getData = await populatePDF();
        const getImage = await getImageUrl();
        const inputs = mapDataToPDF(getData, getImage);
        setInputs([inputs]);
    }

    const mapDataToPDF = (data: FormValues, image_path: string) => {
        return {
            "cover-garment-link": { link: "" },
            "cover-value-style": { style: data.style_id },
            "cover-value-name": { name: data.style_name },
            "cover-value-season": { season: "" },
            "cover-value-vendor": { vendor: "" },
            "cover-value-coo": { coo: "" },
            "cover-value-createdby": { createdBy: "" },
            "cover-value-date-2" : { date2: "" },
            "cover-value-labdips": { labdips: "" },
            "cover-value-fabrics": { fabrics: data.fabric },
            "cover-value-prototypes": { prototypes: "" },
            "cover-value-trims": { trims: "" },
            "cover-value-salessamples": { salessamples: "" },
            "cover-value-bulkdelivery": { bulkdelivery: "" },
            "cover-value-date": { date: "" },
            // "cover-image": { image: "" }
        }
    }
    
    useEffect(() => {
        // If techpackId is not provided, set it from router.query
        if (!techpackId) {
            const queryId = router.query.id as string | undefined;
            console.log(`TechpackPage: ${queryId}`);
            if (queryId) {
                setTechpackId(queryId);
            }
        }
        if (containerRef.current) {
            const viewer = new Viewer({
                domContainer: containerRef.current,
                template,
                inputs
            });
            viewer['render']();
        }
    }, [techpackId, router.query.id, template]);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=32&width=32" alt="techpack.ai" width={32} height={32} className="text-blue-600" />
          <span className="ml-2 text-xl font-extrabold text-black">techpack.ai</span>
        </div>
        <button onClick={() => router.push(`/path`)} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
          Create a New Techpack
          <span className="ml-2 bg-white rounded-full p-1">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </span>
        </button>
        <div className="flex items-center">
          <div className="flex flex-col items-end mr-2">
            <span className="text-sm font-bold">Wyatt Sommer</span>
            <span className="text-xs text-gray-500">humanhoodWORLD</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/placeholder.svg?height=40&width=40" alt="Wyatt Sommer" width={40} height={40} />
          </div>
          <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Techpack Created, check it out!</h1>
            <div className="flex space-x-4">
              <button onClick={handleOpenPDF} className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Export
              </button>
              <button onClick={handleEditInputForm} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md flex items-center">
                <Edit2 className="mr-2 h-5 w-5" />
                Edit Tech pack
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Tech pack</h2>
            <p className="text-gray-600 mb-6">#Sew Heidi</p>
            {/* The Designer will be rendered inside this div */}
            <div
                ref={containerRef}
                style={{ width: '100%', height: '100vh' }} // Adjust styles as needed
                >
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-t from-[#6BFFF2] via-[#66F9F3] to-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <Image src="/placeholder.svg?height=48&width=48" alt="techpack.ai" width={48} height={48} className="mb-4" />
              <div className="flex space-x-4">
                {['linkedin', 'facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Demo video</h3>
              <h3 className="font-semibold mb-4">Features</h3>
              <h3 className="font-semibold mb-4">Pricing</h3>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Log In</h3>
              <h3 className="font-semibold mb-4">Sign UP</h3>
              <h3 className="font-semibold mb-4">Help</h3>
            </div>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="flex-grow px-4 py-2 rounded-l-full bg-gradient-to-r from-blue-500 to-blue-400 text-white placeholder-white"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Terms of service</a>
                {' · '}
                <a href="#" className="hover:text-gray-900">Privacy policy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-600">
            ©2024 techpack.ai LLC
          </div>
        </div>
      </footer>
    </div>
  )
}