import { NavLink, NavLinkProps } from "react-router-dom";

type LinkProps = {
  children: React.ReactNode;
} & NavLinkProps;

const Link = ({ children, ...props }: LinkProps) => {
  return <NavLink {...props}>{children}</NavLink>;
};

export default Link;
