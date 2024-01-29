import './chatOnline.css'
export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className='chatOnlineImg'
                        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    ></img>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Jon Doe</span>
            </div>
        </div>
    )
}