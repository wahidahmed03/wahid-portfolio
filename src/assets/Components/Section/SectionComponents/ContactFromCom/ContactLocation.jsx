import React from 'react'
const contactimg = "https://img.freepik.com/premium-vector/frequently-asked-questions-concept-young-woman-man-with-question-answer-people-characters-standing-near-exclamations-questions-marks_269730-29.jpg?w=740"

import { FaLocationDot } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

function ContactLocation() {
    return (
        <div className='w-full h-[500px] flex flex-col justify-center items-center'>
            <img src={contactimg} className='w-[230px] h-[230px] rounded-full pb-5' alt="" />
            <div className="text-white">
                <div className="flex p-2 gap-2  items-center">
                    <FaLocationDot size='30px' />
                    <h3>HATIYA, NOAKHALI, <br />BANGLADESH</h3>
                </div>
                <div className="flex p-2 gap-2  items-center">
                    <AiTwotoneMail size='30px' />
                    <h3>wahidahmed.contact <br /> @gmail.com</h3>
                </div>
                <div className="flex p-2 gap-2  items-center">
                    <FaLocationDot size='30px' />
                    <h3>+801645636284</h3>
                </div>
            </div>
        </div>
      )
}

export default ContactLocation