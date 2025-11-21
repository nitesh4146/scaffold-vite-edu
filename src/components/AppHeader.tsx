import React from 'react';
import { Globe, Settings } from 'lucide-react';
import { useLanguage, languageNames, Language } from '../contexts/LanguageContext';
import { useAppState } from '../contexts/AppStateContext';
import { useDropdown } from '../hooks/useDropdown';
import Dropdown from './Dropdown';
import './AppHeader.css';

const AppHeader: React.FC = React.memo(() => {
  const { language, setLanguage } = useLanguage();
  const { appTitle } = useAppState();
  const languageDropdown = useDropdown();
  const controlsDropdown = useDropdown();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    languageDropdown.close();
  };

  return (
    <div className="app-header">
      <h1 className="app-title">{appTitle}</h1>
      
      <Dropdown
        isOpen={controlsDropdown.isOpen}
        onToggle={controlsDropdown.toggle}
        dropdownRef={controlsDropdown.dropdownRef}
        className="controls-dropdown"
        menuClassName="controls-menu"
        trigger={
          <>
            <Settings size={18} />
            <span>Controls</span>
          </>
        }
      >
        <div className="control-group">
          <div className="control-placeholder">
            Add visualization controls here like speed, zoom in/out, and so on.
          </div>
        </div>
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
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
