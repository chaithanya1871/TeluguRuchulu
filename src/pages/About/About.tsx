import { GITHUB_URL, GMAIL_URL, LINKEDIN_URL, PROFILE_BASE_URL } from "../../utils/constants";
import { SiGoogle,SiLinkedin,SiGithub } from "react-icons/si";


const About = () => {
    return (
        <div className=" h-[80vh] flex justify-center items-center bg-slate-50">
            <div className=" flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border w-fit max-w-xs">
                <p className=" font-medium text-center">About Me</p>
                <img src={PROFILE_BASE_URL} height={100} width={100} className=" border-none rounded-full mt-4"/>
                <div className="bg-slate-900 text-white p-4 rounded-sm">
                    <p className="pb-4 text-lg font-normal text-slate-300 text-center">Python | Django | ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS |Full Stack Developer</p>
                    <div className=" text-[2em] text-center w-full flex items-center justify-center mt-2 gap-4">
                        <a className="mb-2 pr-4 hover:scale-105" href={GITHUB_URL} target="_blank"> <i className="bg-[#333] icon--i"><SiGithub className="m-auto"/></i></a>
                        <a className="mb-2 pr-4 hover:scale-105" href={LINKEDIN_URL}  target="_blank"> <i className="bg-[#0e76a8] icon--i"><SiLinkedin className="m-auto"/></i></a>
                        <a className="mb-2 pr-4 hover:scale-105" href={GMAIL_URL}  target="_blank"><i className="bg-[#ea4335] icon--i"><SiGoogle  className="m-auto"/></i></a>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default About;