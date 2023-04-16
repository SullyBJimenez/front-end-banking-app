
import styled from 'styled-components';

const MainDiv = styled.div.attrs(props => ({
    title: props.title
}))`
max-width: 18rem;
height: inherit;
background-color: ${props => props.bgcolor}};
`
export function Card(props){


    function classes(){
        const bg = props.bgcolor ? 'bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? 'text-' + props.txtcolor: 'text-white ';
        return 'card mb-3' + bg + txt;
    }

    return (
        <MainDiv bgcolor={props.bgcolor} className={classes()}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                <img src= {props.src} alt=""/>
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </MainDiv>
    );
}