import { COLORSCHEME } from "../../constant/setting";
import Dropdown from "../dropdown";

const ColorSchemeSetting = () => {
  return (
    <div className="max-w-100 px-4 py-2.5">
      <div className="mb-2.5 px-4 py-1 text-xl font-medium">Color Scheme</div>
      <Dropdown defaultValue="Light" options={COLORSCHEME} />
    </div>
  );
};

export default ColorSchemeSetting;
