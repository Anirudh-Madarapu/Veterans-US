// src/data.ts
import { Veteran } from './types';

const wars = ['World War I', 'World War II', 'Korean War', 'Vietnam War'];
const services = ['Army', 'Navy', 'Air Force', 'Marines'];
const homeStates = ['California', 'Texas', 'Florida', 'New York', 'Illinois'];
const majors = ['Computer Science', 'Mathematics', 'History', 'Physics', 'Chemistry'];
const greekOrganizations = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];

const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

const generateVeteran = (id: number): Veteran => ({
    Id: id,
    Name: `Veteran ${id}`,
    GivenNames: `GivenNames${id}`,
    Surname: `Surname${id}`,
    BirthDate: `1900-01-01`,
    BirthLocation: `Location${id}`,
    Father: `Father${id}`,
    Mother: `Mother${id}`,
    Siblings: `Siblings${id}`,
    Spouse: `Spouse${id}`,
    Children: `Children${id}`,
    OtherFamily: `OtherFamily${id}`,
    HighSchool: `HighSchool${id}`,
    HighSchoolLocation: `HighSchoolLocation${id}`,
    HighSchoolActivities: `HighSchoolActivities${id}`,
    HomeTown: `HomeTown${id}`,
    HomeState: getRandomElement(homeStates),
    EnteredKnox: `EnteredKnox${id}`,
    ClassYear: `19${Math.floor(Math.random() * 100)}`,
    Major: getRandomElement(majors),
    Sports: `Sports${id}`,
    Honored: `Honored${id}`,
    Activities: `Activities${id}`,
    GreekOrganization: getRandomElement(greekOrganizations),
    EnlistmentDate: `1940-01-01`,
    EnlistmentLocation: `EnlistmentLocation${id}`,
    EnlistmentNumber: `EnlistmentNumber${id}`,
    War: getRandomElement(wars),
    Service: getRandomElement(services),
    SerialNumber: `SerialNumber${id}`,
    Rank: `Rank${id}`,
    Unit: `Unit${id}`,
    ServiceHistory: `ServiceHistory${id}`,
    Incident: `Incident${id}`,
    IncidentDate: `1944-01-01`,
    IncidentLocation: `IncidentLocation${id}`,
    CasualtyData: `CasualtyData${id}`,
    YearOfDeath: `1945`,
    DateOfDeath: `1945-01-01`,
    AgeAtDeath: `25`,
    LocationOfDeath: `LocationOfDeath${id}`,
    OriginallyBuried: `OriginallyBuried${id}`,
    Burial: `Burial${id}`,
    PlotLocation: `PlotLocation${id}`,
    CivilianCenotaph: `CivilianCenotaph${id}`,
    MilitaryCenotaph: `MilitaryCenotaph${id}`,
    Links: `Links${id}`,
    FindAGrave: `FindAGrave${id}`,
    Awards: `Awards${id}`,
    Citation: `Citation${id}`,
    Remarks: `Remarks${id}`,
    KnoxID: `KnoxID${id}`,
    LastUpdated: `2023-01-01`,
    Photos: `Photos${id}`,
});

export const veterans: Veteran[] = Array.from({ length: 50 }, (_, i) => generateVeteran(i + 1));