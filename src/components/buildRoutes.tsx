import { FeatureRoute, SegmentRoute, Sitemap, TopLevelRoute } from "../common/types";
import { RouteObject } from "react-router";
import TopLevelPage from "./page/TopLevelPage";
import { Navigate } from "react-router-dom";
import FeaturePage from "./page/FeaturePage";

export default function buildRoutes(sitemap: Sitemap): RouteObject[] {
  return sitemap.map((topLevelRoute) => buildTopLevelRoute(topLevelRoute));
}

function buildTopLevelRoute(topLevelRoute: TopLevelRoute): RouteObject {
  return {
    path: topLevelRoute.path,
    element: (
      <TopLevelPage
        title={topLevelRoute.name}
        links={topLevelRoute.children.map((c) => ({ name: c.name, path: c.path }))}
      />
    ),
    children: [
      topLevelRoute.children[0]?.path !== ""
        ? { path: "", element: <Navigate to={topLevelRoute.children[0]?.path} /> }
        : {},
      ...topLevelRoute.children.map((featureRoute) => buildFeatureRoute(featureRoute)),
    ],
  };
}

function buildFeatureRoute(featureRoute: FeatureRoute): RouteObject {
  return {
    path: featureRoute.path,
    element: featureRoute.element ?? (
      <FeaturePage links={featureRoute.children?.map((c) => ({ name: c.name, path: c.path })) ?? []} />
    ),
    children: featureRoute.children && [
      { path: "", element: <Navigate to={featureRoute.children?.[0]?.path} /> },
      ...featureRoute.children?.map((segmentRoute) => buildSegmentRoute(segmentRoute)),
    ],
  };
}

function buildSegmentRoute(segmentRoute: SegmentRoute): RouteObject {
  return {
    path: segmentRoute.path,
    element: segmentRoute.element,
  };
}
