import SectionTitle from "@/components/UI-primitives/SectionTitle";

const LocationSection = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <SectionTitle>Our Location</SectionTitle>
      <div className="h-[400px] border-0" style={{ marginTop: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8591026814247!2d36.921852773973775!3d-1.2564012355920984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15c4d4883951%3A0xa2cebb0c96cd345d!2sFRALON%20PEANUTS!5e0!3m2!1sen!2ske!4v1744785061117!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
