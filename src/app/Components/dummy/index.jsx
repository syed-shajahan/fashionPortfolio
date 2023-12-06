'use client';
import React, { useState } from 'react';
import data from './dummy.json';

const DummyTest = () => {
  const [query, setQuery] = useState('');
  const [dropMenu, SetDropMenu] = useState([]);

  const handleFilter = (e) => {
    setQuery(e.target.value);

    const newValue = data.filter((f) =>
      f.followTxt.toLowerCase().includes(e.target.value.toLowerCase())
    );

    SetDropMenu([...newValue]);
  };

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={handleFilter} />
        <button type="submit">Submit</button>
      </form>
      {query && dropMenu.length > 0 && (
        <ul style={{ background: 'white', maxWidth: '170px', padding: '5px' }}>
          {dropMenu.map((e) => {
            return <li key={e.id}>{e.followTxt}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default DummyTest;
