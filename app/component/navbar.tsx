import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return(
        <div>
            <header>
            <Image src={"/logo.png"} alt="logo" height={100} width={75} className="logo"/>
        <h2>Tuition Free Education Program On Latest Technologies</h2>
        <nav>
            <Link href={"app"}>Home</Link>
           <Link href={"/apply"}>Apply</Link>
            <Link href={"/job"}>Jobs</Link>
            <Link href={"/result"}> Result</Link>
            
            <select>
            
                <option> Courses</option>
                <div>
                <option>Artificial Intelligence</option>
                <option>Web 3 and Metaverse</option>
                <option>Cloud-Native Computing</option>
                <option>Genonics and Bioinformatics</option>
                <option>Network Programmability</option>
                </div>
            </select>
            
        </nav>
    </header>
        </div>
    )
}

export default Navbar