import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import styleLikesDislikes from "../styles/LikesDislikes.module.css"

const LikesDislikes = ({ element }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLikeClick = () => {
        if(!isDisliked) {
            setIsLiked(!isLiked);
        } else {
            setIsLiked(true);
            setIsDisliked(false);
        }
    };
    
    const handleDislikeClick = () => {
        if(!isLiked) {
            setIsDisliked(!isDisliked);
        } else {
            setIsLiked(false);
            setIsDisliked(true);
        }
    };

    return (
        <div>
            <div className={styleLikesDislikes.likes}>
                <label>
                    {/* onChange={e => {}} hack to remove console warning messages */}
                    <input type="checkbox" key={element.id} onClick={handleLikeClick} onChange={e => {}} checked={isLiked}/>
                    {<AiOutlineLike />}
                    <span className={styleLikesDislikes.likesCounter}>
                        {isLiked ? element.likes + 1 : element.likes}
                    </span>
                </label>
            </div>
            <div className={styleLikesDislikes.dislikes}>
                <label>
                    {/* onChange={e => {}} hack to remove console warning messages */}
                    <input type="checkbox" key={element.id} onClick={handleDislikeClick} onChange={e => {}} checked={isDisliked}/>
                    {<AiOutlineDislike />}
                    <span className={styleLikesDislikes.dislikesCounter}>
                        {isDisliked ? element.dislikes + 1 : element.dislikes}
                    </span>
                </label>
            </div>
        </div>
    );
};

export default LikesDislikes;