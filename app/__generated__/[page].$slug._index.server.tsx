/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const system = _props.system
  const CMS_1: ResourceRequest = {
    name: "CMSデータ",
    url: "https://blog.taikun.blog/graphql",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
    body: {
  "query": "query Page($id: ID = \"\") {\n  page(id: $id, idType: URI) {\n    content(format: RENDERED)\n    featuredImage {\n      node {\n        altText\n        mediaDetails {\n          height\n          width\n        }\n        sourceUrl\n      }\n    }\n    date\n    modified\n    title(format: RENDERED)\n  }\n}",
  "variables": {
    id: system?.params?.slug
},
},
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_1", CMS_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  let CMS = resources.CMS_1
  return {
    title: CMS?.data?.data?.page?.title && CMS?.data?.data?.page?.title + " - たいくんの生活" || "コンテンツが見つかりませんでした - たいくんの生活",
    description: "",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: undefined,
    socialImageUrl: CMS?.data?.data?.page?.featuredImage?.node?.sourceUrl,
    status: CMS?.data?.data?.page?.title ? 200 : 404,
    redirect: "",
    custom: [
      {
        property: "date",
        content: CMS?.data?.data?.page?.modified,
      },
      {
        property: "creation_date",
        content: CMS?.data?.data?.page?.date,
      },
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    