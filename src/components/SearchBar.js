import React, { useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  return (
    <button
      className='btn btn-outline-secondary'
      data-cy='dropdown'
      data-testid='select'
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </button>
  );
});

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        style={{ marginTop: '15px', width: '300px' }}
        ref={ref}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          data-testid='search-bar'
          autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className='list-unstyled'>
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.toLowerCase().startsWith(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);

const SearchBar = ({ data, foods, setFoods }) => {
  const handleSetFoods = (index, item) => ({
    ...foods,
    [index]: item.serving,
  });
  return (
    <Dropdown style={{ position: 'inherit' }}>
      <div style={{ left: '0px', padding: '30px' }}>
        <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
          Select Food Items
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} data-cy='menu'>
          {data.map((item, index) =>
            !Object.keys(foods).includes(index.toString()) ? (
              <Dropdown.Item
                key={index}
                onClick={() => setFoods(handleSetFoods(index, item))}
                data-cy={'menu-'+item.name.replace(/\s+/g,'-')}
                data-testid='select-item'
              >
                {item.name}
              </Dropdown.Item>
            ) : (
              <Dropdown.Item
                key={index}
                onClick={() => setFoods(handleSetFoods(index, item))}
                data-cy={'menu-'+item.name.replace(/\s+/g,'-')}
                data-testid='select-item'
                disabled
              >
                {item.name}
              </Dropdown.Item>
            )
          )}

        </Dropdown.Menu>
        <button
          style={{ marginLeft: '10px' }}
          type='button'
          className='btn btn-outline-secondary'
          data-testid='clear-button'
          data-cy='clearButton'
          onClick={() => {
            setFoods({});
          }}
        >
          clear
        </button>
      </div>
    </Dropdown>
  );
};

export default SearchBar;
