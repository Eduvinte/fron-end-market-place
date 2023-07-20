import React from 'react';
import Form from 'react-bootstrap/Form';



export function InputEmail(props) {  
    return (
      <>
        <Form.Control 
        size="lg" 
        type={props.type}
        placeholder={ props.placeholder }
        value={props.value} // Pasamos el valor del input desde el componente padre
        onChange={props.onChange} // 
        />
      </>
    );
  }
