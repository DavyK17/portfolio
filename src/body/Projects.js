import Dev from "../assets/img/dev/Dev";

function Projects() {
    const project = (title, desc, url, linkLabel, skills) => {
        if(Array.isArray(skills)) {
            return (      
                <div className="project">
                    <div className="desc">
                        <h3>{title}</h3>
                        {desc}
                        <a href={url} target="_blank" rel="noreferrer">{linkLabel || "Visit website"}</a>
                    </div>
                    <div className="skills">
                        {skills.map((s, i) => <img key={i} src={devList[s].src} alt={devList[s].name} title={devList[s].name} />)}
                    </div>
                </div>
            )
        }
    }

    const devList = {
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
    }

    const projectList = [
        {
            title: "Dad joke generator (Mixed Messages)",
            desc: (
                <div>
                    <p>Mixed Messages is a portfolio project I did as part of my full stack engineer course on Codecademy. My program, built with JavaScript, auto-generates a random dad joke from a list of 20 in total, and is available in a simplified version
                        and an interactive version.
                    </p>
                    <p>The program can be run on any Node.js-supported command line interface (CLI).</p>
                </div>
            ),
            url: "https://github.com/DavyK17/mixed-messages",
            linkLabel: "Visit repository",
            skills: ["js", "node"],
        },
        {
            title: "Arkad World",
            desc: (
                <div>
                    <p>Arkad World Ltd is a Kenyan company specialising in conference interpreting, translation and conference management services. I was tasked with overhauling the company's website by removing Wordpress and building a simple, new design.</p>
                </div>
            ),
            url: "https://arkadworld.com/",
            skills: ["jquery", "greensock"],
        },
        {
            title: "TEKKEN 254",
            desc: (
                <div>
                    <p>TEKKEN 254 is a venture seeking to grow the Tekken community and establish a competitive Tekken scene in Kenya. Following feedback from users, I took on a project to take the existing website off Wix and rebuild it with Bootstrap and jQuery on the front end to make it more lightweight and responsive. The website is generated using Jekyll, with Netlify CMS integrated as a content management tool.</p>
                    <p>The project is still ongoing as some content is yet to be migrated, and back-end development yet to be completed.</p>
                </div>
            ),
            url: "https://tekken254.co.ke/",
            skills: ["bootstrap", "jquery", "jekyll", "netlifyCMS"],
        },
        {
            title: "Jammming",
            desc: (
                <div>
                    <p>Jammming is a challenge project I did as part of my full stack engineer course on Codecademy. It is a React web app that connects to the user's Spotify account and allows them to search for tracks, add them to a new playlist and save the
                    playlist to their account.</p>
                    <p>Following the base project, I added some functionality to the web app as part of a supplementary feature request that allows the user to retrieve, select and modify existing playlists, as well as clear the current playlist being modified
                        from state and refresh the list of existing playlists displayed.</p>
                </div>
            ),
            url: "https://dvk-jammming.netlify.app/",
            skills: ["react"],
        },
        {
            title: "OurRagingPlanet",
            desc: (
                <div>
                    <p>OurRagingPlanet is a web-based human impact education tool that allows students to view basic simulations of disasters in their area, using public data to estimate the impact on familiar local landmarks.</p>
                    <p>I was tasked with coming up with a new, simple, business-centred design for their website, while also integrating a blog for providing news and updates, as well as a language selector and an Arabic-language version of the site (with right-to-left adjustments made).</p>
                </div>
            ),
            url: "https://orp-draft-fat.netlify.app/",
            skills: ["bootstrap", "jquery", "jekyll", "netlifyCMS"],
        },
    ]

    return (
        <div id="projects">
                <div className="mobile-filler"></div>
                <h2 className="uppercase">Projects</h2>
                {projectList.map((p, i) => project(p.title, p.desc, p.url, p.linkLabel, p.skills))}
        </div>
    )
}

export default Projects;