import AccountIcon from "@/assets/svg/profile/AccountIcon";
import ProfileDropdownItem from "./ProfileDropdownItem";
import NotificationIcon from "@/assets/svg/profile/NotificationIcon";
import OrdersIcon from "@/assets/svg/profile/OrdersIcon";
import HelpIcon from "@/assets/svg/profile/HelpIcon";
import SettingsIcon from "@/assets/svg/profile/SettingsIcon";
import LogoutIcon from "@/assets/svg/profile/LogoutIcon";
import ProfileFavoriteIcon from "@/assets/svg/profile/ProfileFavoriteIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/UI-primitives/Button";
import UserIcon from "@/assets/svg/nav/UserIcon";

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handles clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, closeDropdown]);

  // Handles escape key to close
  useEffect(() => {
    const handleEscClick = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };
    document.addEventListener("keydown", handleEscClick);
    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
  }, [closeDropdown]);

  return (
    <div ref={dropdownRef} className="relative">
      <Button variant="transparent" onClick={toggleDropdown} className="rounded-none p-1">
        <UserIcon />
      </Button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ y: 0, height: 0 }}
            animate={{ y: 1, height: "auto" }}
            exit={{ y: 0, height: 0 }}
            transition={{ ease: "easeInOut" }}
            className={`absolute right-0 -bottom-1 z-50 flex translate-y-full flex-col overflow-hidden rounded-sm bg-slate-300`}
          >
            <div className="flex items-center gap-x-4 border-b border-slate-500 px-4 py-2">
              <div className="bg-secondary h-8 w-8 rounded-full"></div>
              <div className="pr-6">
                <h4 className="text-body-default text-sm font-bold text-nowrap">Raymond Reddington</h4>
                <p className="text-extra-sm text-gray-600">raymond@gmail.com</p>
              </div>
            </div>

            <section className="flex flex-col gap-y-1 border-b border-slate-400 p-2">
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<AccountIcon />} to="/profile/account">
                Account
              </ProfileDropdownItem>
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<NotificationIcon />} to="/profile/notifications">
                Notifications
              </ProfileDropdownItem>
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<OrdersIcon />} to="/profile/order-history">
                Order History
              </ProfileDropdownItem>
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<ProfileFavoriteIcon />} to="/profile/favorites">
                Favorites
              </ProfileDropdownItem>
            </section>

            <section className="flex flex-col gap-y-1 border-b border-slate-400 p-2">
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<HelpIcon />} to="/profile/help">
                Help and Support
              </ProfileDropdownItem>
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<SettingsIcon />} to="/profile/settings">
                Settings
              </ProfileDropdownItem>
            </section>

            <section className="flex flex-col gap-y-1 p-2">
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<LogoutIcon />} to="/" className="text-error hover:bg-error-light">
                Log out
              </ProfileDropdownItem>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
