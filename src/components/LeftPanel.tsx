import React from 'react';
import { Menu } from 'lucide-react';
import { useAppState } from '../contexts/AppStateContext';
import { useDropdown } from '../hooks/useDropdown';
import Dropdown from './Dropdown';
import './Panel.css';
import './LeftPanel.css';

const LeftPanel: React.FC = React.memo(() => {
  const { appTitle } = useAppState();
  const navigationDropdown = useDropdown();

  const handleNavigationSelect = (section: string) => {
    console.log(`Navigate to ${section}`);
    navigationDropdown.close();
    // Add your navigation logic here
  };

  const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'];

  return (
    <div className="panel left-panel">
      <div className="panel-header">
        <h1 className="panel-title">{appTitle}</h1>
        
        <div className="header-actions">
          <Dropdown
            isOpen={navigationDropdown.isOpen}
            onToggle={navigationDropdown.toggle}
            dropdownRef={navigationDropdown.dropdownRef}
            className="navigation-dropdown"
            menuClassName="navigation-menu"
            trigger={
              <>
                <Menu size={18} />
                <span>Navigate</span>
              </>
            }
          >
            {sections.map((section, index) => (
              <button
                key={index}
                className="navigation-item"
                onClick={() => handleNavigationSelect(section)}
              >
                {section}
              </button>
            ))}
          </Dropdown>
        </div>
      </div>
      
      <div className="panel-body">
        <div className="panel-placeholder">
          Space for explanation, theory or concepts.
        </div>
      </div>
    </div>
  );
});

LeftPanel.displayName = 'LeftPanel';

export default LeftPanel;
