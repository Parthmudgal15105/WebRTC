'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

// Sidebar component that displays navigation links with icons
const Sidebar = () => {
  // Get current pathname to determine active link
  const pathname = usePathname();

  return (
    // Main sidebar container with sticky positioning and responsive styling
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {/* Map through sidebar links and render each navigation item */}
        {sidebarLinks.map((item) => {
          // Check if current route matches the link's route
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            // Navigation link with conditional active styling
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive, // Apply blue background when link is active
                }
              )}
            > 
              {/* Link icon */}
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              {/* Link label - hidden on smaller screens */}
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;