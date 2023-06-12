import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const ecosystem: CmsCollectionFile = {
  name: "ecosystem",
  label: "Ecosystem",
  description: "Ecosystem page",
  file: "public/lido-landing/ecosystem/ecosystem.md",
  fields: [
    {
      name: "info",
      label: "Info",
      widget: "info",
      data: [
        {
          description: "To add a new project, follow the link below:",
          links: [
            ["add new project", "/admin/#/collections/ecosystem-projects"],
          ],
        },
      ],
    } as unknown as CmsField,
    {
      label: "Most Popular",
      name: "mostPopular",
      widget: "relation",
      collection: "ecosystem-projects",
      searchFields: ["name"],
      valueField: "id",
      displayFields: ["name"],
      multiple: true,
      options_length: 1000,
      required: false,
    } as unknown as CmsField,
    {
      name: "pages",
      label: "Pages",
      widget: "object",
      summary: "list pages",
      collapsed: true,
      fields: [
        {
          label: "Main page",
          name: "main",
          widget: "relation",
          collection: "ecosystem-projects",
          searchFields: ["name"],
          valueField: "id",
          displayFields: ["name"],
          multiple: true,
          max: 8,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Ethereum page",
          name: "ethereum",
          widget: "relation",
          collection: "ecosystem-projects",
          searchFields: ["name"],
          valueField: "id",
          displayFields: ["name"],
          multiple: true,
          max: 8,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Polygon page",
          name: "polygon",
          widget: "relation",
          collection: "ecosystem-projects",
          searchFields: ["name"],
          valueField: "id",
          displayFields: ["name"],
          multiple: true,
          max: 8,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Solana",
          name: "solana",
          widget: "relation",
          collection: "ecosystem-projects",
          searchFields: ["name"],
          valueField: "id",
          displayFields: ["name"],
          multiple: true,
          max: 8,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
      ],
    },
  ],
};
