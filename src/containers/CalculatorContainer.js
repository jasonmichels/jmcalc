import { connect } from 'react-redux'
import Calculator from '../components/Calculator'

const mapStateToProps = state => ({
    displayNum: state.displayNum
})

const mapDispatchToProps = dispatch => ({
    // onTesting: (number) => {
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);