import twitterImg from '../images/twitter.png';
import facebookImg from '../images/facebook.png';
import instagramImg from '../images/instagram.png';
import githubImg from '../images/github.png';

export default function Footer() {
	return (
		<footer>
			<button>
				<img src={twitterImg} alt="" />
			</button>
			<button>
				<img src={facebookImg} alt="" />
			</button>
			<button>
				<img src={instagramImg} alt="" />
			</button>
			<button>
				<img src={githubImg} alt="" />
			</button>
		</footer>
	);
}
