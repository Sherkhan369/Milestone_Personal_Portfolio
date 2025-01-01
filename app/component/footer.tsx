import Image from "next/image";

function Footer() {
    return(
        <footer>
        <div className="footer-1">
            <div className="">
           <h2 className="footer-h2"> Coure Courses</h2>
            <ul>
            
                <li><a>Programming Foundamentals</a></li>
                <li><a>Web2 Using Next Js</a></li>
                <li><a>Earn_As_You_Learn</a></li>
            </ul>
            </div>
            <div>
           <h2 className="footer-h2"> Advance Courses</h2>
            <ul>
                <li><a>Artificial Intelligence</a></li>
                <li><a>Web 3 and Metaverse</a></li>
                <li><a>Cloud-Native Computing</a></li>
                <li>  <a>Genonics and Bioinformatics</a></li>
                <li><a>Network Programmability</a></li>
            </ul>
            </div>
            <div>
           <h2 className="footer-h2">Social Links</h2>
           <div className="logos">
           <Image src={"/facebook.png"} alt="logo" height={50} width={50} className=" logos"/>
           <Image src={"/instagram.png"} alt="logo" height={50} width={50} className=" logos"/>
           <Image src={"/twitter.png"} alt="logo" height={50} width={50} className=" logos"/>
           
           </div>
         <p>Email:  <a href="mailto:education@governorsindh.com">education@governorsindh.com</a></p>
            </div>
        </div>
    </footer>
    );
}
export default Footer