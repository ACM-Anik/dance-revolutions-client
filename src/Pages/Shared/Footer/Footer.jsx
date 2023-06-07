import logo from '../../../assets/logo-2.png'

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 md:px-28 bg-black text-white border-b-2 border-base">
                <div className="flex flex-col justify-center items-center">
                    <img className='w-60' src={logo} alt="" />
                </div>
                <div className="flex-col justify-center">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="flex-col justify-center">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;