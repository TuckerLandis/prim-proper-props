import Axios from "axios";


function GuestList ({list, getGuests}) {


  function handleDelete(){
   console.log('clicked delet');
   console.log(this);
   
  
    
  }


    return (
      <>

      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>

        <tbody>
        {list.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td><button onClick={handleDelete = () => Axios.delete(`/guests/${guest.id}`).then(getGuests())
            } data-id={guest.id} >Delete</button></td>
          </tr>
        ))}
      </tbody>
          </table>
</>
       
    )
}

export default GuestList