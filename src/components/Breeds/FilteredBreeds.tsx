import { Search } from '../../common/Search'
import { IBreed } from '../../types/types';

export interface IFilteredBreedsProps {
    filteredDogs: IBreed[];
    queryFunction: (q: string) => void;
    openModal: (breed: IBreed) => void;
}



function FilteredBreeds({ filteredDogs, queryFunction, openModal }: IFilteredBreedsProps) {
    return (
        <div className="breeds-container">
            <Search getQuery={queryFunction} />

            <div className="breeds-inner-container">
                {filteredDogs.length ? filteredDogs?.map((breed: IBreed) => {
                    return (
                        <button className="card" key={breed.id} onClick={() => openModal(breed)}>
                            <div className="card-top">
                                <img src={breed.image.url} loading="lazy" alt={breed.name}/>
                            </div>
                            <div className="card-bottom">
                                <h1>{breed.name}</h1>
                                <b>Temperament</b>
                                <p> {breed.temperament}</p>
                                <div>
                                    <b>Breed group</b>
                                    <p>{breed.breed_group ? breed.breed_group : "Unknown"}</p>
                                </div>
                            </div>
                        </button>)
                })
                    : <p>Ooops no such a breed...</p>}

            </div>
        </div>
    )
}

export default FilteredBreeds