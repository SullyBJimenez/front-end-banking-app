import { useEffect, useState } from "react"


export const useAllData = (action, amount) => {
    const [page, setPage] = useState([])
    setPage(`${amount} ${action}`)

    // useEffect(() => {
    //     localStorage.setItem('pageValue', JSON.stringify(page))
    // }, [page])

   // console.log('page', page)

return {
    setPage,
    page
}
}