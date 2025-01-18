import React, {useEffect, useState} from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config.service'

function Home() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        service.getPosts().then((posts) => {
            if(posts){
                setPost(posts.documents)
            }
        })
    }, [])
  if(post.length === 0) return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
  )
  return (
    <div className='w-full py-8'>
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Home