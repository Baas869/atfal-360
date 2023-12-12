import { createContext, useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query'


const AtfalDataContext = createContext()

export const AtfalFeedbackProvider = ({children}) =>{
    

    const [atfalFeedback, setAtfalFeedback] = useState([])
    
    const [atfalAges, setAtfalPreschool] = useState([])
    const [preschool, setPreschool] = useState()
    const [earlychild, setEarlychild] = useState()
    const [preteen, setPreteen] = useState()
    const [teen, setTeen] = useState()

    const [forpercentage, setForpercentage] = useState(false)


    const [preschoolPercent, setPreschoolPercent] = useState()
    const [earlychildPercent, setEarlychildPercent] = useState()
    const [preteenPercent, setPreteenPercent] = useState()
    const [teenPercent, setTeenPercent] = useState()
    
   
   
    
    useEffect(() =>{
        const fetchDatas = async () =>{
            const result = await fetch('https://atfal-360.onrender.com/v1/atfals')
            result.json().then(json =>{
                console.log(json)
            })
        }
   }, [])
    const { data, atfalDatas, isLoading, refetch } = useQuery({
        queryFn: () => fetchData(),
        queryKey: ["atfalDatas"],
      })
  
    const fetchData = async () =>{
      const items = await fetch('https://atfal-360.onrender.com/v1/atfals')

      const atfalItems = await items.json().then(json =>{
        setAtfalPreschool(json.map((tifle) => tifle.Age))
        setAtfalFeedback(json)
        return json
      })
      return atfalItems
    }

    const load = () =>{
        setForpercentage(true)
    }
    // refetch()
    useEffect(() =>{

        
        setPreschool(atfalAges?.filter((pretifle) => pretifle <= 5))
        setEarlychild(atfalAges?.filter((pretifle) => pretifle >= 6 && pretifle <= 10))
        setPreteen(atfalAges?.filter((pretifle) => pretifle >= 11 && pretifle <= 13))
        setTeen(atfalAges?.filter((pretifle) => pretifle >= 14 && pretifle <= 17))
        
        load()

        
    }, [data])
    useEffect(() =>{
            
        setPreschoolPercent(+((preschool?.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
        setEarlychildPercent(+((earlychild?.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
        setPreteenPercent(+((preteen?.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
        setTeenPercent(+((teen?.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
    }, [load])
   
    if(isLoading){
        return <p>Loading...</p>
    }
   
    return <AtfalDataContext.Provider value={{
        atfalFeedback, 
        atfalAges,
        preschool,
        earlychild,
        preteen,
        teen,
        preschoolPercent,
        earlychildPercent,
        preteenPercent,
        teenPercent,
        isLoading
    }}>
        {children}
    </AtfalDataContext.Provider>
}

export default AtfalDataContext