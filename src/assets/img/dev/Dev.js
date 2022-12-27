import aws from "./aws.svg"
import bootstrap from "./bootstrap-4.svg";
import css from "./css3.svg";
import express from "./expressjs.svg";
import greensock from "./gsap-greensock.svg";
import html from "./html5.svg";
import js from "./javascript-1.svg";
import jekyll from "./jekyll.svg";
import jquery from "./jquery-1.svg";
import netlifyCMS from "./netlify-cms.svg";
import node from "./nodejs-1.svg";
import postgres from "./postgresql.svg";
import react from "./react.svg";
import redux from "./redux.svg";
import sass from "./sass.svg";
import shopify from "./shopify.svg";

const Dev = {
    aws, bootstrap, css, express, greensock, html, js, jekyll, jquery, netlifyCMS, node, postgres, react, redux, sass, shopify
}

export const devList = {
    aws: { name: "Amazon Web Services", src: Dev.aws },
    bootstrap: { name: "Bootstrap", src: Dev.bootstrap },
    css: { name: "CSS", src: Dev.css },
    express: { name: "Express", src: Dev.express },
    greensock: { name: "GreenSock", src: Dev.greensock },
    html: { name: "HTML5", src: Dev.html },
    js: { name: "Vanilla (Pure) JavaScript", src: Dev.js },
    jekyll: { name: "Jekyll", src: Dev.jekyll },
    jquery: { name: "jQuery", src: Dev.jquery },
    netlifyCMS: { name: "Netlify CMS", src: Dev.netlifyCMS },
    postgres: { name: "PostgreSQL", src: Dev.postgres },
    node: { name: "Node.js", src: Dev.node },
    react: { name: "React", src: Dev.react },
    redux: { name: "Redux", src: Dev.redux },
    sass: { name: "Sass", src: Dev.sass },
    shopify: { name: "Shopify", src: Dev.shopify },
}

export default Dev;