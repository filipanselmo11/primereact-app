import { useEffect, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../../services/CountryService'

interface Country {
    name: string,
    code: string,
}

export default function Objects() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [filteredCountries, setFilteredCountries] = useState<Country>();

    const search = (event:any) => {
        setTimeout(() => {
            let _filteredCountries;
            if(!event.query.trim().length) {
                _filteredCountries = [...countries];
            } else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            setFilteredCountries(_filteredCountries);
        }, 250)
    }

    useEffect(() => {
        CountryService.getCountries().then((data:any) => setCountries(data));
    }, []);

    return (
        <div className="flex justify-content-center">
            <AutoComplete
                field="name"
                value={selectedCountry}
                suggestions={filteredCountries}
                completeMethod={search}
                onChange={(e:any) => setSelectedCountry(e.value)}
                />
        </div>
    )
}
