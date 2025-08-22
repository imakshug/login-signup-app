import React, { useState } from 'react';

const InputField = ({ label, name, type = 'text', value, onChange, error }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id={name}
          name={name}
          type={isPassword && show ? 'text' : type}
          value={value}
          onChange={onChange}
          autoComplete="off"
          required
          style={{ flex: 1 }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            tabIndex={-1}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="11" cy="11" rx="8" ry="5" stroke="#555" strokeWidth="2" />
                <circle cx="11" cy="11" r="2" fill="#555" />
                <line x1="5" y1="17" x2="17" y2="5" stroke="#888" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="11" cy="11" rx="8" ry="5" stroke="#555" strokeWidth="2" />
                <circle cx="11" cy="11" r="2" fill="#555" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default InputField;
