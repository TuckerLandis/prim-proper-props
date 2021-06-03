
import GuestItem from '../GuestItem/GuestItem'


function GuestList ({list, getGuests}) {


  


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
        
          <GuestItem key={guest.id} guest={guest} getGuests={getGuests}/>

        ))}
      </tbody>
          </table>
</>
       
    )
}

export default GuestList