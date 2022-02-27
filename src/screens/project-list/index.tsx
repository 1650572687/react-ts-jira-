import React from "react"
import {List} from './list'
import {ScreenPannal} from './screen-panpel'
import { useEffect, useState } from "react"
import {cleanApi,useMount,useDebounce} from '../../utils'
import qs from 'qs'


const API  = process.env.REACT_APP_URL

const ProjectList = () => {
    const [param, setParams] = useState({
        name:'',//项目名称
        personId:''  //人员姓名
    })

    const [user, setUser] = useState([]) //select中选择的用户列表

    const [list, setList] = useState([])

    const debounceParams = useDebounce(param,500)

    //获取列表数据
    const getLists = ()=>{
        fetch(`${API}/projects?${qs.stringify(cleanApi(debounceParams))}`).then(async response=>{
            if(response.ok){
                let result = await response.json()
                setList(result)
                console.log('保存的请求结果是===',list)

            }
        })
    }

    //获取user数据
    const getUsers = () => {
        fetch(`${API}/users`).then(async response=>{
            if(response.ok){
                let result = await response.json()
                setUser(result)

            }
        })
    }

    useMount(()=>{
        getUsers();
    })


    useEffect(()=>{
        getLists();
        console.log('qs模块处理之后的数据是==',qs.stringify(cleanApi(param)))
    },[debounceParams])


    return (
        <div>
            <ScreenPannal param={param} setParams={setParams} user={user}/>  
            <List list={list} user={user}/>
        </div>
    )
}

export default ProjectList