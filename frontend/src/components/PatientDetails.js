<<<<<<< HEAD
import { usePatientsContext } from '../hooks/usePatientsContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const PatientDetails = ({ patient }) => {

    const {dispatch} = usePatientsContext()

    const handleClick = async () => {
        const response = await fetch('/api/patients/' + patient._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PATIENT', payload: json})
        }
    }

    return (
        <div className="patient-details">
            <h4>{patient.name}</h4>
            <p><strong>Race:</strong>{patient.race}</p>
            <p><strong>Age:</strong>{patient.age}</p>
            <p><strong>Mobile:</strong>{patient.mobile}</p>
            <p>{formatDistanceToNow(new Date(patient.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PatientDetails
=======
const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails
>>>>>>> upstream/main
