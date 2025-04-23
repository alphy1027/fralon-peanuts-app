import LocationSection from "./components/location-section";
import WorkingHoursSection from "./components/working-hours-section";
import ContactUsSection from "./components/contact-us-section";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <ContactUsSection />
      <WorkingHoursSection />
      <LocationSection />
    </div>
  );
};

export default Contacts;
