import { Button, Form, Input, message } from "antd"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate=useNavigate()
    const onFinish = async(data)=>{
        try {
           const response= await axios.post("http://192.168.0.112:3000/api/user/login",data,{headers:{"Access-Control-Allow-Origin": "*","Content-Type":"application/json"}})
           console.log(response.data.token)
           sessionStorage.setItem("token",response.data.token)
           message.success("login successful");
           navigate("/project");
        } catch (error) {
            console.log(error);
            message.success("login failed");
        }
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