import Button from 'react-bootstrap/Button';
export function ButtonComponent(props){
   return (
    <>
        <Button variant='warning' type='submit'>{ props.value }</Button>
    </>
   )
}