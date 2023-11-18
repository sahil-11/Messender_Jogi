import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Posts from "../Posts/Posts";
import Navbar from '../../pages/Navbar1'
import styles from './Stories.scss'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
function Example()
{
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:9000/showComplaints').then(
        (res) => res.json(),
      ),
  })
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

    return (
        <>        <Navbar />
        <div className="outer">
        <div className="useless"></div>
    <div className="Stories">
      {
        error ? "Something Went Wrong!" :isLoading ?"Loading" :
        data.map(story => (
       <Posts post={story} key={story.id} />
      ))
      }
    </div>
    <div className="useless"></div>
    </div>
    </>
)
}
export default function Stories()
{
  <QueryClientProvider client={queryClient}>
  <Example />
</QueryClientProvider>
  
}