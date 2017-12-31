import { connect } from 'react-redux'
import Calculator from '../components/Calculator'

const mapStateToProps = state => ({
    selectedNum: state.selectedNum
})

const mapDispatchToProps = dispatch => ({
    // onTesting: (number) => {
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);