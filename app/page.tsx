'use client'

import styles from './page.module.css'
import {
  Button,
  ConfigProvider,
  Divider,
  Typography,
  FloatButton,
  Space,
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Rate,
  Card,
  Skeleton,
  Tooltip,
  theme,
  Empty,
  Segmented
} from 'antd'
import { CustomerServiceOutlined, UserOutlined } from '@ant-design/icons'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useState } from 'react'
import * as lightTheme from '@/theme/light.json'
import * as darkTheme from '@/theme/dark.json'
import * as lightComponent from '@/theme/light.component.json'
import * as darkComponent from '@/theme/dark.component.json'
import './custom-icon-styles.css'
import dynamic from 'next/dynamic';
import {
  optionsCascader,
  mockVal
} from './utils'
const StepsComponent = dynamic(() => import('./components/steps'))
const MenuComponent = dynamic(() => import('./components/menu'))
const SwitchComponent = dynamic(() => import('./components/switch'))
const BreadCrumbComponent = dynamic(() => import('./components/breadcrumb'))
const TitleComponent = dynamic(() => import('./components/title'))
const ParagraphComponent = dynamic(() => import('./components/paragraph'))
const GridComponent = dynamic(() => import('./components/grid'))
const LayoutComponent = dynamic(() => import('./components/layout'))
const DropdownComponent = dynamic(() => import('./components/dropdown'))
const FormComponent = dynamic(() => import('./components/form'))
const MentionsComponent = dynamic(() => import('./components/mentions'))
const RadioComponent = dynamic(() => import('./components/radio'))
const SelectComponent = dynamic(() => import('./components/select'))
const SliderComponent = dynamic(() => import('./components/slider'))
const TimePickerComponent = dynamic(() => import('./components/timepicker'))
const TransferComponent = dynamic(() => import('./components/transfer'))
const TreeSelectComponent = dynamic(() => import('./components/treeselect'))
const Upload1 = dynamic(() => import('./components/upload1'))
const Upload2 = dynamic(() => import('./components/upload2'))
const Avatar1 = dynamic(() => import('./components/avatar1'))
const BadgeComp = dynamic(() => import('./components/badge'))
const CarouselComp = dynamic(() => import('./components/carousel'))
const CollapseComp = dynamic(() => import('./components/collapse'))
const DescriptionComp = dynamic(() => import('./components/description'))
const EmptyComp = dynamic(() => import('./components/empty'))
const Image1 = dynamic(() => import('./components/image1'))
const Image2 = dynamic(() => import('./components/image2'))
const ListComp = dynamic(() => import('./components/list'))
const PopOverComp = dynamic(() => import('./components/popover'))
const QRCodeComp = dynamic(() => import('./components/qrcode'))
const TableComp = dynamic(() => import('./components/table'))
const TabsComp = dynamic(() => import('./components/tab'))
const TagComp = dynamic(() => import('./components/tag'))
const TimelineComp = dynamic(() => import('./components/timeline'))
const TourComp = dynamic(() => import('./components/tour'))
const TreeComp = dynamic(() => import('./components/tree'))
const AlertComp = dynamic(() => import('./components/alert'))
const DrawerComp = dynamic(() => import('./components/drawer'))
const MessageComp = dynamic(() => import('./components/message'))
const ModalComp = dynamic(() => import('./components/modal'))
const NotificationComp = dynamic(() => import('./components/notification'))
const PopConfirmComp = dynamic(() => import('./components/popconfirm'))
const ProgressComp = dynamic(() => import('./components/progress'))
const ResultComp = dynamic(() => import('./components/result'))
const SpinComp = dynamic(() => import('./components/spin'))

const { Text } = Typography
const { RangePicker } = DatePicker

interface DataPost {
  userId: number
  id: number
  title: string
  body: string
}

export default function Home() {
  const [dark, setDark] = useState<boolean>(true)
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [data, setData] = useState<DataPost[]>([])

  function onChange() {
    setDark(prev => !prev)
  }

  console.log('fetch...')

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <ConfigProvider theme={{ token: dark ? darkTheme : lightTheme, components: dark ? darkComponent : lightComponent }}>
      <div className={`${styles.main} ${dark ? styles.dark : null}`}>
        <MenuComponent />
        <SwitchComponent onChange={onChange} />
        <div className={styles.component__block}>
          <div className={styles.column}>
            <Space direction="vertical" style={{ width: '100%' }} size={[5, 20]}>
              <BreadCrumbComponent />
              <TitleComponent />
              <ParagraphComponent />
              <Divider />
              <GridComponent />
              <LayoutComponent />
              <DropdownComponent dark={dark} />
              <StepsComponent />
              <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="input here"
              />
              <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={optionsCascader} />
              <Checkbox onChange={onChangeCheckBox}>Checkbox</Checkbox>
              <Checkbox disabled>Checkbox</Checkbox>
              <ColorPicker showText />
              <RangePicker />
              <FormComponent />
              <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
              <InputNumber min={1} max={100} defaultValue={3} />
              <MentionsComponent />
              <RadioComponent />
              <Rate />
              <SelectComponent />
              <SliderComponent />
              <TimePickerComponent />
              <TransferComponent />
              <TabsComp />
              <TagComp />
              <TourComp />
              <TreeComp />
              <AlertComp />
              <DrawerComp />
              <SpinComp />
            </Space>
            <FloatButton
              shape="circle"
              type="primary"
              style={{ right: 20, bottom: 20 }}
              icon={<CustomerServiceOutlined />}
            />
          </div>
          <div className={styles.column}>
            <Space direction='vertical' size={[5, 20]}>
              <Button style={{ width: '100px' }}>next js</Button>
              <Tooltip title="prompt text">
                <Text>Tooltip will show on mouse enter.</Text>
              </Tooltip>
              <TreeSelectComponent />
              <Space direction='horizontal' size={20}>
                <Upload1 />
                <Upload2 />
              </Space>
              <Avatar1 />
              <BadgeComp />
              <CarouselComp />
              <CollapseComp />
              <DescriptionComp />
              <Empty />
              <EmptyComp />
              <Image1 />
              <Image2 />
              <ListComp />
              <PopOverComp />
              <QRCodeComp />
              <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
              <TableComp />
              <TimelineComp />
              <MessageComp />
              <ModalComp />
              <NotificationComp />
              <PopConfirmComp />
              <ProgressComp />
              <ResultComp />
            </Space>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}