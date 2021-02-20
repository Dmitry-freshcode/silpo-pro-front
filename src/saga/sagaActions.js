export const sagaActions = {
    FETCH_DATA_SAGA: "FETCH_DATA_SAGA"
  };

export const getProductsFromServer = (payload) =>{return {type:sagaActions.FETCH_DATA_SAGA,payload}}