import shayan from '../assets/images/shayan.png'
import mercy from '../assets/images/mercy.jpeg'
import abbas from '../assets/images/abbas.jpeg'

const colors = {
    black : "rgba(0, 0, 0, 1)",
    blackProject : "rgba(34, 34, 34, 1)",
    background : "rgba(243, 243, 243, 1)",
    white: "rgba(255, 255, 255, 1)",
    blue: "rgba(39, 203, 255, 1)",
    red : "rgba(255, 67, 67, 1)"
}

const testimonials = [
    {
        description: "Hasnat is an exceptional software developer with excellent collaborative skills and a standout problem-solving approach.",
        image: shayan,
        name: "Shayan Ali Bakhsh",
        relation: "Founder"
    },
    {
        description: "Hasnat is an outstanding software developer with a knack for collaboration. Among his skillset, I can guarantee that his problem-solving approach is top of the game.",
        image: mercy,
        name: "MERCY MUGAMBI",
        relation: "Coding Partner"
    },
    {
        description: "I've worked closely with Hasnat for a year and am consistently impressed by his web development skills. He is a talented and innovative developer who consistently delivers great results.",
        image: abbas,
        name: "Abbas Sarwar",
        relation: "Full Stack Developer"
    },
]

const radius = {
    boxRadius : "8px"
}

const width = {
    maxWidth : "1500px"
}

export { colors , width , radius , testimonials }