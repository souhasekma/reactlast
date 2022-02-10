import  React , {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
//import iphonex from './components/image/iphonex.jpg' ;
//import iphonexr from './components/image/iphonexr.jpg' ;
//import iphone8plus from './components/image/iphone8plus.jpg' ;
//import iphone8plus from '../../image/iphone8plus';
import '../home/home.css'; 
import { Link } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";

class home extends Component {

    /*faireRedirection=()=> {
      let url ="/panier";
      let navigate = useNavigate();
      navigate.push(url);
    }*/
  
    render() {
      return (
        <div id='cards'>
        <Card style={{ width: '18rem' }}>
      
          <Card.Body>
            <Card.Title>iphone x</Card.Title>
            <Card.Text>
              etat de batterie = 95 % (d'origine)
              chargeur 
              ecouteur 
            </Card.Text>
            <Link to="/panier" className="btn btn-secondary">Ajouter</Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          
          <Card.Body>
            <Card.Title>iphone xr </Card.Title>
            <Card.Text>
            etat de batterie = 91 % (d'origine)
              chargeur 
              ecouteur 

            </Card.Text>
            <Link to="/panier" className="btn btn-secondary">Ajouter</Link>
          </Card.Body>
        </Card><Card style={{ width: '18rem' }}>
          
          <Card.Body>
            <Card.Title>iphone 8 plus </Card.Title>
            <Card.Text>
            etat de batterie = 85 %
              chargeur 
              ecouteur 
            </Card.Text>
            <Link to="/panier" className="btn btn-secondary">Ajouter</Link>
          </Card.Body>
        </Card>
      </div>
 );
 }
}
export default home ;

