import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* 624 963 */}
                <Image src="/logo-dog.png" alt="site logo" width={62} height={96} />
            </div>
            <div className="links">
                <Link href="/"><a><h2>Home</h2></a></Link>
                <Link href="/about"><a><h2>About</h2></a></Link>
                <Link href="/dogs/"><a><h2>Dog Listing</h2></a></Link>
            </div>

        </nav>
    );
}

export default Navbar;