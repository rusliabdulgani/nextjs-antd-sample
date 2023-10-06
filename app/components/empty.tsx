import React from 'react';
import { Button, Empty } from 'antd';

const EmptyComp: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <span>
        Data not found
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);

export default EmptyComp;