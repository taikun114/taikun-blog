/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
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
    title: "お探しの情報は見つかりませんでした - たいくんの日記",
    description: "",
    excludePageFromSearch: true,
    language: "ja-jp",
    socialImageAssetName: "たいくんの日記_GEzSNJmxt4XJwwvC1-pYk.webp",
    socialImageUrl: undefined,
    status: 404,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  params[0] = params["*"]
  delete params["*"]
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    