import { render, screen } from '@testing-library/react';
import App from './App';

test('Taskbox 타이틀이 정상적으로 렌더 되었는가', () => {
  render(<App />);
  const taskBoxTitle = screen.getByText(/Taskbox/i);
  expect(taskBoxTitle).toBeInTheDocument();
});
