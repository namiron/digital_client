export interface ILaureateData {
  id: string;
  firstname: string;
  surname: string;
  year: string;
  motivation: string;
  category?: string;
  affiliations?: ILaureate[] | [];
}

interface ILaureate {
  name: string;
  city: string;
  country: string;
}
