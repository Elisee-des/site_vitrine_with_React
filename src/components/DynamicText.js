import React, { useEffect } from 'react';

const DynamicText = () => {
    useEffect(()=> {
        const target = document.getElementById("text-target")
        let array = ["simple", "clear", "smart", "strong"];
        let wordIndex = 0;
        let letterIndex = 0;

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000)

            const loop = () => {
                setTimeout(() => {
                    createLetter()
                    letterIndex++
                }, 80)
            }
            loop();
        }

        
    }, [])

    return (
        <spam className="dynamic-text">
            <span>Simply</span>
            <span id="text-target"></span>
        </spam>
    );
};

export default DynamicText;