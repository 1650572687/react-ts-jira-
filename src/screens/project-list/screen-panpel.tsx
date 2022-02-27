import React from "react"
import { useEffect, useState } from "react"

interface User {
    id: string,
    name: string
}

interface ScreenPannalProps {
    param:{
        name: string,
        personId: string
    },
    setParams: (param:ScreenPannalProps['param'])=> void,
    user:User[]
}

export const ScreenPannal = ({param,setParams,user}:ScreenPannalProps) => {


    return <form action="">
        <input type="text" value={param.name} onChange={e => setParams({
            ...param,
            name:e.target.value
        })}/>

        <select value={param.personId} onChange={e => setParams({
            ...param,
            personId:e.target.value
        })}>
            <option value="">负责人</option>
            {
                user.map(item => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })
            }
        </select>
    </form>
}