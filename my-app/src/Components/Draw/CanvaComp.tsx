import { useConditionalRender } from "../../Functions";
import {useSelector} from 'react-redux';
import {  useState } from "react";
import CanvaBtn from "./CanvaButton"
import CanvaToolbar from "./CanvaToolbar";
import CanvaSheet from "./CanvaSheet";
import CanvaInput from "./CanvaInputColor";

export default function Canva() {

    const storeState = useSelector((state: any) => state)

    const [color, setColor] = useState("#aee6e3")
    const [brush, setBrush] = useState("5")
    const [presetColor, setPresetColor] = useState(["#2F4368", "#FAF76B", "#AEE6E3", "#a9d3e9"])
    const [disabled, setDisabled] = useState(false)
    const [guma, setGuma] = useState(false)
    const [reset, setReset] = useState(false)

    const allColors = presetColor.map( (item: any) => {
        return (
          <div key={ Math.floor(Math.random() * 99999)} onClick={(e) => {setColor(e.currentTarget.id)}} id={item} style={{backgroundColor: item}}></div>
        )
    })

    const maxCol = () => {
        if (allColors.length > 5) {
            setDisabled(true)
        } 
    }

    enum ButtonText {
        Reset = "RESET",
        Guma = "Guma",
        Add = "+",
        Remove = "-"
    }

    // This changes value only to trigger useEffect dependency array
    const handleReset = (e: any) => {
        setReset( oldVal => !oldVal)
        console.log(reset)
    }

    const handleGuma = (e: any) => {
        setColor( "#ffffff")
        setGuma( (oldVal) => {
            return !oldVal
        })
    }


    const addPresetColor = (param:string) => {
        setPresetColor(
            [...presetColor, param]
        )
    }

    const removePresetColor = (param:string) => {
        setDisabled(false)
        setPresetColor(
            [...presetColor.slice(0, -1)  ]       
        )
    }
    

    const handleSetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.currentTarget.value)
    }

    const handleSetBrush = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrush(e.currentTarget.value)
    }


    return (
        <main className={`theme__${useConditionalRender(storeState.themeReducer, "morty", "rick")} v-padding-large`}>    
                        <div className='container'>
                            <div className="draw__tools-wrapper">
                                <div>
                                    <CanvaBtn  handleOnclick={handleReset} btnText={ButtonText.Reset} />
                                    <CanvaBtn active={useConditionalRender(guma, "active", "", )} handleOnclick={handleGuma} btnText={ButtonText.Guma} value={color} />
                                </div>
                                <div className="draw__colors-wrapper"> 
                                    <div className="draw__preset-colors-buttons">
                                        <CanvaBtn  disabled={disabled} handleOnclick={() => {addPresetColor(color); maxCol()}} btnText={ButtonText.Add} />
                                        <CanvaInput
                                            handleChange={handleSetColor} 
                                            value={color} 
                                            type={"color"}
                                        />
                                        <CanvaBtn handleOnclick={() => {removePresetColor(color)}} btnText={ButtonText.Remove} />
                                    </div>
                                    <div className="draw__preset-colors-wrapper">
                                        {allColors}
                                    </div>
                                </div>
                                <div className="draw__current-color">   
                                    <p > Curr color</p>
                                    <CanvaInput
                                        handleChange={handleSetColor} 
                                        value={color} 
                                        type={"color"}
                                    />
                                </div>
                                <div className="draw__brush-size">
                                    <p > Change brush size</p>
                                    <CanvaInput
                                        handleChange={handleSetBrush} 
                                        value={brush} 
                                        type={"range"}
                                        max={25}
                                        min={1}
                                        step={1}
                                    />
                                </div>
                            </div>
                            <CanvaSheet 
                                color={color}
                                brush={brush}
                                guma={guma} 
                                reset={reset}
                            />
                        </div>
                        
                    </main>
    )

}