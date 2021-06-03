import Axios from 'axios'


function GuestItem({guest, getGuests}) {

    function handleDelete(){
        console.log('clicked delet');
        
        
       
         
       }

    return (
<tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td><button onClick={handleDelete = () => Axios.delete(`/guests/${guest.id}`).then(getGuests())
            } data-id={guest.id} >Delete</button></td>
          </tr>


    )
}

export default GuestItem