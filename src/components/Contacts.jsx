import React, { useState, useEffect } from "react";
import searchIcon from "../assets/search_icon.png";
import "./Contacts.css";
import Contact from "./Contact";
import barney from "../assets/man1.png";
import teodor from "../assets/man2.png";
import marshen from "../assets/man3.png";
import anonymous from "../assets/anonymous.png";
import lidia from "../assets/woman1.png";
import robin from "../assets/woman2.png";

const contacts = [
	{
		id: 1,
		firstName: "Барней",
		lastName: "Стинсовський",
		phone: "+380956319521",
		gender: "male",
		src: barney,
	},
	{
		id: 2,
		firstName: "Робін",
		lastName: "Щербатська",
		phone: "+380931460123",
		gender: "female",
		src: robin,
	},
	{
		id: 3,
		firstName: "Анонімний",
		lastName: "Анонімус",
		phone: "+380666666666",
		src: anonymous,
	},
	{
		id: 4,
		firstName: "Лілія",
		lastName: "Олдровна",
		phone: "+380504691254",
		gender: "female",
		src: lidia,
	},
	{
		id: 5,
		firstName: "Маршен",
		lastName: "Еріксонян",
		phone: "+380739432123",
		gender: "male",
		src: marshen,
	},
	{
		id: 6,
		firstName: "Теодор",
		lastName: "Мотсбес",
		phone: "+380956319521",
		gender: "male",
		src: teodor,
	},
];

const checkboxItems = [
	{
		id:"male",
		value: "0"
	},
	{
		id:"female",
		value: "1"
	},
	{
		id: "indefinite",
		value: "2"
	}
];
const Contacts = () => {
	const [contactsToShow, setContactsToShow] = useState(contacts);
	const [searchFild, setSearchFild] = useState("");
    const [checkboxStatus, setCheckboxStatus] = useState([true, true, true]);

	const onChangeSearchFild = (e) => {
		setSearchFild(e.target.value);
	};

    const onChangeCheckbox = (e) => {
		const newCheckboxStatus = checkboxStatus.map((checkbox, index) => {
			return (index === +e.target.value ? !checkbox : checkbox);
		});
		setCheckboxStatus(newCheckboxStatus);
    };

	useEffect(() => {
		const filteredContacts = contacts.filter((contact) => {
			return (
				contact.firstName.toLowerCase().includes(searchFild.toLowerCase()) ||
				contact.lastName.toLowerCase().includes(searchFild.toLowerCase()) ||
				contact.phone.toLowerCase().includes(searchFild)
			);
		});
		setContactsToShow(filteredContacts);
	}, [searchFild]);

    useEffect(() => {
		const checkedGender = contacts.filter((contact) => {
			return (
				(contact.gender === "male" && checkboxStatus[0] === true) ||
				(contact.gender === "female" && checkboxStatus[1] === true) ||
				(contact.gender === undefined && checkboxStatus[2] === true)
			);
		});
		setContactsToShow(checkedGender);
	}, [checkboxStatus]);

	return (
		<div className="contacts">
			<div className="search-field">
				<img src={searchIcon} alt="" />
				<input type="text" placeholder="Search" onChange={onChangeSearchFild} />
			</div>
			<div className="gender-filter">
				<div>
					<input type="checkbox" id={checkboxItems[0].id} value={checkboxItems[0].value} checked={checkboxStatus[0]} onChange={onChangeCheckbox} />
					<label>Male</label>
				</div>
				<div>
					<input type="checkbox" id={checkboxItems[1].id} value={checkboxItems[1].value} checked={checkboxStatus[1]} onChange={onChangeCheckbox} />
					<label>Female</label>
				</div>
				<div>
					<input type="checkbox" id={checkboxItems[2].id} value={checkboxItems[2].value} checked={checkboxStatus[2]} onChange={onChangeCheckbox} />
					<label>Indefinite sex</label>
				</div>
			</div>

			<div id="show-contacts">
				{contactsToShow.map((contact) => {
					return <Contact props={contact} key={contact.id} />;
				})}
			</div>
		</div>
	);
};

export default Contacts;
