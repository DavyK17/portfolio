import { devList } from "../assets/img/dev/Dev";

function Projects() {
    const project = (title, desc, url, linkLabel, url2 = null, linkLabel2 = null, skills) => {
        const renderLinks = () => {
            if (url2) {
                return (
                    <div className="project-links">
                        <a href={url} target="_blank" rel="noreferrer">{linkLabel || "Visit website"}</a>
                        <span className="bullet"></span>
                        <a href={url2} target="_blank" rel="noreferrer">{linkLabel2 || "Visit repository"}</a>
                    </div>
                )
            }
            
            return (
                <a href={url} target="_blank" rel="noreferrer">{linkLabel || "Visit website"}</a>
            )
        }

        if(Array.isArray(skills)) {
            return (      
                <div className="project">
                    <div className="desc">
                        <h3>{title}</h3>
                        {desc}
                        {renderLinks()}
                    </div>
                    <div className="skills">
                        {skills.map((s, i) => <img key={i} src={devList[s].src} alt={devList[s].name} title={devList[s].name} />)}
                    </div>
                </div>
            )
        }
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
            title: "FGC Reddit",
            desc: (
                <div>
                    <p>FGC Reddit is a portfolio project I did as part of my full stack engineer course on Codecademy. It is a React-Redux app that allows the user to view Reddit posts from various fighting game community (FGC)-related subreddits. The app requires authentication with the user's Reddit account to be used, and does not display posts containing galleries, links, or embeds.</p>
                    <p>Aside from viewing displayed content, users are also able to view all top-level comments for each post (excluding replies), as well as filter posts by Reddit's listing options (Hot [by default], New, Top, or Rising), and upvote, downvote, or unvote on each post. Users may also use the search box to filter through the rendered posts.</p>
                </div>
            ),
            url: "https://fgc-reddit.netlify.app/",
            url2: "https://github.com/DavyK17/fgc-reddit",
            skills: ["react", "redux"],
        },
    ]

    return (
        <div id="projects">
                <div className="mobile-filler"></div>
                <h2 className="uppercase">Projects</h2>
                {projectList.map((p, i) => project(p.title, p.desc, p.url, p.linkLabel, p.url2, p.linkLabel2, p.skills))}
        </div>
    )
}

export default Projects;