import React from 'react';
import './AppFilter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const classes = active ? 'btn btn-light' : 'btn btn-outline-light';
    return (
      <button
        className={classes}
        type='button'
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
