import React, {useState, useEffect } from 'react'

function FAQ() {
     
    const url = `http://44.212.42.189:8080/faqs`;
    const [faqs, setFaqs] = useState([''])
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [id, setId] = useState(null)


    useEffect(()=>{
        getAllFaqs();
    },[]);

    const getAllFaqs = () => {
        fetch(url).then((result) => {
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
    }

    return(
        <div>
            
            <h3> List of Faqs</h3>
            <div>
            {
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Question</td>
                        <td>Answer</td>
                        <td>Operations</td>
                    </tr>
                 
                    
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
                    
                   
                </table>
            }
            </div>
        </div>

    )
}

export default FAQ