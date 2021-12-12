function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} Davy Kamanzi. All rights reserved.</p>
        </footer>
    )
}

export default Footer;