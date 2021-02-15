import { connect } from 'react-redux'
import Calculations from '../components/Calculations'

const mapStateToProps = state => ({
    calculations: state.calculations.items,
    calculationLength: state.calculations.items.length
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculations);