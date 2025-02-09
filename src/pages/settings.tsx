import ColorSchemeSetting from "../components/color-scheme-setting";
import FontSizeSetting from "../components/font-size-setting";

function Settings() {
  return (
    <div className="h-full w-full px-6.5 py-11.5 select-none">
      <div className="h-full px-2.5 pt-29 pb-9">
        <div className="text-xl font-medium">Appearance</div>
        <div>
          <FontSizeSetting />
          <ColorSchemeSetting />
        </div>
      </div>
    </div>
  );
}

export default Settings;
