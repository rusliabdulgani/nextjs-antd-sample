import React, { useState } from 'react';
import { Slider, Switch, Typography } from 'antd';

const { Text } = Typography
const SliderComponent: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      <Text>Disabled:</Text>
      <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};

export default SliderComponent;