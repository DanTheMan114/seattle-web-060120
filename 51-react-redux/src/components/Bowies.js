import React from 'react';
import BowieCard from './BowieCard';
import {connect} from 'react-redux'

const Bowies = props => {
    console.log(props)
    const mapBowies = () => {
        let bowieArray = Object.values(props.bowies);
        let bowieCard = bowieArray.map(bowie => {
            return(
                <BowieCard
                key={ bowie.id }
                increaseVote={ props.increaseVote}
                decreaseVote={props.decreaseVote}
                bowie={bowie}
                />
            )
        })
        return bowieCard;
    }
    return (
        <div>
            <div className="container">
                {mapBowies()}
            </div>
        </div>
    )
}

//will be able to comment out bowies in main
const mapStateToProps = (state) => {
    //gives us access to props from state
    return {
      bowies: state.bowies
    }
  }
   
  export default connect(mapStateToProps)(Bowies);