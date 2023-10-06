import React, { useState } from 'react';
import { Button, Drawer, Typography } from 'antd';

const { Text } = Typography

const DrawerComp: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <Text>Some contents...</Text>
        <br />
        <Text>Some contents...</Text>
        <br />
        <Text>Some contents...</Text>
      </Drawer>
    </>
  );
};

export default DrawerComp;