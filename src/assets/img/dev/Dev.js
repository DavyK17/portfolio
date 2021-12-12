import bootstrap from "./bootstrap-4.svg";
import css from "./css3.svg";
import greensock from "./gsap-greensock.svg";
import html from "./html5.svg";
import js from "./javascript-1.svg";
import jekyll from "./jekyll.svg";
import jquery from "./jquery-1.svg";
import netlifyCMS from "./netlify-cms.svg";
import node from "./nodejs-1.svg";
import react from "./react.svg";
import redux from "./redux.svg";

const Dev = {
    bootstrap, css, greensock, html, js, jekyll, jquery, netlifyCMS, node, react, redux
}

export const devList = {
    bootstrap: { name: "Bootstrap", src: Dev.bootstrap },
    css: { name: "CSS", src: Dev.css },
    greensock: { name: "GreenSock", src: Dev.greensock },
    html: { name: "HTML5", src: Dev.html },
    js: { name: "JavaScript", src: Dev.js },
    jekyll: { name: "Jekyll", src: Dev.jekyll },
    jquery: { name: "jQuery", src: Dev.jquery },
    netlifyCMS: { name: "Netlify CMS", src: Dev.netlifyCMS },
    node: { name: "Node.js", src: Dev.node },
    react: { name: "React", src: Dev.react },
    redux: { name: "Redux", src: Dev.redux },
}

export default Dev;