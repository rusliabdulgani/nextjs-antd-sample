import { Card, Typography, Skeleton } from "antd"

interface DataPost {
  userId: number
  id: number
  title: string
  body: string
}

const { Text } = Typography

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return { props: { posts } }
}

const CardComponent = ({ posts }: { posts: DataPost[] }) => {
  return (
    <>
      {
        posts.length > 0 ?
          posts.slice(0, 5).map(item =>
          (
            <Card key={item.id} title={item.title}>
              <Text>{item.body}</Text>
            </Card>
          ))
          :
          <Skeleton active />
      }

    </>
  )
}

export default CardComponent