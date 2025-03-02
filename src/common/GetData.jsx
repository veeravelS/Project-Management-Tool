import axios from "axios"
import Common from "./common"
import { getProjectData, getProjectStatusData, getTaskData, getTaskStatusData, getUserData } from "../store/slice/adminSlice"


const  GetData =() =>{
  const {dispatch} = Common()
    const fetchProject = async()=>{
      try {
        const res = await axios
        .get(`${import.meta.env.VITE_APP_API_URL}project/projects`)
        const data=res.data
        dispatch(getProjectData(data))
      } catch (error) {
        console.log(error);        
      }
    }
    const fetchUser = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}user/getusers`)
        console.log(res)
        const Data = res.data;
        console.log(dispatch(getUserData(Data)));
      } catch (error) {
        console.log(error)
      }
    }
    const fetchTask = async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}task/listtask`);
        console.log(res);
        const Data = res.data;
        dispatch(getTaskData(Data))
      }
      catch(error){
        console.log(error);
      }
    }
    const fetchTaskStatus=async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}taskstatus/gettask`);
        console.log(res);
        const Data = res.data;
        dispatch(getTaskStatusData(Data))
      } catch (error) {
        console.log(error)
      }
    }
    const fetchProjectStatus=async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}projectstatus/getprojectstatus`);
        console.log(res);
        const Data = res.data;
        dispatch(getProjectStatusData(Data))
      } catch (error) {
        console.log(error)
      }
    }
    const fetchCheckinCheckout = async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}checkincheckout/checkin_checkout`);
        console.log(res);
      }
      catch(error){
        console.log(error)
      }
    }
    const getDataApi = async()=>{
        await Promise.all([fetchProject(),fetchUser(),fetchTask(),fetchTaskStatus(),fetchProjectStatus(),fetchCheckinCheckout()])
      }
  return {getDataApi,fetchTask}
}
export default GetData