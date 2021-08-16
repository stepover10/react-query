import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from 'axios'
import Home from '../app.componets/Home'

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/users');

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  
  return (
    <div>
      hello!

     <Home />
    </div>
  )
}

export default Index

