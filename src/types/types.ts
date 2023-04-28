export interface IImage {
    url: string;
}

export interface IDogbreedProps{
    breed: IBreed;
}

export interface IBreed {
    id: number;
    name: string;
    image: IImage;
    temperament: string;
    breed_group: string;
  }