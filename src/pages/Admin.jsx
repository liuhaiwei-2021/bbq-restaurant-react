// NPM package
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Project files
import CreateForm from "../components/CreateForm";
import "../styles/Admin.css";

export default function Admin() {
	return (
		<div className="admin container">
			<Tabs className="tabs" defaultIndex={1}>
				<TabList className="tab-list">
					<Tab className="tab-add">Add a new dish</Tab>
				</TabList>

				<TabPanel>
					<CreateForm />
				</TabPanel>
			</Tabs>
		</div>
	);
}
