
export default function Friend({friend}){
    const handleStyle={
         border: '2px solid black',
        
        margin: '10px'
    }
    const {name,email,phone}=friend;
    return(

        <div style={handleStyle}>
            <h4 >Name: {name} </h4>
            <h4 >Email: {email} </h4>
            <h4 >Phone: {phone} </h4>
        
        </div>
    )
}