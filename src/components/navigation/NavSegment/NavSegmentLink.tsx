import React from "react";
import { StyleSheet } from "../../../common/types";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps;

export default function NavSegmentLink({ children, ...rest }: Props) {
  return (
    <NavLink
      {...rest}
      style={({ isActive }) =>
        isActive
          ? { ...styleVariants.default, ...styleVariants.active }
          : { ...styleVariants.default, ...styleVariants.inactive }
      }
    >
      {children}
    </NavLink>
  );
}

const styleVariants = StyleSheet.create({
  default: {
    flex: 1,
    padding: "10px",
    listStyleType: "none",
    textDecoration: "none",
    textAlign: "center",
    color: "#464d52",
    fontSize: "14px",
    zIndex: 1,
  },
  active: {
    fontWeight: "bold",
  },
  inactive: {},
});
