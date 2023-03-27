import { useContext } from "react";
import "./stories.scss";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;
