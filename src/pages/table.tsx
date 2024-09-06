import { line, text, image, multiVariableText } from '@pdfme/schemas';
import { Designer } from '@pdfme/ui';
import { generate } from '@pdfme/generator';
import { Template, BLANK_PDF } from '@pdfme/common';
import { useState } from 'react';
import { coverTemplateData } from '@/app/assets/cover-template-data';


const Table: React.FC = () => {
    const [pdf, setPdf] = useState<Blob | null>(null);

    const handleOpenPDF = () => {
        if (pdf) {
            const url = URL.createObjectURL(pdf);
            window.open(url, '_blank');
            // Clean up the URL object after opening
            URL.revokeObjectURL(url);
        }
    };
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
                    "content": "data:image/png;base64,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",
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
    const inputs = [coverTemplateData];


generate({ 
    template, 
    inputs,
    plugins: { line, text, image, multiVariableText },
}).then((pdf) => {
  console.log(pdf);

  // Browser
  const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
  window.open(URL.createObjectURL(blob));
  setPdf(blob);

});
    return (
        <div>
            <h1>PDF</h1>
            {
                pdf instanceof Blob && (
                    <button 
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleOpenPDF}
                  >
                    Open PDF
                  </button>
                )
            }
            {/* {pdf instanceof Blob ? (
                <embed src={URL.createObjectURL(pdf)} type="application/pdf" width="100%" height="600px" />
            ) : (
                <p>No PDF available</p>
            )} */}
        </div>
    )
}
// generate({
//     template: {
//         schemas: [
//             {
//                 "mytable": {
//                     "type": "table",
//                     "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-table\"><path d=\"M12 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/></svg>",
//                     "position": {"x": 28.706846058368317,"y": 37.85750960310253},
//                     "width": 150,
//                     "height": 57.5184,
//                     "content": "[[\"Alice\",\"New York\",\"Alice is a freelance web designer and developer\"],[\"Bob\",\"Paris\",\"Bob is a freelance illustrator and graphic designer\"]]",
//                     "showHead": true,
//                     "head": ["Name","City","Description"],
//                     "headWidthPercentages": [30,30,40],
//                     "tableStyles": {"borderWidth": 0.3,"borderColor": "#000000"},
//                     "headStyles": {
//                         "fontName": "NotoSerifJP-Regular",
//                         "fontSize": 13,
//                         "characterSpacing": 0,
//                         "alignment": "left",
//                         "verticalAlignment": "middle",
//                         "lineHeight": 1,
//                         "fontColor": "#ffffff",
//                         "borderColor": "",
//                         "backgroundColor": "#2980ba",
//                         "borderWidth": {"top": 0,"right": 0,"bottom": 0,"left": 0},
//                         "padding": {"top": 5,"right": 5,"bottom": 5,"left": 5}
//                     },
//                     "bodyStyles": {
//                         "fontName": "NotoSerifJP-Regular",
//                         "fontSize": 13,
//                         "characterSpacing": 0,
//                         "alignment": "left",
//                         "verticalAlignment": "middle",
//                         "lineHeight": 1,
//                         "fontColor": "#000000",
//                         "borderColor": "#888888",
//                         "backgroundColor": "",
//                         "alternateBackgroundColor": "#f5f5f5",
//                         "borderWidth": {"top": 0.1,"right": 0.1,"bottom": 0.1,"left": 0.1},
//                         "padding": {"top": 5,"right": 5,"bottom": 5,"left": 5}
//                     },
//                     "columnStyles": {}
//                 }
//             }
//         ],
//         basePdf: { "width": 210, "height": 297, "padding": [10,10,10,10] },
//     },
//     inputs: [], // Assuming inputs should be an empty array, adjust as needed
//     plugins: { Table: tableBeta },
// });


export default Table;