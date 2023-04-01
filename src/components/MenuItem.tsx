import Link from "next/link";
import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  address: string;
  Icon: IconType;
};

function MenuItem({ title, Icon, address }: Props) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
