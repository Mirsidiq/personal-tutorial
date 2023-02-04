import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";
export default function Homeworks() {
    const navigate=useNavigate()
  return (
    <div className="homework">
      <div className="homework__header bg-light py-2 text-center">
        <h3 className="homework__title">Uyga vazifalar bo'limi</h3>
        <p className="homework__user user">Mirsidiq Mirzokirov</p>
      </div>
      <Container>
        <div className="homework__table__wrapper mt-3">
          <h4 className="homework__table__title">
            1/2/2023 dan 28/2/2023 gacha berilgan vazifalar
          </h4>
          <Table bordered hover responsive className="mt-2">
            <thead>
              <tr>
                <th>Darslar</th>
                <th>Berilgan</th>
                <th>Bajarilgan</th>
                <th>Bajarilmagan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>15 ta</td>
                <td>10 ta</td>
                <td>5 ta</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button className="go__home__btn w-100" onClick={()=>navigate(-1)}>Ortga</Button>
      </Container>
    </div>
  );
}
