import  React from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
function Panier (authorized){
    let navigate = useNavigate();
    return (
        <div>
        <h2>Vos achats</h2> 
        <Button variant="secondary" onClick = {() => {navigate.push("/home")}}>continuer les achats </Button>
        <Button variant="secondary" >finaliser votre commande </Button>
        </div>
    )
}
export default Panier ;