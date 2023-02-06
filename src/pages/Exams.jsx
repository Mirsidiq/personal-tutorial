import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Button,Table } from 'reactstrap'
export default function Exams() {
    const navigate=useNavigate()
  return (
    <div className="exam">
        <div className="exam__header bg-light py-2 text-center">
            <h3 className='exam__title'>Imtihon natijalari bo'limi</h3>
            <p className="exam__user user">Mirsidiq Mirzokirov</p>
        </div>
        <Container>
        <div className="homework__table__wrapper mt-3">
          <h4 className="homework__table__title">
            Fevral oyi uchun imtihon natijalari
          </h4>
          <Table bordered hover responsive className="mt-2">
            <thead>
              <tr>
                <th>Jami</th>
                <th>Xato javoblar</th>
                <th>To'g'ri javoblar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='bg-primary'>30</td>
                <td className='bg-danger'>15</td>
                <td className='bg-success'>15</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button className="go__home__btn w-100" onClick={()=>navigate(-1)}>Ortga</Button>
        </Container>
    </div>
  )
}
