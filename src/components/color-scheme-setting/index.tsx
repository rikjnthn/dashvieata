import Dropdown from "../dropdown";

const colorSchemes = ["Light", "Dark"];

const ColorSchemeSetting = () => {
  return (
    <div className="max-w-100 px-4 py-2.5">
      <div className="mb-2.5 px-4 py-1 text-xl font-medium">Color scheme</div>
      <Dropdown defaultValue="Light" options={colorSchemes} />
    </div>
  );
};

export default ColorSchemeSetting;
