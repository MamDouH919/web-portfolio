
import { FiGithub } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import reactImg from '../../../asset/img/icons/react.svg'
import bootstrapImg from '../../../asset/img/icons/bootstrap.svg'
import laravelImg from '../../../asset/img/icons/laravel.svg'
import muiImg from '../../../asset/img/icons/mui.png'
import nextjs from '../../../asset/img/icons/nextjs-icon-svgrepo-com.svg'

export const socials = [
    {
        id: 1,
        icon: FiGithub,
        color: "green",
        link: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        id: 2,
        icon: FaFacebookF,
        color: "orange",
        link: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        id: 3,
        icon: FaLinkedinIn,
        color: "pink",
        link: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod",
    }
]
export const about = [
    {
        id: 1,
        prop: "Date of birth",
        value: "19 sep 1996",
    },
    {
        id: 2,
        prop: "Spoken Languages",
        value: "Arabic - English",
    },
    {
        id: 3,
        prop: "Nationality",
        value: "Egypt",
    }
]
export const experience = [
    {
        id: 1,
        name: "bootstrap",
        img: bootstrapImg,
        experience: "2 Years Experience",
    },
    {
        id: 2,
        name: "react",
        img: reactImg,
        experience: "2 Years Experience",
    },
    {
        id: 3,
        name: "laravel",
        img: laravelImg,
        experience: "1 Years Experience",
    },
    {
        id: 4,
        img: nextjs,
        name: "next.js",
        experience: "6 Months Experience",
    },
    {
        id: 5,
        img: muiImg,
        name: "material UI",
        experience: "1 Years Experience",
    }
]