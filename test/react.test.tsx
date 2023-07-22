/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import * as React from 'react';

describe('React Utils', () => {
  describe('CSRF', () => {
    it('should work', () => {
      render(<div></div>);
    });
  });
});
