export default interface ICheckboxesProps {
  id: string;
  name: string;
  onChange: () => void;
  value: string[];
  checkboxLegend: string;
  checkboxLables: [];
}
