import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, languageNames, Language } from '../contexts/LanguageContext';
import { useAppState } from '../contexts/AppStateContext';
import { useDropdown } from '../hooks/useDropdown';
import Dropdown from './Dropdown';
import './LeftPanel.css';

const LeftPanel: React.FC = React.memo(() => {
  const { language, setLanguage } = useLanguage();
  const { appTitle } = useAppState();
  const languageDropdown = useDropdown();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    languageDropdown.close();
  };

  return (
    <div className="left-panel">
      <div className="panel-header">
        <h1 className="panel-title">{appTitle}</h1>
        
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
      
      <div className="panel-body">
        <div className="panel-placeholder">
          Use this as a scrollable sidebar for required content and controls.
        </div>
      </div>
    </div>
  );
});

LeftPanel.displayName = 'LeftPanel';

export default LeftPanel;
