import React, { useState, useEffect } from 'react';
import { Globe, ChevronLeft } from 'lucide-react';
import { useLanguage, languageNames, Language } from '../contexts/LanguageContext';
import { useAppState } from '../contexts/AppStateContext';
import { useDropdown } from '../hooks/useDropdown';
import Dropdown from './Dropdown';
import './LeftPanel.css';

interface LeftPanelProps {
  onCollapseChange?: (collapsed: boolean) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = React.memo(({ onCollapseChange }) => {
  const { language, setLanguage } = useLanguage();
  const { appTitle } = useAppState();
  const languageDropdown = useDropdown();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    languageDropdown.close();
  };

  const handleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(true);
  };

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  return (
    <div 
      className={`left-panel ${isCollapsed ? 'collapsed' : ''}`}
      onClick={isCollapsed ? handleExpand : undefined}
    >
      <div className="panel-header">
        <h1 className="panel-title">{appTitle}</h1>
        
        <div className="panel-header-controls">
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
          
          <button 
            className="collapse-btn" 
            onClick={handleCollapse}
            aria-label="Collapse panel"
            title="Collapse panel"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
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
