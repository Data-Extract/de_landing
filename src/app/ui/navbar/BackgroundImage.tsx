import Image from "next/image";


const BackgroundImage = () => {
  return (
    <div  >
      <div className="z-10 inset-0" style={{backgroundColor: "rgba(38, 38, 153, 0.5)", position:'absolute'}}></div>
    <Image className="z-0"
      /* className="fixed inset-0 bg-no-repeat bg-cover bg-center -z-10" */
      alt="Hero image"
      src={'/hero.jpg'}
      fill
      style={{ objectFit:'cover' }} 
    />
    </div>
  );
};

export default BackgroundImage;
