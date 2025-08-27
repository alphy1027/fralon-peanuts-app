import EmptyPage from "@/components/sections/EmptyPage";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <EmptyPage link="Go To Homepage" to="/">
        Page Not Found
      </EmptyPage>
    </div>
  );
};

export default NotFound;
