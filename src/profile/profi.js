import Bio from "./bio";
import Fln from "./fullName";
import Pro from "./profession";
import Photo from "./image";
function Profi (){
  return(
    <>
    <Photo >
<img src= 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/217508132_1181917518951336_8356422114317356023_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TIg8o7_zSZoAX-_Ls_E&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_rTFrc9b-QnQENSeLGvO1CXryaTUmGaD2Fr0qhHIBbuw&oe=61C67243 ' alt='pp'/>

    </Photo>
    <Fln name = {"salma chebbi"}/>

    <Bio bioo = {" Le silence est le cri le plus puissant"}/> 

    <Pro proo = { "student"}/>
</>
  )
}
export default Profi ; 