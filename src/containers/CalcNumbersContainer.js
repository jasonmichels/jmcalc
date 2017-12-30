import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onNumberSelect: (number) => {
        // dispatch(aFunctionCAll(model, resetForm, invalidateForm))
        alert(number)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);