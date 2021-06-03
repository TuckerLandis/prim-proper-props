import {useState} from 'react';

import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies ({guestList}) {

function getCount(guestList) {
  return guestList.length * 2;
}

let count = getCount(guestList)

    return (
        <>
            <h2>Dinner Supplies</h2>

<SilverWare name="Spoons" count={count} />
<SilverWare name="Forks" count={count} />
<SilverWare name="Knives" count={count} />


        </>
    )
}

export default DinnerSupplies;