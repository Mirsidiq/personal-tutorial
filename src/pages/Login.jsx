import React from 'react'
import { Input,Button} from 'reactstrap'
export default function Login({setAccess}) {
    const checkLogin=(e)=>{
        e.preventDefault()
        let username=e.target[0].value.trim()
        let password=e.target[1].value.trim()
        if(username==="Mirsidiq" && password==="Mirzokirov"){
            setAccess(true)
        }
        else{
            setAccess(false)
        }
      }
  return (
    <div className='login bg-light d-flex justify-content-center align-items-center'>
        <form className='login__form p-4' onSubmit={(e)=>checkLogin(e)}>
        <Input className="login__input" placeholder="login" />
        <Input className="login__input mt-3" placeholder="parol" type='password' />
        <p className='login__wrong text-danger my-3'>Login yoki parol noto'g'ri qaytadan urinib ko'ring</p>
        <Button color='primary w-100 mt-3'>Kirish</Button>
        </form>
    </div>
  )
}
