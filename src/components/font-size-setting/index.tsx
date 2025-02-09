import { FONTSIZES } from "../../constant/setting";
import Dropdown from "../dropdown";

const FontSizeSetting = () => {
  return (
    <div className="max-w-100 px-4 py-2.5">
      <div className="mb-2.5 px-4 py-1 text-xl font-medium">Font Size</div>
      <Dropdown defaultValue="16px" options={FONTSIZES} />
    </div>
  );
};

export default FontSizeSetting;
