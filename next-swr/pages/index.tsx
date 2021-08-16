import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from 'axios'
import Home from '../app.componets/Home'
import Create from '../app.componets/Create'

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/users');

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data);
  
  return (
    <div>
      hello!
      <Create />
      <Home />
    </div>
  )
}

export default Index

