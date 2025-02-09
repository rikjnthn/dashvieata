import Dropdown from "../dropdown";

const fontSizes = [
  "12px",
  "13px",
  "14px",
  "15px",
  "16px",
  "17px",
  "18px",
  "19px",
  "20px",
  "21px",
  "22px",
  "23px",
  "24px",
];

const FontSizeSetting = () => {
  return (
    <div className="max-w-100 px-4 py-2.5">
      <div className="mb-2.5 px-4 py-1 text-xl font-medium">Font Size</div>
      <Dropdown defaultValue="16px" options={fontSizes} />
    </div>
  );
};

export default FontSizeSetting;
