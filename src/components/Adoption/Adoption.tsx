import React, {  useState } from 'react'
import { FilteredDogsType } from '../../constants/filteredDogs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdoptionFilter from './AdoptionFilter';
import AdoptionSearchResults from './AdoptionSearchResults';
import PanelBody from '../../common/PanelBody';


function Adoption() {

  const [selectedBreed, setSelectedBreed] = useState<string | null>("");
  const [selectedAge, setSelectedAge] = useState<number | null>(0);
  const [selectedAgeInString, setSelectedAgeInString] = useState<string | null>("");
  const [selectedGender, setSelectedGender] = useState<string | null>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [autoSelectValue, setAutoSelectValue] = useState<string | null>("");
  const [showFilteredBreed, setShowFilteredBreed] = useState(false);


  const handleSubmit = (values: FilteredDogsType) => {
    setSelectedAge(values.age);
    setSelectedAgeInString(values.ageInString);
    setSelectedGender(values.gender);
    setSelectedBreed(values.breed);
    setAutoSelectValue(values.breed);
    setShowFilteredBreed(true);
  };


  return (
    <main className="main-content">
      <PanelBody title="Pawfect Companions">
        <p className="sub-title">
          Adopting a dog not only provides a loyal friend but also saves a life. It's often more affordable than buying from a breeder and has health benefits like lowering stress levels and improving mood. Consider adopting a furry pal today.
        </p>
        <AdoptionFilter handleSubmit={handleSubmit} autoSelectValue={autoSelectValue} setAutoSelectValue={setAutoSelectValue} submitting={submitting} />
        {<AdoptionSearchResults selectedBreed={selectedBreed} selectedGender={selectedGender} selectedAgeInString={selectedAgeInString} showFilteredBreed={showFilteredBreed}/>}
       <ToastContainer
          position="bottom-center"
          autoClose={3000}
          style={{ bottom: "-7.5em" }}
        />
      </PanelBody>
    </main>
  )
}

export default Adoption