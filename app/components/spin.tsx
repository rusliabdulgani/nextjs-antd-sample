import React from 'react';
import { Space, Spin } from 'antd';

const SpinComp: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default SpinComp;