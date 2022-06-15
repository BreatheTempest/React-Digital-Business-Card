import twitterImg from '../images/twitter.png';
import facebookImg from '../images/facebook.png';
import instagramImg from '../images/instagram.png';
import githubImg from '../images/github.png';

export default function Footer() {
	return (
		<footer>
			<img src={twitterImg} alt="" />
			<img src={facebookImg} alt="" />
			<img src={instagramImg} alt="" />
			<img src={githubImg} alt="" />
		</footer>
	);
}
