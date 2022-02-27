import React from "react"

interface User {
    id: string,
    name: string
}

interface List {
    id: string,
    name: string,
    personId: string,
    organization: string,
    created: string
}

interface ListProps {
    list: List[],
    user: User[]
}

export  const List = ({list,user}:ListProps) => {
    return <table>
        <thead>
            <tr>
                <td>名称</td>
                <td>负责人</td>
            </tr>
        </thead>
        <tbody>
        {
            list.map(item => {
                return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{user.find(v => v.id === item.personId)?.name || '未知'}</td>

                    </tr>
                )
            })
        }
        </tbody>
    </table>
}