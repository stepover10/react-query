import useSWR from 'swr'
import DeleteUser from '../app.componets/DeleteUser'

const Home = () => {
  const { data:res } = useSWR('/api/users')
  // const { data } = useSWR(['/api/users', 'index'])

  return (
    <div>      
      😁😁
      {res.data.result.map((v,i) => {
        return (
          <div key={i} style={{margin: '5px 0'}}>
            {v.name} -- {v.email}
            <DeleteUser userId={v.id} />
          </div>
        )
      })}
    </div>
  )
}

export default Home