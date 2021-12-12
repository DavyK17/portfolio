import introImg from "../assets/img/102.jpg";

function Intro() {
    return (
        <div id="intro">
            <div className="mobile-filler"></div>
            <h1 className="uppercase">Davy Kamanzi</h1>
            <div className="bio">
                <img src={introImg} alt={"Davy Kamanzi"} />
                <div className="brief">
                    <h2>Web developer</h2>
                    <p>A professional who always strives to do his work with diligence and precision, so you can be sure there will be no errors in the code or the functionality of the website. Having done editing and proofreading work, I also have a very strong
                        command of the English language and speak English at a native level, so you can be sure there will be no errors in spelling, grammar or terminology with the content of the site either. Currently extending my knowledge to other front-end
                        technologies such as React as well as the back end to transition into a full-stack developer.
                    </p>
                    <p><strong>Languages:</strong> HTML, CSS, JavaScript, Liquid, PHP</p>
                    <p><strong>Libraries/Systems:</strong> Bootstrap, GreenSock, Jekyll, jQuery, Node.js, React, Redux, Wordpress</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;