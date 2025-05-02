import AccountIcon from "@/assets/svg/profile/AccountIcon";
import ProfileDropdownItem from "./ProfileDropdownItem";
import NotificationIcon from "@/assets/svg/profile/NotificationIcon";
import OrdersIcon from "@/assets/svg/profile/OrdersIcon";
import HelpIcon from "@/assets/svg/profile/HelpIcon";
import SettingsIcon from "@/assets/svg/profile/SettingsIcon";
import LogoutIcon from "@/assets/svg/profile/LogoutIcon";
import ProfileFavoriteIcon from "@/assets/svg/profile/ProfileFavoriteIcon";

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

      <section className="flex flex-col gap-y-1 border-b border-slate-400 p-2">
        <ProfileDropdownItem Icon={<AccountIcon />} to="/profile/account">
          Account
        </ProfileDropdownItem>
        <ProfileDropdownItem Icon={<NotificationIcon />} to="/profile/notifications">
          Notifications
        </ProfileDropdownItem>
        <ProfileDropdownItem Icon={<OrdersIcon />} to="/profile/order-history">
          Order History
        </ProfileDropdownItem>
        <ProfileDropdownItem Icon={<ProfileFavoriteIcon />} to="/profile/favorites">
          Favorites
        </ProfileDropdownItem>
      </section>

      <section className="flex flex-col gap-y-1 border-b border-slate-400 p-2">
        <ProfileDropdownItem Icon={<HelpIcon />} to="/profile/help">
          Help and Support
        </ProfileDropdownItem>
        <ProfileDropdownItem Icon={<SettingsIcon />} to="/profile/settings">
          Settings
        </ProfileDropdownItem>
      </section>

      <section className="flex flex-col gap-y-1 p-2">
        <ProfileDropdownItem Icon={<LogoutIcon />} to="/" className="text-error hover:bg-error-light">
          Log out
        </ProfileDropdownItem>
      </section>
    </section>
  );
};

export default ProfileDropdown;
