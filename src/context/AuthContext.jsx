import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const PLANS = {
    FREE: { id: 'free', name: 'Free', limit: 100, price: 0 },
    STANDARD: { id: 'standard', name: 'Standard', limit: 1000, price: 4.99 },
    PREMIUM: { id: 'premium', name: 'Premium', limit: 5000, price: 14.99 }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [usage, setUsage] = useState(0)

    // Load from local storage on mount (Mock persistence)
    useEffect(() => {
        const storedUser = localStorage.getItem('sf_user')
        const storedUsage = localStorage.getItem('sf_usage')

        if (storedUser) setUser(JSON.parse(storedUser))
        if (storedUsage) setUsage(parseInt(storedUsage, 10))
    }, [])

    const login = (email, password) => {
        // Mock Login Logic
        const mockUser = {
            id: 'u1',
            name: email.split('@')[0],
            email: email,
            plan: PLANS.FREE.id,
            joined: new Date().toISOString()
        }
        setUser(mockUser)
        localStorage.setItem('sf_user', JSON.stringify(mockUser))
        return true
    }

    const logout = () => {
        setUser(null)
        setUsage(0)
        localStorage.removeItem('sf_user')
        localStorage.removeItem('sf_usage')
    }

    const updatePlan = (planId) => {
        if (!user) return
        const updatedUser = { ...user, plan: planId }
        setUser(updatedUser)
        localStorage.setItem('sf_user', JSON.stringify(updatedUser))
    }

    const incrementUsage = () => {
        if (!user) return false

        const limit = PLANS[user.plan.toUpperCase()].limit
        if (usage >= limit) {
            alert(`You have reached your monthly limit of ${limit} requests. Please upgrade!`)
            return false
        }

        const newUsage = usage + 1
        setUsage(newUsage)
        localStorage.setItem('sf_usage', newUsage.toString())
        return true
    }

    const getRemainingRequests = () => {
        if (!user) return 0
        const limit = PLANS[user.plan.toUpperCase()].limit
        return Math.max(0, limit - usage)
    }

    return (
        <AuthContext.Provider value={{
            user,
            usage,
            login,
            logout,
            updatePlan,
            incrementUsage,
            getRemainingRequests
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
