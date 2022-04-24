//Project file
import "../styles/Contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<img className="contact-img" src="/images/molly.jpg" alt="Molly Sanden" />
			<h1>Molly Sanden -Owner of Smoke & Grill</h1>

			<div className="opening-time">
				<h3>Opening Time</h3>
				<table className="opening-time">
					<tbody>
						<tr>Monday-Friday : 10:00-20:00</tr>
						<tr>Staurday : 12:00-22:00</tr>
						<tr>Sunday : 12:00-18:00</tr>
					</tbody>
				</table>
			</div>

			<div className="reservation">
				<h3>Book Table</h3>
				<form className="booking">
					<select className="form-select" aria-label="Default select example">
						<option value="1">Lunch</option>
						<option value="2">Dinner</option>
					</select>
					<input type="text" required placeholder="Choose amount of persons"></input>
					<input type="text" required placeholder="Your name"></input>
					<input
						required
						type="datetime-local"
						name="partydate"
						min="2022-04-21T08:30"
						max="2022-05-30T16:30"
					/>
					<input className="book-btn" type="button" value="Book" />
				</form>
			</div>
			<div className="adress">
				<h3>Adress</h3>
				<span>Blasieholmsgatan 4B, 111 48 Stockholm</span>
			</div>
			<div class="location">
				<iframe
					title="mapFrame"
					width="1120"
					height="500"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=Blasieholmsgatan%204B,%20111%2048&t=&z=19&ie=UTF8&iwloc=&output=embed"
					frameBorder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"></iframe>
				<a href="https://123movies-to.org"></a>
			</div>
			<img src="/images/wave.svg" alt="wave" />
		</div>
	);
}
