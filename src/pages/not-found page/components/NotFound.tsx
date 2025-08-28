import EmptyPage from "@/components/sections/EmptyPage";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-heading-1 text-error font-bold">404</span>
      <EmptyPage link="Go To Homepage" to="/">
        Page Not Found
      </EmptyPage>
    </div>
  );
};

export default NotFound;
