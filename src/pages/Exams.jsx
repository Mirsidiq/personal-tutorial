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
                <th>Xato ishlangan misollar</th>
                <th>Bajarilmagan misollar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>7</td>
              </tr>
              <tr>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>8</td>
                <td>13</td>
              </tr>
              <tr>
                <td>12</td>
                <td>9</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p className="exam__result bg-primary text-white p-2">Jami : <span className="exam__result__number">30</span></p>
        <p className="exam__result bg-success text-white p-2">To'g'ri javoblar : <span className="exam__result__number">30</span></p>
        <p className="exam__result bg-danger text-white p-2">Xato javoblar : <span className="exam__result__number">30</span></p>
        <Button className="go__home__btn w-100" onClick={()=>navigate(-1)}>Ortga</Button>
        </Container>
    </div>
  )
}
