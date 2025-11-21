import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import './TheorySidebar.css';

interface TheorySection {
  title: string;
  content: string;
}

interface TheorySidebarProps {
  sections?: TheorySection[];
}

const TheorySidebar: React.FC<TheorySidebarProps> = ({ sections = [] }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const defaultSections: TheorySection[] = [
    {
      title: 'Section 1',
      content: 'This is placeholder content for the first section. Replace with your own content.',
    },
    {
      title: 'Section 2',
      content: 'This is placeholder content for the second section. Add your information here.',
    },
    {
      title: 'Section 3',
      content: 'This is placeholder content for the third section. Customize as needed.',
    },
  ];

  const displaySections = sections.length > 0 ? sections : defaultSections;

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="theory-sidebar">
      <div className="sidebar-header">
        <h3>Sidebar</h3>
      </div>

      <div className="sidebar-body">
        {displaySections.map((section, index) => (
          <div key={index} className="theory-section">
            <button
              className="section-header"
              onClick={() => toggleSection(index)}
            >
              <span className="section-icon">
                {expandedSections.has(index) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </span>
              <span className="section-title">{section.title}</span>
            </button>
            
            {expandedSections.has(index) && (
              <div className="section-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheorySidebar;
