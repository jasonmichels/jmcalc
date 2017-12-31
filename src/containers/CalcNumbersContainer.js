import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'
import {userSelectedNum} from '../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onNumberSelect: (number) => {
        dispatch(userSelectedNum(number))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);