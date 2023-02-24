export interface IAutoComplete {
  dataSet: AutoCompleteData[];
  hanleValue: (res: AutoCompleteData) => void;
}

export interface AutoCompleteData {
  name: string;
  value: string;
}
