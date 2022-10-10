import React from 'react';

import Task from './Task';

// 스토리북에게 문서화하고 있는 컴포넌트에 대해 알려주기 위해 export합니다.
export default {
  component: Task, // 대상 컴포넌트
  title: 'Task', // 스토리북 앱의 사이드바에서 컴포넌트를 참조할 때 보는 이름
};

const Template = (args) => <Task {...args} />

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};