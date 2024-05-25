import { useState } from "react";
import { FaStar } from "react-icons/fa"

const colors = {
    orange: "#FFBA5A",
    grey: "#efefef"
    
};

export const RaitingStar = () => {
    const [raiting, setRaiting] = useState(0)
    const [hover, setHover] = useState(undefined)

    const handleClick = value => {
        setRaiting(value)
    }
    const handleMouseOver = value => {
        setHover(value)
    }

    const hanldeMouseLeave = () => {
        setHover(undefined)
    }

    const stars = Array(5).fill(0)
    return (
        <>
            {
                stars.map((_, index) => {
                    return (
                        <FaStar
                          size={25}
                          key={index}
                          color={
                            (hover || raiting) > index
                              ? colors.orange
                              : colors.grey
                          }
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={() => hanldeMouseLeave}
                        />
                    );
                })
            }
        </>
  )
}
