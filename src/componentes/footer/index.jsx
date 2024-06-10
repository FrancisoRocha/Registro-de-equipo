import "./footer.css";

const Footer =  () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.linkedin.com/in/francisco-angel-dwf/'>
            <img src="/img/linkedin.png" alt='linkedin' />
        </a>
        <a href='https://github.com/FrancisoRocha'>
            <img src="/img/github.png" alt='github' />
        </a>
        <a href='https://www.instagram.com/franciscoangel751/?igsh=MTl0YXkxbmYzeTRpbg%3D%3D&utm_source=qr'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Francisco Rocha</strong>
</footer>
}

export default Footer;