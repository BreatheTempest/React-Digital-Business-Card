import catImg from '../images/cat.jpg';
import emailImg from '../images/email.png';
import linkedInImg from '../images/linkedin.png';

export default function Info() {
	return (
		<div className="info">
			<img src={catImg} alt="It's a cute cat" />
			<h1>Anthony Blake</h1>
			<h4>Frontend Developer</h4>
			<p>anthonyblake.com</p>
			<div className="buttons">
				<button>
					<img src={emailImg} alt="Email Icon" />
					Email
				</button>
				<button>
					<img src={linkedInImg} alt="LinkedIn Icon" />
					LinkedIn
				</button>
			</div>
		</div>
	);
}
