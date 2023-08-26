import React, { useEffect, useState } from "react";
import { CUSTOMER_API } from "./Constants";

const useData = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getAPIData()
  },[])

  async function getAPIData() {
    const userInfo = await fetch(CUSTOMER_API)
    const json = await userInfo.json()
    setData(json.users)

  }
  return data
}

export default useData