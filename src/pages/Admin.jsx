// NPM package
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Project files

import "../styles/Admin.css";
import CreateForm from "../components/CreateForm";
import DeleteForm from "../components/DeleteForm";

export default function Admin() {
	return (
		<div className="admin container">
			<Tabs className="tabs" defaultIndex={1}>
				<TabList className="tab-list">
					<Tab className="tab-add">Add a new dish</Tab>
					<Tab className="tab-delete">Delete a dish</Tab>
				</TabList>

				<TabPanel>
					<CreateForm />
				</TabPanel>
				<TabPanel>
					<DeleteForm />
				</TabPanel>
			</Tabs>
		</div>
	);
}
