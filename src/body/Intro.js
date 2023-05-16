import { devList } from "../assets/img/dev/Dev";
import introImg from "../assets/img/102.jpg";

function Intro() {
    const renderSystems = () => {
        let list = [];
        Object.values(devList).filter(e => e.name !== "CSS" && e.name !== "HTML5" && !e.name.includes("JavaScript")).forEach(e => {
            list.push(e.name);
        });

        return list.join(", ");
    }

    return (
        <div id="intro">
            <div className="mobile-filler"></div>
            <h1 className="uppercase">Davy Kamanzi</h1>
            <div className="bio">
                <img src={introImg} alt={"Davy Kamanzi"} />
                <div className="brief">
                    <h2>Web developer</h2>
                    <p>A professional that strives to do my work with diligence and precision, hence minimal errors in the code or the functionality of any given web development project. Having gained experience with HTML, CSS, JavaScript, SQL and Liquid, I am capable of developing with various front-end and back-end technologies including Jekyll, Shopify, React, Express and PostgreSQL. I also possess a strong desire to improve my skills by getting hands-on with various technologies under the guidance of more experienced developers.</p>
                    <p><strong>Languages:</strong> HTML, CSS, JavaScript, Liquid, SQL</p>
                    <p><strong>Libraries/Systems:</strong> {renderSystems()}</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;