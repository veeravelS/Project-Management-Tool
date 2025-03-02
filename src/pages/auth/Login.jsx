import { Button, Form, Input, message } from "antd"
import "./Login.css"
import axios from "axios"
import Common from "../../common/common"


const Login = () => {
    const {navigate} = Common()
    const onFinish = async(data)=>{
<<<<<<< HEAD
        try {
           const response= await axios.post("http://192.168.0.112:3000/api/user/login",data,{headers:{"Access-Control-Allow-Origin": "*","Content-Type":"application/json"}})
           console.log(response );
           console.log(response.data.user.username)
           sessionStorage.setItem("token",response.data.token)
           sessionStorage.setItem("username",JSON.stringify(response.data.user.username))
           message.success("login successful");
           navigate("/project");
        } catch (error) {
=======
        console.log(import.meta.env.VITE_APP_API_URL)
           await axios.post(`${import.meta.env.VITE_APP_API_URL}user/login`,data,{headers:{"Access-Control-Allow-Origin": "*","Content-Type":"application/json"}})
           .then((response)=>{
            sessionStorage.setItem("token",response.data.token)
            sessionStorage.setItem("username",JSON.stringify(response.data.user.username))
            message.success("login successful");
            navigate("/project");
           })
           .catch ((error)=> {
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
            console.log(error);
            message.error("login failed");
        })
        } 

    
  return (
    <div className="Login-Container">
    <div className="Login-Form">
    <Form onFinish={onFinish} layout="vertical" className="Form" name="basic"  labelCol={{
        span: 8,
      }}  wrapperCol={{
        span: 896,
      }}>
        <h2 style={{textAlign:"center",marginBottom:"20px"}}>Login</h2>
        <Form.Item
        name="email"
        label={<label style={{color:"white"}}>Email</label>}
        rules={[
          {
            required: true,
            message:"please enter your email"
          },
        ]}
        style={{width:"100%",color:"white"}}
        className="Form-item"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label= {<label style={{color:"white"}}>Password</label>}
        rules={[
          {
            required: true,
            message:"please enter your password"
          },
        ]}
        style={{width:"100%",color:"white"}}
        className="Form-item"
      >
        <Input.Password />
      </Form.Item>
        <Button style={{width:"100%",marginTop:"18px"}} type="primary" htmlType="submit">Login</Button>
        <Button style={{width:"100%",marginTop:"15px",backgroundColor:"green"}} type="primary" htmlType="submit"> Create Account</Button>
    </Form> 
    </div>
    </div>
  )
}

export default Login