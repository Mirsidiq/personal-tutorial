import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import {Card,CardTitle} from 'reactstrap'
export default function Main() {
    const navigate=useNavigate()
  return (
    <main className='main bg-white'>
       <div className="main__info text-center bg-light py-3">
       <h1 className="main__title">Salom hurmatli mijoz</h1>
        <p className='main__txt'>Quyidagi bo'limlardan birini tanlang</p>
       </div>
     <Container>
     <div className="main__body d-flex flex-column flex-md-row  align-items-md-center justify-content-md-center my-4">
        <Card className="main__body__info text-center  p-2">
            <CardTitle className="main__body__txt">Uyga vazifalar</CardTitle>
            <Button color='primary' className='mt-3' onClick={()=>navigate("/homework")}>Kirish</Button>
        </Card>
        <Card className="main__body__info text-center  p-2">
            <CardTitle className="main__body__txt">Imtihonlar</CardTitle>
            <Button color='primary' className='mt-3' onClick={()=>navigate("/exam")}>Kirish</Button>
        </Card>
        <Card className="main__body__info text-center  p-2">
            <CardTitle className="main__body__txt">To'lovlar</CardTitle>
            <Button color='primary' className='mt-3' onClick={()=>navigate("/fee")}>Kirish</Button>
        </Card>
       </div>
     </Container>
    </main>
  )
}
