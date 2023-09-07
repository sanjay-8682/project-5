import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Layout.css'
import 'bootstrap-icons/font/bootstrap-icons.css';





function  Layout() {
  return (
    <div id='Back'>
      <div className='back'>
        <h3 id='sales'>Sales Information</h3> 
        <Row>
        <Col id='SEARCH'>.</Col>
      </Row>
      <i id='ser' class="bi bi-search"> Search</i>
      
         <div id='bell' class="bi bi-bell"></div>
     <Container>
      <Row>
        <Col id='cust'>Customer</Col>
        <Col id='invo'>Invoice ID</Col>
        <Col id='sd'>Start Date</Col>
        <Col id='ed'>End Date</Col>

      </Row>
    </Container>
    <Container>
      <Row>
        <Col id='ECN'>Enter Customer Name</Col>
        <Col id='EII'>Enter Invoice Id</Col>
        <Col id='SD'>Start Date</Col>
        <Col id='ED'>End Date</Col>

      </Row>
    </Container>

    <Table responsive="sm">
        <thead>
          <tr>
            <th id='App' class="bi bi-app"></th>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payable Amount</th>
            <th>Paid Amount</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
          </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>
          <tr>
            <td id='app' class="bi bi-app"></td>
            <td id='inv'>#AHGA68</td>
            <td>23/09/2022</td>
            <td>Jacob Morcus</td>
            <td>$100</td>
            <td>$000</td>
            <td>$000</td>
           </tr>

          






        </tbody>
      </Table>

      

 


 


    </div>

    </div>
     
  );
}

export default  Layout;