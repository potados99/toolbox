import { NavLink, NavLinkProps } from "react-router-dom";
import { StyleSheet } from "../../../common/types";

type Props = NavLinkProps;

export default function NavBarLink({ children, ...rest }: Props) {
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
    width: "100%",
    padding: "16px",
    textAlign: "center",

    fontSize: "18px",
    color: "#464d52",

    listStyleType: "none",
    textDecoration: "none",
  },
  active: {
    fontWeight: "bold",
  },
  inactive: {},
});
