import React, { useState, useRef, useEffect } from 'react';
import { Globe, BookOpen } from 'lucide-react';
import { useLanguage, languageNames, Language } from '../contexts/LanguageContext';
import { useAppState, Topic } from '../contexts/AppStateContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { currentTopic, topics, setCurrentTopic } = useAppState();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const topicDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
      if (topicDropdownRef.current && !topicDropdownRef.current.contains(event.target as Node)) {
        setShowTopicDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLangDropdown(false);
  };

  const handleTopicChange = (topic: Topic) => {
    setCurrentTopic(topic);
    setShowTopicDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">
            {currentTopic ? currentTopic.name : 'Your App Title'}
          </h1>
        </div>

        <div className="navbar-right">
          {/* Topic Dropdown */}
          {topics.length > 0 && (
            <div className="dropdown" ref={topicDropdownRef}>
              <button
                className="dropdown-btn"
                onClick={() => setShowTopicDropdown(!showTopicDropdown)}
              >
                <BookOpen size={18} />
                <span>Topics</span>
              </button>
              {showTopicDropdown && (
                <div className="dropdown-menu">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      className={`dropdown-item ${currentTopic?.id === topic.id ? 'active' : ''}`}
                      onClick={() => handleTopicChange(topic)}
                    >
                      {topic.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Language Dropdown */}
          <div className="dropdown" ref={langDropdownRef}>
            <button
              className="dropdown-btn"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <Globe size={18} />
              <span>{languageNames[language]}</span>
            </button>
            {showLangDropdown && (
              <div className="dropdown-menu">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    className={`dropdown-item ${language === lang ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
