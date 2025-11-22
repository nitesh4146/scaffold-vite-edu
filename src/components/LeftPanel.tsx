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
  const [currentSection, setCurrentSection] = React.useState<number>(1);

  const handleNavigationSelect = (section: string) => {
    const sectionNumber = parseInt(section.split(' ')[1]);
    setCurrentSection(sectionNumber);
    navigationDropdown.close();
  };

  const sections = ['Section 1', 'Section 2'];

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
              <Menu size={18} />
            }
          >
            {sections.map((section, index) => (
              <button
                key={index}
                className="navigation-item menu-item"
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
          Currently viewing Section {currentSection}
          <br /><br />
          Space for explanation, theory or concepts.
        </div>
      </div>
    </div>
  );
});

LeftPanel.displayName = 'LeftPanel';

export default LeftPanel;
