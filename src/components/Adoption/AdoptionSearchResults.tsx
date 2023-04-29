import { toast } from 'react-toastify';
import { dogsForAdoption } from '../../constants/dogsForAdoption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

export interface IAdoptionSearchResults {
  selectedBreed: string | null,
  selectedGender: string | null,
  selectedAgeInString: string | null,
  showFilteredBreed: boolean,
}

function AdoptionSearchResults({selectedBreed, selectedGender, selectedAgeInString, showFilteredBreed}: IAdoptionSearchResults) {
  
  const noDog = () => {
    toast.error("No such a dog for adoption. 🐶");
  };

  function getFilteredBreed() {

    const selectedDog = () => {
      return dogsForAdoption.filter(dog => (dog.breed === selectedBreed && dog.gender === selectedGender && dog.ageinString === selectedAgeInString))
    }
    console.log(selectedDog().length)

    if (selectedDog().length) {
      return selectedDog().map(dog => (
        <div className="dog-card" key={dog.id}>
          <div className="dog-portrait">
            <img src={require(`../../images/${dog.imageUrl}.jpg`)} alt={dog.imageUrl}/>
          </div>
          <div className="dog-info">
            <div className="dog-header">
              <div className="dog-name-age">
                <div className="left-side">
                  <FontAwesomeIcon icon={faShieldDog} className="fa-shield-icon" />
                  <h3 className="dog-name">{dog.name}</h3>
                  <span className="dog-age"> , {dog.age} {dog.age === 1 ? "year" : "years"}</span>
                </div>
                <div className="right-side">
                  {dog.gender}
                </div>
              </div>
              <div className="dog-breed">
                {dog.breed}
              </div>
            </div>
            <div className="dog-content">
              <div className="about">
                <span>About</span> {dog.name}
              </div>
              <div className="about-text">
                {dog.empathy} {dog.behavior}
              </div>
            </div>

          </div>
        </div>
      ))
    }
    else return noDog();
  }
  return (
    <>{showFilteredBreed && getFilteredBreed()}</>
  )
}

export default AdoptionSearchResults