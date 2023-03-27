import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {
    
    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
            desc: "Lorem ipsum dolar sit amet consectetur adipisicing elit",
            img: "https://images.pixel.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
            desc: "tenetur iste voluptates dolorem rem commodi voluptate pariatutm, voluptatus, laboriosam consequatur enim.",
        },
    ];
    
    return <div className="posts">
        {posts.map(post =>(
            <Post post={post} key={post.id}/>
        ))}
    </div>;
};

export default Posts;