import Link from "next/link"
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src="/image/logo.jpg" 
        alt="logo"
        width={90}
        height={70}
        />
    </Link>
  )
}
export default Logo