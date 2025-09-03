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
import { useAuthContext } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    logout();
    closeDropdown();
  };

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
    <div role="combobox" aria-haspopup="true" ref={dropdownRef} className="relative">
      <Button
        aria-controls="menu"
        variant="transparent"
        onClick={user.isAuthenticated ? toggleDropdown : () => navigate("auth/login", { state: { from: location } })}
        className="relative rounded-none p-1"
      >
        <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></div>
        <UserIcon />
      </Button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ y: 0, height: 0 }}
            animate={{ y: 1, height: "auto" }}
            exit={{ y: 0, height: 0 }}
            transition={{ ease: "easeInOut" }}
            className={`bg-brand-white absolute right-0 -bottom-1 z-50 flex translate-y-full flex-col overflow-hidden rounded-sm border border-slate-300 shadow-md`}
          >
            <div className="flex items-center gap-x-4 border-b border-slate-400 px-4 py-2">
              <div className="bg-secondary h-8 w-8 rounded-full"></div>
              <div className="pr-6">
                <h4 className="text-body-default text-body font-bold text-nowrap">{user.username}</h4>
                <p className="text-extra-sm text-gray-500">{user.userId}</p>
              </div>
            </div>

            <section className="flex flex-col gap-y-1 border-b border-slate-300 p-2">
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

            <section className="flex flex-col gap-y-1 border-b border-slate-300 p-2">
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<HelpIcon />} to="/profile/help">
                Help and Support
              </ProfileDropdownItem>
              <ProfileDropdownItem closeDropdown={closeDropdown} Icon={<SettingsIcon />} to="/profile/settings">
                Settings
              </ProfileDropdownItem>
            </section>

            <section className="flex flex-col gap-y-1 p-2">
              <Button variant="transparent" width="full" onClick={handleLogout} leftIcon={<LogoutIcon />} className="text-error hover:bg-error-light justify-start">
                Log out
              </Button>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
