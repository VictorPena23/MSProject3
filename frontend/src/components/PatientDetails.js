import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PatientDetails = ({ patient }) => {
    const {dispatch} = usePatientsContext()
    const {user} = useAuthContext

    const handleClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch('/api/patients/', + patient._id, {
            method: 'DELETE',
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (user.ok) {
            dispatch({type: 'DELETE_PATIENT', payload: json})
            return
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
