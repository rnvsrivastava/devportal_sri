import React, {useState, useEffect } from 'react'
import axios from 'axios'
// import {useParams} from 'react-router-dom'
// import DisplayFaq from './DisplayFaq'
// import AddFaq from './AddFaq';
// Headers('Access-Control-Allow-Origin: *');
// Headers('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// Headers('Access-Control-Allow-Methods: Content-Type, XX-Auth-Token, Origin, Authorization');
import {
    isAdmin,
    isAuthenticated,
  } from 'services/self'

export function PaymentFaq() {
    
    const url = `https://i17lo28q69.execute-api.us-east-1.amazonaws.com/test/faq/payment`;
    const post_url = "https://i17lo28q69.execute-api.us-east-1.amazonaws.com/test/faq/payment";
    const put_url= "https://i17lo28q69.execute-api.us-east-1.amazonaws.com/test/faq/payment/";
    const delete_url = "https://i17lo28q69.execute-api.us-east-1.amazonaws.com/test/faq/payment/"

    const [faqs, setFaqs] = useState([''])
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [id, setId] = useState(null)

    useEffect(()=>{
        getAllFaqs();
    },[]);

    const getAllFaqs = () => {
        fetch(url,{
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
        }).then((result) => {
            result.json().then((resp) => {
                resp = resp.sort((a,b) => {
                    if(a.id < b.id)
                    return -1;
                })
                resp.sort();

                setFaqs(resp)
                setQuestion(resp[0].question)
                setAnswer(resp[0].answer)
                setId(resp[0].id)
            })
        })
        // faqs = faqs.sort((a,b) => {
        //     if(a.id < b.id)
        //     return -1;
        // })
    }

    function removeFaq(id)
    {
        fetch(`${delete_url}${id}`, {
            method: 'DELETE',
        }).then((result) => {
            result.json().then((resp) => {
                getAllFaqs()
            })
        })
    }

   

    function selectUser(id){
        // console.log(id)
        let faq = faqs[id-1]
        // console.log(faq.id)
        faqs.sort()
        for(let i=0;i<faqs.length;i++){
            console.log("id is",i)
            console.log(faqs[i].id)
        }
       
        setId(faq.id)
        setQuestion(faq.question)
        setAnswer(faq.question)
    }
   
    const addFaq = (e)=>{
        e.preventDefault()
        // const data = new FormData(e.target);
        // axios.post(post_url, {
        //     id:data.get(id),
        //     question: data.get(question),
        //     answer: data.get(answer)
        // });
    
        let faq = {id, question, answer}
        fetch(`${post_url}`, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(faq)
        }).then((result) => {
            result.json().then((resp) => {
                getAllFaqs()
            })
        })
    }
    const updateFaq = (e) => {
        e.preventDefault();
        let faq = {id, question, answer}
        fetch(`${put_url}${id}`, {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(faq)
        }).then((result) => {
            result.json().then((resp) => {
                getAllFaqs()
            })
        })
    }
        return(
        
         
            <div>
               
                <div>
                {
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Question</td>
                            <td>Answer</td>
                            <td>Operations</td>
                        </tr>
                     
                        { isAuthenticated() && isAdmin() ? 
                   <>
                   {
                            faqs.map((faq)=>{
                                return(
                                <tr>
                                <td>{faq.id}</td>
                                <td>{faq.question}</td>
                               
                                <td>{faq.answer}</td>
                                <span onClick={() => removeFaq(faq.id)} style ={{marginLeft:"10px", color:"red", cursor:"pointer"}}> Delete</span>
                                <span onClick={()=>selectUser(faq.id)} style ={{marginLeft:"10px", color:"red", cursor:"pointer"}}> Update</span>
                                </tr>)
                                
                            })
                        }
                    
                   
                   </> :
                   
                   <>
                        {
                            faqs.map((faq)=>{
                                return(
                                <tr>
                                <td>{faq.id}</td>
                                <td>{faq.question}</td>
                               
                                <td>{faq.answer}</td>
                                </tr>)
                                
                            })
                        }
                   </>}
                        
                       
                    </table>
                }
                </div>
               
               <div>
               { isAuthenticated() && isAdmin() ? 
               <>
                    <div>
                    <div>
                        <br></br>
                        <h3> Update FAQ </h3>
                    </div>

                    <form onSubmit={updateFaq}>
                    <label for="id" >ID</label>
                        <input  type="text" id="id" name="id" onChange={(e)=>{setId(e.target.value)}}></input>
                        <label for="question">Question</label>
                        <input  type="text" id="question" name="question"  onChange={(e)=>{setQuestion(e.target.value)}} ></input>
                        <label for="question">Answer</label>
                        <input  type="text" id="answer" name="answer"  onChange={(e)=>{setAnswer(e.target.value)}}></input>
                        <input type="submit" value="Update FAQ" ></input>
                        <br></br><br></br>
                    </form>

                </div>

                <div>
                    <div>
                        <h3> Add New FAQ </h3>
                    </div>

                    <form onSubmit={addFaq}>
                        <label for="id" >ID</label>
                        <input  type="text" id="id" name="id" onChange={(e)=>{setId(e.target.value)}}></input>
                        <label for="question" >Question</label>
                        <input  type="text" id="question" name="question" onChange={(e)=>{setQuestion(e.target.value)}}></input>
                        <label for="answer">Answer</label>
                        <input  type="text" id="answer" name="answer" onChange={(e)=>{setAnswer(e.target.value)}}></input>
                        <input type="submit" value="Add FAQ"></input>
                        <br></br><br></br>
                    </form>
                      
                </div>
               </>
               
               :
            
               <>
               
               </> }
               </div>
                
            </div> 
            
            
           )
      
}

export default PaymentFaq