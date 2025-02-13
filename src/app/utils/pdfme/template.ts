// This file details the fields to generate the pdfme template.
import { Template } from '@pdfme/common';

export const coverPageTemplate: Template = {
  schemas: [
    {
      // Company Header and Value
      companyName: {
        name: "companyName",
        type: "text",
        position: { x: 20, y: 20 },
        width: 80,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      companyValue: {
        name: "companyValue",
        type: "multiVariableText",
        position: { x: 20, y: 30 },
        width: 100,
        height: 10,
        content: '{"company":"[not provided]", "website":"www.sewheidi.com / heidi@sewheidi.com"}',
        text: "{company}\n{website}",
        variables: ["company", "website"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      companyLine: {
        name: "companyLine",
        type: "line",
        position: { x: 20, y: 40 },
        width: 170,
        height: 0.2,
        opacity: 1,
        color: "#000000"
      },

      // Document Type Header and Value
      coverHeader: {
        name: "coverHeader",
        type: "text",
        position: { x: 120, y: 20 },
        width: 50,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      coverValue: {
        name: "coverValue",
        type: "multiVariableText",
        position: { x: 120, y: 30 },
        width: 100,
        height: 10,
        content: '{"type":"COVER", "style":"WOMEN\'S ACTIVE LEGGING STYLE #01"}',
        text: "{type}\n{style}",
        variables: ["type", "style"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Style Header and Value
      styleHeader: {
        name: "styleHeader",
        type: "text",
        position: { x: 20, y: 45 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      styleValue: {
        name: "styleValue",
        type: "multiVariableText",
        position: { x: 65, y: 45 },
        width: 30,
        height: 10,
        content: '{"style":"151"}',
        text: "{style}",
        variables: ["style"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Name Header and Value
      nameHeader: {
        name: "nameHeader",
        type: "text",
        position: { x: 20, y: 55 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      nameValue: {
        name: "nameValue",
        type: "multiVariableText",
        position: { x: 65, y: 55 },
        width: 50,
        height: 10,
        content: '{"name":"ACTIVE LEGGING"}',
        text: "{name}",
        variables: ["name"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Season Header and Value
      seasonHeader: {
        name: "seasonHeader",
        type: "text",
        position: { x: 20, y: 65 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      seasonValue: {
        name: "seasonValue",
        type: "multiVariableText",
        position: { x: 65, y: 65 },
        width: 50,
        height: 10,
        content: '{"season":"Summer 2017"}',
        text: "{season}",
        variables: ["season"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Vendor Header and Value
      vendorHeader: {
        name: "vendorHeader",
        type: "text",
        position: { x: 20, y: 75 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      vendorValue: {
        name: "vendorValue",
        type: "multiVariableText",
        position: { x: 65, y: 75 },
        width: 50,
        height: 10,
        content: '{"vendor":"TBA"}',
        text: "{vendor}",
        variables: ["vendor"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Created By Header and Value
      createdByHeader: {
        name: "createdByHeader",
        type: "text",
        position: { x: 20, y: 85 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      createdByValue: {
        name: "createdByValue",
        type: "multiVariableText",
        position: { x: 65, y: 85 },
        width: 50,
        height: 10,
        content: '{"creator":"HEIDI"}',
        text: "{creator}",
        variables: ["creator"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Date Sent Header and Value
      dateSentHeader: {
        name: "dateSentHeader",
        type: "text",
        position: { x: 20, y: 95 },
        width: 40,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      dateSentValue: {
        name: "dateSentValue",
        type: "multiVariableText",
        position: { x: 65, y: 95 },
        width: 50,
        height: 10,
        content: '{"date":"10-10-2016"}',
        text: "{date}",
        variables: ["date"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Calendar Section
      calendarHeader: {
        name: "calendarHeader",
        type: "text",
        position: { x: 120, y: 45 },
        width: 70,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      calendarValue: {
        name: "calendarValue",
        type: "multiVariableText",
        position: { x: 120, y: 55 },
        width: 70,
        height: 50,
        content: '{"labDips":"Lab Dips: 10-20-2016","fabrics":"Fabrics: 10-20-2016","protos":"Protos: 10-20-2016","trims":"Trims: 10-20-2016","samples":"Sales Samples: 1-20-17","bulk":"Bulk Delivery Landed: 5-15-2017"}',
        text: "{labDips}\n{fabrics}\n{protos}\n{trims}\n{samples}\n{bulk}",
        variables: ["labDips", "fabrics", "protos", "trims", "samples", "bulk"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Design Images
      designImage1: {
        name: "designImage1",
        type: "image",
        position: { x: 20, y: 110 },
        width: 80,
        height: 100,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      designImage2: {
        name: "designImage2",
        type: "image",
        position: { x: 110, y: 110 },
        width: 80,
        height: 100,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Revisions Section
      revisionsHeader: {
        name: "revisionsHeader",
        type: "text",
        position: { x: 20, y: 200 },
        width: 50,
        height: 10,
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },
      revisionsValue: {
        name: "revisionsValue",
        type: "multiVariableText",
        position: { x: 20, y: 210 },
        width: 170,
        height: 40,
        content: '{"date":"10-10-2016", "name":"HEIDI", "tag":"BOM", "description":"Changed body fabric & content from 88 nylon /12 spandex to 80 nylon /20 spandex to save cost"}',
        text: "Date: {date}\nName: {name}\nTag: {tag}\nDescription: {description}",
        variables: ["date", "name", "tag", "description"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      },

      // Footer
      pageNumber: {
        name: "pageNumber",
        type: "multiVariableText",
        position: { x: 110, y: 267 },
        width: 170,
        height: 10,
        content: '{"page":"Page 1"}',
        text: "{page}",
        variables: ["page"],
        fontName: "NotoSansJP-Regular",
        fontColor: "#000000",
      }
    }
  ],
  basePdf: {
    width: 210,
    height: 297,
    padding: [20, 20, 20, 20]
  },
  pdfmeVersion: "5.0.0"
};

export const coverPageTemplate1: Template = {
    schemas: [
      {
        // Header Information
        companyName: {
          name: "companyName",
          type: "text",
          position: { x: 20, y: 20 },
          width: 150,
          height: 15,
        },
        website: {
          name: "website",
          type: "text",
          position: { x: 20, y: 35 },
          width: 200,
          height: 15,
        },
        coverLabel: {
          name: "coverLabel",
          type: "text",
          position: { x: 450, y: 20 },
          width: 100,
          height: 15,
        },
        styleInfo: {
          name: "styleInfo",
          type: "text",
          position: { x: 450, y: 35 },
          width: 150,
          height: 15,
        },

        // Left Column Fields
        styleNumber: {
          name: "styleNumber",
          type: "text",
          position: { x: 20, y: 70 },
          width: 120,
          height: 15,
        },
        name: {
          name: "name",
          type: "text",
          position: { x: 20, y: 90 },
          width: 120,
          height: 15,
        },
        season: {
          name: "season",
          type: "text",
          position: { x: 20, y: 110 },
          width: 120,
          height: 15,
        },
        vendor: {
          name: "vendor",
          type: "text",
          position: { x: 20, y: 130 },
          width: 120,
          height: 15,
        },
        createdBy: {
          name: "createdBy",
          type: "text",
          position: { x: 20, y: 150 },
          width: 120,
          height: 15,
        },
        dateSent: {
          name: "dateSent",
          type: "text",
          position: { x: 20, y: 170 },
          width: 120,
          height: 15,
        },

        // Right Column Fields
        calendar: {
          name: "calendar",
          type: "multiVariableText",
          position: { x: 250, y: 70 },
          width: 300,
          height: 120,
          content: '{"dates":"", "status":""}',
          text: "{dates}\n{status}",
          variables: ["dates", "status"]
        },

        // Main Design Images
        designImage1: {
          name: "designImage1",
          type: "image",
          position: { x: 20, y: 200 },
          width: 250,
          height: 300
        },
        designImage2: {
          name: "designImage2",
          type: "image",
          position: { x: 280, y: 200 },
          width: 250,
          height: 300
        },

        // Revisions Table
        revisionsTitle: {
          name: "revisionsTitle",
          type: "text",
          position: { x: 20, y: 520 },
          width: 100,
          height: 15,
        },
        revisionTable: {
          name: "revisionTable",
          type: "multiVariableText",
          position: { x: 20, y: 540 },
          width: 510,
          height: 100,
          content: '{"revisions":""}',
          text: "{revisions}",
          variables: ["revisions"]
        },

        // Footer
        pageNumber: {
          name: "pageNumber",
          type: "text",
          position: { x: 20, y: 650 },
          width: 510,
          height: 15,
        }
      }
    ],
    basePdf: {
      width: 550,
      height: 700,
      padding: [20, 20, 20, 20]
    },
    pdfmeVersion: "5.0.0"
  };

// test template
export const testTemplate: Template = {
  schemas: [
    {
      titleA: {
        name: "titleA",
        type: "text",
        position: { x: 20, y: 20 },
        width: 120,
        height: 15,
      },
      titleB: {
        name: "titleB",
        type: "text",
        position: { x: 30, y: 30 },
        width: 120,
        height: 15,
      },
      titleC: {
        name: "titleC",
        type: "text",
        position: { x: 40, y: 40 },
        width: 120,
        height: 15,
      },
      style: {
        name: "style",
        type: "multiVariableText",
        position: { x: 50, y: 50 },
        width: 120,
        height: 15,
        content: '{"style":"test"}',
        text: "{style}",
        variables: [ "style" ]
      },
      image: {
        name: "image",
        type: "image",
        position: { x: 60, y: 60},
        width: 120,
        height: 120
      }
    }
  ],
  basePdf: { width: 210, height: 297, padding: [20, 20, 20, 20]},
  pdfmeVersion: "5.0.0"
};

// TODO delete later  
export const getImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjFiYTgxMGViLTRhNmUtNGM5YS05ZGY2LTM0NmJjNzE5Y2I5OTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjg5YzQ1MTkwLTU0MjctNDU3Zi04MDVjLWU1YTQ4MmZkZDVmMTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA8AFoAwERAAIRAQMRAf/EABwAAQEBAAMBAQEAAAAAAAAAAAAGBwEEBQIDCf/EAFUQAAEEAQICBAkGCAgKCwAAAAEAAgMEBQYRBxITFiExFCJBUVdhcZbUFVJWgZTTIzJCVWKCkZUXcnODkpOhogglM0RTY6OksbIkJzRDdaWztMHR8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARExEgJhIVH/2gAMAwEAAhEDEQA/AP6RrbkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgAE77AnYbnbyBAQEBAQEBAQEAAkgAbk9gAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcdyCe1brzEaNdWr3ZZbGVtg+BYehEbF64f9VC3xiPO88rG97nNHaoM81PoTVnEXItp6tyt3QsmQqvk0tFgLp/xZkY93tfbkbs2zOGjmbH2w8rZ27POzzNbkcaB405PGYx9LiVUjxV/HTeAX85WjLaMVkAbtst/zUvDmvZIfwMjJGOa9hPRtus42SORsscckbmyRyND2PYQWvae4gjsIPnCqPpAQEBAQdLM5rH6dxdnJ5W9WxuOrN5prduVsUUY/Sc47D2eXyIMW1NndQccdVY3R+Gdc0toyRoyOdyUzX1r9rGNJHI0HZ1SKw5pja53LM9jZnARtaC/OtSKbS0etdOYc5bGVLGsdETyvfj8dNN/jqnTGwjeySQhtpjgC9schbK1hYOeQ9iaWLLSuucHrXwhmJvtmt1ey1j5mOguVD5pq7wJIz/GaB5iVWXu96o5QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBC6mr5fUPEzBaZi1Fd09hr2Jt3HvxTImWp5oZoGlgme1xjbyTg+IA47HxgpVk17vAXRuI07oyC1Wx7GZuYyVsnkpnOmt3JoZXxPfNM8l7yXMJ7TsN+wALLa11Zpmvq3CTY+w+SBxLZIbMJ2lrzMIdHKw+RzXAOHk7NjuCQisouUs1kMvNmsZVrw8RsNXbT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'
