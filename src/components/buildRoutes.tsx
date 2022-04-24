import { FeatureRoute, SegmentRoute, Sitemap, TopLevelRoute } from "../common/types";
import { RouteObject } from "react-router";
import TopLevelPage from "./page/TopLevelPage";
import { Navigate } from "react-router-dom";
import FeaturePage from "./page/FeaturePage";

type BuildRouteOptions = {
  segmentTransitionDuration?: number;
};

export default function buildRoutes(sitemap: Sitemap, options?: BuildRouteOptions): RouteObject[] {
  return sitemap.map((topLevelRoute) => buildTopLevelRoute(topLevelRoute, options));
}

function buildTopLevelRoute(topLevelRoute: TopLevelRoute, options?: BuildRouteOptions): RouteObject {
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
      ...topLevelRoute.children.map((featureRoute) => buildFeatureRoute(featureRoute, options)),
    ],
  };
}

function buildFeatureRoute(featureRoute: FeatureRoute, options?: BuildRouteOptions): RouteObject {
  return {
    path: featureRoute.path,
    element: featureRoute.element ?? (
      <FeaturePage
        links={featureRoute.children?.map((c) => ({ name: c.name, path: c.path })) ?? []}
        fadeDuration={options?.segmentTransitionDuration}
      />
    ),
    children: featureRoute.children && [
      { path: "", element: <Navigate to={featureRoute.children?.[0]?.path} /> },
      ...featureRoute.children?.map((segmentRoute) => buildSegmentRoute(segmentRoute, options)),
    ],
  };
}

// noinspection JSUnusedLocalSymbols
function buildSegmentRoute(segmentRoute: SegmentRoute, options?: BuildRouteOptions): RouteObject {
  return {
    path: segmentRoute.path,
    element: segmentRoute.element,
  };
}
