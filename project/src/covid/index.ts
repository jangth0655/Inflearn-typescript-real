/* eslint-disable prettier/prettier */
export interface Country {
      ID: string,
      Country: string,
      CountryCode: string,
      Slug: string,
      NewConfirmed: number,
      TotalConfirmed: number,
      NewDeaths: number,
      TotalDeaths: number,
      NewRecovered: number,
      TotalRecovered: number,
      Date: string
      Premium:any
}

export interface CovidSummaryResponse {
  ID: string;
  Message: string;
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
  };
  Countries: Country[];
  Date: string;
}


export interface CountrySummaryInfo { 
  Cases:number
  City:string
  CityCode:string
  Country:string
  Date:string
}

export type CountrySummaryResponse = CountrySummaryInfo[]