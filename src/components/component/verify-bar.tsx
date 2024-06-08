
import Link from "next/link";

export function VerifyBar() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <Link
        className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-900 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out group-[.active]:after:scale-x-100 dark:after:bg-gray-50"
        href="/verify/profile"
      >
        Profile
      </Link>
      <Link
        className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-900 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out group-[.active]:after:scale-x-100 dark:after:bg-gray-50"
        href="/verify/phone"
      >
        Phone
      </Link>
      <Link
        className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-900 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out group-[.active]:after:scale-x-100 dark:after:bg-gray-50"
        href="/verify/aadhar"
      >
        Aadhar
      </Link>
      <Link
        className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-900 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out group-[.active]:after:scale-x-100 dark:after:bg-gray-50"
        href="/verify/bank"
      >
        Bank Account
      </Link>
    </div>
  );
}
