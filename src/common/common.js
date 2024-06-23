import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const Common = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const roles = null;
    
    return{dispatch,navigate,roles}
}

export default Common

