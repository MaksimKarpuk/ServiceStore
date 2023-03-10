interface IObject {
  id: string;
  name: string;
}

export default interface IFormContent {
  title: string;
  subtitle: string;
  placeholderName: string;
  placeholderPhone: string;
  selectorRegionLabel: string;
  selectorCityLabel: string;
  selectorRegionOptions: IObject[];
  selectorCityOptions: IObject[];
  minsk: IObject[];
  brest: IObject[];
  gomel: IObject[];
  grodno: IObject[];
  vitebsk: IObject[];
  mogilev: IObject[];
  choise: IObject[];
  radioLables: IObject[];
  radioLegend: string;
  checkboxLables: IObject[];
  checkboxLegend: string;
  formButtonText: string;
  checkboxFormLabel: string;
  
}
