import { Button, Result } from 'antd'
import Common from '../../common/common'
import PropTypes from "prop-types"

const PermissionWrapper = ({permission,children}) => {
    const {roles,navigate} = Common()
  return (
    <div>
        {roles.includes(permission) ? (children ):
        (
            <Result status="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type='primary' onClick={()=>navigate("/project")}>Back Home</Button>} />
        )}
    </div>
  )
}

PermissionWrapper.propTypes = {
    permission:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired
}

export default PermissionWrapper