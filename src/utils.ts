import { useEffect,useState } from "react"

//解决0时被判断为false 的问题
const isFalse = (value: number) =>  value === 0 ? true : value

export const cleanApi = (obj: any) => {
  const getObj = obj
  Object.keys(getObj).map(key => {
    const value = getObj[key]
    if(!isFalse(value)){
      delete getObj[key]
    }
    
  })
  return getObj
}

export const useMount = (callback:() => void) => {
  useEffect(()=>{
    callback();
  },[])
}

export const useDebounce = (value:any,delay:number) => {
  const [debounceParam,setDebounceParam] = useState(value)
  useEffect(()=>{
    //每次在value变化后设置一个定时器，定时器内 设置变化的值
    let timeout = setTimeout(()=>{setDebounceParam(value)},delay)
    //在上一个useEffect结束后，下一个userEffect开始之前执行，作用：清理上一次的setDebounceParam
    return () => clearTimeout(timeout) 
  },[value,delay])

  return debounceParam

}