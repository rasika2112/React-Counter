import React, { Component } from 'react';

class Counter extends Component {

    // Rendering the list
    // renderTags() {
    //     if (this.state.tags.length == 0) return <p>The List is Empty</p>;

    //     return (<ul>
    //     { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
    //     </ul>);
    // }

    //Mount Update Phase
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        // doing this, we can decide whether to make an ajax call or not
    }

    componentWillUnmount(){
        console.log('component-unmount');
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    render() { 
        console.log('Counter-Rendered');
        return (
            <React.Fragment>
                <div>
                    {this.props.children}
                    <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm" onClick={ () => this.props.onIncrement(this.props.counter) }>Increment</button>
                    <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    {/* <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                    </ul> */}

                {/* To render tags */}
                {/* {this.renderTags()}; */}
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"; // he Refactored it
        return classes += (this.props.counter.value === 0) ? "warning" : "primary";
    }

    formatCount () {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;