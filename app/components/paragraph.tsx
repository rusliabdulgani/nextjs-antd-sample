import { Typography, Divider } from "antd"

const { Paragraph } = Typography

const ParagraphComponent = () => {
  return (
    <>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider>Text</Divider>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider dashed />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
    </>
  )
}

export default ParagraphComponent