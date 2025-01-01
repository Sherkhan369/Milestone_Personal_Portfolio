
import Image from "next/image";
export default function Home() {
 
  return (
    <div >
      <div className="hero-section ">

        <div className="left-side">
     <h2 className="left-h2">Governor Sindh </h2>
     <p className="name">Kamran  Khan  Tessori</p>
     <h1 className="hero-h1">
      Certified Cloud <br />Applied  Generative AI <br />Engineering (GenEng)
     </h1>
     <p className="hero-p">Earn up to $5,000/month</p>
     <p className="hero-p">Now Admission open in Karachi</p>
     
     <div className="btn-div">
      <button>APPLY NOW</button>
      <div className="hero-application">
      <h3 className="hero-h3 ">562,143</h3>
      <p className="">Accepted Application</p>
      </div>
     </div>
     </div>
      <div className="right-side ">
      <Image src={"/cover.1d863e39.png"} alt="kamran tessori" height={600} width={700}/>
      </div>
      </div>
    
      <div/>


      {/* Hero-section */}
      <div className="mt-14">
    <h1 className="first-heading">
             Certified Cloud Applied Generative AI Engineer (GenEng) and 
             Solopreneur <br /> Developing Billion-Dollar Valued Developers 
                    and Solopreneurs
             </h1>
            
     <p className="about">
         The pace of technological change is accelerating big players like Microsoft,Amazon, Google, and OpenAI are
         winning
         by providin infrastrucure, large AI foundation models, frameworks, 3D Metavers experience, and massive
         distribution networks. Solopreneurs trained in this program will win by automating work typically
         outsourced to employees, by directly connecting to customers by eliminating the middleman, and by Developing
         vertical metaverses, thus paving the for the first billion-dollar Valued solopreneur businesses. This program
         has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the
         ultra-lean business model and work indepenently and will not need to hire emoloyees or other team members.
     </p>
      </div>
      <div className="first-images-section">
      <Image src={"/metaverse.06eccb60.jpg"} alt="logo" height={300} width={400} className="rounded"/>
      <Image src={"/AI.39397d24.jpg"} alt="logo" height={300} width={400} className="rounded"/>
      <Image src={"/solo.jpg"} alt="logo" height={300} width={400} className="rounded"/>
      </div>
      <div className="mt-14 " >
            {/* section-1   */}
            <h2 className="second-heading">Core Courses Sequence</h2>
         <div className="second-images-section ">
         
           <div className="images-sizing">
           <Image src={"/programming_fundamentals.49cca4e9.jpg"} alt="logo" height={225} width={300} className="images-border"/>
           <p className="image-para">Programing Foundamentals</p>
           </div>
           <div  className="images-sizing">
           <Image src={"/nextjs.3dff0f70.jpg"} alt="logo" height={225} width={300} className="images-border"/>
           <p className="image-para">Web2 Using Next Js</p>
           </div>
           <div  className="images-sizing">
           <Image src={"/earn_as_your_learn.b8248a49.jpg"} alt="logo" height={225} width={300} className="images-border"/>
           <p className="image-para">Earn As You Learn</p>
           </div>
         </div>
         
         {/* <!-- section2 --> */}
         <h2 className="second-heading">Advance Courses</h2>
         <div className="third-images-section">
          
                 <div className="images-sizing">
                     <Image src={"/AI.39397d24.jpg"} alt="logo" height={225} width={300}  className="images-border"/>
                 
                     <p className="image-para">Artificial Intelligence</p>
                 </div >
                 
                 <div  className="images-sizing">
                 <Image src={"/metaverse.06eccb60.jpg"} alt="logo" height={225} width={300} className="images-border"/>
                     <p className="image-para">Web 3 and Metaverse</p>
                 </div>
                 <div  className="images-sizing">
                 <Image src={"/cloudComputing.7260492c.jpg"} alt="logo"  height={225} width={300} className="images-border"/>
                     
                     <p className="image-para">Cloud-Native Computing</p>
                 </div>
                 <div  className="images-sizing">
                 <Image src={"/iot.16f7b003.jpg"} alt="logo" height={225} width={300} className="images-border"/>
                     <p className="image-para">Ambient Computing and IoT</p>
                 </div>
                 <div  className="images-sizing">
                 <Image src={"/genomics.b87789f1.jpg"} alt="logo" height={225} width={300} className="images-border"/>
                     <p className="image-para">Genonics and Bioinformatics</p>
                 </div>
                 <div  className="images-sizing">
                 <Image src={"/automation.a77dbbe8.jpg"} alt="logo" height={250} width={300} className="images-border"/>
                     <p className="image-para">Network Programmability Auromation </p>
                 </div>
             </div>
             </div>
         </div>
      
    
   
  );
}
