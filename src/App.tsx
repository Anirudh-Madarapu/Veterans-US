// src/App.tsx
import React, { useState } from 'react';
import { veterans } from '/workspaces/Veterans-US/src/data.ts';
import Select from 'react-select';
import './App.css';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        war: '',
        service: '',
        yearOfDeath: '',
        ageAtDeath: '',
        classYear: '',
        major: '',
        greekOrganization: '',
        homeState: '',
    });

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (filterName: string, selectedOption: any) => {
        setFilters({ ...filters, [filterName]: selectedOption ? selectedOption.value : '' });
    };

    const filteredVeterans = veterans.filter(veteran => {
        return (
            veteran.Surname.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filters.war ? veteran.War === filters.war : true) &&
            (filters.service ? veteran.Service === filters.service : true) &&
            (filters.yearOfDeath ? veteran.YearOfDeath === filters.yearOfDeath : true) &&
            (filters.ageAtDeath ? veteran.AgeAtDeath === filters.ageAtDeath : true) &&
            (filters.classYear ? veteran.ClassYear === filters.classYear : true) &&
            (filters.major ? veteran.Major === filters.major : true) &&
            (filters.greekOrganization ? veteran.GreekOrganization === filters.greekOrganization : true) &&
            (filters.homeState ? veteran.HomeState === filters.homeState : true)
        );
    });

    const warOptions = Array.from(new Set(veterans.map(v => v.War))).map(war => ({ value: war, label: war }));
    const serviceOptions = Array.from(new Set(veterans.map(v => v.Service))).map(service => ({ value: service, label: service }));
    const yearOfDeathOptions = Array.from(new Set(veterans.map(v => v.YearOfDeath))).map(year => ({ value: year, label: year }));
    const ageAtDeathOptions = Array.from(new Set(veterans.map(v => v.AgeAtDeath))).map(age => ({ value: age, label: age }));
    const classYearOptions = Array.from(new Set(veterans.map(v => v.ClassYear))).map(year => ({ value: year, label: year }));
    const majorOptions = Array.from(new Set(veterans.map(v => v.Major))).map(major => ({ value: major, label: major }));
    const greekOrganizationOptions = Array.from(new Set(veterans.map(v => v.GreekOrganization))).map(org => ({ value: org, label: org }));
    const homeStateOptions = Array.from(new Set(veterans.map(v => v.HomeState))).map(state => ({ value: state, label: state }));

    return (
        <div className="App">
            <h1>Veterans Database</h1>
            <input
                type="text"
                placeholder="Search by last name..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="filters">
                <Select
                    placeholder="War/Conflict"
                    options={warOptions}
                    onChange={(selectedOption) => handleFilterChange('war', selectedOption)}
                />
                <Select
                    placeholder="Military Service"
                    options={serviceOptions}
                    onChange={(selectedOption) => handleFilterChange('service', selectedOption)}
                />
                <Select
                    placeholder="Year of Death"
                    options={yearOfDeathOptions}
                    onChange={(selectedOption) => handleFilterChange('yearOfDeath', selectedOption)}
                />
                <Select
                    placeholder="Age at Death"
                    options={ageAtDeathOptions}
                    onChange={(selectedOption) => handleFilterChange('ageAtDeath', selectedOption)}
                />
                <Select
                    placeholder="Class Year"
                    options={classYearOptions}
                    onChange={(selectedOption) => handleFilterChange('classYear', selectedOption)}
                />
                <Select
                    placeholder="Major"
                    options={majorOptions}
                    onChange={(selectedOption) => handleFilterChange('major', selectedOption)}
                />
                <Select
                    placeholder="Fraternity"
                    options={greekOrganizationOptions}
                    onChange={(selectedOption) => handleFilterChange('greekOrganization', selectedOption)}
                />
                <Select
                    placeholder="Home State"
                    options={homeStateOptions}
                    onChange={(selectedOption) => handleFilterChange('homeState', selectedOption)}
                />
            </div>
            <div className="veterans-list">
                {filteredVeterans.map(veteran => (
                    <div key={veteran.Id} className="veteran-card">
                        <h2>{veteran.Name}</h2>
                        <p><strong>Surname:</strong> {veteran.Surname}</p>
                        <p><strong>War:</strong> {veteran.War}</p>
                        <p><strong>Service:</strong> {veteran.Service}</p>
                        <p><strong>Year of Death:</strong> {veteran.YearOfDeath}</p>
                        <p><strong>Age at Death:</strong> {veteran.AgeAtDeath}</p>
                        <p><strong>Class Year:</strong> {veteran.ClassYear}</p>
                        <p><strong>Major:</strong> {veteran.Major}</p>
                        <p><strong>Fraternity:</strong> {veteran.GreekOrganization}</p>
                        <p><strong>Home State:</strong> {veteran.HomeState}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;