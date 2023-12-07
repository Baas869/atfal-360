import { createContext, useState } from "react"
import AtfalDatabase from '../Data/AtfalDatabase'

const AtfalDataContext = createContext()

export const AtfalFeedbackProvider = ({children}) =>{
    const data = AtfalDatabase

    // const [atfalFeedback, setAtfalFeedback] = useState([
        // {
        //     id: 1,
        //     name: 'Sulaiman Sulaiman',
        //     age: 16,
        //     region: 'North-Central',
        //     state: 'Osun State',
        //     dila: 'ayedaade',
        //     muqami: 'odeomu'

        // },
        // {
        //     id: 2,
        //     name: 'Adeola Afola',
        //     region: 'South west',
        //     age: 5,
        //     state: 'Ogun State',
        //     dila: 'ilaro',
        //     muqami: 'papa'

        // },
        // {
        //     id: 3,
        //     name: 'Ibrahim sulaiman',
        //     age: 15,
        //     region: 'south',
        //     state: 'oyo State',
        //     dila: 'monatan',
        //     muqami: 'apata'

        // },
        // {
        //     id: 4,
        //     name: 'maruf imram',
        //     age: 3,
        //     region: 'North-Central',
        //     state: 'lagos State',
        //     dila: 'ikeja',
        //     muqami: 'ikeja'

        // },
        // {
        //     id: 5,
        //     name: 'ibrahim babaginda',
        //     age: 2,
        //     region: 'North-Central',
        //     state: 'kaduna State',
        //     dila: 'zaria',
        //     muqami: 'zaria'

        // },
        // {
        //     id: 6,
        //     name: 'abdulqadri usman',
        //     age: 7,
        //     region: 'south Central',
        //     state: 'oyo State',
        //     dila: 'monatan',
        //     muqami: 'omiadio'

        // },
        // {
        //     id: 7,
        //     name: 'shakrullah ojo',
        //     age: 9,
        //     region: 'south Central',
        //     state: 'ogun State',
        //     dila: 'ijebu',
        //     muqami: 'ijebu-igbo'

        // },
        // {
        //     id: 8,
        //     name: 'abdulrafie gbamgbose',
        //     age: 7,
        //     region: 'south Central',
        //     state: 'ogun State',
        //     dila: 'ota',
        //     muqami: 'sango ota'

        // },
        // {
        //     id: 9,
        //     name: 'ibrahim abdullahi',
        //     age: 11,
        //     region: 'west',
        //     state: 'river State',
        //     dila: 'portharcourt',
        //     muqami: 'portharcourt'

        // },
        // {
        //     id: 10,
        //     name: 'mustain akored',
        //     age: 12,
        //     region: 'south',
        //     state: 'lagos State',
        //     dila: 'lekki',
        //     muqami: 'toll gate'

        // },
        // {
        //     id: 11,
        //     name: 'mustain akored',
        //     age: 1,
        //     region: 'south',
        //     state: 'lagos State',
        //     dila: 'lekki',
        //     muqami: 'toll gate'

        // },
        // {
        //     id: 11,
        //     name: 'mustain akored',
        //     age: 1,
        //     region: 'south',
        //     state: 'lagos State',
        //     dila: 'lekki',
        //     muqami: 'toll gate'

        // },
    // ])
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