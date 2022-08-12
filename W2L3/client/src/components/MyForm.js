import { Form,Button } from 'react-bootstrap'




const MyForm = (props) => {

const {state,setState,error,setError}=props

const handleChange = (e)=>{
  // console.log(e)

  if(e.target.name == 'name'){
    if((e.target.value).trim().length < 2){
      setState({...state,name:{value:e.target.value,error:"Name must be at least 2 characters long"}})
      setError(true)
    }else{
      setState({...state,name:{value:e.target.value,error:null}})
      setError(false)
    }
  }
  if(e.target.name == 'email'){
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
      setState({...state,email:{value:e.target.value,error:"Must be a valid email"}})
      setError(true)
    }else{
      setState({...state,email:{value:e.target.value,error:null}})
      setError(false)
    }
  }
  if(e.target.name == 'password'){
    if((e.target.value).trim().length < 8){
      setState({...state,password:{value:e.target.value,error:"Password must be at least 8 characters long"}})
      setError(true)
    }else{
      setState({...state,password:{value:e.target.value,error:null}})
      setError(false)
    }
  }
  if(e.target.name == 'confirmPassword'){
    if((e.target.value) != state.password.value){
      setState({...state,confirmPassword:{value:e.target.value,error:"Passwords must match"}})
      setError(true)
    }else{
      setState({...state,confirmPassword:{value:e.target.value,error:null}})
      setError(false)
    }
  }


 }

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log("submitting")
  if(state.name.value === "" || state.email.value === "" || state.password.value === "" || state.confirmPassword.value === ""){
    console.log("not a valid attempt")
    return
  }
  if(error){
    console.log("not a valid attempt")
    return
  }else{
    setState({...state,submitted:true})
    console.log("valid attempt")
  }
  
 }


  return (
    <Form onSubmit={handleSubmit} className="border w-50 p-5 rounded shadow">
      <Form.Group>
            <h2 className="mb-4">Register</h2>
        </Form.Group>
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control onChange = {handleChange} value={state.name.value} name = "name" className={state.name.error?"border-danger":''}>
            </Form.Control>
            {
              state.name.error?
              <Form.Text id="passwordHelpBlock" muted>{state.name.error}</Form.Text>
              :null
            }
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control onChange = {handleChange} value={state.email.value} name = "email" className={state.email.error?"border-danger":''}>

            </Form.Control>
            {
              state.email.error?
              <Form.Text id="passwordHelpBlock" muted>{state.email.error}</Form.Text>
              :null
            }
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={state.password.value} onChange = {handleChange} name = "password"  className={state.password.error?"border-danger":''}>

            </Form.Control>
            {
              state.password.error?
              <Form.Text id="passwordHelpBlock" muted>{state.password.error}</Form.Text>
              :null
            }
        </Form.Group>
        <Form.Group>
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" value={state.confirmPassword.value} onChange = {handleChange} name = "confirmPassword"  className={state.confirmPassword.error?"border-danger":''}>

            </Form.Control>
            {
              state.confirmPassword.error?
              <Form.Text id="passwordHelpBlock" muted>{state.confirmPassword.error}</Form.Text>
              :null
            }
        </Form.Group>
        <Form.Group className="mt-4">
          {error?
            <Button disabled type="submit" >Register</Button>
            :
            <Button type="submit" >Register</Button>

          }
        </Form.Group>
        
        
    </Form>
  )
}

export default MyForm