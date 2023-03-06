import { fireEvent, screen } from '@testing-library/react';
import {
  componentRender,
} from 'shared/config/jest/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('render', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});