import React from 'react';
import './Dropdown.css';

export interface DropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  menuClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onToggle,
  dropdownRef,
  trigger,
  children,
  className = '',
  menuClassName = '',
}) => {
  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <button className="dropdown-trigger btn" onClick={onToggle}>
        {trigger}
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${menuClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
