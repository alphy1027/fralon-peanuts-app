import ToggleButton from "@/components/custom/ToggleButton";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const Settings = () => {
  return (
    <SectionContainter className="flex flex-col gap-y-4">
      <SectionTitle className="text-start">Settings</SectionTitle>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-body-default text-heading-4 font-bold">Theme</h3>
        <div className="flex items-center justify-between">
          <p className="">Dark Theme</p>
          <ToggleButton />
        </div>
      </div>
    </SectionContainter>
  );
};

export default Settings;
