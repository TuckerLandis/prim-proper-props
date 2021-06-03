import Axios from 'axios'


function GuestItem({guest, getGuests}) {

   

    return (
<tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td><button onClick={() => Axios.delete(`/guests/${guest.id}`).then(getGuests())
            } data-id={guest.id} >Delete</button></td>
          </tr>


    )
}

export default GuestItem