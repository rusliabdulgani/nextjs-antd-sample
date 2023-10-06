import { Dropdown, Space, Typography } from "antd"
import classnames from "classnames"
import { items } from "@/app/utils"
import {
  DownOutlined,
} from '@ant-design/icons'

const { Text } = Typography
interface Props {
  dark: boolean
}
const DropdownComponent = ({ dark }: Props) => {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Text>
            Hover me
          </Text>
          <DownOutlined className={classnames('custom-icon', { 'dark': dark })} />
        </Space>
      </a>
    </Dropdown>
  )
}

export default DropdownComponent