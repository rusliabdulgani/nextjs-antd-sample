import { Layout, Space } from "antd"
import { headerStyle, contentStyle, footerStyle, siderStyle } from '@/app/utils'

const { Header, Footer, Sider, Content } = Layout;

const LayoutComponent = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[5, 20]}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout hasSider>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout hasSider>
          <Content style={contentStyle}>Content</Content>
          <Sider style={siderStyle}>Sider</Sider>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
      <Layout>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  )
}

export default LayoutComponent