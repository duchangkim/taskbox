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

const longTitleString = '모든 국민은 거주·이전의 자유를 가진다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국채를 모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다.';
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  }
}