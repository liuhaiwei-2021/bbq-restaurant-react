export default function InputField({ setup, state }) {
	const { label, placeholder } = setup;
	const [value, setValue] = state;

	return (
		<div>
			<label className="form-label">{label}:</label>
			<input
				className="form-control"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
