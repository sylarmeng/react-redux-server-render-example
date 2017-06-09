// action
import fetch from 'axios'

export function fetchList() {
  return (dispatch) => {
    console.log('dispatch home click')
    return axios.post("http://localhost:3000/api/listmenu")
      .then(res => (res.data))
      .then(data =>dispatch({ type: 'FETCH_LIST_SUCCESS', payload: json }));
  }
}

