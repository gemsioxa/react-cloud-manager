import SettingsCss from "./Settings.module.css";
import Cloud from "@/components/settings/cloud";

export default function Settings() {
  return (
    <div className={SettingsCss.settings}>
      <Cloud />
    </div>
  );
};
