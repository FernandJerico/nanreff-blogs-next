"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const { default: Link } = require("next/link");

const NavigationTest = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
