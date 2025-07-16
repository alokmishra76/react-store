import React, { useEffect, useRef, useState } from 'react';
import './HeaderSearch.css';
export default function HeaderSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const abortFlag = useRef(false);
  const debounceTimer = useRef(null);

  const fakeSearchAPI = (input) => {
    return new Promise((resolve, reject) => {
      if (Math.random() < 0.05) return reject('Network error');
      setTimeout(() => {
        const results = Array.from({ length: 5 }, (_, i) => `${input}${i + 1}`);
        resolve(results);
      }, 500 + Math.random() * 500);
    });
  };

  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      setError('');
      return;
    }

    abortFlag.current = false;
    setLoading(true);
    setError('');
    try {
      const results = await fakeSearchAPI(value);
      if (abortFlag.current) return;
      setSuggestions(results);
    } catch (err) {
      if (!abortFlag.current) setError(err);
    } finally {
      if (!abortFlag.current) setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    abortFlag.current = true;

    debounceTimer.current = setTimeout(() => {
      fetchSuggestions(query);
    }, 400);

    return () => clearTimeout(debounceTimer.current);
  }, [query]);

  // 🔒 Close suggestions on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSuggestions([]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="suggestions">
        {loading && <div className="loading">Loading...</div>}
        {!loading && error && <div className="error">{error}</div>}
        {!loading &&
          !error &&
          suggestions.map((s, idx) => (
            <div
              key={idx}
              className="suggestion"
              onClick={() => {
                setQuery(s);
                setSuggestions([]);
              }}
            >
              {s}
            </div>
          ))}
      </div>
    </div>
  );
}
