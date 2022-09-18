import React from "react";
class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility :false
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick() {
        this.setState(state =>({
            visibility : !state.visibility
        }))
    }
   
    render() {
        let arrayJob = this.props.arrayJob;
        return (
            <div>
                <div className="list">
                    {arrayJob.map((item, index) => {
                        if (this.state.visibility) {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} $ <></> <span onClick = {this.props.handleDelete}>x</span>
                                </div>
                            );
                        }
                        else{
                            return(
                                <div key = {item.id}>
                                </div>
                            )
                        }
                    })}
                </div>
                <button onClick = {this.handleClick}>Click Change</button>
            </div>
        );
    }
}
export default ChildComponent;
