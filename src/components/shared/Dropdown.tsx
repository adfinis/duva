import {
  cloneElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import './Dropdown.css';

interface DropdownProps {
  trigger: ReactElement<HTMLAttributes<HTMLElement>>;
  children: ReactNode;
}

export function Dropdown({ trigger, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const triggerElement = cloneElement(trigger, {
    onClick: () => setIsOpen(!isOpen),
  });

  return (
    <div className="dropdown" ref={dropdownRef}>
      {triggerElement}

      {isOpen && <div className="dropdown-menu">{children}</div>}
    </div>
  );
}
