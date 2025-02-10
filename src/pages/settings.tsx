import ColorSchemeSetting from "../components/color-scheme-setting";
import FontSizeSetting from "../components/font-size-setting";

function Settings() {
  return (
    <div className="h-full w-full px-4 py-12 select-none">
      <div className="h-full px-2.5 pt-23.75 pb-9">
        <div className="text-lg font-medium">Appearance</div>
        <div>
          <FontSizeSetting />
          <ColorSchemeSetting />
        </div>
      </div>
    </div>
  );
}

export default Settings;
