

function GuestList ({list}) {
    return (
        <tbody>
        {list.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
          </tr>
        ))}
      </tbody>
    )
}

export default GuestList