import React from "react";
import { Candy } from './Candy';
import { appApi } from "../rest/AppApi.js"; //possibly add .js to the end of AppApi?

export class CandyRequest extends React.Component {
    state = {
        candies : [] 
    };

    componentDidMount() {
        this.fetchCandies();
    };

    fetchCandies = async () => { 
        const candies = await appApi.get(); 
        this.setState({ candies });
    };

    updateCandy = async (updateCandy) => {
        await appApi.put(updateCandy);
        this.fetchCandies();
    };

    render () {
        return(
            <div className="candy-menu">
                {this.state.candies.map((candy) => (
                    <Candy
                        candy={candy}
                        key={candy._id}
                        updateCandy={this.updateCandy}
                        />
                ))}
            </div>
        )
    }
}