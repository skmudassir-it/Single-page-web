import { useState } from 'react'
import { useAuth, PLANS } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.css'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock Register -> Login
        login(email, password)
        navigate('/')
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Create Account</h2>
                <p>Start your 100 free requests/month</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create a password"
                        />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up Free</button>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/auth/login">Log In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
