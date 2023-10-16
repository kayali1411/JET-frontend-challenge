import { describe, it, expect } from 'vitest';
import Layout from '../Layout';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Layout Component', () => {
  it('should be redered', () => {
    const { container, getByText } = renderWithProviders(
      <Layout>
        <span>test component</span>
      </Layout>,
      {},
    );

    expect(container).toBeInTheDocument();
    expect(getByText('test component')).toBeInTheDocument();
  });
});
