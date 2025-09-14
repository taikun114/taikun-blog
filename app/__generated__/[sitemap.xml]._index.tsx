/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { XmlNode as XmlNode } from "@webstudio-is/sdk-components-react";


      export const projectId = "5edcd3c2-3b0a-4880-8536-c12df5a32785";

      export const lastPublished = "2025-09-13T14:53:43.003Z";

      export const siteName = "たいくんの日記";

      export const breakpoints = [{"id":"7hPMMapQ_YKRAmEWw_M-S"},{"id":"oIVfj9CW1VSGQ1nzAMQhV","maxWidth":991},{"id":"b-tdPHJg4N8hzh8wxGSqL","maxWidth":767},{"id":"sURTnOO_xRAsuAvyLcB6L","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_I0aDvrJ4YlLRcrh2UMEUA.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [siteURL, set$siteURL] = useVariableState<any>("https://www.taikun.blog")
let _ = useResource("__2")
let __1 = useResource("__3")
return <XmlNode
xmlns={"http://www.sitemaps.org/schemas/sitemap/0.9"}
tag={"urlset"}>
{_?.data?.data?.posts?.nodes?.map?.((collectionItem: any, index: number) =>
<Fragment key={index}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${siteURL}/blog/${collectionItem?.slug}`}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{collectionItem?.modified + "+09:00"}
</XmlNode>
</XmlNode>
</Fragment>
)}
{__1?.data?.data?.pages?.nodes?.map?.((collectionItem_1: any, index_1: number) =>
<Fragment key={index_1}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${siteURL}/page/${collectionItem_1?.slug}`}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{collectionItem_1?.modified + "+09:00"}
</XmlNode>
</XmlNode>
</Fragment>
)}
</XmlNode>
}


      export { Page }
    