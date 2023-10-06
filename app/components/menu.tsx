import { useState } from "react";
import { Menu, Affix, Typography } from "antd"
import type { MenuProps } from 'antd'
import { itemsMenu } from "@/app/utils";

const { Text } = Typography
const MenuComponent = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Affix>
      <Menu onClick={onClick} selectedKeys={['key1']} mode="horizontal" items={itemsMenu}>
      </Menu>
    </Affix>
  )


}

export default MenuComponent