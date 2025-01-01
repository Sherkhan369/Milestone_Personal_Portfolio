import Image from "next/image";

function Apply() {
    return(
        <div className="apply-page">
            <div className="page-siz">
                <h1 className="apply-h1">Before continuing to the application <br />please subscribe on these social <br />media platforms.</h1>
                <div  className="logo">
                <Image src={"/facebook.png"} alt="logo" height={25} width={25}/>
                </div>
                <div>
                    <button className="">CONTINUE</button>
                </div>
               
                <p>Already applied?<a href="">Get Admit Card</a></p>
            </div>
            <div>
                <ol>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Apply</li>
                </ol>
            </div>
        </div>
    );
}

export default Apply