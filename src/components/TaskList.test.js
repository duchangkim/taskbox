import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from './TaskList.stories';

const { WithPinnedTasks } = composeStories(TaskListStories);

it('고정된 태스크가 리스트의 시작부에 정상적으로 렌더링 되는가?', () => {
  const { container } = render(<WithPinnedTasks/>);

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
  ).not.toBe(null)
})