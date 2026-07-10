import React from 'react';

export const FormLink: React.FC<{ formName: string; url?: string }> = ({ formName, url = '#' }) => {
  return (
    <a 
      href={url} 
      className="form-link" 
      title={`Tham chiếu ${formName}`} 
      target="_blank" 
      rel="noreferrer"
      onClick={(e) => { if (url === '#') e.preventDefault(); }}
    >
      <svg className="icon inline-icon" style={{ width: '13px', height: '13px', strokeWidth: 1.8, marginBottom: '-2px' }}>
        <use href="#i-doc"/>
      </svg> 
      {formName}
    </a>
  );
};
