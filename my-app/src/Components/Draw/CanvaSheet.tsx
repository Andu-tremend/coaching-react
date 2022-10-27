import { useEffect, useRef, useState } from "react";
import {useSelector} from 'react-redux';
import { actionCreator } from "../../Actions/Actions";
import { useConditionalRender } from "../../Functions";


export default function CanvaSheet(props: any) { 
    const canvasRef:any = useRef(null);
    const ctxRef:any = useRef(null)

    const [ballPosition, setBallPosition] = useState({
        left:0,
        top: 0
    })
    const [isDrawing, setIsDrawing] = useState(false)

    // Draw
    useEffect( () => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        context.canvas.width = canvaStyle.width;
        context.canvas.height = canvaStyle.height;
        context.lineCap = "round";
        ctxRef.current = context;
    }, [ props.reset])

    const position = (X:number, Y:number) => {
        const canvaCoord = canvasRef.current.getBoundingClientRect()
        return {
            x: X - canvaCoord.left,
            y: Y - canvaCoord.top
        }
    }

    const drawStart = (e:any) => {
        const mousePos = position(e.clientX , e.clientY)
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(mousePos.x -15, mousePos.y -15)
        setIsDrawing(true)
    }

    const draw = (e:any) => {
        if (!isDrawing) {
            return
        } 
        const mousePos = position(e.clientX -15, e.clientY -15)
        ctxRef.current.lineTo(mousePos.x, mousePos.y )
        ctxRef.current.stroke()
        ctxRef.current.strokeStyle = props.color
        ctxRef.current.lineWidth = props.brush;
      
    }

    const drawStop = () => {
        ctxRef.current.closePath()
        setIsDrawing(false)
    }

    // End draw

    const canvaStyle = {
        background: "#fff",
        width: 900,
        height: 500,
        borderRadius: "0 0 0.5rem 0.5rem",
        position: 'relative' as 'relative'
    }

    const handleBall = (e: any) => {
        const ball = position(e.clientX , e.clientY)
        setBallPosition ({
            left: ball.x,
            top: ball.y
        })
    }
    
    const gumaImg = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDQxNkM0OTcuNyA0MTYgNTEyIDQzMC4zIDUxMiA0NDhDNTEyIDQ2NS43IDQ5Ny43IDQ4MCA0ODAgNDgwSDE1MC42QzEzMy43IDQ4MCAxMTcuNCA0NzMuMyAxMDUuNCA0NjEuM0wyNS4zNyAzODEuM0MuMzc4NiAzNTYuMyAuMzc4NiAzMTUuNyAyNS4zNyAyOTAuN0wyNTguNyA1Ny4zN0MyODMuNyAzMi4zOCAzMjQuMyAzMi4zOCAzNDkuMyA1Ny4zN0w0ODYuNiAxOTQuN0M1MTEuNiAyMTkuNyA1MTEuNiAyNjAuMyA0ODYuNiAyODUuM0wzNTUuOSA0MTZINDgwek0yNjUuNCA0MTZMMzMyLjcgMzQ4LjdMMTk1LjMgMjExLjNMNzAuNjMgMzM2TDE1MC42IDQxNkwyNjUuNCA0MTZ6Ii8+PC9zdmc+')"
    
    const mouseFollowerStyle = {
        width: `${props.brush * 1.5}px`,
        height: `${props.brush * 1.5}px`,
        top: ballPosition.top - 15,
        left: ballPosition.left - 15,
        background: useConditionalRender(props.guma, gumaImg, props.color, ),
        position: 'absolute' as any,
        zIndex: 9999,
        borderRadius: "100%"
    } 

    return (
        <div style={canvaStyle}>
            <div style={mouseFollowerStyle} className="mouse-follower"></div>
            <canvas  onMouseDown={(e) => {drawStart(e)}} onMouseUp={(e) => {drawStop()}} ref={canvasRef} onMouseMove={(e) => {draw(e); handleBall(e)}} id="canvas" style={canvaStyle}>
            </canvas>
        </div>
    )
}