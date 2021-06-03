

function PartyLeader ({guestList}) {


    return(
        <>
        <h2>Party Leader</h2>
        {guestList[0] && <h3>{guestList[0].name}</h3>}
        <h2>Add a new guest</h2>
        </>
    )

}

export default PartyLeader;