import React from "react";

export class StyleSheet {
  static create<Styles extends { [key: string]: React.CSSProperties }>(styles: Styles): Styles {
    return styles;
  }
}

export type BasicHTMLProps = React.HTMLAttributes<HTMLElement>;

export type Destination = { name: string; path: string };

export type Destinations = Destination[];

export type Sitemap = TopLevelRoute[];

export type TopLevelRoute = {
  name: string;
  path: string;
  children: FeatureRoute[];
};

export type FeatureRoute = {
  name: string;
  path: string;
  element?: JSX.Element;
  children?: SegmentRoute[];
};

export type SegmentRoute = {
  name: string;
  path: string;
  element: JSX.Element;
};
