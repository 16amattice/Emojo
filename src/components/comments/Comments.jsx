import "./comments.scss"
import { useContext } from "react";
import {AuthContext} from "../../context/authContext"

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //Temporary
    const comments = [
{
    id: 1,
    desc: "This is a test comment lol",
    name: "John Doe",
    userId: 1,
    profilePicture: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
},
{
    id: 2,
    desc: "This is also a test comment lol. I am making this one extremely long to test out some css.",
    name: "Jane Doe",
    userId: 2,
    profilePicture: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
},
    ];
    return(
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write a comment..." />
            <button>Send</button>
            </div>
            {comments.map((comment) =>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;