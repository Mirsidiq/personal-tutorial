import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";
export default function Fee() {
    const navigate=useNavigate()
  return (
    <div className='fee'>
        <div className="fee__header bg-light py-2 text-center">
            <h3 className='fee__title'>To'lovlar bo'limi</h3>
            <p className="fee__user user">Mirsidiq Mirzokirov</p>
        </div>
        <Container>
        <Table bordered hover responsive className="mt-2">
            <thead>
              <tr>
                <th>To'langan sana</th>
                <th>To'lov miqdori (so'm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1/2/2023</td>
                <td>300 000</td>
              </tr>
            </tbody>
          </Table>
          <Button className='w-100' onClick={()=>navigate(-1)}>Ortga</Button>
        </Container>
    </div>
  )
}
