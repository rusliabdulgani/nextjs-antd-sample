import { Row, Col, Typography, theme } from "antd"

const { Text } = Typography
const { useToken } = theme

const GridComponent = () => {
  const { token } = useToken()

  return (
    <>
      <Row>
        <Col span={24} style={{ backgroundColor: token.colorError }}>
          <Text>col</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ backgroundColor: token.colorError }}>
          <Text>col-12</Text>
        </Col>
        <Col span={12} style={{ backgroundColor: token.colorSuccess }}>
          <Text>col-12</Text>
        </Col>
      </Row>
      <Row>
        <Col span={8} style={{ backgroundColor: token.colorError }}>
          <Text>col-8</Text>
        </Col>
        <Col span={8} style={{ backgroundColor: token.colorSuccess }}>
          <Text>col-8</Text>
        </Col>
        <Col span={8} style={{ backgroundColor: token.colorInfo }}>
          <Text>col-8</Text>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={6} style={{ backgroundColor: token.colorError }}>
          <Text>col-6</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: token.colorSuccess }}>
          <Text>col-6</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: token.colorInfo }}>
          <Text>col-6</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: token.colorWarning }}>
          <Text>col-6</Text>
        </Col>
      </Row>
    </>
  )
}

export default GridComponent