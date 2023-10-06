import { Switch, Affix } from "antd"
import styles from './switch.module.css'
import { SwitchChangeEventHandler } from "antd/es/switch"

const SwitchComponent = ({ onChange }: { onChange: SwitchChangeEventHandler }) => {
  return (
    <div className={styles.switch__block}>
      <Affix offsetTop={10}>
        <Switch checkedChildren="dark" unCheckedChildren="light" defaultChecked onChange={onChange} />
      </Affix>
    </div>
  )
}

export default SwitchComponent