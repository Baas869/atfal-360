import { createContext, useState } from "react"
import AtfalDatabase from '../Data/AtfalDatabase'

const AtfalDataContext = createContext()

export const AtfalFeedbackProvider = ({children}) =>{
    const data = AtfalDatabase

    const [atfalFeedback, setAtfalFeedback] = useState(data)
    
    const [atfalAges, setAtfalPreschool] = useState(atfalFeedback.map((atfal) => (atfal.age)))
    const [preschool, setPreschool] = useState(atfalAges.filter((pretifle) => pretifle <= 5))
    const [earlychild, setEarlychild] = useState(atfalAges.filter((pretifle) => pretifle >= 6 && pretifle <= 10))
    const [preteen, setPreteen] = useState(atfalAges.filter((pretifle) => pretifle >= 11 && pretifle <= 13))
    const [teen, setTeen] = useState(atfalAges.filter((pretifle) => pretifle >= 14 && pretifle <= 17))

    const [dashboardTab, setDashboardTab] = useState(false)


    const [preschoolPercent, setPreschoolPercent] = useState(((preschool.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
    const [earlychildPercent, setEarlychildPercent] = useState(((earlychild.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
    const [preteenPercent, setPreteenPercent] = useState(((preteen.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
    const [teenPercent, setTeenPercent] = useState(((teen.length * 100) / atfalAges.length).toFixed(1).replace(/[.,]0$/, ''))
    
    const openDashTab = () =>{
        setDashboardTab(!dashboardTab)
    }

    
    

    return <AtfalDataContext.Provider value={{
        atfalFeedback, 
        preschool,
        earlychild,
        preteen,
        teen,
        dashboardTab,
        preschoolPercent,
        earlychildPercent,
        preteenPercent,
        teenPercent,
        openDashTab
    }}>
        {children}
    </AtfalDataContext.Provider>
}

export default AtfalDataContext