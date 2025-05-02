import ProfileDropdownItem from "./ProfileDropdownItem";

const ProfileDropdown = () => {
  return (
    <section className="absolute right-0 -bottom-1 z-50 flex translate-y-full flex-col overflow-hidden rounded-sm bg-slate-300">
      <div className="flex items-center gap-x-2 border-b border-slate-500 p-2">
        <div className="bg-secondary h-8 w-8 rounded-full"></div>
        <div className="pr-8">
          <h4 className="text-body-default text-sm font-bold text-nowrap">Raymond Reddington</h4>
          <p className="text-extra-sm text-gray-600">raymond@gmail.com</p>
        </div>
      </div>

      <section className="flex flex-col gap-y-1 p-2">
        <ProfileDropdownItem to="/profile/account">Account</ProfileDropdownItem>
        <ProfileDropdownItem to="/profile/notifications">Notifications</ProfileDropdownItem>
        <ProfileDropdownItem to="/profile/order-history">Order History</ProfileDropdownItem>
        <ProfileDropdownItem to="/profile/favorites">Favorites</ProfileDropdownItem>

        <ProfileDropdownItem to="/profile/help">Help and Support</ProfileDropdownItem>
        <ProfileDropdownItem to="/profile/settings">Settings</ProfileDropdownItem>
        <ProfileDropdownItem to="/">Log out</ProfileDropdownItem>
      </section>
    </section>
  );
};

export default ProfileDropdown;
