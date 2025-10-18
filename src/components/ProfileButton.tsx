import { Menu } from '@headlessui/react';
import { UserProfile } from './Interfaces';

interface ProfileButtonProps {
  userProfile: UserProfile;
}

export default function ProfileButton({ userProfile }: ProfileButtonProps) {
  return (
    <Menu.Button className="flex items-center space-x-2">
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-300">
        {userProfile.images && userProfile.images.length > 0 ? (
          <img
            src={userProfile.images[0].url}
            alt={userProfile.display_name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium text-gray-600">
            {userProfile.display_name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    </Menu.Button>
  );
}
