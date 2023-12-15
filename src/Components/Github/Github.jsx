import { useLoaderData } from "react-router-dom"

function Github() {
    // const[data, setData] = useState([])
    // const gitId = useId()
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${gitId}`)
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //     console.log(data)
    //     setData(data)
    // })
    // },[])

    const data = useLoaderData()
  return (
    <div>
       Github : {data.login}
       <img src={data.avatar_url} alt="Github profile" width={300} />
    </div>
  )
}

export default Github
 
export const githubInfoloaders = async()=>{
    const response = await fetch('https://api.github.com/users/utkarsh-1235')
    return response.json()
}