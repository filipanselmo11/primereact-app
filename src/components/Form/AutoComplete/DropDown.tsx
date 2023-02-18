import { useState } from 'react';
import { AutoComplete  } from 'primereact/autocomplete';

function AutoCompleteComponent() {
    const [ value, setValue ] = useState("");
    const [items, setItems ] = useState<string[]>([])
    const search = (event:any) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item))
    }
    return(
        <div className="flex justify-content-center">
            <h1>DropDown</h1>
            <AutoComplete
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
                dropdown/>
        </div>
    )
}

export default AutoCompleteComponent