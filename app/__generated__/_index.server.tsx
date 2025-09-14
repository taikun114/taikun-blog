/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const system = _props.system
  let itemsPerPage = 12
  const __1: ResourceRequest = {
    name: "ブログ記事",
    url: "https://blog.taikun.blog/graphql",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
    body: {
  "query": "query Posts($search: String = \"\", $first: Int, $after: String) {\n  posts(where: {search: $search}, first: $first, after: $after) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        excerpt(format: RENDERED)\n        featuredImage {\n          node {\n            altText\n            mediaDetails {\n              width\n              height\n            }\n            sourceUrl\n          }\n        }\n        modified\n        date\n        title(format: RENDERED)\n        slug\n      }\n    }\n  }\n}",
  "variables": {
  search: system?.search?.search,
  first: itemsPerPage,
  after: system?.search?.after
},
},
  }
  const _data = new Map<string, ResourceRequest>([
    ["__1", __1],
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
    title: "たいくんの日記",
    description: "たいくんの部屋やたいくんの生活では紹介しきれなかった小さな記事や様々なジャンルの記事をお届けします！",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "たいくんの日記_GEzSNJmxt4XJwwvC1-pYk.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    