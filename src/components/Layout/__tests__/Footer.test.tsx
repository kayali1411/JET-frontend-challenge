import { describe, it, expect } from 'vitest';
import Footer from '../Footer';
import { render } from '@testing-library/react';

describe('Footer Component', () => {
  it('should be redered', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });
  it('should have logo', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer-logo')).toBeInTheDocument();
  });
});
