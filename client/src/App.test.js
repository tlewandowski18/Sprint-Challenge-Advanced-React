import React from 'react';
import { render } from '@testing-library/react'
import App from './App';


test("check to see if submit button rendered", () => {
  const {getByText} = render(<App />)

  getByText(/submit/i);
})
