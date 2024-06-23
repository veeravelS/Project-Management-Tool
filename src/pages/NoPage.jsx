import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"  onClick={()=>navigate("/project")}>Back Home</Button>}
    />
    </div>
  )
}

export default NoPage