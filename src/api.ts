import axios from "axios";

export const api = {
	login: (username: FormDataEntryValue | null) => axios.post(process.env.REACT_APP_BACKEND_URL + '/login/', { username: username }),
	buy: (slotId: string | undefined, username: FormDataEntryValue | null) => axios.post(process.env.REACT_APP_BACKEND_URL + '/buy/', { slot_id: slotId, username: username }),
	getProducts: () => axios.get(process.env.REACT_APP_BACKEND_URL + '/slots/')
}
