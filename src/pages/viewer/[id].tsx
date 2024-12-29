import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ChevronDown, Download, Edit2 } from 'lucide-react'
import { text, image, line, multiVariableText, barcodes } from '@pdfme/schemas';
import { Template, BLANK_PDF } from '@pdfme/common';
import { coverTemplateData } from '@/app/assets/cover-template-data';
import { generate } from '@pdfme/generator';
import { coverTemplateValues, FormValues } from '@/app/types';
import { COVER_GARMENT_LINK, COVER_IMAGE, COVER_VALUE_NAME, COVER_VALUE_SEASON, COVER_VALUE_STYLE } from "@/constants/cover";
import { Viewer } from '@pdfme/ui';
import NavBar from '@/components/NavBar';
import Home from '@/components/ui/Home';
import Footer from '@/components/ui/Footer';
import { convertToBase64 } from '@/app/utils/convertImage';


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
    "cover-value-date-2": { date2: "" },
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
        d: {
          type: 'image',
          content: 'data',
          position: { x: 30, y: 30 },
          width: 180,
          height: 160
        }
      },
    ],
  };
  const getImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjFiYTgxMGViLTRhNmUtNGM5YS05ZGY2LTM0NmJjNzE5Y2I5OTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjg5YzQ1MTkwLTU0MjctNDU3Zi04MDVjLWU1YTQ4MmZkZDVmMTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA8AFoAwERAAIRAQMRAf/EABwAAQEBAAMBAQEAAAAAAAAAAAAGBwEEBQIDCf/EAFUQAAEEAQICBAkGCAgKCwAAAAEAAgMEBQYRBxITFiExFCJBUVdhcZbUFVJWgZTTIzJCVWKCkZUXcnODkpOhogglM0RTY6OksbIkJzRDdaWztMHR8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARExEgJhIVH/2gAMAwEAAhEDEQA/AP6RrbkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgAE77AnYbnbyBAQEBAQEBAQEAAkgAbk9gAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcdyCe1brzEaNdWr3ZZbGVtg+BYehEbF64f9VC3xiPO88rG97nNHaoM81PoTVnEXItp6tyt3QsmQqvk0tFgLp/xZkY93tfbkbs2zOGjmbH2w8rZ27POzzNbkcaB405PGYx9LiVUjxV/HTeAX85WjLaMVkAbtst/zUvDmvZIfwMjJGOa9hPRtus42SORsscckbmyRyND2PYQWvae4gjsIPnCqPpAQEBAQdLM5rH6dxdnJ5W9WxuOrN5prduVsUUY/Sc47D2eXyIMW1NndQccdVY3R+Gdc0toyRoyOdyUzX1r9rGNJHI0HZ1SKw5pja53LM9jZnARtaC/OtSKbS0etdOYc5bGVLGsdETyvfj8dNN/jqnTGwjeySQhtpjgC9schbK1hYOeQ9iaWLLSuucHrXwhmJvtmt1ey1j5mOguVD5pq7wJIz/GaB5iVWXu96o5QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBC6mr5fUPEzBaZi1Fd09hr2Jt3HvxTImWp5oZoGlgme1xjbyTg+IA47HxgpVk17vAXRuI07oyC1Wx7GZuYyVsnkpnOmt3JoZXxPfNM8l7yXMJ7TsN+wALLa11Zpmvq3CTY+w+SBxLZIbMJ2lrzMIdHKw+RzXAOHk7NjuCQisouUs1kMvNmsZVrw8RsNXbT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'

  const testInputs = [{ a: 'a1', b: 'b1', c: 'c1', d: getImage }];

  const handleOpenPDF = async () => {

    // set pdf data
    // const inputs = [coverTemplateData]
    const getData = await populatePDF();
    // const getImage = await convertToBase64(await getImageUrl());
    // console.log(`\n getImage: ${getImage}`)
    const inputs = [mapDataToPDF(getData, getImage)];
    // setInputs([mapDataToPDF(getData, getImage)])
    await generate({
      template: testTemplate,
      inputs: testInputs,
      plugins: {
        text,
        image,
        line,
        multiVariableText,
        qrcode: barcodes.qrcode
      },
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
      console.log(`populatePDF method: ${typeof(response)}`)
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const getImageUrl = async () => {
    try {
      const response = await fetch(`/api/image/${String(techpackId)}`, {
        method: 'GET'
      });
      // const response = await fetch(`/api/upload/${String(techpackId)}`, {
      //   method: 'GET'
      // });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json()
      // console.log(`${JSON.stringify(result)}`)
      return result.image_path;
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // const getInputs = async () => {
  //     const getData = await populatePDF();
  //     const getImage = await getImageUrl();
  //     const inputs = mapDataToPDF(getData, getImage);
  //     setInputs([inputs]);
  // }

  const mapDataToPDF = (data: FormValues, image_path: string) => {
    const sample_img_path = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjFiYTgxMGViLTRhNmUtNGM5YS05ZGY2LTM0NmJjNzE5Y2I5OTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjg5YzQ1MTkwLTU0MjctNDU3Zi04MDVjLWU1YTQ4MmZkZDVmMTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA8AFoAwERAAIRAQMRAf/EABwAAQEBAAMBAQEAAAAAAAAAAAAGBwEEBQIDCf/EAFUQAAEEAQICBAkGCAgKCwAAAAEAAgMEBQYRBxITFiExFCJBUVdhcZbUFVJWgZTTIzJCVWKCkZUXcnODkpOhogglM0RTY6OksbIkJzRDdaWztMHR8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARExEgJhIVH/2gAMAwEAAhEDEQA/AP6RrbkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgAE77AnYbnbyBAQEBAQEBAQEAAkgAbk9gAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcdyCe1brzEaNdWr3ZZbGVtg+BYehEbF64f9VC3xiPO88rG97nNHaoM81PoTVnEXItp6tyt3QsmQqvk0tFgLp/xZkY93tfbkbs2zOGjmbH2w8rZ27POzzNbkcaB405PGYx9LiVUjxV/HTeAX85WjLaMVkAbtst/zUvDmvZIfwMjJGOa9hPRtus42SORsscckbmyRyND2PYQWvae4gjsIPnCqPpAQEBAQdLM5rH6dxdnJ5W9WxuOrN5prduVsUUY/Sc47D2eXyIMW1NndQccdVY3R+Gdc0toyRoyOdyUzX1r9rGNJHI0HZ1SKw5pja53LM9jZnARtaC/OtSKbS0etdOYc5bGVLGsdETyvfj8dNN/jqnTGwjeySQhtpjgC9schbK1hYOeQ9iaWLLSuucHrXwhmJvtmt1ey1j5mOguVD5pq7wJIz/GaB5iVWXu96o5QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBC6mr5fUPEzBaZi1Fd09hr2Jt3HvxTImWp5oZoGlgme1xjbyTg+IA47HxgpVk17vAXRuI07oyC1Wx7GZuYyVsnkpnOmt3JoZXxPfNM8l7yXMJ7TsN+wALLa11Zpmvq3CTY+w+SBxLZIbMJ2lrzMIdHKw+RzXAOHk7NjuCQisouUs1kMvNmsZVrw8RsNXbT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`
    return {
      "cover-garment-link": { link: "" },
      "cover-value-style": { style: data.style_id },
      "cover-value-name": { name: data.style_name },
      "cover-value-season": { season: "" },
      "cover-value-vendor": { vendor: "" },
      "cover-value-coo": { coo: "" },
      "cover-value-createdby": { createdBy: "" },
      "cover-value-date-2": { date2: "" },
      "cover-value-labdips": { labdips: "" },
      "cover-value-fabrics": { fabrics: data.fabric },
      "cover-value-prototypes": { prototypes: "" },
      "cover-value-trims": { trims: "" },
      "cover-value-salessamples": { salessamples: "" },
      "cover-value-bulkdelivery": { bulkdelivery: "" },
      "cover-value-date": { date: "" },
      "cover-image": { image: sample_img_path }
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
        template: testTemplate,
        inputs: testInputs,
        plugins: {
          text,
          image,
          line,
          multiVariableText
        }
      });
      viewer['render']();
    }
  }, [techpackId, router.query.id, template]);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#F8FAFC] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
        <Home />
        <NavBar />
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Techpack Generated</h1>
            <div className="flex space-x-4">
              <button onClick={handleOpenPDF} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:opacity-80">
                <Download className="mr-2 h-5 w-5" />
                Export
              </button>
              <button onClick={handleEditInputForm} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full flex items-center hover:opacity-80">
                <Edit2 className="mr-2 h-5 w-5" />
                Edit Techpack
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">PDF View</h2>
            <div
              ref={containerRef}
              style={{ width: '100%', height: '100vh' }} // Adjust styles as needed
            >
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}