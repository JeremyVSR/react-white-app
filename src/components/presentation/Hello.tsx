import * as React from "react";
import { map } from "lodash";
import { Alert, Button } from 'react-bootstrap';
import { HelloProps } from "./typings";

const Hello = ({ onClick1, onClick2, onClick3, helloMessage}: HelloProps) =>
    <div>
        <h1> {helloMessage} </h1>
        <ul>
            <li><button onClick={() => onClick1("test")}>Button 1</button></li>
            <li><button onClick={onClick2}>Button 2</button></li>
            <li><button onClick={onClick3}>Button 3</button></li>
         </ul>   
    </div>;
export default Hello;
