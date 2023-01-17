import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {ADD_CUSTOMER, REMOVE_CUSTOMER} from "./store/actions/actions";

function App() {
	const cash = useSelector(state => state.cash.cash);
	const customers = useSelector(state => state.customers.customers);
	const [money, setMoney] = useState(0);
	const [customer, setCustomer] = useState('');
	const dispatch = useDispatch();

	const addCash = (cash) => {
		dispatch({type: 'ADD_CASCH', payload: cash});
	}

	const getCash = (cash) => {
		dispatch({type: 'GET_CASCH', payload: cash});
	}

	const addCustomer = (name) => {
		if (name) {
			const customer = {name, id: Date.now()};
			dispatch(ADD_CUSTOMER(customer));
		}
	}

	const deleteCustomer = (id) => {
		dispatch(REMOVE_CUSTOMER(id));
	}

	return (
		<div className="App">
			<input value={money} onChange={e => setMoney(e.target.value)} type="number"/>
			<button onClick={() => addCash(+money)}>Пополнить счет</button>
			<button onClick={() => getCash(+money)}>Снять со счета</button>
			<br/>
			<h2>{cash}</h2>

			<div>
				<input value={customer} onChange={e => setCustomer(e.target.value)} placeholder="имя клиента"
				       type="text"/>
				<br/>
				<button onClick={() => addCustomer(customer)}>Добавить клиента</button>
				{customers.length > 0 ?
					<div>
						{customers.map((custumer, i) => {
							return (<div key={i}>
										{custumer.name}
										<button onClick={() => deleteCustomer(custumer.id)}>Удалить</button>
									</div>)
						})}
					</div>
					:
					<h2>клиенты отсутствуют</h2>
				}
			</div>
		</div>
	);
}

export default App;
