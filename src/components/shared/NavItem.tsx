import { NavLink } from 'react-router-dom';
import './NavItem.css';

interface NavItemProps {
  text: string;
  to: string;
}
export function NavItem({ text, to }: NavItemProps) {
  return (
    <NavLink to={to} className="nav-item text-md">
      {text}
    </NavLink>
  );
}
