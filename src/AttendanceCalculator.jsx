import { useState } from 'react';

function AttendanceCalculator() {
  const [attended, setAttended] = useState('');
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [message, setMessage] = useState('');

  const calculateAttendance = () => {
    const attendedNum = parseInt(attended);
    const totalNum = parseInt(total);

    if (isNaN(attendedNum) || isNaN(totalNum) || totalNum === 0 || attendedNum > totalNum) {
      setMessage('⚠️ Please enter valid numbers.');
      setPercentage(null);
      return;
    }

    const percent = Math.floor((attendedNum / totalNum) * 100);
    setPercentage(percent);

    if (percent >= 75) {
      setMessage('✅ Great! Your attendance is above 75%.');
    } else {
      const requiredClasses = Math.ceil((0.75 * totalNum - attendedNum) / 0.25);
      setMessage(`⚠️ You need to attend ${requiredClasses} more classes to reach 75%.`);
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f4f8',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: '#fff',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>📊 Attendance Calculator</h2>

        <input
          type="number"
          placeholder="Classes Attended"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          style={{
            padding: '10px',
            marginBottom: '10px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="number"
          placeholder="Total Classes"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          style={{
            padding: '10px',
            marginBottom: '20px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />

        <button
          onClick={calculateAttendance}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Calculate
        </button>

        {message && (
          <div style={{ marginTop: '20px', fontSize: '16px', color: '#333' }}>
            {percentage !== null && (
              <p><strong>📈 Attendance: {percentage}%</strong></p>
            )}
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AttendanceCalculator;
