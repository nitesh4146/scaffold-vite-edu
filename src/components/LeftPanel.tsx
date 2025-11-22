import React from 'react';
import { Globe, Menu } from 'lucide-react';
import { useLanguage, languageNames, Language } from '../contexts/LanguageContext';
import { useAppState } from '../contexts/AppStateContext';
import { useDropdown } from '../hooks/useDropdown';
import Dropdown from './Dropdown';
import './LeftPanel.css';

const LeftPanel: React.FC = React.memo(() => {
  const { language, setLanguage } = useLanguage();
  const { appTitle } = useAppState();
  const languageDropdown = useDropdown();
  const navigationDropdown = useDropdown();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    languageDropdown.close();
  };

  const handleNavigationSelect = (section: string) => {
    console.log(`Navigate to ${section}`);
    navigationDropdown.close();
    // Add your navigation logic here
  };

  const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'];

  return (
    <div className="left-panel">
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

          <Dropdown
            isOpen={languageDropdown.isOpen}
            onToggle={languageDropdown.toggle}
            dropdownRef={languageDropdown.dropdownRef}
            className="language-dropdown"
            menuClassName="language-menu"
            trigger={
              <>
                <Globe size={18} />
                <span>{languageNames[language]}</span>
              </>
            }
          >
            {(Object.keys(languageNames) as Language[]).map((lang) => (
              <button
                key={lang}
                className={`language-item ${language === lang ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang)}
              >
                {languageNames[lang]}
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
