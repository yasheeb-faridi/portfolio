import user_image from './user-image.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import right_arrow from './right-arrow.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import bash from './Bash.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import download_icon from './download-icon.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import firebase from './firebase.png';
import git from './git.png';
import github from './GitHub.png';
import header_bg_color from './header-bg-color.png';
import javascript from './JavaScript.png'
import jupyter from './Jupyter.png'
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import mongodb from './mongodb.png';
import mysql from './MySQL.png';
import nextjs from './Next.js.png';
import nodejs from './Node.js.png';
import numpy from './NumPy.png'
import profile_img from './profile-img.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import python from './Python.png'
import react from './React.png';
import send_icon from './send-icon.png';
import vscode from './vscode.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';

export const assets = {
    user_image,
    arrow_icon,
    arrow_icon_dark,
    right_arrow,
    right_arrow_bold,
    right_arrow_bold_dark,
    right_arrow_white,
    bash,
    code_icon,
    code_icon_dark,
    download_icon,
    edu_icon,
    edu_icon_dark,
    firebase,
    git,
    github,
    header_bg_color,
    jupyter,
    javascript,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    numpy,
    profile_img,
    project_icon,
    project_icon_dark,
    python,
    react,
    vscode,
    send_icon,
    moon_icon,
    sun_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelors in Computer Science' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C++, Python, JavaScript, Bash'},
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const skillsData = [
    assets.javascript, assets.react, assets.nextjs, assets.nodejs, assets.python, assets.numpy,
];

export const toolsData = [
    assets.vscode,  assets.mongodb, assets.mysql, assets.git, assets.github, assets.bash, assets.jupyter, assets.firebase,
];