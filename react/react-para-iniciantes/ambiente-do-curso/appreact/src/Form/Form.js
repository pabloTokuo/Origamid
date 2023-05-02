import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  const arr = ['Item 1', 'Item 2'];
  return (
    <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }}>
      <Input id="email" label="Email" required />
      <Input id="password" label="Password" type="password" />
      <Button items={arr} />
    </div>
  );
}

export default Form;
