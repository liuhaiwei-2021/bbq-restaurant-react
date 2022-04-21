//Project files
import social from "../data/social.json";
import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="social-icon-group">
				{social.length > 0 &&
					social.map((item, index) => (
						<div className="social-icon" key={index}>
							<a href={item.socialURL}>
								<img src={item.imageURL} alt={item.title} />
							</a>
						</div>
					))}
			</div>
		</div>
	);
}

export default Footer;
