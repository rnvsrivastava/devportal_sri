
import React, {useState, useEffect} from 'react'
import { fetchUsage } from 'services/api-catalog'

function SampleApi(){
    const url = "https://reqres.in/api/users/"
    const [pages, setPages] = useState([""])
    const [page, setPage] = useState([""])
    const [per_page, setPer_page] = useState([""])
    
    useEffect(()=>{
        getAll()
    },[]);

    const getAll = () => {
        fetch(url).then((resp)=>{
            return (resp.json())      
        }).then((res)=>{
            setPages(res.data)
        })
    }
    

    return(
         <div className='faqs'>
            
            <h3> List of Questions</h3>
            <div>
            {
                <table>
                    <tr>
                       
                        <td>Answer</td>
                        <td>Operations</td>
                    </tr>
                 
                    
                    {
                        pages.map((page)=>{
                            return(
                            <tr>
                            
                            <td>{page.first_name}</td>
                            <td>{page.last_name}</td>
                            </tr>)
                            
                        })
                    }
                    
                   
                </table>
            }
            </div>
        </div>
    )
}

export default SampleApi