import { Steps } from "antd"
import { description } from "@/app/utils"

const StepsComponent = () => {
  return (
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default StepsComponent