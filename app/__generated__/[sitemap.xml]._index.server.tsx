/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const __2: ResourceRequest = {
    name: "ブログ記事",
    url: "https://blog.taikun.blog/graphql",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
    body: {
  "query": "query Posts {\n  posts {\n    nodes {\n      modified\n      slug\n    }\n  }\n}",
  "variables": {},
},
  }
  const __3: ResourceRequest = {
    name: "ブログページ",
    url: "https://blog.taikun.blog/graphql",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
    body: {
  "query": "query Pages {\n  pages {\n    nodes {\n      modified\n      slug\n    }\n  }\n}",
  "variables": {},
},
  }
  const _data = new Map<string, ResourceRequest>([
    ["__2", __2],
    ["__3", __3],
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
  return {
    title: "Untitled",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    