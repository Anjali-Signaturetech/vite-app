import image from "../images/body_image.png"
const Body =({children})=>{
    return (
        <div className="flex bg-blue-550 w-1260 h-591 p-10 rounded-lg">
            <div className="flex flex-col w-[740px] h-[529px]">
                <img className="w-340 h-340 mx-auto mb-[30px]" src={image} />
                <div className="text-[20px] text-white font-semibold mx-auto mb-2">Be with original & leader</div>
                <div className="text-[16px] text-slate-200 font-normal mx-auto w-[530px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text.</div>
            </div>
            <div className="w-[440px] h-[529px] bg-white rounded-lg border p-7">
                {children}
            </div>
        </div>
    );
}
export default Body;