import React from 'react'
// import './admin.css'
import { useEffect,useState ,useReducer} from 'react';
import axios  from 'axios'
function Index() {
    const [post, setPost] = useState({
        g: [],
      });
      const [reslovered, setReducer] = useReducer(x=>x+1,0);
      const [dellovered, setdelReducer] = useReducer(x=>x+1,0);

      const handleclick = async(userId,id,usertitle,usercomplain) => {
 
        const update= await axios.put(`https://localhost:7153/api/Complaints/${id}`,{
          id: id,
          title: usertitle,
          complain: usercomplain,
          resolve: true,
          userId: userId,
        })
        setReducer()
      };

      const handleclickdel = async(userId,id,usertitle,usercomplain) => {
 
        const update= await axios.delete(`https://localhost:7153/api/Complaints/${id}`,{
         id
        })
        setdelReducer()
      };
      useEffect(() => {
        axios.get("https://localhost:7153/api/Complaints").then(
          (res) => {
            setPost({ g: res.data });
            console.log(res.data);
          },
          (error) => {
            console.log("error in fetching");
          }
        );
      }, [reslovered,dellovered]);
  return (
    <div> 
    
    <table class="table table-striped table-hover">
				<thead>
					<tr>
						
						<th>Title</th>
						<th>Complain</th>
						<th>Resolve status</th>
						<th>Complain Id</th>
						<th>User Id</th>
					</tr>
				</thead>
                {post.g.map((add, i) => (
				<tbody key={i}>
					<tr>
						
						<td>{add.title}</td>
						<td>{add.complain}</td>
						<td>{add.resolve ? <th>true</th> : <th>false</th>}</td>
						<td>{add.id}</td>
                        <td>{add.userId}</td>
						<td>
                        <div class="relative">
							<button name="resolve" onClick={()=>handleclick(add.userId,add.id,add.title,add.complain)}  class="bg-blue-500 text-white rounded-md px-2 py-1"><i class="material-icons">&#x2714;</i> Resolve</button>
						</div>
                        <br></br>
                        <div class="relative">
							<button name="delete" onClick={()=>handleclickdel(add.userId,add.id,add.title,add.complain)} class="bg-blue-500 text-white rounded-md px-2 py-1"><i class="material-icons">&#x2718;</i> Delete</button>
						</div>
							</td>
					</tr>
					
                    </tbody>
                ))}
                    </table>
                    
		</div>	
        
  );
}

export default Index