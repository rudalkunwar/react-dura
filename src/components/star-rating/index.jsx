import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars }) {
    const [rating, setRatintg] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentImdex) {
        setRatintg(getCurrentImdex);
    }

    function handleMouseMove(getCurrentImdex) {
        setHover(getCurrentImdex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
            
        </div>
    );
}